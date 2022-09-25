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
        </div>
      </div>
      <div className="redes_sociales">
        <h5>SEGUINOS EN</h5>

        <img className="img_redes" src={facebook} alt="" />

        <img className="img_redes" src={instagram} alt="" />

        <img className="img_redes" src={twitter} alt="" />
      </div>
    </section>
  );
};
