import fetchJson from 'lib/fetchJson';

export const swrValues = {
  fetcher: fetchJson,
  onError: err => {
    console.error(err);
  },
};
