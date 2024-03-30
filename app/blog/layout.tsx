export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="pt-10 pb-14 px-3 sm:pt-24">{children}</section>;
}
