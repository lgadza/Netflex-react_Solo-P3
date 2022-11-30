import { Container } from "react-bootstrap";
import HerryPorter from "./HerryPorter";
import LordOfTheRings from "./LordOfTheRings";
import WhiteHouseDown from "./WhiteHouseDown";

const Home = () => {
  return (
    <div>
      <Container>
        <HerryPorter />
        <LordOfTheRings />
        <WhiteHouseDown />
      </Container>
    </div>
  );
};
export default Home;
