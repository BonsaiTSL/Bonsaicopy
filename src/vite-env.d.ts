/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly PROD: boolean
    readonly DEV: boolean
    readonly MODE: string
    readonly BASE_URL: string
    readonly SSR: boolean
    // Add custom env variables here if needed
    // readonly VITE_CUSTOM_VAR: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }