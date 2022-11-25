import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Netflix</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#tv-shows">TV Shows</Nav.Link>
        <Nav.Link href="#movies">Movies</Nav.Link>
        <Nav.Link href="#recently-add">Recently Add</Nav.Link>
        <Nav.Link href="#my-list">My List</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default MyNavbar;
