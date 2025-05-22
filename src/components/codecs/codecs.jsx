import { Codec } from "../codec/codec";

export const Codecs = ({ codecs }) => {
  return (
    <div>
      <h3>Codecs</h3>
      <ul>
        {codecs?.map((codec) => (
          <li key={codec}>
            <Codec codec={codec} />
          </li>
        ))}
      </ul>
    </div>
  );
};
