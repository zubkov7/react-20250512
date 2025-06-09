import { Tabs } from "../tabs/tabs";
import { useSelector } from "react-redux";
import { selectHeadphonesIds } from "../../redux/entities/headphones/slice";
import { HeadphoneTabContainer } from "../headphone-tab/headphone-tab-container";
import { Outlet } from "react-router";
import { getHeadphones } from "../../redux/entities/headphones/get-headphones";
import { useRequest } from "../../redux/hooks/use-request";

export const HeadphonesPage = () => {
  // const dispatch = useDispatch();
  const headphonesIds = useSelector(selectHeadphonesIds);
  // const requestStatus = useSelector(selectRequestStatus);

  const requestStatus = useRequest(getHeadphones);

  // useEffect(() => {
  //   dispatch(getHeadphones(123));
  // }, [dispatch]);

  if (requestStatus === "idle" || !headphonesIds.length) {
    return "loading...";
  }

  if (requestStatus === "rejected") {
    return "error";
  }

  // const handleRefresh = () => {
  //   dispatch(getHeadphones(123));
  // };

  return (
    <div>
      <h1>Headphones Page</h1>

      <Tabs>
        {headphonesIds.map((id) => (
          <HeadphoneTabContainer key={id} id={id} />
        ))}
      </Tabs>

      <Outlet />
    </div>
  );
};
