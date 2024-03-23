import HomeTitle from '@/components/home-title';
import MacBook from '@/components/macbook';

export default function Home() {
  return (
    <section className="transition-opacity dark:opacity-80">
      <MacBook />
      <HomeTitle />
    </section>
  );
}
