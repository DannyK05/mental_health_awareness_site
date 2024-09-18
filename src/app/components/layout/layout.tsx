import "./layout.scss";
export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <main className="">{children}</main>
      <footer className=""></footer>
    </div>
  );
}
