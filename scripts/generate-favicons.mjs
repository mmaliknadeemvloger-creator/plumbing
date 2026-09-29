import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const BRAND_DIR = path.join(PUBLIC_DIR, 'brand');

if (!fs.existsSync(BRAND_DIR)) {
  fs.mkdirSync(BRAND_DIR, { recursive: true });
}

// Create an SVG icon with SteadWell Plumbing branding (Navy circle with stylized droplet/shield)
const svgIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="skyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0695D9" />
      <stop offset="100%" stop-color="#002855" />
    </linearGradient>
    <linearGradient id="copperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F97316" />
      <stop offset="100%" stop-color="#B4552D" />
    </linearGradient>
  </defs>
  <!-- Background Circle -->
  <rect width="512" height="512" rx="128" fill="#002855" />
  
  <!-- Outer Ring Accent -->
  <circle cx="256" cy="256" r="210" fill="none" stroke="#0695D9" stroke-width="12" opacity="0.35" />

  <!-- Stylized Droplet / Shield Path -->
  <path d="M256 96 C256 96 140 236 140 332 C140 396 192 448 256 448 C320 448 372 396 372 332 C372 236 256 96 256 96 Z" fill="url(#skyGrad)" stroke="#38BDF8" stroke-width="16" stroke-linejoin="round" />

  <!-- Inner Letter S & Water wave accent -->
  <path d="M256 180 C230 220 200 270 200 320 C200 350 224 374 256 374 C288 374 312 350 312 320 C312 290 290 270 270 250" fill="none" stroke="#FFFFFF" stroke-width="20" stroke-linecap="round" />
  
  <circle cx="256" cy="320" r="28" fill="url(#copperGrad)" />
</svg>
`;

async function generateAllIcons() {
  console.log('Generating brand icons and favicons...');
  const svgBuffer = Buffer.from(svgIcon);

  // 1. Base 512x512 logo icon
  const icon512Path = path.join(BRAND_DIR, 'logo-icon.png');
  await sharp(svgBuffer).resize(512, 512).png().toFile(icon512Path);
  console.log('Created:', icon512Path);

  // 2. 180x180 Apple Touch Icon
  const appleTouchPath = path.join(PUBLIC_DIR, 'apple-touch-icon.png');
  await sharp(svgBuffer).resize(180, 180).png().toFile(appleTouchPath);
  console.log('Created:', appleTouchPath);

  // 3. 32x32 Favicon PNG
  const favicon32Path = path.join(PUBLIC_DIR, 'favicon-32x32.png');
  await sharp(svgBuffer).resize(32, 32).png().toFile(favicon32Path);
  console.log('Created:', favicon32Path);

  // 4. 16x16 Favicon PNG
  const favicon16Path = path.join(PUBLIC_DIR, 'favicon-16x16.png');
  await sharp(svgBuffer).resize(16, 16).png().toFile(favicon16Path);
  console.log('Created:', favicon16Path);

  // 5. favicon.ico (32x32 standard)
  const faviconIcoPath = path.join(PUBLIC_DIR, 'favicon.ico');
  await sharp(svgBuffer).resize(32, 32).png().toFile(faviconIcoPath);
  console.log('Created:', faviconIcoPath);

  // 6. 192x192 Android Chrome Icon
  const android192Path = path.join(PUBLIC_DIR, 'android-chrome-192x192.png');
  await sharp(svgBuffer).resize(192, 192).png().toFile(android192Path);
  console.log('Created:', android192Path);

  // 7. 512x512 Android Chrome Icon
  const android512Path = path.join(PUBLIC_DIR, 'android-chrome-512x512.png');
  await sharp(svgBuffer).resize(512, 512).png().toFile(android512Path);
  console.log('Created:', android512Path);

  console.log('All icons generated successfully!');
}

generateAllIcons().catch(err => {
  console.error('Error generating icons:', err);
  process.exit(1);
});
