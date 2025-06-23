import { CodecsContainer } from "@/components/codecs/codecs-container";

const HeadphoneCodecsPage = async ({ params }) => {
  const { headphoneId } = await params;

  return <CodecsContainer headphoneId={headphoneId} />;
};

export default HeadphoneCodecsPage;
