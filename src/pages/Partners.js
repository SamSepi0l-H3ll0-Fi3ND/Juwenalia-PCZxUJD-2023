import zf from "../components/Loga/zf.png";
import alpakarnia from "../components/Loga/aplakarnia.jpg";
import dombud from "../components/Loga/dombud.jpg";
import domtajemnic from "../components/Loga/domtajemnic.jpg";
import gazetaczest from "../components/Loga/gazetaczest.jpg";
import gminaklomnice from "../components/Loga/gminaklomnice.jpg";
import hegelmann from "../components/Loga/hegelmann.jpg";
import filharmonia from "../components/Loga/filharmonia.png";
import funplay from "../components/Loga/fun&play.png";
import illegal from "../components/Loga/illegal.png";
import gj from "../components/Loga/gj.png";
import laserhouse from "../components/Loga/laserhouse.png";
import mbank from "../components/Loga/mbank.png";
import pcz from "../components/Loga/pcz.png";
import radiojura from "../components/Loga/radiojura.png";
import pizzahut from "../components/Loga/pizzahut.svg";
import teatram from "../components/Loga/teatram.png";
import rks from "../components/Loga/rks.png";
import ramano from "../components/Loga/ramano.png";
import vean from "../components/Loga/vean.png";
import zarelko from "../components/Loga/zarelko.png";
import stacjagrawitacja from "../components/Loga/stacjagrawitacja.jpg";
import hulakula from "../components/Loga/hulakula.jpg";
import scout from "../components/Loga/scout.jpg";
import nitrex from "../components/Loga/nitrex.jpg";
import sgp from "../components/Loga/sgp.jpg";
import styx from "../components/Loga/styx.jpg";
import sunwilo from "../components/Loga/sunwilo.jpg";
import taurus from "../components/Loga/taurus.jpg";
import wkretmet from "../components/Loga/wkret-met.jpg";
import zycie from "../components/Loga/zycie.jpg";
import zlotearkady from "../components/Loga/zlotearkady.jpg";
import panl from "../components/Loga/panl.webp";
import radomsko from "../components/Loga/radomsko.webp";
import twojapolskstacja from "../components/Loga/twojapolskstacja.webp";
import UJD from "../components/Loga/SamorzadUJD.png";
import Uniwersytet from "../components/Loga/Uniwersytet.png";
import UberEats from "../components/Loga/UberEats.png";
import St from "../components/Loga/St.png";
import bristol from "../components/Loga/bristol.png";
import patronat_rektor from "../components/Loga/patronat_rektor.png";
import prezydent from "../components/Loga/prezydent.jpg";
import patronatUJD from "../components/Loga/PatronatUJD.png";

const Partners = (props) => {
  return (
    <div className="Partners__background w-full h-fit">
      <div className="flex">
        <p
          className="bg-purple-main text-white drop-shadow-xl m-8 text-6xl -rotate-12 min-[400px]:m-8 px-4 py-4 max-[400px]:text-4xl"
          id="partnerzy"
        >
          Partnerzy <br></br> wydarzenia
        </p>
      </div>
      <p className="text-black text-2xl italic font-semibold mb-8">
        Oragnizatorzy:
      </p>
      <div>
        <img src={pcz} alt="pcz" className="h-full " />
        <div className=" flex flex-nowrap">
          <img
            src={Uniwersytet}
            alt="Uniwersytet"
            className=" w-1/3 h-auto max-[840px]:w-1/4 lg:w-3/12 "
          />
          <img src={UJD} alt="UJD" className="w-2/12" />
        </div>
        <p className="text-black text-2xl italic font-semibold">
          Sponsor główny:
        </p>
        <img
          src={bristol}
          alt="bristol"
          className=" w-full min-[840px]:w-1/3 "
        />
        <p className="text-black text-2xl italic font-semibold">
          Patroni honorowi:
        </p>
        <div className="flex flex-nowrap">
          <img
            src={prezydent}
            alt="patronat_rektor"
            className=" w-full min-[840px]:w-1/3 "
          />
          <img
            src={patronat_rektor}
            alt="patronat_rektor"
            className=" w-full min-[840px]:w-1/3 "
          />
          <img
            src={radomsko}
            alt="radomsko"
            className="w-1/4 h-1/4 max-[840px]:w-1/3"
          />
        </div>
        <img
          src={patronatUJD}
          alt="radomsko"
          className="w-1/4 h-1/4 max-[840px]:w-1/3"
        />
      </div>
      <p className="text-black text-2xl italic font-semibold">
        Patroni medialni:
      </p>
      <div className="flex flex-wrap">
        <img
          src={zycie}
          alt="zycie"
          className="w-1/12 h-1/2 max-[840px]:w-1/3"
        />
        <img
          src={gazetaczest}
          alt="gazetaczest"
          className="w-1/12 h-1/2 max-[840px]:w-1/3"
        />
        <img
          src={radiojura}
          alt="radiojura"
          className="w-1/12 h-1/2 max-[840px]:w-1/3"
        />
        <img
          src={twojapolskstacja}
          alt="twojapolskstacja"
          className="w-1/12 h-1/2 max-[840px]:w-1/3"
        />
      </div>
      <p className="text-black text-2xl italic font-semibold">Partnerzy:</p>
      <img
        src={nitrex}
        alt="nitrex"
        className="w-1/12 h-1/2 max-[840px]:w-1/3"
      />
      <img
        src={illegal}
        alt="sunwilo"
        className="w-1/12 h-1/2 max-[840px]:w-1/3"
      />
      <img src={styx} alt="styx" className="w-1/12 h-1/2 max-[840px]:w-1/3" />
      <img
        src={funplay}
        alt="funplay"
        className="w-1/12 h-1/2 max-[840px]:w-1/3"
      />
      <div class="carousel w-full">
  <div id="item1" class="carousel-item w-full">
    <img src={rks} class="w-1/2" />
  </div> 
  <div id="item2" class="carousel-item w-full">
    <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" class="w-full" />
  </div> 
  <div id="item3" class="carousel-item w-full">
    <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" class="w-full" />
  </div> 
  <div id="item4" class="carousel-item w-full">
    <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" class="w-full" />
  </div>
</div> 
<div class="flex justify-center w-full py-2 gap-2">
  <a href="#item1" class="btn btn-xs">1</a> 
  <a href="#item2" class="btn btn-xs">2</a> 
  <a href="#item3" class="btn btn-xs">3</a> 
  <a href="#item4" class="btn btn-xs">4</a>
</div>
      <p className="text-black text-2xl italic font-semibold">Sponsorzy:</p>
      <div className="flex flex-wrap ">
        <img src={vean} alt="vean" className="w-1/12 h-1/2 max-[840px]:w-1/3" />
        <img
          src={wkretmet}
          alt="zf"
          className="w-1/12 h-1/2 max-[840px]:w-1/3"
        />
        <img
          src={sunwilo}
          alt="illegal"
          className="w-1/12 h-1/2 max-[840px]:w-1/3"
        />
        <img src={sgp} alt="sgp" className="w-1/12 h-1/2 max-[840px]:w-1/3" />
        <img
          src={mbank}
          alt="mbank"
          className="w-1/12 h-1/2 max-[840px]:w-1/3"
        />
        <img
          src={hegelmann}
          alt="hegelmann"
          className="w-1/12 h-1/2 max-[840px]:w-1/3"
        />
        <img
          src={pizzahut}
          alt="pizzahut"
          className="w-1/12 h-1/2 max-[840px]:w-1/3"
        />
        <img
          src={dombud}
          alt="dombud"
          className="w-1/12 h-1/2 max-[840px]:w-1/3"
        />
        <img src={gj} alt="gj" className="w-1/12 h-1/2 max-[840px]:w-1/3" />
        <img src={rks} alt="rks" className="w-20 h-1/2 max-[840px]:w-1/3" />
        <img
          src={alpakarnia}
          alt="alpakarnia"
          className="w-1/12 h-1/2 max-[840px]:w-1/3"
        />
       
        <img
          src={domtajemnic}
          alt="domtajemnic"
          className="w-1/12 h-1/2 max-[840px]:w-1/3"
        />
         <img
          src={UberEats}
          alt="zycie"
          className="w-12 h-1/2 max-[840px]:w-1/3"
        />
        <img
          src={zlotearkady}
          alt="filharmonia"
          className="w-1/12 h-1/2 max-[840px]:w-1/3"
        />

        <img
          src={gminaklomnice}
          alt="gminaklomnice"
          className="w-1/12 h-1/2 max-[840px]:w-1/3"
        />
        <img
          src={hulakula}
          alt="hulakula"
          className="w-1/12 h-1/2 max-[840px]:w-1/3"
        />

        <img
          src={laserhouse}
          alt="laserhouse"
          className="w-1/12 h-1/2 max-[840px]:w-1/3"
        />

        <img src={panl} alt="panl" className="w-16 h-1/2 max-[840px]:w-1/3" />

        <img
          src={ramano}
          alt="ramano"
          className="w-20 h-1/2 max-[840px]:w-1/3"
        />

        <img
          src={scout}
          alt="scout"
          className="w-1/12 h-1/2 max-[840px]:w-1/3"
        />

        <img
          src={stacjagrawitacja}
          alt="stacjagrawitacja"
          className="w-1/12 h-1/2 max-[840px]:w-1/3"
        />

        <img src={teatram} alt="teatram" className="w-14" />

        <img
          src={zf}
          alt="wkretmet"
          className="w-20 h-1/2 max-[840px]:w-1/3"
        />
        <img
          src={zarelko}
          alt="zarelko"
          className="w-20 h-1/2 max-[840px]:w-1/3"
        />
        <img
          src={filharmonia}
          alt="zlotearkady"
          className="w-1/12 h-1/2 max-[840px]:w-1/3"
        />
        
        <img
          src={taurus}
          alt="zycie"
          className="w-1/12 h-1/2 max-[840px]:w-1/3"
        />
        <img src={St} alt="zycie" className="w-1/12 h-1/2 max-[840px]:w-1/3" />
      </div>
    </div>
  );
};

export default Partners;
