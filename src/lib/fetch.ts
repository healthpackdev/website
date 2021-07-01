import useSWR from 'swr';

type viewsResponse = { page: string; visitors: number }[];

interface ApiResponses {
  views: viewsResponse;
}

type UseAPI = <T extends keyof ApiResponses>(url: T, method?: string) => { res: ApiResponses[T]; error: any };

const apiFetcher = async (options: [string, string?]) => {
  const res = await fetch(`/api/${options[0]}`, { method: options[1]?.toUpperCase() || 'GET' });
  return res.json();
};

export const useAPI: UseAPI = (url, method) => {
  const { data, error } = useSWR([url, method], apiFetcher);

  return {
    res: data,
    error,
  };
};
