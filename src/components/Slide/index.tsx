import { useRef } from "react";
// icons
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import "./styles.css";

export function Slide() {
  let rightRef = useRef<HTMLDivElement>(null);

  function next() {
    const slide = rightRef.current;
    if (slide) {
      const items = slide.querySelectorAll<HTMLDivElement>(".item");
      if (items.length > 0) {
        slide.appendChild(items[0]);
        console.log("click");
      }
    }
  }

  function prev() {
    const slide = rightRef.current;
    if (slide) {
      const items = slide.querySelectorAll<HTMLDivElement>(".item");
      if (items.length > 0) {
        slide.prepend(items[items.length - 1]);
        console.log("click");
      }
    }
  }

  return (
    <>
      <div className="containerSlide w-full max-w-5xl h-582  overflow-hidden relative">
        <div ref={rightRef} className="slide">
          {/* slider 1 */}
          <div
            className="item  pl-6 pb-6 flex flex-col justify-end"
            style={{ backgroundImage: "url(https://i.imgur.com/qSXeZn7.png)" }}
          >
            <div className="containerName flex">
              <div className="nameProduct w-55 h-28 bg-white/90 flex flex-col justify-center items-center">
                <div className="description flex gap-2 font-medium text-zinc-500">
                  <p className="number">01</p> <p>----</p>{" "}
                  <p className="name">Bed Room</p>
                </div>

                <h2 className=" w-full typeProduct font-semibold text-3xl text-center">
                  Inner Peace
                </h2>
              </div>
              <button className="w-8 md:w-12 h-6 md:h-12 bg-titleOrange flex justify-center items-center self-end">
                <FaArrowRight className=" w-3 md:w-6 text-white" />
              </button>
            </div>
          </div>
          {/* slider 2 */}

          <div
            className="item  pl-6 pb-6 flex flex-col justify-end"
            style={{
              backgroundImage:
                "url(https://decoracao.biz/wp-content/uploads/2020/05/quarto-decorado-feminino-solteiro-5.jpg)",
            }}
          >
            <div className="containerName flex">
              <div className="nameProduct w-55 h-28 bg-white/90 flex flex-col justify-center items-center">
                <div className="description flex gap-2 font-medium text-zinc-500">
                  <p className="number">02</p> <p>----</p>{" "}
                  <p className="name">Bed Room</p>
                </div>

                <h2 className=" w-full typeProduct font-semibold text-3xl text-center">
                  Inner Peace
                </h2>
              </div>
              <button className="w-8 md:w-12 h-6 md:h-12 bg-titleOrange flex justify-center items-center self-end">
                <FaArrowRight className=" w-3 md:w-6 text-white" />
              </button>
            </div>
          </div>

          {/* slider 3 */}
          <div
            className="item   pl-6 pb-6 flex flex-col justify-end"
            style={{
              backgroundImage:
                "url(https://casaeconstrucao.vivadecora.com.br/wp-content/uploads/2017/08/quarto-decorado-pinterest-cinza.jpg)",
            }}
          >
            <div className="containerName flex">
              <div className="nameProduct w-55 h-28 bg-white/90 flex flex-col justify-center items-center">
                <div className="description flex gap-2 font-medium text-zinc-500">
                  <p className="number">03</p> <p>----</p>{" "}
                  <p className="name">Bed Room</p>
                </div>

                <h2 className=" w-full typeProduct font-semibold text-3xl text-center">
                  Pinterest cinza
                </h2>
              </div>
              <button className="w-8 md:w-12 h-6 md:h-12 bg-titleOrange flex justify-center items-center self-end">
                <FaArrowRight className=" w-3 md:w-6 text-white" />
              </button>
            </div>
          </div>

          {/* slider 4 */}
          <div
            className="item pl-6 pb-6 flex flex-col justify-end"
            style={{
              backgroundImage:
                "url(https://i.pinimg.com/originals/80/a5/d0/80a5d06995b63b03aeac380d904d7614.jpg)",
            }}
          >
            <div className="containerName flex">
              <div className="nameProduct w-55 h-28 bg-white/90 flex flex-col justify-center items-center">
                <div className="description flex gap-2 font-medium text-zinc-500">
                  <p className="number">04</p> <p>----</p>{" "}
                  <p className="name">Bed Room</p>
                </div>

                <h2 className=" w-full typeProduct font-semibold text-3xl text-center">
                  Inner Peace
                </h2>
              </div>
              <button className="w-8 sm:w-12 h-6 sm:h-12 bg-titleOrange flex justify-center items-center self-end">
                <FaArrowRight className=" w-3 sm:w-6 text-white" />
              </button>
            </div>
          </div>
        </div>
        <div className="buttons absolute top-64 w-full flex justify-between">
          <button
            onClick={() => prev()}
            className="prev left w-12 h-12 bg-white rounded-full flex justify-center items-center  cursor-pointer"
          >
            <FaArrowLeft className="text-titleOrange w-3 md:w-6 h-3 md:h-6" />
          </button>
          <button
            onClick={() => next()}
            className="next w-12 h-12 bg-white rounded-full flex justify-center items-center  cursor-pointer"
          >
            <FaArrowRight className="text-titleOrange w-3 md:w-6 h-3 md:h-6" />
          </button>
        </div>
      </div>
    </>
  );
}
