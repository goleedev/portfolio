export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="pt-24 pb-14 px-3">{children}</section>;
}
