import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showSubtext?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark', // 'dark' means dark text on light background (default navy)
  size = 'md',
  className = '',
  showSubtext = true,
}) => {
  const isLight = variant === 'light'; // light text for dark backgrounds

  const sizeClasses = {
    sm: {
      nexe: 'text-xl tracking-tight',
      x: 'text-2xl',
      solar: 'text-[9px] tracking-[0.38em]',
    },
    md: {
      nexe: 'text-2xl sm:text-3xl tracking-tight',
      x: 'text-3xl sm:text-4xl',
      solar: 'text-[11px] sm:text-[13px] tracking-[0.38em]',
    },
    lg: {
      nexe: 'text-4xl sm:text-5xl tracking-tight',
      x: 'text-5xl sm:text-6xl',
      solar: 'text-base sm:text-lg tracking-[0.42em]',
    },
  }[size];

  return (
    <div className={`inline-flex flex-col select-none ${className}`}>
      {/* Top row: N E [X] E */}
      <div className={`font-extrabold flex items-baseline leading-none font-heading ${sizeClasses.nexe}`}>
        <span className={isLight ? 'text-white' : 'text-[#002B49]'}>
          NE
        </span>
        
        {/* The X is rendered with distinctive metallic/silver styling */}
        <span 
          className="relative inline-block font-black px-[1px] transform -translate-y-[1px]"
          style={{
            background: 'linear-gradient(135deg, #E2E8F0 0%, #94A3B8 35%, #CBD5E1 55%, #64748B 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: isLight 
              ? 'drop-shadow(0 1px 2px rgba(0,0,0,0.5))' 
              : 'drop-shadow(0 1px 1px rgba(0,0,0,0.15))'
          }}
        >
          X
        </span>

        <span className={isLight ? 'text-white' : 'text-[#002B49]'}>
          E
        </span>
      </div>

      {/* Bottom row: SOLAR */}
      {showSubtext && (
        <div 
          className={`font-bold uppercase font-heading leading-tight mt-0.5 text-center ${sizeClasses.solar} ${
            isLight ? 'text-slate-200' : 'text-[#002B49]'
          }`}
        >
          SOLAR
        </div>
      )}
    </div>
  );
};
