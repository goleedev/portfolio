export default function PageTitle({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <h2 className="text-2xl font-bold font-mono">{title}</h2>
      {description && <p className="text-sm">{description}</p>}
    </div>
  );
}
