import useSWR from 'swr';

type UseAPI = (endpoint: string, fetchOptions?: RequestInit) => { res: any; error: any };

const apiFetcher = async (options: any[]) => {
  const endpoint = options[0];
  const fetchOptions = options[1];

  const res = await fetch(`/api/${endpoint}`, fetchOptions);
  return res.json();
};

export const useAPI: UseAPI = (endpoint, fetchOptions) => {
  const { data, error } = useSWR([endpoint, fetchOptions], apiFetcher);

  return {
    res: data,
    error,
  };
};
