function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="w-[100%]">
        <div className="h-36 "></div>
        <div className="w-4/5  mx-auto ">{children}</div>
      </div>
    </>
  );
}
export default Layout;
