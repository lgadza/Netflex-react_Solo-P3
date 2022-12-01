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

  const navigate = useNavigate();
  // const fetchAction = async () => {
  //   try {
  //     const response = await fetch(
  //       "http://www.omdbapi.com/?apikey=6adf6eb5&s=lord%20of%20rings"
  //     );
  //     if (response.ok) {
  //       let movies = await response.json();

  //       setIsLoading(false);
  //       setMovies(movies.Search);
  //     } else {
  //       console.log("error fetching Moveis :(");
  //       setTimeout(() => {
  //         setIsLoading(false);
  //         setIsError(true);
  //       }, 1000);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  useEffect(() => {
    const fetchAction = async () => {
      try {
        const response1 = await fetch(
          "http://www.omdbapi.com/?apikey=6adf6eb5&s=lord%20of%20rings"
        );
        let film1 = await response1.json();
        const response2 = await fetch(
          "http://www.omdbapi.com/?apikey=6adf6eb5&s=harry%20potter"
        );
        let film2 = await response2.json();

        const response3 = await fetch(
          "http://www.omdbapi.com/?apikey=6adf6eb5&s=game%20of%20thrones"
        );
        let film3 = await response3.json();

        const response4 = await fetch(
          "http://www.omdbapi.com/?apikey=6adf6eb5&s=the%20crown"
        );
        let film4 = await response4.json();

        const response = film1.Search.concat(film2.Search)
          .concat(film3.Search)
          .concat(film4.Search);
        console.log(response);

        setIsLoading(false);
        setMovies(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAction();

    // let detailsToShow = movies.find(
    //   (m) => m.imdbID.toString() === params.movieId
    // );
    // console.log("detailsToShow", detailsToShow);

    // setMovie(detailsToShow);
  }, []);
  useEffect(() => {
    let detailsToShow = movies.find(
      (m) => m.imdbID.toString() === params.movieId
    );
    console.log("detailsToShow", detailsToShow);

    setMovie(detailsToShow);
  });

  return (
    <Container>
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={4} className="text-center">
          <h1>Movie Details</h1>
          {movie && (
            <Card>
              <Card.Img variant="top" src={movie.Poster} />
              <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>Year:{movie.Year}</Card.Text>
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
