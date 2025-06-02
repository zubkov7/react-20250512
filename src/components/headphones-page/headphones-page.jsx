import { useState } from "react";
import { Tabs } from "../tabs/tabs";
import { useSelector } from "react-redux";
import { selectHeadphoneIds } from "../../redux/entities/headphone/slice";
import { HeadphoneTab } from "../headphone-tab/component";
import { HeadphoneContainer } from "../headphone/headphone-container";

export const HeadphonesPage = () => {
  const headphonesIds = useSelector(selectHeadphoneIds);
  const [activeHeadphoneId, setActiveHeadphoneId] = useState(
    headphonesIds[0].id
  );

  const handleSetActiveHeadphoneId = (id) => {
    if (activeHeadphoneId === id) {
      return;
    }

    setActiveHeadphoneId(id);
  };

  return (
    <div>
      <h1>Headphones Page</h1>

      <Tabs>
        {headphonesIds.map((id) => (
          <HeadphoneTab
            key={id}
            id={id}
            onClick={() => handleSetActiveHeadphoneId(id)}
            disabled={id === activeHeadphoneId}
          />
        ))}
      </Tabs>

      {activeHeadphoneId && (
        <HeadphoneContainer key={activeHeadphoneId} id={activeHeadphoneId} />
      )}
    </div>
  );
};
