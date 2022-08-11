import { Injectable } from '@nestjs/common';
import * as SerpApi from 'google-search-results-nodejs';

import { Search, Images } from './types';
import { FIRST_RESULTS_COUNT } from './constants';

// import { configureMirage } from '../mirage';

// if (process.env.NODE_ENV === 'dev') {
//   configureMirage();
// }

const search: Search = new SerpApi.GoogleSearch(
  process.env.GOOGLE_SEARCH_API_KEY,
);

const getRequestImageParams = (query: string) => ({
  engine: 'google',
  ijn: '0',
  q: `${query} meme`,
  google_domain: 'google.com',
  tbm: 'isch',
});

const getRandomImageSrc = (images: Images) => {
  const length = images.length;

  if (!length) return 'sorry, we have no suitable meme for your request 😥';

  const randomIndex = Math.floor(Math.random() * length);

  return images[randomIndex].original;
};

@Injectable()
export class ImageService {
  getImage(query: string, callback: (src: string) => void): void {
    search.json(getRequestImageParams(query), (data) => {
      const images = data?.images_results.slice(0, FIRST_RESULTS_COUNT);

      if (!images || !images.length) {
        return;
      }

      const imageResult = getRandomImageSrc(images);

      callback(imageResult);
    });

    // const images = mock.images_results.slice(0, FIRST_RESULTS_COUNT);
    // const imageResult = getRandomImageSrc(images);

    // callback(imageResult);
  }
}
