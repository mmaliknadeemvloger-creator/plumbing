import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = path.join(process.cwd(), 'public');

async function makeIcons() {
  console.log('Generating icons...');
  
  const hasFaviconIco = fs.existsSync(path.join(PUBLIC_DIR, 'favicon.ico'));
  const hasAppleTouch = fs.existsSync(path.join(PUBLIC_DIR, 'apple-touch-icon.png'));
  
  if (hasFaviconIco && hasAppleTouch) {
    console.log('Icons already exist, skipping.');
    return;
  }
  
  const files = fs.readdirSync(PUBLIC_DIR);
  let sourceImg = null;
  for (const file of files) {
    if (file.endsWith('.png') && (file.includes('logo') || file.includes('icon'))) {
      sourceImg = path.join(PUBLIC_DIR, file);
      break;
    }
  }
  
  if (!sourceImg) {
    console.log('No source PNG found in public/ to generate icons from.');
    return;
  }
  
  console.log(`Using source image: ${path.basename(sourceImg)}`);
  
  if (!hasFaviconIco) {
    await sharp(sourceImg)
      .resize(32, 32)
      .toFormat('png')
      .toFile(path.join(PUBLIC_DIR, 'favicon.ico'));
    console.log('Created favicon.ico (32x32 PNG format)');
  }
  
  if (!hasAppleTouch) {
    await sharp(sourceImg)
      .resize(180, 180, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .toFormat('png')
      .toFile(path.join(PUBLIC_DIR, 'apple-touch-icon.png'));
    console.log('Created apple-touch-icon.png (180x180 white background)');
  }
}

makeIcons();
