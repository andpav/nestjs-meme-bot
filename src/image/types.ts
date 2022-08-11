import { images } from '../mirage/stubs';

type SearchResponse = typeof images;

type SearchParams = {
  engine: string;
  ijn: string;
  q: string;
  google_domain: string;
  tbm: string;
};

export type Images = SearchResponse['images_results'];

export type Search = {
  json: (params: SearchParams, cb: (data: SearchResponse) => void) => void;
};
