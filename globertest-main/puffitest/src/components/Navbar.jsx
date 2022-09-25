import puffi from "../assets/img_nav/puffi.png";
import puffirain from "../assets/img_nav/puffi_rain.png";
import pufficart from "../assets/img_nav/puffi_cart.png";
import puffinap from "../assets/img_nav/puffi_nap.png";
import puffiPuff from "../assets/img_nav/puffi_puff.png";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMemo } from "react";

export const Navbar = () => {
  const { displayName, status } = useSelector((state) => state.auth);

  const authenticated = useMemo(() => status === "authenticated", [status]);

  return (
    <div className=" navbar_container ">
      <Link to="/">
        <img className="img_logo" src={puffi} alt="puffi" />
      </Link>
      <ul>
        <li>
          <a to="/" className="product_navbar">
            <img className="img_nav" src={puffiPuff} alt="img_Navbar" />
            PUFI PUFF
          </a>
        </li>
        <li>
          <a to="#">
            <img className="img_nav" src={puffirain} alt="img_Navbar" />
            PUFI RAIN
          </a>
        </li>
        <li>
          <a to="#">
            <img className="img_nav" src={pufficart} alt="img_Navbar" />
            PUFI CART
          </a>
        </li>
        <li>
          <a to="#">
            <img className="img_nav" src={puffinap} alt="img_Navbar" />
            PUFI NAP
          </a>
        </li>
      </ul>
      <div className="user">
        {/* {authenticated && <p>HOLA &nbsp; {displayName.toUpperCase()}</p>} */}

        {status === "authenticated" ? (
          <p>HOLA &nbsp; {displayName.toUpperCase().substring(0, 7)}</p>
        ) : (
          <Link to="/login">
            <button>MI CUENTA</button>
          </Link>
        )}

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
        <button className="button">MI COMPRA</button>
      </div>
    </div>
  );
};
