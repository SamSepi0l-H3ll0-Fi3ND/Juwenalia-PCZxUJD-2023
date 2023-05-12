import React from "react";
import map from "../components/logos/Map.svg";
import CardMap from "../UI/CardMap";
import Number from "../UI/Number";

const EventMap = () => {
  return (
    <div className="Main__background-img w-full h-fit" id="mapa">
      <div className="flex">
        <p className="bg-purple-main text-white drop-shadow-xl m-8 text-6xl -rotate-12 min-[400px]:m-8 px-4 py-4 max-[400px]:text-4xl">
          Mapa <br></br> wydarzenia
        </p>
      </div>
      <div className="  flex flex-nowrap max-[840px]:flex-wrap md:mx-6">
        <div className="w-full max-[400px]:mt-8 mt-4 mb-4" >
          <img src={map} alt="map" />
        </div>
        <CardMap>
          <div className="flex flex-nowrap mt-4 ml-4">
            <Number>01</Number>
            <p className="self-center text-white min-[400px]:text-3xl ml-4 sm:text-thin">
              Ogródek piwny
            </p>
          </div>
          <div className="flex flex-nowrap mt-4 ml-4">
            <Number>02</Number>
            <p className="self-center text-white min-[400px]:text-3xl ml-4 ">
              Wesołe miasteczko i atrakcje od sponsorów
            </p>
          </div>
          <div className="flex flex-nowrap mt-4 ml-4">
            <Number>03</Number>
            <p className="self-center text-white min-[400px]:text-3xl ml-4 ">
              Scena
            </p>
          </div>
          <div className="flex flex-nowrap my-4 ml-4">
            <Number>04</Number>
            <p className="self-center text-white min-[400px]:text-3xl ml-4">
              Strefa imprezy masowej
            </p>
          </div>
        </CardMap>
      </div>
    </div>
  );
};

export default EventMap;
