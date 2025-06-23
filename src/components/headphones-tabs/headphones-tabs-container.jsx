import { getHeadphones } from "@/services/get-headphones";
import { HeadphonesTabs } from "./headphones-tabs";
import { notFound } from "next/navigation";

export const HeadphonesTabsContainer = async () => {
  const { error, data } = await getHeadphones();

  if (error) {
    throw new Error();
  }

  if (!data) {
    return notFound();
  }

  return <HeadphonesTabs headphones={data} />;
};
