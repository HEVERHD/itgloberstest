import puffi from "../assets/img_nav/puffi.png";
import puffirain from "../assets/img_nav/puffi_rain.png";
import pufficart from "../assets/img_nav/puffi_cart.png";
import puffinap from "../assets/img_nav/puffi_nap.png";
import puffiPuff from "../assets/img_nav/puffi_puff.png";

import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <div className=" navbar_container ">
      <img className="img_logo" src={puffi} alt="puffi" />
      <ul>
        <li>
          <Link to="#" className="product_navbar">
            <img className="img_nav" src={puffiPuff} alt="img_Navbar" />
            PUFI PUFF
          </Link>
        </li>
        <li>
          <Link to="#">
            <img className="img_nav" src={puffirain} alt="img_Navbar" />
            PUFI RAIN
          </Link>
        </li>
        <li>
          <Link to="#">
            <img className="img_nav" src={pufficart} alt="img_Navbar" />
            PUFI CART
          </Link>
        </li>
        <li>
          <Link to="#">
            <img className="img_nav" src={puffinap} alt="img_Navbar" />
            PUFI NAP
          </Link>
        </li>
      </ul>
      <div className="user">
        <button>MI CUENTA</button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="currentColor"
          className="bi bi-chevron-down"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
        <span className="line_vertical"> </span>
        <button>MI COMPRA</button>
      </div>
    </div>
  );
};
