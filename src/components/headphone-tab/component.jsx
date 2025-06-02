import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphone/slice";
import { Button } from "../button/button";

export const HeadphoneTab = ({ id, onClick, disabled }) => {
  const headphone =
    useSelector((state) => selectHeadphoneById(state, id)) || {};

  const { name } = headphone;

  if (!name) {
    return null;
  }

  return <Button key={id} title={name} onClick={onClick} disabled={disabled} />;
};
