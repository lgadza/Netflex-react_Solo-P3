import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import SingleMovie from "./SingleMovie";

const TvShows = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const fetchAction = async () => {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=6adf6eb5&s=the%20crown"
      );
      if (response.ok) {
        let movie = await response.json();
        // this.setState({
        //   movies: movie.Search,
        //   isLoading: false,
        // });
        setIsLoading(false);
        setMovies(movie.Search);
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
  useEffect(() => {
    fetchAction();
  }, []);

  return (
    <Container>
      <Row>
        {movies.map((m) => (
          <Col className="cover-size my-5" md={3} key={m.imdbID}>
            <SingleMovie movie={m} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default TvShows;
