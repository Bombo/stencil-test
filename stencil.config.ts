import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'stencil-test',
  cacheDir: 'dist/.stencil',
  hashFileNames: false,
  outputTargets: [
    {
      type: 'dist',
    },
    {
      type: 'www',
      dir: 'dist/www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [sass()],
};
