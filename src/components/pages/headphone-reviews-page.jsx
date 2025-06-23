import { getReviewsByHeadphoneId } from "../../services/get-reviews-by-headphone-id";
import { ReviewsContainer } from "../reviews/reviews-container";

export const HeadphoneReviewsPage = async ({ params }) => {
  const { headphoneId } = await params;

  const reviews = await getReviewsByHeadphoneId(headphoneId);

  return <ReviewsContainer headphoneId={headphoneId} reviews={reviews} />;
};
