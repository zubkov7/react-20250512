import { Headphone } from "./headphone";
import { getHeadphones } from "@/services/get-headphones";

export const HeadphoneContainer = async ({ id }) => {
  const headphones = await getHeadphones();

  const headphone = headphones.find(
    ({ id: headphoneId }) => headphoneId === id
  );

  if (!headphone) {
    return null;
  }

  const { name, brand } = headphone;

  return <Headphone name={name} brand={brand} id={id} />;
};
