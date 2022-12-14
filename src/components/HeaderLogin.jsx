import { Navbar } from "./Navbar";

import { startGoogleSignIn, startLoginWithEmailPassword } from "../store/auth";

import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { useMemo } from "react";

export const HeaderLogin = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);
  const authenticated = useMemo(() => status === "authenticated", [status]);

  const onGoogleSignIn = () => {
    console.log("google sing in");
    dispatch(startGoogleSignIn());
  };

  //iniciar cuenta normal
  const onSubmit = (event) => {
    // eslint-disable-next-line no-lone-blocks
    event.preventDefault();

    // console.log({ email, password })
    dispatch(startLoginWithEmailPassword({ email, password }));
  };
  return (
    <>
      {authenticated && <Navigate to="/" />}
      <div className="header_container">
        <Navbar />
        <div className="main ">
          <div className="sub-main animate__animated animate__fadeIn">
            <div onSubmit={onSubmit}>
              <div>
                <h1 className="title_login">Login</h1>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                  </svg>
                  <input type="text" placeholder="user name" className="name" />
                </div>
                <div className="second-input">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-key"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                    <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                  </svg>
                  <input
                    type="password"
                    placeholder="user name"
                    className="name"
                  />
                </div>
                <div className="login-button">
                  <button>Login</button>
                  <button onClick={onGoogleSignIn} className="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-google"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                    </svg>
                  </button>
                </div>

                <p className="link">
                  <Link className="text_baj" to="/register">
                    create one accont
                  </Link>{" "}
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
