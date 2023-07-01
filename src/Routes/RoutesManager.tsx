import HomeController from "../Screens/Home/Home";
import { Routes, Route } from "react-router-dom";

const RoutesManager = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeController />} />
      <Route path="detail">
        <Route path=":infoID" element={<HomeController />} />
      </Route>
    </Routes>
  );
};

export default RoutesManager;
