import fetchJson from 'lib';

export const swrValues = {
  fetcher: fetchJson,
  onError: err => {
    console.error(err);
  },
};
