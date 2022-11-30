import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieDatails = () => {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const [movies, setMovies] = useState([]);
  console.log("PARAMS", params);
  console.log("movieId is", params.movieId);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();
  const fetchAction = async () => {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=6adf6eb5&s=lord%20of%20rings"
      );
      if (response.ok) {
        let movies = await response.json();

        setIsLoading(false);
        setMovies(movies.Search);
      } else {
        console.log("error fetching Moveis :(");
        setTimeout(() => {
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
    console.log(fetchAction());
    let detailsToShow = movies.find(
      (m) => m.imdbID.toString() === params.movieId
    );
    console.log("detailsToShow", detailsToShow);

    setMovies(detailsToShow);
  }, []);

  return (
    <Container>
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={6} className="text-center">
          <h1>Movie Details</h1>
          {movie && (
            <Card>
              <Card.Img variant="top" src={movies.Poster} />
              <Card.Body>
                <Card.Title>{movies.Title}</Card.Title>
                <Card.Text>Year:{movies.Year}</Card.Text>
                <Button variant="primary" onClick={() => navigate("/")}>
                  Go Back
                </Button>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};
export default MovieDatails;
