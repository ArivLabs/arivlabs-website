import React from 'react'
import { COMPANY_NAMES, MASKING_CONFIG } from '../constants/companyNames'

interface MaskedTextProps {
  text: string
  className?: string
  shouldMask?: boolean
}

const MaskedText: React.FC<MaskedTextProps> = ({ 
  text, 
  className = '', 
  shouldMask = MASKING_CONFIG.BLUR_CURRENT_EMPLOYER 
}) => {
  // Check if this text contains the current employer name
  const containsCurrentEmployer = text.includes(COMPANY_NAMES.CURRENT_EMPLOYER)
  
  if (containsCurrentEmployer && shouldMask) {
    // Replace the company name with masked version and apply blur
    const maskedText = text.replace(COMPANY_NAMES.CURRENT_EMPLOYER, COMPANY_NAMES.CURRENT_EMPLOYER_MASKED)
    
    return (
      <span 
        className={`${className} masked-text`}
        style={{ 
          filter: MASKING_CONFIG.BLUR_INTENSITY,
          userSelect: 'none',
          pointerEvents: 'none'
        }}
        title="Company name masked for privacy"
      >
        {maskedText}
      </span>
    )
  }
  
  // Return normal text if no masking needed
  return <span className={className}>{text}</span>
}

export default MaskedText
