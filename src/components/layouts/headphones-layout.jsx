import { HeadphonesTabsContainer } from "../headphones-tabs/headphones-tabs-container";
import { Suspense } from "react";

export const HeadphonesLayout = async ({ children }) => {
  return (
    <div>
      <Suspense fallback={<div>loading..</div>}>
        <HeadphonesTabsContainer />
      </Suspense>
      {children}
    </div>
  );
};
