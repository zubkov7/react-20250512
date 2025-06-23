import { App } from "@/components/app/app";

export const metadata = {
  title: "Next js app",
  description: "headphones app",
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' type='image/svg+xml' href='/vite.svg' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap'
          rel='stylesheet'
        />
      </head>
      <body>
        <App>{children}</App>
      </body>
    </html>
  );
};

export default RootLayout;
