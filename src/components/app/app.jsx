import { Fragment } from "react";
import { headphones } from "../../constants/mock";
import { Title } from "../title/title";
import { Layout } from "../layout/layout";
import { Counter } from "../counter/counter";

export const App = ({ title }) => {
  return (
    <Layout sidebar={<div>sidebar</div>}>
      <Counter />
      <Counter />
      <Counter />
      <Title title={title} />
      {headphones.map(({ name, reviews, codecs, id }) => (
        <Fragment key={id}>
          <h2>{name}</h2>
          <h3>Reviews</h3>
          {reviews.map((text) => (
            <span key={text}>{text}</span>
          ))}
          <h3>Codecs</h3>
          {codecs.map((codec) => (
            <span key={codec}>{codec}</span>
          ))}
        </Fragment>
      ))}
    </Layout>
  );
};
