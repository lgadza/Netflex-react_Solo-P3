import {
  Nav,
  Button,
  Dropdown,
  Form,
  Navbar,
  ListGroup,
} from "react-bootstrap";
// import Navbar from "react-bootstrap/Navbar";

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
      <div className="d-flex align-items-center justify-content-between">
        <Form className=" d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
        </Form>
        <ListGroup.Item class="  nav-item d-flex">
          <img
            className="profile-pic"
            src="https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?cs=srgb&dl=pexels-pixabay-36029.jpg&fm=jpg"
            id="avatar"
          />

          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
            ></Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ListGroup.Item>
      </div>
    </Navbar>
  );
}

export default MyNavbar;
