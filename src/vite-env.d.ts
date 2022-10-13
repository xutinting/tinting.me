/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly VITE_SITE_NAME: string
  readonly VITE_DESCRIPTION: string
  readonly VITE_DEFAULT_THEME_MODE: string,
  readonly VITE_AUTHOR: string,
  readonly VITE_EMAIL: string,
  readonly VITE_WEBSITE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
