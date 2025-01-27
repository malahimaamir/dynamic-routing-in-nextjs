function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="w-[80%] bg-red-500">{children}</div>;
}
export default Layout;
