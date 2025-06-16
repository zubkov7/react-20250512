import { useParams } from "react-router";
import { selectHeadphoneById } from "../redux/entities/headphones/slice";
import { useSelector } from "react-redux";
import { Reviews } from "../components/reviews/reviews";
import { getUsers } from "../redux/entities/users/get-users";
import { useRequest } from "../redux/hooks/use-request";
import { getReviewsByHeadphoneId } from "../redux/entities/reviews/get-reviews-by-headphone-id";
import {
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from "../redux/constants";
import {
  useAddReviewMutation,
  useGetReviewsByHeadphoneIdQuery,
} from "../redux/api";

export const HeadphoneReviewsPage = () => {
  const { headphoneId } = useParams();

  const usersRequestStatus = useRequest(getUsers);
  const {
    data: reviews,
    isFetching: isReviewsLoading,
    isError: isReviewsError,
  } = useGetReviewsByHeadphoneIdQuery(headphoneId);

  const isLoading =
    usersRequestStatus === REQUEST_STATUS_PENDING || isReviewsLoading;

  const isError =
    usersRequestStatus === REQUEST_STATUS_REJECTED || isReviewsError;

  if (isLoading) {
    return "loading...";
  }

  if (isError) {
    return "ERROR";
  }

  return reviews?.length ? (
    <Reviews reviews={reviews} />
  ) : (
    <div>empty review</div>
  );
};
