import "./App.css";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from "./components/MyFooter";
import LordOfTheRings from "./components/LordOfTheRings";
import HerryPorter from "./components/HerryPorter";
import WhiteHouseDown from "./components/WhiteHouseDown";
import ProfilPage from "./components/ProfilePage";
// import logo from "..//assets/netflix_logo.png";

function App() {
  return (
    <div className="App ">
      <MyNavbar />
      {/* <MovieList /> */}
      <LordOfTheRings />
      <HerryPorter />
      <WhiteHouseDown />
      <MyFooter />
      <ProfilPage />
    </div>
  );
}

export default App;
