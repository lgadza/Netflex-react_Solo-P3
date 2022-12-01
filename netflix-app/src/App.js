import "./App.css";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from "./components/MyFooter";
import LordOfTheRings from "./components/LordOfTheRings";
import HerryPorter from "./components/HerryPorter";
import WhiteHouseDown from "./components/WhiteHouseDown";
import ProfilPage from "./components/ProfilePage";
import { propTypes } from "react-bootstrap/esm/Image";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TvShows from "./components/TvShows";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import MovieDatails from "./components/MovieDetails";
// import logo from "..//assets/netflix_logo.png";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App ">
        <MyNavbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<TvShows />} path="/tv-shows" />
          <Route element={<ProfilPage />} path="/profile" />
          <Route element={<MovieDatails />} path="/details/:movieId" />
          <Route element={<NotFound />} path="*" />
        </Routes>
        {/* <MovieDatails path="/details/:movieId" /> */}
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
