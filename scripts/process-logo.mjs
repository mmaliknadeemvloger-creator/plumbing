import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function processLogo() {
  const inputPath = 'd:/Plumbing/Elite Plumbing & Drain USA Logo ..png';
  const brandDir = 'd:/Plumbing/public/brand';
  const publicDir = 'd:/Plumbing/public';

  const { data, info } = await sharp(inputPath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;

  // Step 1: External Flood fill to make outside background transparent
  // We want to detect background pixels connected to the borders that are white/near-white.
  const isWhite = (r, g, b) => r >= 245 && g >= 245 && b >= 245;

  const visited = new Uint8Array(width * height);
  const queue = new Int32Array(width * height);
  let head = 0;
  let tail = 0;

  const push = (x, y) => {
    const idx = y * width + x;
    if (visited[idx]) return;
    const pIdx = idx * channels;
    const r = data[pIdx];
    const g = data[pIdx + 1];
    const b = data[pIdx + 2];
    if (isWhite(r, g, b)) {
      visited[idx] = 1;
      queue[tail++] = idx;
    }
  };

  // Seed with all borders
  for (let x = 0; x < width; x++) {
    push(x, 0);
    push(x, height - 1);
  }
  for (let y = 0; y < height; y++) {
    push(0, y);
    push(width - 1, y);
  }

  // BFS
  while (head < tail) {
    const curr = queue[head++];
    const cx = curr % width;
    const cy = Math.floor(curr / width);

    const neighbors = [
      [cx + 1, cy],
      [cx - 1, cy],
      [cx, cy + 1],
      [cx, cy - 1]
    ];

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = neighbors[i];
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const nIdx = ny * width + nx;
        if (!visited[nIdx]) {
          const npIdx = nIdx * channels;
          const nr = data[npIdx];
          const ng = data[npIdx + 1];
          const nb = data[npIdx + 2];
          // Near white tolerance
          if (nr >= 242 && ng >= 242 && nb >= 242) {
            visited[nIdx] = 1;
            queue[tail++] = nIdx;
          }
        }
      }
    }
  }

  // Find tight bounding box of non-background pixels
  let minX = width, maxX = 0, minY = height, maxY = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      if (!visited[idx]) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  console.log(`Bounding box of artwork: [${minX}, ${minY}] to [${maxX}, ${maxY}]`);
  console.log(`Dimensions: ${maxX - minX + 1} x ${maxY - minY + 1}`);

  // Create RGBA buffer with smooth alpha at edges of outer background
  const rgba = Buffer.alloc(width * height * 4);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const sIdx = y * width + x;
      const dIdx = sIdx * 4;
      const pIdx = sIdx * channels;
      const r = data[pIdx];
      const g = data[pIdx + 1];
      const b = data[pIdx + 2];

      rgba[dIdx] = r;
      rgba[dIdx + 1] = g;
      rgba[dIdx + 2] = b;

      if (visited[sIdx]) {
        rgba[dIdx + 3] = 0; // completely transparent
      } else {
        rgba[dIdx + 3] = 255;
      }
    }
  }

  // Add small padding around artwork (e.g. 15px)
  const pad = 12;
  const cropLeft = Math.max(0, minX - pad);
  const cropTop = Math.max(0, minY - pad);
  const cropWidth = Math.min(width - cropLeft, (maxX - minX + 1) + pad * 2);
  const cropHeight = Math.min(height - cropTop, (maxY - minY + 1) + pad * 2);

  // 1. Save transparent cropped version
  await sharp(rgba, {
    raw: {
      width,
      height,
      channels: 4
    }
  })
    .extract({
      left: cropLeft,
      top: cropTop,
      width: cropWidth,
      height: cropHeight
    })
    .png({ quality: 100 })
    .toFile(path.join(brandDir, 'logo-transparent.png'));

  console.log('Saved logo-transparent.png');

  // 2. Save crisp clean trimmed master (white bg)
  // For white backgrounds, create pure white background with trimmed artwork
  await sharp(rgba, {
    raw: {
      width,
      height,
      channels: 4
    }
  })
    .extract({
      left: cropLeft,
      top: cropTop,
      width: cropWidth,
      height: cropHeight
    })
    .flatten({ background: { r: 255, g: 255, b: 255 } })
    .png({ quality: 100 })
    .toFile(path.join(brandDir, 'logo-white-bg.png'));

  console.log('Saved logo-white-bg.png');

  // 3. Save standard logo.png (both in brand/ and public/)
  // Use transparent logo as the primary logo.png because it works on both white and light backgrounds!
  await sharp(rgba, {
    raw: {
      width,
      height,
      channels: 4
    }
  })
    .extract({
      left: cropLeft,
      top: cropTop,
      width: cropWidth,
      height: cropHeight
    })
    .png({ quality: 100 })
    .toFile(path.join(brandDir, 'logo.png'));

  await sharp(path.join(brandDir, 'logo.png'))
    .toFile(path.join(publicDir, 'logo.png'));

  console.log('Saved logo.png to public/brand and public/');

  // 4. Update favicons and app icons based on this new logo
  await sharp(path.join(brandDir, 'logo.png'))
    .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, 'android-chrome-512x512.png'));

  await sharp(path.join(brandDir, 'logo.png'))
    .resize(192, 192, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, 'android-chrome-192x192.png'));

  await sharp(path.join(brandDir, 'logo.png'))
    .resize(180, 180, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));

  await sharp(path.join(brandDir, 'logo.png'))
    .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, 'favicon-32x32.png'));

  await sharp(path.join(brandDir, 'logo.png'))
    .resize(16, 16, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, 'favicon-16x16.png'));

  console.log('All icons generated successfully!');
}

processLogo().catch(console.error);
