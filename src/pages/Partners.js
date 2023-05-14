import organizatorzy from "../components/Loga/organizatorzy.png";
import PatroniHonorowi from "../components/Loga/PatroniHonorowi.png";
import PartnerGlowny from "../components/Loga/PartnerGlowny.png";
import PatroniMedialni from "../components/Loga/PatroniMedialni.png";
import Partnerzy from "../components/Loga/Partnerzy.png";
import Sponsorzy from "../components/Loga/Sponsorzy.png";
const Partners = (props) => {
  return (
    <div className="Partners__background w-full h-screen">
      <div className="flex">
        <p
          className="bg-purple-main text-white drop-shadow-xl m-8 text-6xl -rotate-12 min-[400px]:m-8 px-4 py-4 max-[400px]:text-4xl"
          id="partnerzy"
        >
          Partnerzy <br></br> wydarzenia
        </p>
      </div>
      <div className="carousel max-[580px]:scale-90 max-[840px]:carousel-vertical max-[840px]:h-1/2 rounded-box min-[840px]:mt-24 gap-2">
        <div className="carousel-item  min-[840px]:w-1/2 h-1/2 ">
          <img src={organizatorzy} alt="Organizatorzy" className="rounded-box " />
        </div>
        <div className="carousel-item  min-[840px]:w-1/2 h-1/2 ">
          <img
            src={PatroniHonorowi}
            alt="Patroni honorowi"
            className="rounded-box "
          />
        </div>
        <div className="carousel-item   min-[840px]:w-1/2 h-1/2">
          <img src={PartnerGlowny} alt="Partnet główny" className="rounded-box " />
        </div>
        <div className="carousel-item  min-[840px]:w-1/2 h-1/2">
          <img
            src={PatroniMedialni}
            alt="Patroni medialni"
            className="rounded-box"
          />
        </div>
        <div class="carousel-item  min-[840px]:w-1/2 h-1/2">
          <img src={Partnerzy} alt="partnerzy" className="rounded-box" />
        </div>
        <div class="carousel-item  min-[840px]:w-1/2 h-1/2">
          <img src={Sponsorzy} alt="sposorzy" className="rounded-box" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
