import React from 'react';
import '../styles/yellow.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Container , Row , Col} from 'reactstrap';
import health1 from '../images/health1.jpg';
import health2 from '../images/health2.jpg';
import health3 from '../images/healthvideo.mp4';


const Yellow = () => {
  return <>
  <section className='yellow'>
    <Container>
        <Row>
            <Col lg='6'>
                <div className="hero__content">
                    <div className="hero__subtitle d-flex align-items-center">
                         <h1><span className='highlight'>Health</span> is Wealth</h1>
                         <p>
                         Improve your health holistically, more consistently and experience change like never before.<br/>
                         <br/>
                         With the right data, reach your fitness goals faster, get personalized coaching and work with greater efficiency.
                         </p>
                    </div>
                </div>
            </Col>
            <Col lg='2'>
                <div className="hero__img-box">
                    <img src={health2} alt="" />
                </div>
            </Col>
            <Col lg='2'>
                <div className="hero__img-box mt-4">
                    <video src={health3} alt="" controls />
                </div>
            </Col>
            <Col lg='2'>
                <div className="hero__img-box mt-5">
                    <img src={health1} alt="" />
                </div>
            </Col>
        </Row>
    </Container>
  </section>
  </>
}

export default Yellow