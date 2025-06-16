import { Tabs } from "../components/tabs/tabs";
import { Outlet } from "react-router";
import { useGetHeadphonesQuery } from "../redux/api";
import { TabLink } from "../components/tab-link/tab-link";

export const HeadphonesPage = () => {
  const { data, isLoading, isFetching, isError, refetch } =
    useGetHeadphonesQuery();

  console.log("isFetching");
  console.log(isFetching);
  console.log("isLoading");
  console.log(isLoading);

  if (isLoading || !data?.length) {
    return "loading...";
  }

  if (isError) {
    return "ERROR";
  }

  return (
    <div>
      <h1>Headphones Page</h1>

      <Tabs>
        {data.map(({ id, name }) => (
          <TabLink key={id} to={`/headphones/${id}`}>
            {name}
          </TabLink>
        ))}
      </Tabs>

      <button onClick={refetch}>refetch</button>

      <Outlet />
    </div>
  );
};
