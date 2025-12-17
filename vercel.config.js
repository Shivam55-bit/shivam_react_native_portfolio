// Vercel configuration to ensure Vite detection
export default {
  framework: 'vite',
  buildCommand: 'npm run build',
  outputDirectory: 'dist',
  installCommand: 'npm ci'
};