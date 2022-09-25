import { Route, Routes } from "react-router-dom";
import { HeaderLogin, Loader } from "../components";
import { HeaderRegister } from "../components/HeaderRegister";

import { useDispatch, useSelector } from "react-redux";

import PuffiApp from "../PuffiApp";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";
import { useEffect } from "react";

export const AppRouter = () => {
  const { status } = useSelector((state) => state.auth);

  const dispach = useDispatch();
  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispach(logout());
      const { uid, email, displayName, photoURL } = user;
      dispach(login({ uid, email, displayName, photoURL }));
    });
  }, []);

  if (status === "checking") {
    return <Loader />;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<PuffiApp />} />
        <Route path="/login" element={<HeaderLogin />} />
        <Route path="/register" element={<HeaderRegister />} />
      </Routes>
    </>
  );
};
