interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon-only';
  color?: 'black' | 'white' | 'auto';
}

const Logo = ({ className = '', size = 'md', variant = 'full', color = 'auto' }: LogoProps) => {
  // Smart logo asset selection based on color
  const getLogoAsset = () => {
    if (color === 'white') {
      return '/logo_white_transparent.png';
    } else if (color === 'black') {
      return '/logo_black_transparent.png';
    } else {
      // Auto mode: detect background from className or default to black
      const hasLightBackground = className.includes('bg-white') || 
                                className.includes('bg-gray-50') || 
                                className.includes('bg-gray-100') ||
                                !className.includes('bg-');
      return hasLightBackground ? '/logo_black_transparent.png' : '/logo_white_transparent.png';
    }
  };

  // Responsive sizing for the full logo (maintains aspect ratio)
  const logoSizeClasses = {
    sm: 'h-6 w-auto max-w-[60px]',     // Small: 24px height
    md: 'h-8 w-auto max-w-[100px]',     // Medium: 32px height  
    lg: 'h-10 w-auto max-w-[120px]',     // Large: 40px height
    xl: 'h-12 w-auto max-w-[180px]'      // Extra Large: 48px height
  };

  // Icon-only sizing (square aspect ratio) - for mobile or compact spaces
  const iconSizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10', 
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  };

  if (variant === 'icon-only') {
    // Use icon-only PNG assets if available, otherwise fallback to SVG
    const iconAsset = color === 'white' ? '/icon_white_transparent.png' : 
                     color === 'black' ? '/icon_black_transparent.png' :
                     '/IconOnly_Transparent_NoBuffer.png'; // fallback to existing asset
    
    return (
      <div className={`${iconSizeClasses[size]} ${className}`}>
        <img 
          src={iconAsset}
          alt="ArivLabs Icon"
          className="w-full h-full object-contain"
          onError={(e) => {
            // Fallback to SVG if PNG fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            target.nextElementSibling?.classList.remove('hidden');
          }}
        />
        {/* SVG Fallback */}
        <svg 
          viewBox="640 400 200 150" 
          className="w-full h-full hidden"
          fill="none"
        >
          <g>
            <path fill="#57D2FF" d="M749.34119 490.46808 L724.15338 493.58545 L528.29224 493.58545 L500.33527 490.46808 L558.00757 456.50989 L625.22894 439.84577 L742.08789 479.76771 L749.34119 490.46808Z" />
            <path fill="#57D2FF" d="M707.05261 533.37665 L705.73218 598.07996 L686.78546 633.78418 L655.83935 642.95728 L624.74291 638.57459 L596.68517 643.10389 L565.63274 634.18348 L545.95446 587.51618 L541.56194 518.65943 L564.88128 501.245 L611.53814 503.00568 L701.33056 501.245 L707.05261 533.37665Z" />
          </g>
        </svg>
      </div>
    );
  }

  // Full logo with text - responsive and properly sized
  return (
    <div className={`${logoSizeClasses[size]} ${className} flex items-center`}>
      <img 
        src={getLogoAsset()} 
        alt="ArivLabs - Boutique Engineering Services"
        className="h-full w-full object-contain"
        style={{ 
          filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.05))'
        }}
      />
    </div>
  );
};

export default Logo;