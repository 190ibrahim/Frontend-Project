import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">CRUD With React Bootstrap</h1>
              <p className="subtitle">Explore our diverse list of customers and their profiles</p>
            </div>
            <div className="buttonContainer">
              <Link to="/adduser">
                <Button size="lg" className="landingbutton">
                  Add user
                </Button>
              </Link>
              <Link to="/users">
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="landingbutton"
                >
                  View All
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;