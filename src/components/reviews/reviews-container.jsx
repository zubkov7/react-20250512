"use client";

import { Reviews } from "./reviews";

export const ReviewsContainer = ({ reviews }) => {
  if (!reviews.length) {
    return null;
  }

  return (
    <Reviews
      reviews={reviews}
      onAddReview={() => {}}
      isSubmitButtonDisabled={false}
    />
  );
};
