/// <reference types="vite/client" />

// 1. Définir le type de ImportMetaEnv
type ImportMetaEnv = {
  readonly VITE_APP_API_KEY: string;
  readonly VITE_APP_AUTH_DOMAIN: string;
  readonly VITE_APP_PROJECT_ID: string;
  readonly VITE_APP_STORAGE_BUCKET: string;
  readonly VITE_APP_MESSAGING_SENDER_ID: string;
  readonly VITE_APP_APP_ID: string;
};

// 2. Définir le type de ImportMeta
type ImportMeta = {
  readonly env: ImportMetaEnv;
};
