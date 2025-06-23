import { createPortal } from "react-dom";
import { useState } from "react";

export const ComponentModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <button onClick={() => setIsVisible(!isVisible)}>Show portal</button>
      {isVisible &&
        createPortal(<div>modal</div>, document.getElementById("modal"))}
    </>
  );
};
