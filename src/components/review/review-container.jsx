import { Review } from "./review";

export const ReviewContainer = ({ review }) => {
  if (!review?.text) {
    return null;
  }

  return <Review text={review.text} userId={review.user} />;
};
