import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = (props) => {
  return (
    <div className="navbar min-[599px]:bg-gradient-to-r from-[#3d3d3d88] via-[#000000dc] to-[#ffffff00]}">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabindex="0"
            className="btn bg-[#6450F8] border-none min-[600px]:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#6450f8] text-white text-xl rounded-box w-52"
          >
            <li>
              <AnchorLink href="#mapa">Mapa</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#agenda">Agenda</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#partnerzy">Partnerzy</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#kontakt">Kontakt</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#regulamin">Regulamin</AnchorLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center text-white  ">
        <ul className="flex min-[320px]:text-center max-[600px]:hidden space-x-2 md:space-x-4 lg:space-x-16 ">
          <li className=" text-center text-xl md:text-2xl lg:text-3xl">
            <AnchorLink href="#mapa">Mapa</AnchorLink>
          </li>
          <li className=" text-center text-xl md:text-2xl lg:text-3xl">
            <AnchorLink href="#agenda">Agenda</AnchorLink>
          </li>
          <li className=" text-center text-xl md:text-2xl lg:text-3xl">
            <AnchorLink href="#partnerzy">Partnerzy</AnchorLink>
          </li>
          <li className="text-center text-xl md:text-2xl lg:text-3xl">
            <AnchorLink href="#kontakt">Kontakt</AnchorLink>
          </li>
          <li className="text-center text-xl md:text-2xl lg:text-3xl">
            <AnchorLink href="#regulamin">Regulamin</AnchorLink>
          </li>
        </ul>
      </div>
      <div class="navbar-end"></div>
    </div>
  );
};

export default Navbar;
