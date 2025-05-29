import { HeadphonesPage } from "../headphones-page/headphones-page";
import { Layout } from "../layout/layout";

import "./reset.css";
import "./app.css";
import { ThemeContextProvider } from "../theme-context/theme-context-provider";

export const App = () => {
  return (
    <ThemeContextProvider>
      <Layout sidebar={<div>sidebar</div>}>
        <HeadphonesPage />
      </Layout>
    </ThemeContextProvider>
  );
};
