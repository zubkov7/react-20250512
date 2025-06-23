import { ReviewsContainer } from "@/components/reviews/reviews-container";

const HeadphoneReviewsPage = async ({ params }) => {
  const { headphoneId } = await params;

  return <ReviewsContainer headphoneId={headphoneId} />;
};

export default HeadphoneReviewsPage;
