export const ApiFetcher = (...args) => {
  return fetch(`/api${args}`).then((res) => res.json());
};
