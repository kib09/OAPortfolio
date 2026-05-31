import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/** GitHub Pages: VITE_BASE_PATH=/저장소이름/ 로 빌드 (Actions에서 자동 설정) */
const base = process.env.VITE_BASE_PATH ?? './';

export default defineConfig({
  plugins: [react()],
  base,
});
