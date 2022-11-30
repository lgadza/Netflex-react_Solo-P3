import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import SingleMovie from "./SingleMovie";

const HerryPorter = () => {
  // state = {
  //   movies: [],
  //   isLoading: true,
  //   isError: false,
  // };
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const fetchAction = async () => {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=6adf6eb5&s=harry%20potter"
      );
      if (response.ok) {
        let movie = await response.json();
        // this.setState({
        //   movies: movie.Search,
        //   isLoading: false,
        // });
        setMovies(movie.Search);
        setIsLoading(false);
      } else {
        console.log("error fetching Moveis :(");
        setTimeout(() => {
          // this.setState({
          //   isLoading: false,
          //   isError: true,
          // });
          setIsLoading(false);
          setIsError(true);
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // componentDidMount() {
  //   this.fetchAction();
  // }
  useEffect(() => {
    fetchAction();
  }, []);

  console.log(movies.Search);
  return (
    <Container>
      <h4 className="my-5"> New Releases</h4>
      {isLoading && (
        <Spinner
          animation="border"
          role="status"
          className="custom-spinner-color"
        ></Spinner>
      )}
      <Carousel interval={9999999}>
        <Carousel.Item>
          <Row>
            {movies.slice(0, 4).map((m) => (
              <Col className="cover-size" md={3} key={m.imdbID}>
                <SingleMovie movie={m} />
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            {movies.slice(4, 8).map((m) => (
              <Col className="cover-size" md={3} key={m.imdbID}>
                <SingleMovie movie={m} />
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            {movies.slice(8).map((m) => (
              <Col className="cover-size" md={3} key={m.imdbID}>
                <SingleMovie movie={m} />
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default HerryPorter;
