import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#141418" />
      <stop offset="100%" stop-color="#0A0A0C" />
    </linearGradient>
    <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#C15F3C" stop-opacity="0.6" />
      <stop offset="100%" stop-color="#C15F3C" stop-opacity="0.1" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#C15F3C" flood-opacity="0.35"/>
    </filter>
  </defs>

  <rect width="100" height="100" rx="24" fill="url(#bgGrad)" />
  <rect x="1" y="1" width="98" height="98" rx="23" fill="none" stroke="url(#borderGrad)" stroke-width="2" />

  <g transform="translate(1, 0)">
    <path d="M 17 68 V 32 H 25.5 L 34.5 52.5 L 43.5 32 H 52 V 68 H 43.5 V 45 L 36.5 60.5 H 32.5 L 25.5 45 V 68 Z" fill="#FFFFFF" />
    <path d="M 57 32 H 77 V 40 H 65.5 V 47.5 H 74.5 V 55.5 H 65.5 V 68 H 57 Z" fill="#FFFFFF" />
    <circle cx="83.5" cy="63.5" r="4.5" fill="#C15F3C" filter="url(#glow)" />
  </g>
</svg>`;

const ogSvgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="ogBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#141418" />
      <stop offset="50%" stop-color="#0A0A0C" />
      <stop offset="100%" stop-color="#141418" />
    </linearGradient>
    <radialGradient id="ogGlow" cx="20%" cy="30%" r="60%">
      <stop offset="0%" stop-color="#C15F3C" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#C15F3C" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#ogBg)" />
  <rect width="1200" height="630" fill="url(#ogGlow)" />
  <rect x="20" y="20" width="1160" height="590" rx="28" fill="none" stroke="#2A2A32" stroke-width="2" />

  <!-- Monogram Logo Box -->
  <g transform="translate(100, 100)">
    <rect width="90" height="90" rx="22" fill="#1A1A22" stroke="#C15F3C" stroke-width="2" stroke-opacity="0.5"/>
    <g transform="translate(-4, -5) scale(0.98)">
      <path d="M 22 65 V 35 H 29 L 36.5 52 L 44 35 H 51 V 65 H 44 V 46 L 38 59 H 35 L 29 46 V 65 Z" fill="#FFFFFF" />
      <path d="M 56 35 H 73 V 42 H 63 V 48 H 71 V 55 H 63 V 65 H 56 Z" fill="#FFFFFF" />
      <circle cx="79" cy="62" r="4" fill="#C15F3C" />
    </g>
  </g>

  <!-- Title & Subtitle -->
  <text x="100" y="290" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="64" fill="#F0F0F0" letter-spacing="-1">
    Mohammed Fatahuddin
  </text>
  
  <text x="100" y="360" font-family="system-ui, -apple-system, sans-serif" font-weight="500" font-size="30" fill="#C15F3C">
    Full-Stack Developer &amp; Data Science Student
  </text>

  <text x="100" y="420" font-family="system-ui, -apple-system, sans-serif" font-weight="400" font-size="24" fill="#A0A0A8">
    Specializing in React, Next.js, Supabase &amp; Motion Graphics
  </text>

  <!-- Bottom Badges -->
  <g transform="translate(100, 480)">
    <rect width="130" height="42" rx="21" fill="#1E1E24" stroke="#2A2A32"/>
    <text x="65" y="26" font-family="system-ui, sans-serif" font-weight="600" font-size="16" fill="#F0F0F0" text-anchor="middle">Next.js</text>
  </g>
  <g transform="translate(245, 480)">
    <rect width="130" height="42" rx="21" fill="#1E1E24" stroke="#2A2A32"/>
    <text x="65" y="26" font-family="system-ui, sans-serif" font-weight="600" font-size="16" fill="#F0F0F0" text-anchor="middle">Supabase</text>
  </g>
  <g transform="translate(390, 480)">
    <rect width="130" height="42" rx="21" fill="#1E1E24" stroke="#2A2A32"/>
    <text x="65" y="26" font-family="system-ui, sans-serif" font-weight="600" font-size="16" fill="#F0F0F0" text-anchor="middle">Python</text>
  </g>
  <g transform="translate(535, 480)">
    <rect width="150" height="42" rx="21" fill="#1E1E24" stroke="#2A2A32"/>
    <text x="75" y="26" font-family="system-ui, sans-serif" font-weight="600" font-size="16" fill="#F0F0F0" text-anchor="middle">After Effects</text>
  </g>
</svg>`;

async function generate() {
  const publicDir = path.resolve('public');
  
  // 1. Write the vector SVG
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgContent);
  console.log('Saved favicon.svg');

  const svgBuffer = Buffer.from(svgContent);

  // 2. Generate PNGs at multiple standard sizes
  await sharp(svgBuffer).resize(32, 32).png().toFile(path.join(publicDir, 'favicon-32x32.png'));
  await sharp(svgBuffer).resize(192, 192).png().toFile(path.join(publicDir, 'favicon-192x192.png'));
  await sharp(svgBuffer).resize(512, 512).png().toFile(path.join(publicDir, 'favicon-512x512.png'));
  await sharp(svgBuffer).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));
  await sharp(svgBuffer).resize(48, 48).png().toFile(path.join(publicDir, 'favicon.png'));
  await sharp(svgBuffer).resize(32, 32).png().toFile(path.join(publicDir, 'favicon.ico'));
  
  // 3. Generate Open Graph preview image (1200x630)
  const ogBuffer = Buffer.from(ogSvgContent);
  await sharp(ogBuffer).resize(1200, 630).png().toFile(path.join(publicDir, 'og-image.png'));
  console.log('Saved og-image.png');

  console.log('All branding assets generated successfully!');
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
