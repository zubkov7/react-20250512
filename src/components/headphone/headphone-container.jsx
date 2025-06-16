import { useAddReviewMutation } from "../../redux/api";
import { Headphone } from "./headphone";

export const HeadphoneContainer = ({ headphone }) => {
  const { name, brand, reviews, codecs } = headphone || {};

  const [addReviewMutation, { isLoading }] = useAddReviewMutation();

  const handleAddReview = (review) => {
    addReviewMutation({
      headphoneId: headphone.id,
      review: { ...review, user: "jg4985gj94" },
    });
  };

  return (
    <Headphone
      name={name}
      brand={brand}
      reviewsIds={reviews}
      codecsIds={codecs}
      id={headphone.id}
      addReview={handleAddReview}
      isSubmitButtonDisabled={isLoading}
    />
  );
};
