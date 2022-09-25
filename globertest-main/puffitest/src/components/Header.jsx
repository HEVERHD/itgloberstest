import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <div className="header_container">
      <Navbar />
      <div>
        <h1 className="animate__animated animate__fadeInTopRight">
          ESTÁR CÓMODO,
          <br />
          NUNCA FUE TAN FÁCIL.
        </h1>
      </div>
      <div className="buton_Container">
        <button type="buton">SHOP</button>
      </div>
    </div>
  );
};
