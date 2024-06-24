import React from 'react'
import '../styles/footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const quick__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/bmi",
    display: "BMI",
  },
];
const quick__links2 = [
  {
    path: "/calorie",
    display: "Nutrition Tracking",
  },
  {
    path: "/challenges",
    display: "Challenges",
  },
  {
    path: "/login",
    display: "Login",
  },
];

const Footer = () => {

  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="title">
              <h1>FITandFAT</h1>
              <p>
                Time and health are two precious assets that we don’t recognize
                and appreciate until they have been depleted.
              </p>
              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to="https://youtube.com">
                  <i class="zmdi zmdi-youtube-play"></i>
                  </Link>
                </span>
                <span>
                  <Link to="https://github.com">
                  <i class="zmdi zmdi-github"></i>
                  </Link>
                </span>
                <span>
                  <Link to="https://facebook.com">
                  <i class="zmdi zmdi-facebook-box"></i>
                  </Link>
                </span>
                <span>
                  <Link to="https://instagram.com">
                    <i class="ri-instagram-line"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>
          
          <Col lg="3" >
          
            <h5 className="footer__link-title">Discover</h5>
            <ListGroup className="footer__quick-links">
              {quick__links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
            
          </Col>
          <Col lg="3" >
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup className="footer__quick-links">
              {quick__links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3" >
          <h5 className="footer__link-title">Contact</h5>
            <ListGroup className="footer__quick-links">
              
                <ListGroupItem  className="ps-0 border-0">
                 <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span><i class="zmdi zmdi-pin"></i></span>
                  Address : 
                 </h6>
                 <p className="mb-0">San Diego , California</p>
                </ListGroupItem>
                <ListGroupItem  className="ps-0 border-0">
                 <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span><i class="zmdi zmdi-email"></i></span>
                  E-mail : 
                 </h6>
                 <p className="mb-0">anmolkaur****@gmail.com</p>
                </ListGroupItem>
                <ListGroupItem  className="ps-0 border-0">
                 <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span><i class="zmdi zmdi-vibration"></i></span>
                  Phone : 
                 </h6>
                 <p className="mb-0">76***-*****</p>
                </ListGroupItem>
            
            </ListGroup>
          </Col>
          <Col lg='12' className="text-center  pt-5" >
            <p className="copyright">
              Copyright {year} ©️Anmol
            </p>
          </Col>
        </Row>
      </Container>
    </footer>

  );
};

export default Footer;