import puffi from "../assets/img_nav/puffi.png";
import puffirain from "../assets/img_nav/puffi_rain.png";
import pufficart from "../assets/img_nav/puffi_cart.png";
import puffinap from "../assets/img_nav/puffi_nap.png";
import puffiPuff from "../assets/img_nav/puffi_puff.png";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { startLogout } from "../store/auth";

export const Navbar = () => {
  const { displayName, status } = useSelector((state) => state.auth);
  const authenticated = useMemo(() => status === "authenticated", [status]);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogout());
  };

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

        {status === "authenticated" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-escape"
            viewBox="0 0 16 16"
            onClick={onLogout}
          >
            <path d="M8.538 1.02a.5.5 0 1 0-.076.998 6 6 0 1 1-6.445 6.444.5.5 0 0 0-.997.076A7 7 0 1 0 8.538 1.02Z" />
            <path d="M7.096 7.828a.5.5 0 0 0 .707-.707L2.707 2.025h2.768a.5.5 0 1 0 0-1H1.5a.5.5 0 0 0-.5.5V5.5a.5.5 0 0 0 1 0V2.732l5.096 5.096Z" />
          </svg>
        ) : (
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
        )}

        <span className="line_vertical"> </span>
        <button className="button">MI COMPRA</button>
      </div>
    </div>
  );
};
