import { CodecsContainer } from "@/components/codecs/codecs-container";
import { Suspense } from "react";

const HeadphoneCodecsPage = async ({ params }) => {
  const { headphoneId } = await params;

  return (
    <Suspense fallback={<div>loading codecs...</div>}>
      <CodecsContainer headphoneId={headphoneId} />;
    </Suspense>
  );
};

export default HeadphoneCodecsPage;
