import React, { useState } from 'react';
import logoPng from './logo-solar.png';

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
  const [imgError, setImgError] = useState(false);

  // Height mappings for responsive sizing
  const heightMap = {
    sm: 'h-8 sm:h-9 max-h-9',
    md: 'h-11 sm:h-13 max-h-14',
    lg: 'h-16 sm:h-20 max-h-20',
    xl: 'h-24 sm:h-28 max-h-28',
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {!imgError ? (
        <img
          src={logoPng}
          alt="NEXE SOLAR"
          className={`w-auto ${heightMap[size]} object-contain block transition-transform duration-200`}
          loading="eager"
          decoding="sync"
          onError={() => {
            // If the imported bundle path fails in any iframe sandbox, fallback to root public path
            setImgError(true);
          }}
        />
      ) : (
        <img
          src="/logo-solar.png"
          alt="NEXE SOLAR"
          className={`w-auto ${heightMap[size]} object-contain block transition-transform duration-200`}
          loading="eager"
          decoding="sync"
        />
      )}
    </div>
  );
};
