import { HeadphonesPage } from "../headphones-page/headphones-page";
import { Layout } from "../layout/layout";

import "./reset.css";
import "./app.css";
import { ThemeContextProvider } from "../theme-context/theme-context";
import { AuthContextProvider } from "../auth-context/auth-context";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router";
import { HeadphonePage } from "../headphone-page/headphone-page";

export const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                {/* <Route path='/' element={<div>home page</div>} />
              <Route
                path='/headphone/:headphoneId'
                element={<div>headphone</div>}
              />
              <Route path='/about'>
                <Route index element={<div>about page</div>} />
                <Route path='contacts' element={<div>contacts</div>} />
                <Route path='*' element={<div>404 about</div>} />
              </Route>
              <Route path='*' element={<div>404</div>} /> */}
                <Route path='headphones' element={<HeadphonesPage />}>
                  <Route path=':headphoneId' element={<HeadphonePage />} />
                  <Route path='about' element={<div>about</div>} />
                </Route>
                <Route
                  path='*'
                  element={<Navigate to={"/headphones"} replace />}
                />
              </Route>
            </Routes>
            {/* <Layout>
              <HeadphonesPage />
            </Layout> */}
          </BrowserRouter>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};
