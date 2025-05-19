export const Layout = ({ children, sidebar }) => {
  return (
    <div>
      {sidebar}
      <header>header</header>
      {children}
      <footer>foouter</footer>
    </div>
  );
};
