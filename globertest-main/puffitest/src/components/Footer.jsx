import pufiFooter from "../assets/img_logo/puffi_footer.jpg";
import img_compra from "../assets/img_logo/compra_segura.png";
import facebook from "../assets/img_redes/facebook.png";
import instagram from "../assets/img_redes/instagram.png";
import twitter from "../assets/img_redes/twitter.png";

export const Footer = () => {
  return (
    <section className="footer_container">
      <div className="footer_logo">
        <img src={pufiFooter} alt="" />
      </div>
      <div className="line">
        <h5>PUFI RAIN</h5>
        <h5>PUFI PUFF</h5>
        <h5>PUFI CART</h5>
        <h5>PUFI NAP</h5>
      </div>
      <div>
        <h5>CONTACTO</h5>
        <h5>AYUDA</h5>
        <h5>CÓMO COMPRAR</h5>
        <h5>TÉRMINOS & CONDICIONES</h5>
      </div>
      <div>
        <h5>COMPRA 100% SEGURA</h5>
        <div className="compras">
          <img className="img_compra" src={img_compra} alt="img_compra" />
          <h5>
            COMPRA CON <br /> LA GARANTIA <br />
            DE PUFI
          </h5>
        </div>

        <div className="redes_sociales">
          <h5>SEGUINOS EN</h5>
          <a
            href="https://www.facebook.com/profile.php?id=100019097958018"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="img_redes" src={facebook} alt="" />
          </a>
          <a
            href="https://www.instagram.com/lorrainetest/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="img_redes" src={instagram} alt="" />
          </a>
          <a
            href="https://twitter.com/abc_tecnologia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="img_redes" src={twitter} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};
