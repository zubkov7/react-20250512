import { getHeadphones } from "@/services/get-headphones";
import { HeadphonesTabs } from "./headphones-tabs";

export const HeadphonesTabsContainer = async () => {
  const data = await getHeadphones();

  if (!data.length) {
    return null;
  }

  return <HeadphonesTabs headphones={data} />;
};
