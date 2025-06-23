import { HeadphonesTabsContainer } from "../headphones-tabs/headphones-tabs-container";

export const HeadphonesLayout = ({ children }) => {
  return (
    <div>
      <HeadphonesTabsContainer />
      {children}
    </div>
  );
};
