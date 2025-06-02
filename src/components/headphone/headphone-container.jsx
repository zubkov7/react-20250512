import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphone/slice";
import { Headphone } from "./headphone";
import { AuthContext } from "../auth-context";
import { useContext } from "react";

export const HeadphoneContainer = ({ id }) => {
  const headphone =
    useSelector((state) => selectHeadphoneById(state, id)) || {};

  const { name, brand, reviews, codecs } = headphone;

  const { auth } = useContext(AuthContext);
  const { isAuthorized } = auth;

  return (
    <Headphone
      name={name}
      brand={brand}
      reviews={reviews}
      codecs={codecs}
      showCounter={isAuthorized}
      showReviewForm={isAuthorized}
    />
  );
};
