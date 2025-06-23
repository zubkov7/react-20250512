import { getCodecsByHeadphoneId } from "@/services/get-codecs-by-headphone-id";
import { Codecs } from "./codecs";

export const CodecsContainer = async ({ headphoneId }) => {
  const codecs = await getCodecsByHeadphoneId(headphoneId);

  if (!codecs.length) {
    return null;
  }

  return <Codecs codecs={codecs} />;
};
