import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import '../styles/message.css';


const Message = () => {
    return (
    <section>
        <Container>
            <Row>
                <Col lang='12' className="pt-5 text-center">
                    <div className="message__alert">
                        <span><i class="ri-checkbox-circle-line"></i></span>
                        <h1 className="mb-3 fw-semibold">Thank You</h1>
                        <h3 className="mb-4">Booking Success</h3>
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
export default Message;