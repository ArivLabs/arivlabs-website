// Company name constants - for easy replacement when needed
export const COMPANY_NAMES = {
  // Current employer - masked for privacy/legal reasons
  CURRENT_EMPLOYER: 'CyberDesk GmbH',
  CURRENT_EMPLOYER_MASKED: 'Current Employer',
  
  // Other companies (no masking needed)
  SILVER_OAK: 'Silver Oak Health',
  HERTZ_CISCO: '42Hertz (Acquired by Cisco)',
  NORMALYZE_PROOFPOINT: 'Normalyze (Acquired by Proofpoint)',
  ARIVLABS: 'ArivLabs'
} as const

// Configuration for masking
export const MASKING_CONFIG = {
  BLUR_CURRENT_EMPLOYER: true, // Set to false to show real name
  BLUR_INTENSITY: 'blur(4px)', // CSS blur filter intensity
} as const
