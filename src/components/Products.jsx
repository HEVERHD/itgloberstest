import pufiUmbrella from "../assets/img_productos/pufi_umbrella.jpg";
import pufiBeach from "../assets/img_productos/pufi_beach.jpg";
import pufiPurple from "../assets/img_productos/pufi_purple.jpg";
import pufiCart from "../assets/img_productos/pufi_cart.jpg";
import pufiBag from "../assets/img_productos/pufi_bag.jpg";
import pufiPillow from "../assets/img_productos/pufi_pillow.jpg";
import pufiNap from "../assets/img_productos/pufi_nap.jpg";

export const Products = () => {
  return (
    <section className="section_container">
      {/* Product 1 */}
      <article className="umbrella_img1">
        <div className="button_umbrella">
          <button>SHOP</button>
        </div>
      </article>
      {/* Product 2 */}
      <article className="pufi">
        <img className="img2" src={pufiUmbrella} alt="pufi_umbrella" />
        <h3>Pufi RAIN</h3>
        <hr className="hr" />
        <p>
          Descripción del producto. Este es <br /> un texto simulado
        </p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-caret-left-fill"
          viewBox="0 0 16 16"
        >
          <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
        </svg>

        <div className="img_ver_mas">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
          <p> VER MAS </p>
        </div>
      </article>
      {/* Product 3 */}

      <article className="pufi">
        <img className="img2" src={pufiPurple} alt="pufi_Purple" />
        <h3>Pufi PUFF</h3>
        <hr className="hr" />
        <p>
          Descripción del producto. Este es <br /> un texto simulado
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-caret-right-fill"
          viewBox="0 0 16 16"
        >
          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
        </svg>
        <div className="img_ver_mas">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
          <p> VER MAS </p>
        </div>
      </article>

      <article>
        <img src={pufiBeach} alt="Pufi_Beach" className="img_beach" />
      </article>

      {/* Product 4 */}

      <article>
        <img src={pufiCart} alt="pufi_Cart" className="img_beach" />
      </article>

      <article className="pufi">
        <img className="img2" src={pufiBag} alt="pufi_bag" />
        <h3>Pufi CART</h3>
        <hr className="hr" />
        <p>
          Descripción del producto. Este es <br /> un texto simulado
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-caret-left-fill"
          viewBox="0 0 16 16"
        >
          <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
        </svg>
        <div className="icono_mayorQue"></div>
        <div className="img_ver_mas">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
          <p> VER MAS </p>
        </div>
      </article>

      <article className="pufi">
        <img className="img2" src={pufiPillow} alt="pufi_Pillow" />
        <h3>Pufi NAP</h3>
        <hr className="hr" />
        <p>
          Descripción del producto. Este es <br /> un texto simulado
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-caret-right-fill"
          viewBox="0 0 16 16"
        >
          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
        </svg>
        <div className="img_ver_mas">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
          <p> VER MAS </p>
        </div>
      </article>
      <article>
        <img src={pufiNap} alt="Pufi_Nap" className="img_beach" />
      </article>
    </section>
  );
};
