export const apiFetch = (...args) => {
  return fetch(`/api${args}`).then((res) => res.json());
};
