import { Link } from "react-router-dom";
// icons
import { Container } from "../../components/Container";
import { Card } from "../../components/Card";
import { Slide } from "../../components/Slide";

// import Slide from "../../components/Slide";

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
          <div className="flex flex-col gap-5 sm:w-40 md:w-50 lg:w-70 xl:w-96 justify-center rounded-t-2xl">
            <img
              content="center"
              className="w-full sm:h-50  md:h-70  lg:h-96 xl:h-480"
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

          <div className="flex flex-col gap-5 sm:w-40 md:w-50 lg:w-70 xl:w-96 justify-center rounded-t-2xl">
            <img
              content="center"
              className="w-full sm:h-50  md:h-70  lg:h-96 xl:h-480"
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

          <div className="flex flex-col gap-5 sm:w-40 md:w-50 lg:w-70 xl:w-96 justify-center rounded-t-2xl">
            <img
              content="center"
              className="w-full sm:h-50  md:h-70  lg:h-96 xl:h-480"
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

      <Container>
        <h1 className="font-bold text-2xl md:text-4xl mb-12">Our Products</h1>
        <Card />
        <button className="mt-8 w-50 h-12 text-titleOrange font-medium border-2 border-titleOrange cursor-pointer ">
          Show More
        </button>
      </Container>

      <section className="flex  items-center w-full h-full 2xl:pl-20 bg-bgCarrosel py-11 flex-wrap flex-col-reverse gap-8 2xl:flex-row 2xl:flex-nowrap justify-center overflow-hidden">
        <div className="flex flex-col gap-5 w-full max-w-443 items-center">
          <h2 className="font-bold text-2xl md:text-4xl">
            50+ Beautiful rooms <br />
            inspiration
          </h2>
          <p className="font-medium text-zinc-400 text-sm md:text-base">
            Our designer already made a lot of beautiful
            <br />
            prototipe of rooms that inspire you
          </p>
          <Link
            className="w-40  md:w-52 font-bold text-white uppercase text-center py-3 md:py-6 bg-titleOrange text-sm md:text-base"
            to=""
          >
            Explore More
          </Link>
        </div>
        <Slide />
      </section>
      {/* <div className="w-full h-480"></div> */}
    </main>
  );
}
