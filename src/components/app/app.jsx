import { ReduxProvider } from "@/redux/provider";
import { ThemeContextProvider } from "../theme-context/theme-context";
import { AuthContextProvider } from "../auth-context/auth-context";
import { Layout } from "../layout/layout";

import "./reset.css";
import "./app.css";

export const App = ({ children }) => {
  return (
    <ReduxProvider>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Layout>{children}</Layout>
        </AuthContextProvider>
      </ThemeContextProvider>
    </ReduxProvider>
  );
};
