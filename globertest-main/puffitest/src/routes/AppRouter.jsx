import { Route, Routes } from "react-router-dom";
import { HeaderLogin } from "../components";
import { HeaderRegister } from "../components/HeaderRegister";

import PuffiApp from "../PuffiApp";

export const AppRouter = () => {
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
