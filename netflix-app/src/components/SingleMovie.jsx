import { Component } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup, Alert, Spinner } from "react-bootstrap/";

class SingleMovie extends Component {
  state = {
    selected: false,
    imdbID: "",
  };
  handleClick = () => {
    this.setState({
      selected: true,
      imdbID: this.props.movie.imdbID,
    });

    console.log(this.state);
    console.log(this.props.movie.imdbID);
  };

  //   seeDetails(e) {
  //     e.target.style.background = "red";
  //   }
  //   hideDetails(e) {
  //     e.target.style.background = "transpent";
  //   }
  render() {
    return (
      <Card
        // onMouseEnter={this.seeDetails}
        // onMouseLeave={this.hideDetails}
        onClick={this.handleClick}
        style={{ border: this.state.selected ? "3px solid red" : "none" }}
        key={this.props.movie.imdbID}
        // onClick={() => this.setState({ selected: true })}
        // style={{ border: this.state.selected ? "3px solid red" : "none" }}
      >
        <Card.Img
          className="Image-movie"
          variant="top"
          src={this.props.movie.Poster}
        />
        <div className="Image-movie-darken"></div>
        {this.state.selected && (
          <Card.Body>
            <h4>Movie Details</h4>

            <Card.Title>{this.props.movie.Title}</Card.Title>
            <Card.Text>{this.props.movie.Year}</Card.Text>
          </Card.Body>
        )}
      </Card>
    );
  }
}

export default SingleMovie;
