/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENABLE_FULL_VERSION?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// Google Analytics gtag function
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

export {}
