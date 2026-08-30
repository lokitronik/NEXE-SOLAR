import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showSubtext?: boolean;
  showIcon?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  className = '',
  showSubtext = true,
  showIcon = true,
}) => {
  const isLight = variant === 'light'; // Light text for dark backgrounds, dark navy for light backgrounds
  const navyColor = isLight ? '#FFFFFF' : '#002B49';

  // Dimension scaling
  const heightMap = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24',
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 540 210"
        className={`w-auto ${heightMap[size]} transition-transform duration-200`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="NEXE SOLAR Logo"
      >
        <defs>
          {/* Metallic Silver Outer Ring Gradient */}
          <linearGradient id="nexeSilverRing" x1="20" y1="20" x2="190" y2="190" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="15%" stopColor="#DCE3EC" />
            <stop offset="35%" stopColor="#9BA8B8" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="68%" stopColor="#7E8D9E" />
            <stop offset="85%" stopColor="#C4CCD6" />
            <stop offset="100%" stopColor="#697788" />
          </linearGradient>

          {/* Metallic Silver Outer Rim Shadow */}
          <linearGradient id="nexeSilverRim" x1="190" y1="20" x2="20" y2="190" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#9BA8B8" />
            <stop offset="30%" stopColor="#E2E8F0" />
            <stop offset="60%" stopColor="#64748B" />
            <stop offset="100%" stopColor="#CBD5E1" />
          </linearGradient>

          {/* Slash Needle Gradient */}
          <linearGradient id="nexeSlash" x1="25" y1="185" x2="185" y2="25" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#D1D9E2" />
            <stop offset="25%" stopColor="#FFFFFF" />
            <stop offset="48%" stopColor="#B0BDCC" />
            <stop offset="52%" stopColor="#FFFFFF" />
            <stop offset="75%" stopColor="#8A99AA" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>

          {/* 3D Chrome Faceted X Gradients */}
          <linearGradient id="xTopFacet" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#D5DEE8" />
            <stop offset="100%" stopColor="#8F9EAة" />
          </linearGradient>

          <linearGradient id="xFacetLeft" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#B4C0CE" />
            <stop offset="50%" stopColor="#E9EEF4" />
            <stop offset="100%" stopColor="#7A8999" />
          </linearGradient>

          <linearGradient id="xFacetRight" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="50%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>

          <linearGradient id="xFacetBottom" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#718096" />
            <stop offset="50%" stopColor="#BCC8D6" />
            <stop offset="100%" stopColor="#E2E8F0" />
          </linearGradient>

          {/* Full X Metallic Body Gradient */}
          <linearGradient id="xMetallicOverall" x1="335" y1="35" x2="415" y2="115" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="18%" stopColor="#CBD5E1" />
            <stop offset="38%" stopColor="#8494A7" />
            <stop offset="52%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#64748B" />
            <stop offset="88%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>

          {/* Drop shadow for 3D depth */}
          <filter id="logoShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#00182A" floodOpacity="0.18" />
          </filter>
        </defs>

        {/* ================= EMBLEM / ICON (Left) ================= */}
        {showIcon && (
          <g transform="translate(5, 0)">
            {/* Outer Soft Ambient Shadow */}
            <circle cx="105" cy="105" r="75" fill="none" />

            {/* Bevelled Outer Ring */}
            <circle
              cx="105"
              cy="105"
              r="72"
              stroke="url(#nexeSilverRing)"
              strokeWidth="9"
              fill="none"
              filter="url(#logoShadow)"
            />

            {/* Thin Inset Rim for Precision Chrome Look */}
            <circle
              cx="105"
              cy="105"
              r="67.5"
              stroke="url(#nexeSilverRim)"
              strokeWidth="1.8"
              fill="none"
            />

            {/* Inner Dark Navy Circle */}
            <circle
              cx="105"
              cy="105"
              r="66"
              fill={navyColor}
            />

            {/* Diagonal Slash / Needle Piercing Center */}
            <g>
              {/* Slash base line */}
              <line
                x1="22"
                y1="188"
                x2="188"
                y2="22"
                stroke="url(#nexeSlash)"
                strokeWidth="5.5"
                strokeLinecap="square"
              />
              {/* Sharp Needle Highlight Center */}
              <line
                x1="26"
                y1="184"
                x2="184"
                y2="26"
                stroke="#FFFFFF"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeOpacity="0.85"
              />
            </g>
          </g>
        )}

        {/* ================= LOGOTYPE TEXT (Right) ================= */}
        <g transform={showIcon ? 'translate(200, 0)' : 'translate(20, 0)'}>
          
          {/* Top Row: NEXE */}
          {/* N */}
          <path
            d="M 12 110 L 12 35 L 29 35 L 58 84 L 58 35 L 75 35 L 75 110 L 58 110 L 29 61 L 29 110 Z"
            fill={navyColor}
          />

          {/* E (first) */}
          <path
            d="M 88 110 L 88 35 L 140 35 L 140 50 L 105 50 L 105 65 L 136 65 L 136 80 L 105 80 L 105 95 L 141 95 L 141 110 Z"
            fill={navyColor}
          />

          {/* X - 3D Metallic Chrome Faceted Letter */}
          <g transform="translate(150, 35)">
            {/* Base Chrome X Silhouette */}
            <path
              d="M 0 0 L 24 0 L 41 37.5 L 58 0 L 82 0 L 53 58 L 83 75 L 59 75 L 41 42 L 23 75 L 0 75 L 29 37.5 Z"
              fill="url(#xMetallicOverall)"
              filter="url(#logoShadow)"
            />

            {/* Facet Top-Left Blade */}
            <polygon
              points="0,0 24,0 41,37.5 29,37.5"
              fill="url(#xTopFacet)"
              opacity="0.9"
            />
            {/* Facet Top-Right Blade */}
            <polygon
              points="58,0 82,0 53,37.5 41,37.5"
              fill="url(#xFacetRight)"
              opacity="0.9"
            />
            {/* Facet Bottom-Left Blade */}
            <polygon
              points="0,75 23,75 41,37.5 29,37.5"
              fill="url(#xFacetLeft)"
              opacity="0.9"
            />
            {/* Facet Bottom-Right Blade */}
            <polygon
              points="59,75 83,75 53,37.5 41,37.5"
              fill="url(#xFacetBottom)"
              opacity="0.9"
            />

            {/* Central Diamond Specular Glint */}
            <polygon
              points="41,33 45,37.5 41,42 37,37.5"
              fill="#FFFFFF"
              opacity="0.95"
            />
          </g>

          {/* E (second) */}
          <path
            d="M 244 110 L 244 35 L 296 35 L 296 50 L 261 50 L 261 65 L 292 65 L 292 80 L 261 80 L 261 95 L 297 95 L 297 110 Z"
            fill={navyColor}
          />

          {/* Bottom Row: SOLAR */}
          {showSubtext && (
            <g transform="translate(10, 130)">
              {/* S */}
              <path
                d="M 33 3.5 C 33 3.5 28 0 17 0 C 6 0 0 5 0 13 C 0 24 16 23 21 26 C 26 29 26 31 26 33 C 26 37 21 40 15 40 C 7 40 1 35 1 35 L 0 46 C 0 46 6 50 16 50 C 28 50 38 43 38 32 C 38 21 21 21 16 18 C 12 16 12 14 12 12 C 12 8 16 6 21 6 C 27 6 32 9 32 9 Z"
                fill={navyColor}
              />

              {/* O */}
              <path
                d="M 64 25 C 64 11 74 0 88 0 C 102 0 112 11 112 25 C 112 39 102 50 88 50 C 74 50 64 39 64 25 Z M 76 25 C 76 34 81 41 88 41 C 95 41 100 34 100 25 C 100 16 95 9 88 9 C 81 9 76 16 76 25 Z"
                fill={navyColor}
              />

              {/* L */}
              <path
                d="M 139 1 L 139 49 L 176 49 L 176 40 L 150 40 L 150 1 Z"
                fill={navyColor}
              />

              {/* A */}
              <path
                d="M 213 1 L 194 49 L 206 49 L 211 36 L 232 36 L 237 49 L 249 49 L 230 1 Z M 214 27 L 221.5 8 L 229 27 Z"
                fill={navyColor}
              />

              {/* R */}
              <path
                d="M 268 1 L 268 49 L 280 49 L 280 32 L 292 32 L 303 49 L 316 49 L 304 31 C 311 29 315 24 315 16 C 315 6 307 1 294 1 Z M 280 10 L 293 10 C 299 10 303 12 303 17 C 303 22 299 24 293 24 L 280 24 Z"
                fill={navyColor}
              />
            </g>
          )}

        </g>
      </svg>
    </div>
  );
};
