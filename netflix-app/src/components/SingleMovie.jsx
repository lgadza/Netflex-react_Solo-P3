import { Component, useState } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup, Alert, Spinner } from "react-bootstrap/";

const SingleMovie = (props) => {
  // state = {
  //   selected: false,
  //   imdbID: "",
  // };
  const [selected, setSelected] = useState(false);
  const [imdbID, setImdbID] = useState("");
  const handleClick = () => {
    // this.setState({
    //   selected: true,
    //   imdbID: this.props.movie.imdbID,
    // });
    setSelected(true);
    setImdbID(props.movie.imdbID);
    console.log(props.movie.imdbID);
  };

  //   seeDetails(e) {
  //     e.target.style.background = "red";
  //   }
  //   hideDetails(e) {
  //     e.target.style.background = "transpent";
  //   }

  return (
    <Card
      // onMouseEnter={this.seeDetails}
      // onMouseLeave={this.hideDetails}
      onClick={handleClick}
      style={{ border: selected ? "3px solid red" : "none" }}
      key={props.movie.imdbID}
      // onClick={() => this.setState({ selected: true })}
      // style={{ border: this.state.selected ? "3px solid red" : "none" }}
    >
      <Card.Img
        className="Image-movie"
        variant="top"
        src={props.movie.Poster}
      />
      <div className="Image-movie-darken"></div>
      {selected && (
        <Card.Body>
          <h4>Movie Details</h4>

          <Card.Title>{props.movie.Title}</Card.Title>
          <Card.Text>{props.movie.Year}</Card.Text>
        </Card.Body>
      )}
    </Card>
  );
};

export default SingleMovie;
