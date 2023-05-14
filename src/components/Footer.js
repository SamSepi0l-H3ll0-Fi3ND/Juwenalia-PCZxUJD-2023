import mail from "../components/logos/mail.png";
import linkedin from "../components/logos/linkedin.png";
const Footer = () => {
  return (
    <div className="max-[840px]:text-xl text-2xl font-semibold text-black Footer__background  text-center py-6 ">
      <div className="flex items-stretch w-full gap-4">
        <hr className="border-purple-main w-1/3  self-center  "></hr>
        <div className="inline-flex">
          <div className="min-[840px]:flex ">
            <div className=" text-justify text-purple-main whitespace-nowrap tracking-wider ">
              Created & designed by
            </div>
            <div className="text-justify text-purple-main whitespace-nowrap tracking-wider ">
              &nbsp; Jakub Figzał ®2023
            </div>
          </div>
          <div className="flex whitespace-nowrap w-12 ml-2">
            <div
              className="cursor-pointer flex flex-nowrap"
              onClick={() =>
                (window.location.href = "mailto:kubafigzal@gmail.com")
              }
            >
            
              <img
                src={mail}
                alt="mail"
                className=" self-center cursor-pointer"
              />
            </div>
            <div
              className="cursor-pointer flex flex-nowrap ml-2"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/jakub-figza%C5%82-2875ab272/"
                )
              }
            >
            
              <img
                src={linkedin}
                alt="mail"
                className="self-center inline-flex "
              />
            </div>
          </div>
        </div>
        <hr className="border-purple-main w-1/3 self-center"></hr>
      </div>
    </div>
  );
};

export default Footer;
