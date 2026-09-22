import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  className = '',
}) => {
  const heightMap = {
    sm: 'h-8 sm:h-9 max-h-9',
    md: 'h-11 sm:h-13 max-h-14',
    lg: 'h-16 sm:h-20 max-h-20',
    xl: 'h-24 sm:h-28 max-h-28',
  };

  const basePath = import.meta.env.BASE_URL || './';
  const cleanBase = basePath.endsWith('/') ? basePath : `${basePath}/`;

  const logoSrc =
    variant === 'light'
      ? `${cleanBase}logo-white.svg`
      : `${cleanBase}logo-solar.png`;

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="NEXE SOLAR"
        className={`w-auto ${heightMap[size]} object-contain block transition-transform duration-200`}
        loading="eager"
        decoding="sync"
      />
    </div>
  );
};
