import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const LOGO_SRC = path.join(process.cwd(), 'public', 'brand', 'logo-steadwell.png');
const DIR = path.dirname(LOGO_SRC);

async function processLogo() {
  if (!fs.existsSync(LOGO_SRC)) {
    console.log('Source logo not found, skipping.');
    return;
  }

  console.log('Processing logos...');
  
  try {
    const { data, info } = await sharp(LOGO_SRC).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    const transData = Buffer.from(data);
    const lightData = Buffer.from(data);

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i+1];
      const b = data[i+2];
      
      // If white (close to 255, 255, 255), make transparent
      if (r > 240 && g > 240 && b > 240) {
        transData[i+3] = 0; // alpha = 0
        lightData[i+3] = 0; // background of light logo also transparent
      } else {
        // For light version, make dark pixels white
        lightData[i] = 255;
        lightData[i+1] = 255;
        lightData[i+2] = 255;
      }
    }

    await sharp(transData, { raw: info, create: undefined })
      .png()
      .toFile(path.join(DIR, 'logo-steadwell-transparent.png'));
      
    await sharp(lightData, { raw: info, create: undefined })
      .png()
      .toFile(path.join(DIR, 'logo-steadwell-light.png'));
      
    console.log('Logo variations created.');
  } catch (err) {
    console.error('Error processing logo:', err);
  }
}

processLogo();
