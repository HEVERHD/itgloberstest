import { Route, Routes } from "react-router-dom";
import { Login } from "../components/auth/components/Login";

import PuffiApp from "../PuffiApp";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PuffiApp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
