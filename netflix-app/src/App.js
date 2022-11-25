import "./App.css";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/MovieList";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div className="App ">
      <MyNavbar />
      {/* <MovieList /> */}
      <MyFooter />
    </div>
  );
}

export default App;
