import { useState } from "react";
import Swal from "sweetalert2";

export function validate(input) {
  const error = {};
  if (!input.email) {
    error.email = "Por favor, escribe tu email";
  } else if (!/\S+@\S+\.\S+/.test(input.email)) {
    error.email = "formato de email inválido, por favor, revisar";
  }
  return error;
}

export const Form = () => {
  const [input, setInput] = useState({
    email: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleClick = (e) => {
    e.preventDefault();
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    if (input.email === "" || Object.entries(errors).length > 0) {
      Swal.fire({
        title: "Error",
        text: "Por favor, completa el formulario",
        icon: "error",
        timer: 1000,
      });
      return;
    } else if (Object.entries(errors).length === 0) {
      Swal.fire({
        text: "!Felicidades! Te inscribiste correctamente",
        icon: "success",
        timer: 2000,
      });
      setInput({
        email: "",
      });
    }
  };

  return (
    <form>
      <div>
        <input
          onChange={handleInputChange}
          type="text"
          name="email"
          placeholder="ingresa tu email"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-right"
          viewBox="0 0 16 16"
          onClick={handleClick}
        >
          <path
            fillRule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
          />
        </svg>
        <div>
          {errors.email && (
            <h3 className="error_form animate__animated animate__flash">
              {" "}
              {errors.email}{" "}
            </h3>
          )}{" "}
        </div>
      </div>
    </form>
  );
};
