import { Tabs } from "../tabs/tabs";
import { HeadphoneContainer } from "../headphone/headphone-container";
import { HeadphoneTabContainer } from "../headphone-tab/headphone-tab-container";
import { useParams } from "react-router";

export const HeadphonePage = () => {
  const { headphoneId } = useParams();

  if (!headphoneId) {
    return null;
  }

  return <HeadphoneContainer id={headphoneId} />;
};
