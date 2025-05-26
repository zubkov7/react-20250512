import { Codecs } from "../codecs/codecs";
import { HeadphoneCounter } from "../headphone-counter/headphone-counter";
import { ReviewForm } from "../review-form/review-form";
import { Reviews } from "../reviews/reviews";

import styles from "./headphone.module.css";

export const Headphone = ({ name, brand, reviews, codecs }) => {
  console.log(styles);
  if (!name) {
    return null;
  }

  return (
    <section>
      <h2 className={styles.title}>{name}</h2>
      <h3 className={styles["is_active"]}>Brand</h3>
      <div>{brand}</div>
      {reviews.length ? <Reviews reviews={reviews} /> : <div>empty review</div>}
      <ReviewForm />
      {codecs.length ? <Codecs codecs={codecs} /> : <div>empty codecs</div>}
      <HeadphoneCounter colorViewVariant='active' />
    </section>
  );
};
