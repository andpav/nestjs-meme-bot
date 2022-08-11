import { createServer } from 'miragejs';
import { images } from './stubs';

// TODO: finalize it

export const configureMirage = () =>
  createServer({
    routes() {
      this.get(
        'https://serpapi.com/**',
        () => ({
          data: images,
        }),
        { timing: 200 },
      );

      this.passthrough();
    },
  });
