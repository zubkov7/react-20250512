import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphones/slice";
import { Headphone } from "./headphone";
import { useEffect, useState, useTransition } from "react";

export const HeadphoneContainer = ({ id }) => {
  // const [product, setProduct] = useState(null);
  // // const [isPending, setIsPenging] = useState(true);
  // const [isPending, startTranstion] = useTransition();
  // useEffect(() => {
  //   startTranstion(() => {
  //     fetch(`http://localhost:3001/api/product/${id}`).then((result) => {
  //       result.json().then((product) => {
  //         setProduct(product);
  //       });
  //     });
  //   });
  // }, [id]);

  const headphone = useSelector((state) => selectHeadphoneById(state, id));

  const { name, brand, reviews, codecs } = headphone || {};

  return (
    <Headphone
      name={name}
      brand={brand}
      reviewsIds={reviews}
      codecsIds={codecs}
      id={id}
    />
  );
};
