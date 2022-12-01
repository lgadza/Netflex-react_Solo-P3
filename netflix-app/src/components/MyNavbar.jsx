import { Nav, Button, Dropdown, Navbar } from "react-bootstrap";
import netflix_logo from "..//assets/netflix_logo.png";
import avatar from "..//assets/avatar.png";
import { Component, useState } from "react";
import ProfilPage from "./ProfilePage";
import { Link, useLocation } from "react-router-dom";

const MyNavbar = () => {
  // state = {
  //   isManageProfilesSelected: false,
  // };
  const [isManageProfilesSelected, setIsManageProfilesSelected] =
    useState(false);
  const location = useLocation();

  return (
    <>
      <Navbar bg="dark" variant="dark ">
        <Link to="/">
          <Navbar.Brand>
            <img className="logo" src={netflix_logo} alt="" />
          </Navbar.Brand>
        </Link>
        <Nav className="me-auto">
          <Link to="/" className="navbar-links">
            <div
              className={
                location.pathname === "/" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </div>
          </Link>
          <Link to="/tv-shows" className="navbar-links">
            <div
              className={
                location.pathname === "/tv-shows"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              TV Shows
            </div>
          </Link>
          <Link to="/movies" className="navbar-links">
            <div
              className={
                location.pathname === "/movies" ? "nav-link active" : "nav-link"
              }
            >
              Movies
            </div>
          </Link>
          <Link to="/recently-add" className="navbar-links">
            <div
              className={
                location.pathname === "/recently-add"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Recently Add
            </div>
          </Link>
          <Link to="/my-list" className="navbar-links">
            <div
              className={
                location.pathname === "/my-list"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              My List
            </div>
          </Link>
        </Nav>
        <Nav class="navbar-nav mr-auto d-flex align-items-center pushme-right">
          <Nav.Link href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search icon"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </Nav.Link>
          <Nav.Link href="#">KIDS</Nav.Link>
          <Nav.Link href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-bell-fill icon"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
            </svg>
          </Nav.Link>

          <Dropdown className="dropdown-background">
            <div class="btn-group">
              <Dropdown.Toggle
                type="button"
                class="btn dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={avatar} className="avatar" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-dark">
                <Nav.Link href="#">
                  <div class="d-flex align-items-center">
                    <img src={avatar} className="avatar-small" />
                    Louis
                  </div>
                </Nav.Link>
                <Dropdown.Item
                // onClick={(e) => {
                //   e.preventDefault();
                //   this.setState = {
                //     isManageProfilesSelected: true,
                //   };
                //   console.log("clicked");
                // }}
                // className="dropdown-item"
                // href="#"
                >
                  <Link to="/profile" className="navbar-links dropdown-item">
                    <div
                      className={
                        location.pathname === "/profile"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      Manage Profiles
                    </div>
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item class="dropdown-item" href="#">
                  Account
                </Dropdown.Item>
                <Dropdown.Item class="dropdown-item" href="#">
                  Help Center
                </Dropdown.Item>
                <hr class="dropdown-divider" />
                <Dropdown.Item class="dropdown-item" href="#">
                  Signout Netflix
                </Dropdown.Item>
              </Dropdown.Menu>
            </div>
          </Dropdown>
        </Nav>
      </Navbar>
      {/* {this.state.isManageProfilesSelected && <ProfilPage />} */}
    </>
  );
};

export default MyNavbar;
