import { Codecs } from "../codecs/codecs";
import { Counter } from "../counter/counter";
import { ReviewForm } from "../review-form/review-form";
import { Reviews } from "../reviews/reviews";

export const Headphone = ({ name, brand, reviews, codecs }) => {
  if (!name) {
    return null;
  }

  return (
    <section>
      <h2>{name}</h2>
      <h3>Brand</h3>
      <div>{brand}</div>
      {reviews.length ? <Reviews reviews={reviews} /> : null}
      <ReviewForm />
      <Codecs codecs={codecs} />
      <Counter />
    </section>
  );
};
