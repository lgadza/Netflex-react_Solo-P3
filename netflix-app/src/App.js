import "./App.css";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/MovieList";
import MyFooter from "./components/MyFooter";
import LordOfTheRings from "./components/LordOfTheRings";
import HerryPorter from "./components/HerryPorter";
import WhiteHouseDown from "./components/WhiteHouseDown";

function App() {
  return (
    <div className="App ">
      <MyNavbar />
      {/* <MovieList /> */}
      <LordOfTheRings />
      <HerryPorter />
      <WhiteHouseDown />
      <MyFooter />
    </div>
  );
}

export default App;
