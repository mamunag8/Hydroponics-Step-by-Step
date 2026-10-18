const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const assetsDir = path.join(__dirname, '..', 'assets');
const srcSvgPath = path.join(assetsDir, 'icon.svg');
const svg = fs.readFileSync(srcSvgPath);
const squareSvg = Buffer.from(svg.toString().replace('rx="112"', 'rx="0"'));

async function generateNativeIcons() {
  // 1. Primary 1024x1024 App Store / Play Store Icon
  await sharp(squareSvg).resize(1024, 1024).png().toFile(path.join(assetsDir, 'icon.png'));

  // 2. Android Adaptive Icon Foreground (1024x1024 with safe zone padding)
  const inner = await sharp(squareSvg).resize(720, 720).png().toBuffer();
  await sharp({
    create: { width: 1024, height: 1024, channels: 4, background: { r: 20, g: 83, b: 45, alpha: 1 } }
  })
    .composite([{ input: inner, gravity: 'center' }])
    .png()
    .toFile(path.join(assetsDir, 'adaptive-icon.png'));

  // 3. Native Splash Screen Icon (1024x1024)
  await sharp(svg).resize(1024, 1024).png().toFile(path.join(assetsDir, 'splash-icon.png'));

  // 4. Web Favicon (48x48)
  await sharp(svg).resize(48, 48).png().toFile(path.join(assetsDir, 'favicon.png'));

  console.log('Generated native iOS, Android, and Web icons in assets/: icon.png, adaptive-icon.png, splash-icon.png, favicon.png');
}

generateNativeIcons().catch(err => {
  console.error(err);
  process.exit(1);
});
