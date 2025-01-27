
function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <div className=" bg-blue-500">{children}</div>;
  }
  export default Layout;
  