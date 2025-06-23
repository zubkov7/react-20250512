import { HeadphoneLayout } from "@/components/layouts/headphone-layout";
import { getHeadphoneById } from "@/services/get-headphone-by-id";

// export const generateStaticParams = () => {
//   return [{ headphoneId: "MLXJ2LLA" }];
// };

export const generateMetadata = async ({ params }) => {
  const { headphoneId } = await params;

  const { data } = await getHeadphoneById(headphoneId);

  if (data) {
    return {
      title: data.name,
    };
  }
};

export default HeadphoneLayout;
