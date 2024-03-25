import MacBook from './macbook';

export default function HomeContent() {
  return (
    <section className="w-full flex flex-col items-center justify-center text-center max-w-screen-md min-h-[calc(100vh-72px)]">
      <MacBook />

      <div className="text-transparent bg-clip-text bg-[url('https://raw.githubusercontent.com/jhancock532/pencil-textures/master/holo-image.gif')] dark:opacity-70 absolute w-full bottom-1/3">
        <h3 className="font-semibold text-[24px] text-black dark:text-white">
          Build. Design.
        </h3>
        <h1 className="font-extrabold text-[48px] leading-10 text-transparent">
          Develop.
        </h1>
      </div>
    </section>
  );
}
