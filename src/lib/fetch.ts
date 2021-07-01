import useSWR from 'swr';

type UseAPI = (endpoint: string, fetchOptions?: RequestInit) => { res: any; error: any };

const apiFetcher = (endpoint, fetchOptions) => {
  return new Promise((resolve) => {
    resolve(fetch(`/api/${endpoint}`, fetchOptions).then((res) => res.json()));
  });
};

export const useAPI: UseAPI = (endpoint, fetchOptions) => {
  const { data, error } = useSWR([endpoint, fetchOptions], (endpoint, fetchOptions) =>
    apiFetcher(endpoint, fetchOptions)
  );

  return {
    res: data,
    error,
  };
};
