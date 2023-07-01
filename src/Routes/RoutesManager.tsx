import HomeController from "../Screens/Home/Home";
import { Routes, Route } from "react-router-dom";
import MovieInfo from "../Screens/MovieInfo/MovieInfo";

const RoutesManager = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeController />} />
      <Route path="detail">
        <Route path=":infoID" element={<MovieInfo movieId="1" />} />
      </Route>
    </Routes>
  );
};

export default RoutesManager;
