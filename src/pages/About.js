import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import '../styles/about.css';


const About = () => {
    return (
    <section>
        <Container>
            <Row>
                <Col lang='12' className="pt-5 text-center">
                    <div className="about__alert">
                        <span><i class="ri-profile-line"></i></span>
                        <h1 className="mb-3 fw-semibold">About Us</h1>
                        <h3 className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                        <Button className="btn primary__btn w-25">
                            <Link to='/home'>Back to Home</Link>
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    )
};
export default About;