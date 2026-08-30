import React from 'react';
import logoImage from './logo solar.png';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showSubtext?: boolean;
  showIcon?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  className = '',
}) => {
  // Height mappings for responsive sizing
  const heightMap = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24',
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={logoImage}
        alt="NEXE SOLAR"
        className={`w-auto ${heightMap[size]} object-contain block transition-transform duration-200`}
        loading="eager"
        decoding="sync"
      />
    </div>
  );
};
