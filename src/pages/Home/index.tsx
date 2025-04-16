import { Container } from "../../components/Container";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <main className="flex flex-col gap-14 w-full h-full mb-9">
      <section className="flex justify-end items-center w-full min-h-550 mb-10 px-5 py-5 md:px-14 md:py-14 bg-[url('https://i.imgur.com/m7gsqlY.png')] bg-cover bg-center">
        <div className="w-xl flex flex-col  gap-7 bg-bgOrange px-11 py-11">
          <div className="w-full flex flex-col gap-3">
            <h2 className="font-semibold text-base">New Arrival</h2>
            <h1 className="font-bold text-4xl md:text-5xl text-titleOrange">
              Discover Our
              <br />
              New Collection
            </h1>
            <p className="font-medium text-base md:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
          </div>
          <a
            className="w-40  md:w-52 font-bold text-white uppercase text-center py-3 md:py-6 bg-titleOrange"
            href="#"
          >
            buy now
          </a>
        </div>
      </section>

      <Container>
        <h1 className="font-bold text-2xl md:text-4xl mb-2">
          Browse The Range
        </h1>
        <p className="text-zinc-400 text-base md:text-xl mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex justify-between items-center gap-10 w-full">
          <div className="flex flex-col gap-5 w-30 md:w-50 lg:w-70 xl:w-96 justify-center rounded-t-2xl">
            <img
              content="center"
              className="w-30 h-40  md:w-50 md:h-70 lg:w-70 lg:h-96 xl:w-96 xl:h-480"
              src="https://i.imgur.com/77UDWr1.png"
              alt="product"
            />
            <Link
              className="font-semibold text-sm md:text-2xl text-center"
              to={""}
            >
              Dining
            </Link>
          </div>

          <div className="flex flex-col gap-5 w-30 md:w-50 lg:w-70 xl:w-96 justify-center rounded-t-2xl">
            <img
              content="center"
              className="w-30 h-40  md:w-50 md:h-70 lg:w-70 lg:h-96 xl:w-96 xl:h-480"
              src="https://i.imgur.com/77UDWr1.png"
              alt="product"
            />
            <Link
              className="font-semibold text-sm md:text-2xl text-center"
              to={""}
            >
              Dining
            </Link>
          </div>

          <div className="flex flex-col gap-5 w-30 md:w-50 lg:w-70 xl:w-96 justify-center rounded-t-2xl">
            <img
              content="center"
              className="w-30 h-40  md:w-50 md:h-70 lg:w-70 lg:h-96 xl:w-96 xl:h-480"
              src="https://i.imgur.com/77UDWr1.png"
              alt="product"
            />
            <Link
              className="font-semibold text-sm md:text-2xl text-center"
              to={""}
            >
              Dining
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
