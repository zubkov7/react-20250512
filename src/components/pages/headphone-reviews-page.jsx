import { getUsers } from "@/services/get-users";
import { getReviewsByHeadphoneId } from "../../services/get-reviews-by-headphone-id";
import { ReviewsContainer } from "../reviews/reviews-container";
import { UsersContextProvider } from "../users-context/users-context";

export const HeadphoneReviewsPage = async ({ params }) => {
  const { headphoneId } = await params;

  // const reviews = await getReviewsByHeadphoneId(headphoneId);
  // const users = await getUsers();

  const [reviews, users] = await Promise.all([
    getReviewsByHeadphoneId(headphoneId),
    getUsers(),
  ]);

  return (
    <UsersContextProvider users={users}>
      <ReviewsContainer headphoneId={headphoneId} reviews={reviews} />
    </UsersContextProvider>
  );
};
