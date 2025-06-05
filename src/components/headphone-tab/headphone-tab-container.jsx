import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphones/slice";
import { Button } from "../button/button";
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router";

import styles from "./headphone-tab.module.css";
import { useEffect } from "react";

export const HeadphoneTabContainer = ({ id, onClick, isActive }) => {
  const headphone = useSelector((state) => selectHeadphoneById(state, id));

  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.get("id"));
  useEffect(() => {
    setSearchParams({ id: 123 });
  }, []);

  // const navigate = useNavigate();

  if (!headphone) {
    return;
  }

  // return (
  //   <button onClick={() => navigate(headphone.id, { replace: true })}>
  //     {headphone.name}
  //   </button>
  // );

  return (
    <NavLink to={id} className={({ isActive }) => isActive && styles.isActive}>
      {({ isActive }) => (isActive ? "current" : headphone.name)}
    </NavLink>
  );
};
