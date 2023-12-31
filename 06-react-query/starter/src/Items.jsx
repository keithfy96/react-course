import { useQuery } from "@tanstack/react-query";
import SingleItem from "./SingleItem";
import customFetch from "./utils";
import { useFetchTasks } from "./reactQueryCustomHooks";

const Items = () => {
  const { isLoading, data, isError, error } = useFetchTasks();
  // const test = useQuery({
  //   queryKey: ["tasks"],
  //   queryFn: () => customFetch.get("/"),
  // });
  // console.log(test);
  if (isLoading) {
    return <p style={{ marginTop: "1rem" }}>Loading...</p>;
  }
  if (error) {
    return <p style={{ marginTop: "1rem" }}>{error.message}</p>;
  }
  return (
    <div className="items">
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
