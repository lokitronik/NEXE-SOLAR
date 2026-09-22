import fs from 'fs';

// 1. Takfästen (Roof hooks on black tiles)
const svg1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="600" height="800">
  <defs>
    <linearGradient id="sky1" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#3B82F6"/>
      <stop offset="40%" stop-color="#60A5FA"/>
      <stop offset="100%" stop-color="#93C5FD"/>
    </linearGradient>
    <linearGradient id="tileDark" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="30%" stop-color="#1e293b"/>
      <stop offset="60%" stop-color="#334155"/>
      <stop offset="90%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="metalSilver" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#e2e8f0"/>
      <stop offset="30%" stop-color="#cbd5e1"/>
      <stop offset="70%" stop-color="#94a3b8"/>
      <stop offset="100%" stop-color="#64748b"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="3" dy="5" stdDeviation="4" flood-opacity="0.6"/>
    </filter>
  </defs>

  <!-- Sky & Autumn trees background at top -->
  <rect width="600" height="260" fill="url(#sky1)"/>
  <circle cx="120" cy="180" r="90" fill="#EAB308" opacity="0.8"/>
  <circle cx="210" cy="170" r="110" fill="#CA8A04" opacity="0.85"/>
  <circle cx="340" cy="190" r="80" fill="#15803d" opacity="0.9"/>
  <circle cx="480" cy="160" r="120" fill="#EAB308" opacity="0.75"/>

  <!-- Tiled Roof Surface -->
  <path d="M -50 850 L 650 850 L 650 180 L -50 320 Z" fill="#1e293b"/>

  <!-- Tile ridges -->
  ${Array.from({ length: 12 }, (_, i) => `
    <path d="M ${-40 + i * 55} 850 L ${20 + i * 48} 200 L ${45 + i * 48} 200 L ${-15 + i * 55} 850 Z" fill="url(#tileDark)" opacity="0.95"/>
    <line x1="${-40 + i * 55}" y1="850" x2="${20 + i * 48}" y2="200" stroke="#090d16" stroke-width="3"/>
  `).join('')}

  <!-- Tile steps -->
  ${Array.from({ length: 9 }, (_, j) => `
    <line x1="-50" y1="${260 + j * 68}" x2="650" y2="${160 + j * 68}" stroke="#0f172a" stroke-width="6" opacity="0.8"/>
    <line x1="-50" y1="${263 + j * 68}" x2="650" y2="${163 + j * 68}" stroke="#475569" stroke-width="1.5" opacity="0.6"/>
  `).join('')}

  <!-- Roof hooks (takkrokar) in grid with shadows -->
  ${[
    { x: 140, y: 640 }, { x: 360, y: 600 },
    { x: 80, y: 520 },  { x: 270, y: 480 }, { x: 470, y: 440 },
    { x: 180, y: 380 }, { x: 380, y: 340 },
    { x: 290, y: 260 }, { x: 480, y: 240 }
  ].map(h => `
    <!-- Lifted tile pocket -->
    <rect x="${h.x - 22}" y="${h.y - 12}" width="44" height="24" rx="3" fill="#090d16" opacity="0.8"/>
    <rect x="${h.x - 16}" y="${h.y - 6}" width="32" height="12" fill="#d97706" opacity="0.4"/>
    <!-- Steel Hook Bracket -->
    <g filter="url(#shadow)">
      <path d="M ${h.x - 14} ${h.y + 4} L ${h.x + 14} ${h.y + 4} L ${h.x + 18} ${h.y - 20} L ${h.x - 10} ${h.y - 20} Z" fill="url(#metalSilver)"/>
      <rect x="${h.x - 12}" y="${h.y - 32}" width="24" height="14" rx="2" fill="#cbd5e1"/>
      <circle cx="${h.x - 6}" cy="${h.y - 25}" r="2" fill="#475569"/>
      <circle cx="${h.x + 6}" cy="${h.y - 25}" r="2" fill="#475569"/>
    </g>
  `).join('')}
</svg>`;

// 2. Montageskenor (Mounting rails on black tiles)
const svg2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="600" height="800">
  <defs>
    <linearGradient id="sky2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#2563EB"/>
      <stop offset="100%" stop-color="#60A5FA"/>
    </linearGradient>
    <linearGradient id="railSilver" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="40%" stop-color="#cbd5e1"/>
      <stop offset="70%" stop-color="#94a3b8"/>
      <stop offset="100%" stop-color="#64748b"/>
    </linearGradient>
    <filter id="railShadow" x="-30%" y="-10%" width="160%" height="120%">
      <feDropShadow dx="4" dy="6" stdDeviation="5" flood-opacity="0.7"/>
    </filter>
  </defs>

  <!-- Sky & Chimney -->
  <rect width="600" height="220" fill="url(#sky2)"/>
  <circle cx="100" cy="170" r="90" fill="#EAB308" opacity="0.8"/>
  <circle cx="200" cy="180" r="80" fill="#CA8A04" opacity="0.85"/>
  <rect x="420" y="70" width="55" height="90" fill="#0f172a"/>
  <rect x="410" y="60" width="75" height="15" fill="#1e293b"/>

  <!-- Tiled Roof -->
  <path d="M -50 850 L 650 850 L 650 140 L -50 180 Z" fill="#1e293b"/>
  ${Array.from({ length: 12 }, (_, i) => `
    <path d="M ${-30 + i * 54} 850 L ${10 + i * 50} 150 L ${35 + i * 50} 150 L ${-5 + i * 54} 850 Z" fill="#0f172a" opacity="0.7"/>
  `).join('')}

  <!-- Parallel Aluminum Mounting Rails -->
  ${[90, 200, 310, 420, 520].map((rx) => `
    <g filter="url(#railShadow)">
      <path d="M ${rx - 20} 830 L ${rx + 5} 170 L ${rx + 25} 170 L ${rx} 830 Z" fill="url(#railSilver)"/>
      <path d="M ${rx - 12} 820 L ${rx + 11} 175 L ${rx + 17} 175 L ${rx - 6} 820 Z" fill="#334155"/>
      ${[750, 610, 470, 330, 210].map((ry) => `
        <rect x="${rx - 18 + (800 - ry) * 0.04}" y="${ry - 8}" width="34" height="16" rx="2" fill="#e2e8f0" stroke="#475569" stroke-width="1.5"/>
        <circle cx="${rx - 1 + (800 - ry) * 0.04}" cy="${ry}" r="3" fill="#0f172a"/>
      `).join('')}
    </g>
  `).join('')}

  <line x1="40" y1="460" x2="560" y2="445" stroke="#e2e8f0" stroke-width="3" opacity="0.8"/>
  <line x1="30" y1="620" x2="570" y2="600" stroke="#e2e8f0" stroke-width="3" opacity="0.8"/>
</svg>`;

// 3. DC-kablage (Solar DC cables routed along mounting rails)
const svg3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="600" height="800">
  <defs>
    <linearGradient id="sky3" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1D4ED8"/>
      <stop offset="50%" stop-color="#3B82F6"/>
      <stop offset="100%" stop-color="#93C5FD"/>
    </linearGradient>
    <filter id="cableGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="2" dy="3" stdDeviation="3" flood-opacity="0.6"/>
    </filter>
  </defs>

  <!-- Sky & Soft Clouds -->
  <rect width="600" height="230" fill="url(#sky3)"/>
  <ellipse cx="280" cy="90" rx="90" ry="25" fill="#ffffff" opacity="0.75"/>
  <ellipse cx="360" cy="110" rx="120" ry="30" fill="#ffffff" opacity="0.85"/>
  <circle cx="160" cy="180" r="70" fill="#EAB308" opacity="0.75"/>

  <!-- Tiled Roof with Vent Pipe -->
  <path d="M -50 850 L 650 850 L 650 160 L -50 200 Z" fill="#1e293b"/>
  <rect x="70" y="310" width="60" height="50" rx="3" fill="#090d16"/>
  <polygon points="60,310 140,310 130,290 70,290" fill="#1e293b"/>

  <!-- Rails background -->
  ${[170, 280, 390, 500].map((rx) => `
    <line x1="${rx - 15}" y1="830" x2="${rx + 10}" y2="210" stroke="#94a3b8" stroke-width="18"/>
    <line x1="${rx - 15}" y1="830" x2="${rx + 10}" y2="210" stroke="#334155" stroke-width="6"/>
  `).join('')}

  <rect x="360" y="380" width="38" height="20" rx="2" fill="#090d16"/>
  <rect x="470" y="370" width="38" height="20" rx="2" fill="#090d16"/>
  <rect x="350" y="550" width="38" height="20" rx="2" fill="#090d16"/>

  <!-- RED DC SOLAR CABLES -->
  <g filter="url(#cableGlow)">
    <path d="M 20 440 L 160 440 L 270 436 L 385 432 L 495 428 L 580 425" fill="none" stroke="#DC2626" stroke-width="6" stroke-linecap="round"/>
    <path d="M 20 446 L 160 446 L 270 442 L 385 438 L 495 434 L 580 431" fill="none" stroke="#B91C1C" stroke-width="5" stroke-linecap="round"/>

    <path d="M 20 590 L 145 588 L 260 582 L 375 578 L 490 572 L 580 568" fill="none" stroke="#DC2626" stroke-width="6" stroke-linecap="round"/>
    <path d="M 20 596 L 145 594 L 260 588 L 375 584 L 490 578 L 580 574" fill="none" stroke="#B91C1C" stroke-width="5" stroke-linecap="round"/>

    <path d="M 270 442 Q 285 490 260 582" fill="none" stroke="#DC2626" stroke-width="5"/>
    <path d="M 495 434 Q 515 500 490 572" fill="none" stroke="#DC2626" stroke-width="5"/>

    ${[
      { x: 160, y: 440 }, { x: 270, y: 436 }, { x: 385, y: 432 }, { x: 495, y: 428 },
      { x: 145, y: 588 }, { x: 260, y: 582 }, { x: 375, y: 578 }, { x: 490, y: 572 }
    ].map((c) => `
      <rect x="${c.x - 3}" y="${c.y - 7}" width="7" height="18" rx="2" fill="#090d16" stroke="#475569" stroke-width="1"/>
    `).join('')}
  </g>
</svg>`;

// 4. Fasad-kanalisation (Vertical metal conduit on red brick corner)
const svg4 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="600" height="800">
  <defs>
    <linearGradient id="pipeMetal" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="25%" stop-color="#e2e8f0"/>
      <stop offset="55%" stop-color="#94a3b8"/>
      <stop offset="85%" stop-color="#cbd5e1"/>
      <stop offset="100%" stop-color="#475569"/>
    </linearGradient>
    <linearGradient id="woodSoffit" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#271810"/>
      <stop offset="100%" stop-color="#452314"/>
    </linearGradient>
    <filter id="pipeShadow" x="-50%" y="-10%" width="200%" height="120%">
      <feDropShadow dx="8" dy="4" stdDeviation="6" flood-opacity="0.6"/>
    </filter>
  </defs>

  <rect width="600" height="800" fill="#883520"/>
  
  ${Array.from({ length: 36 }, (_, r) => {
    const y = 140 + r * 18;
    const offset = (r % 2 === 0) ? 0 : 35;
    const fills = ['#7a2e1c', '#993c24', '#85321d'];
    return `
      <line x1="0" y1="${y}" x2="600" y2="${y}" stroke="#451e14" stroke-width="3"/>
      ${Array.from({ length: 10 }, (_, c) => `
        <rect x="${c * 70 - offset}" y="${y - 15}" width="67" height="15" fill="${fills[(r + c) % 3]}" rx="1"/>
      `).join('')}
    `;
  }).join('')}

  <rect width="600" height="140" fill="url(#woodSoffit)"/>
  ${Array.from({ length: 18 }, (_, i) => `
    <line x1="${i * 35}" y1="0" x2="${i * 35}" y2="140" stroke="#170c07" stroke-width="4"/>
  `).join('')}
  <rect y="130" width="600" height="15" fill="#170c07"/>

  <rect y="740" width="600" height="60" fill="#334155"/>
  <rect y="770" width="600" height="30" fill="#64748b"/>

  <path d="M 460 800 Q 420 500 480 280 Q 550 400 600 260 L 600 800 Z" fill="#14532d"/>
  <path d="M 480 800 Q 450 550 520 340 Q 580 420 600 320 L 600 800 Z" fill="#166534" opacity="0.8"/>
  <path d="M 520 800 Q 500 600 560 400 L 600 800 Z" fill="#22c55e" opacity="0.6"/>

  <path d="M 260 120 L 260 160" stroke="#090d16" stroke-width="14" stroke-dasharray="3,2"/>
  <path d="M 276 120 L 276 160" stroke="#090d16" stroke-width="14" stroke-dasharray="3,2"/>

  <g filter="url(#pipeShadow)">
    <rect x="252" y="155" width="14" height="600" rx="3" fill="url(#pipeMetal)"/>
    <rect x="270" y="155" width="14" height="600" rx="3" fill="url(#pipeMetal)"/>

    ${[190, 310, 450, 590, 710].map((cy) => `
      <rect x="242" y="${cy}" width="52" height="12" rx="2" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5"/>
      <circle cx="${cy % 2 === 0 ? 247 : 248}" cy="${cy + 6}" r="2" fill="#0f172a"/>
      <circle cx="289" cy="${cy + 6}" r="2" fill="#0f172a"/>
    `).join('')}
  </g>
</svg>`;

fs.mkdirSync('public/images/process', { recursive: true });
fs.writeFileSync('public/images/process/01-takfasten.svg', svg1);
fs.writeFileSync('public/images/process/02-montageskenor.svg', svg2);
fs.writeFileSync('public/images/process/03-dc-kablage.svg', svg3);
fs.writeFileSync('public/images/process/04-fasad-kanalisation.svg', svg4);
console.log('SVGs created successfully in public/images/process');
