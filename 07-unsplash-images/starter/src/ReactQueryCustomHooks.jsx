import { useGlobalContext } from "./contex";
import customFetch from "./utils";
import { useQuery } from "@tanstack/react-query";

export const useFetchPhotos = (query) => {
  const { search } = useGlobalContext();
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["photos", search],
    queryFn: async () => {
      console.log("query ran");
      const { data } = await customFetch.get(`/search/photos?query=${query}`);
      return data;
    },
  });
  return { isLoading, isError, data };
};
