import { useParams } from "react-router";
import { HeadphoneContainer } from "../components/headphone/headphone-container";
import { useGetHeadphoneByIdQuery, useGetHeadphonesQuery } from "../redux/api";

export const HeadphonePage = () => {
  const { headphoneId } = useParams();

  // const { data } = useGetHeadphoneByIdQuery(headphoneId);
  const { data: headphone } = useGetHeadphonesQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data.find(({ id }) => id === headphoneId),
    }),
  });

  if (!headphone) {
    return null;
  }

  return <HeadphoneContainer headphone={headphone} />;
};
