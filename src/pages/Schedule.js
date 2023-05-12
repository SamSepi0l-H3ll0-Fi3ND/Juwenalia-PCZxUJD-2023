import React from "react";
import Card from "../UI/Card";
import Data from "../UI/Data";

const Schedule = (props) => {
  return (
    <div id="agenda" className="Schedule__background-img h-full pt-8 ">
      <div className="text-center">
        <p
          data-aos="fade-up"
          className="font-semibold text-pink-600 tracking-widest inline-flex p-2 bg-gradient-to-r from-indigo-500 to-[#6365f149] mb-8 rounded-2xl text-2xl md:text-4xl xl:text-5xl "
        >
          Harmonogram imprezy
        </p>
      </div>
      <div className="grid gap-8 py-8 text-black justify-items-center content-center min-[840px]:grid-cols-3">
        <Card>
          <Data>18.05</Data>
          <ul class="steps steps-vertical ">
            <li class=" step" data-content="">
              <p className="text-left">
                <b>9:00 - 11:00</b> Turniej Tenisa Stołowego{" "}
              </p>
            </li>
            <li class="step" data-content="">
              <p className=" text-left">
                <b> 10:00 - 11:00</b> rozgrywki finałowe Turnieju Mikstów
                Siatkarskich{" "}
              </p>
            </li>
            <li class="step" data-content="">
              <p className=" text-left">
                <b>11:00</b> - pokaz koła teatralnego UJD{" "}
              </p>
            </li>
            <li class="step" data-content="">
              <p className=" text-left">
                <b>11:10</b> - rozdanie nagród dla zwycięzców{" "}
              </p>
            </li>
            <li class="step" data-content="">
              <p className="text-left">
                <b>11:30 - 13:00</b> zabawa sprawnościowa dla trzyosobowych
                zespołów “Sprawni jak Ninja”, w której zostaną wyłonieni
                najsprawniejsistudenci
              </p>
            </li>
            <li class="step" data-content="">
              <p className="text-left">
                <b>13:00</b> Turniej Bilardowy{" "}
              </p>
            </li>
          </ul>
        </Card>
        <div className="Card__background h-fit w-fit min-[840px]:mt-20 xl:w-10/12">
          <Data>19.05</Data>
          <ul class="steps steps-vertical">
            <li class=" step" data-content="">
              <p className="font- text-left">
                9:00 - 11:00 Turniej Tenisa Stołowego
              </p>
            </li>
            <li class="step" data-content="">
              <p className="font text-left">
                10:00 - 11:00 rozgrywki finałowe Turnieju Mikstów Siatkarskich
              </p>
            </li>
            <li class="step" data-content="">
              <p className="font- text-left">
                11:00 - pokaz koła teatralnego UJD
              </p>
            </li>
            <li class="step" data-content="">
              <p className="font- text-left">
                11:10 - rozdanie nagród dla zwycięzców
              </p>
            </li>
            <li class="step" data-content="">
              <p className="font- text-left">
                11:30 - 13:00 zabawa sprawnościowa dla trzyosobowych zespołów
                “Sprawni jak Ninja”, w której zostaną wyłonieni
                najsprawniejsistudenci
              </p>
            </li>
            <li class="step" data-content="">
              <p className="font- text-left">13:00 Turniej Bilardowy </p>
            </li>
          </ul>
        </div>
        <Card>
          <Data>20.05</Data>
          <ul class="steps steps-vertical">
            <li class=" step" data-content="">
              <p className="font- text-left">
                9:00 - 11:00 Turniej Tenisa Stołowego{" "}
              </p>
            </li>
            <li class="step" data-content="">
              <p className="font- text-left">
                10:00 - 11:00 rozgrywki finałowe Turnieju Mikstów Siatkarskich{" "}
              </p>
            </li>
            <li class="step" data-content="">
              <p className="font- text-left">
                11:00 - pokaz koła teatralnego UJD{" "}
              </p>
            </li>
            <li class="step" data-content="">
              <p className="font- text-left">
                11:10 - rozdanie nagród dla zwycięzców{" "}
              </p>
            </li>
            <li class="step" data-content="">
              <p className="font- text-left">
                11:30 - 13:00 zabawa sprawnościowa dla trzyosobowych zespołów
                “Sprawni jak Ninja”, w której zostaną wyłonieni
                najsprawniejsistudenci
              </p>
            </li>
            <li class="step" data-content="">
              <p className="font- text-left">13:00 Turniej Bilardowy </p>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Schedule;
