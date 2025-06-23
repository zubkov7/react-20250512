"use client";

import { useCallback, useOptimistic } from "react";
import { Reviews } from "./reviews";
import { usePathname } from "next/navigation";
import { addReviewAction } from "@/actions/add-review-action";

export const ReviewsContainer = ({ reviews, headphoneId }) => {
  const pathname = usePathname();

  const [optimisticReviews, addOptimisticReview] = useOptimistic(
    reviews,
    (currentState, optimisticValue) => [
      ...currentState,
      { ...optimisticValue, id: "creating" },
    ]
  );

  const handleAddReview = useCallback(
    async (state, formData) => {
      // для обнуления формы
      if (formData === null) {
        return {
          text: "",
          rating: 5,
        };
      }

      const text = formData.get("text");
      const rating = formData.get("rating");

      const review = { text, rating, user: "asdasdoi29tu384f" };

      addOptimisticReview(review);

      await addReviewAction({ headphoneId, pathname, review });

      return {
        text: "default",
        rating: 5,
      };
    },
    [headphoneId, pathname, addOptimisticReview]
  );

  if (!reviews.length) {
    return null;
  }

  return (
    <Reviews reviews={optimisticReviews} submitFormAction={handleAddReview} />
  );
};
