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
      <div className="grid gap-8 py-8 min-[840px]:mx-4 text-black justify-items-center content-center min-[840px]:grid-cols-3">
        <Card>
          <Data>18.05</Data>
          <ul class="steps steps-vertical  ">
            <li class=" step" data-content="">
              <p className="text-left ">
                <b>9:00 - 11:00</b> Turniej Tenisa Stołowego{" "}
              </p>
            </li>
            <li class="step" data-content="">
              <p className="text-left ">
                <b> 10:00 - 11:00</b> Rozgrywki finałowe Turnieju Mikstów
                Siatkarskich{" "}
              </p>
            </li>
            <li class="step" data-content="">
              <p className=" text-left ">
                <b>11:00</b> - Pokaz koła teatralnego UJD{" "}
              </p>
            </li>
            <li class="step" data-content="">
              <p className=" text-left ">
                <b>11:10</b> - Rozdanie nagród dla zwycięzców{" "}
              </p>
            </li>
            <li class="step" data-content="">
              <p className="text-left ">
                <b>11:30 - 13:00</b> Zabawa sprawnościowa dla trzyosobowych
                zespołów “Sprawni jak Ninja”, w której zostaną wyłonieni
                najsprawniejsi studenci
              </p>
            </li>
            <li class="step" data-content="">
              <p className="text-left ">
                <b>13:00</b> Turniej Bilardowy{" "}
              </p>
            </li>
            <li class="step" data-content="">
              <p className="text-left ">
                <b>21:00</b> Impreza w klubie Bristol z kocertem QBIKA
              </p>
            </li>
          </ul>
        </Card>
        <div className="Card__background h-fit w-fit min-[840px]:mt-20 ">
          <Data>19.05</Data>
          <p className="text-center font-italic font-bold text-2xl underline underline-offset-4 decoration-pink-500 uppercase ">
            start 15:00
          </p>
          <ul class="steps steps-vertical ">
            <li class="step" data-content="">
              <div class="dropdown dropdown-end">
                <label tabindex="0" class="">
                  <div className="inline-flex items-baseline">
                    <p className=" text-left text-xl">
                      Korowód studencki (ruszy spod parkingu przy rektoracie
                      PCz)
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        class="inline-flex h-4 w-4 stroke-current ml-2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </p>
                  </div>
                </label>
                <div
                  tabindex="0"
                  class="card compact dropdown-content shadow bg-purple-main rounded-box w-64"
                >
                  <div class="card-body">
                    <p className="text-white">
                      Korowód studencki to pochód studentów podczas którego
                      studenci przebrani w różnokolorowe stroje wspólnie
                      przemierzają ulice miasta, zatrzymując się przy
                      określonych punktach, takich jak ratusz, miejskie place
                      czy inne ważne lokalizacje. Korowody studenckie mają
                      charakter radosny i są pełne entuzjazmu.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li class="step" data-content="">
              <p className=" ">Uroczyste otwarcie oraz rozdanie nagród</p>
            </li>
            <li class="step" data-content="">
              <p className=" ">Przegląd kapel studenckich, grill</p>
            </li>
            <li class="step" data-content="">
              <p className="">BLAGA</p>
            </li>
            <li class="step" data-content="">
              <p className="">GRUBY MIELZKY</p>
            </li>
            <li class="step" data-content="">
              <p className="">PALUCH </p>
            </li>
            <li class="step" data-content="">
              <p className="">Afterparty z DJ Majki, FNZ, Climo </p>
            </li>
          </ul>
        </div>
        <Card>
          <Data>20.05</Data>
          <p className="text-center font-italic font-bold text-2xl underline underline-offset-4 decoration-pink-500 uppercase ">
            start 16:00
          </p>
          <ul class="steps steps-vertical">
            <li class="step" data-content="">
              <div class="dropdown dropdown-end">
                <label tabindex="0" class="">
                  <div className="inline-flex items-baseline">
                    <p className="text-2xl text-left">Gra miejska/Konkursy</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      class="w-4 h-4 ml-2 stroke-current inline-flex"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                </label>
                <div
                  tabindex="0"
                  class="card compact dropdown-content shadow bg-purple-main rounded-box w-64"
                >
                  <div class="card-body">
                    <p className="text-white">
                      <p className="font-bold">Gra miejska</p>
                      Gra miejska to rodzaj rozrywki, w której uczestnicy
                      rozwiązują zagadki i wykonują zadania w określonych
                      punktach na terenie miasta. Na juwenaliach drużyny będą
                      poruszać się po terenie kampusu Politechniki
                      Częstochowskiej oraz Uniwersytetu Jana Długosza.
                      <p className="font-bold">Konkursy</p>
                      Podczas imprezy zostaną zorganizowane różne konkursy gdzie
                      do wygrania będą nagrody ufundowane przez naszych
                      sponsorów.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li class="step" data-content="">
              <p className=" ">Ks. Jakub Bartczak</p>
            </li>
            <li class="step" data-content="">
              <p className=" ">LULU X UAZIUK</p>
            </li>
            <li class="step" data-content="">
              <p className="">RONNIE FERRARI</p>
            </li>
            <li class="step" data-content="">
              <p className="">ALCOHOLICA</p>
            </li>
            <li class="step" data-content="">
              <p className=" ">MARGARET </p>
            </li>
            <li class="step" data-content="">
              <p className=" ">Afterparty z DJ Barthezz Brain, Shyia </p>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Schedule;
