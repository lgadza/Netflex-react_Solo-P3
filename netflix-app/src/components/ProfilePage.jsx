import { Component } from "react";
import { Button, Navbar, Container, Row, Col } from "react-bootstrap";
import avatar from "..//assets/avatar.png";
import netflix_logo from "..//assets/netflix_logo.png";

class ProfilPage extends Component {
  render() {
    return (
      <>
        <Navbar class="navbar navbar-expand-lg navbar-dark">
          <div class="container-fluid">
            <Navbar.Brand href="#home">
              <img className="logo" src={netflix_logo} alt="" />
            </Navbar.Brand>
          </div>
        </Navbar>
        <div class="profile-page">
          <Container>
            <h1 class="text-light profile-title">Edit Profile</h1>
            {/* <hr> */}

            <Row>
              <Col Col md={3} xs={12}>
                <img src={avatar} width="200px" />
              </Col>
              <Col Col md={9} xs={12}>
                <input
                  value="Ubeyt Demir"
                  type="text"
                  class="netflix-input mb-2"
                />

                <div class="d-flex flex-column mb-4 mt-4">
                  <h4 class="text-muted">Language</h4>
                  <Button class=" btn-outline-light mt-2 dropdown-toggle w-25">
                    English
                  </Button>
                </div>

                <div class="d-flex flex-column mt-2">
                  <h4 class="text-muted">Maturity Settings</h4>
                  <button class="btn btn-secondary mt-4 w-50 mb-4">
                    ALL MATURITY SETTINGS
                  </button>
                  <p class="text-light mt-2">
                    Show files for all maturity settings for this profile.
                  </p>
                  <Button class="btn btn-outline-secondary mt-2  w-25">
                    EDIT
                  </Button>
                </div>

                <div class="mt-2">
                  <h4 class="text-muted">Autoplay Controls</h4>
                  <Row class="mt-5">
                    <Col md={1}>
                      <input
                        class="form-check-input btn-secondary"
                        type="checkbox"
                      />
                    </Col>
                    <Col md={11}>
                      Autoplay next episode in a series on all devices
                    </Col>
                  </Row>
                  <Row class=" mt-2">
                    <Col md={1}>
                      <input
                        class="form-check-input btn-secondary"
                        type="checkbox"
                      />
                    </Col>
                    <Col md={11}>
                      Autoplay next episode in a series on all devices
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>

            <Row>
              <Col md={2}>
                <Button class=" btn-light w-100">SAVE</Button>
              </Col>
              <Col md={5}>
                <Button class=" btn-outline-secondary w-100">CANCEL</Button>
              </Col>
              <Col md={5}>
                <Button class=" btn-outline-secondary w-100">
                  DELETE PROFILE
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}
export default ProfilPage;
