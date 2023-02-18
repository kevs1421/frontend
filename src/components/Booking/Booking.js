import React, {useState} from "react";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import './booking.css';

const Booking = ({tour, avgRating}) => {

    const {price, reviews} = tour
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({useId: '01', userEmail: 'example@gmail.com', fullname: '', phone: '', guestSize: 1, bookAt: ''});
    const handleChange = e => {setCredentials(prev => ({...prev, [e.target.id]:e.target.value}))};

    const serviceFee = 250
    const totalAmount = Number(price) * Number(credentials.guestSize) + Number(serviceFee)
    
    const handleClick = e => {
        e.preventDefault()
        navigate("/message");
    }

    return <div className="booking">
        <div className="booking__top d-flex align-items-center justify-content-between">
            <h3>₱ {price} <span>per head</span></h3>
            <span className="tour__rating d-flex align-items-center gap-1">
                <i class="ri-star-s-line"></i> {avgRating === 0 ? null : avgRating} ({reviews ?.length})
            </span>
        </div>
        <div className="booking__form">
            <h5>Payment Information</h5>
            <Form className="booking__info-form" onSubmit={handleClick}>
                <FormGroup>
                    <input type="text" placeholder="Full name" id="fullname" required onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <input type="number" placeholder="Phone" id="phone" required onChange={handleChange} />
                </FormGroup>
                <FormGroup className="d-flex align-items-center gap-3">
                    <input type="date" placeholder="" id="bookAt" required onChange={handleChange} />
                    <input type="number" placeholder="Guest" id="guestSize" required onChange={handleChange} />
                </FormGroup>
            </Form>
        </div>
        <div className="booking__bottom">
            <ListGroup>
                <ListGroupItem className="border-0 px-0">
                    <h5 className="d-flex align-items-center gap-1">₱ {price} <i class="ri-close-fill"></i> 1 head</h5>
                    <span>₱ {price}</span>
                </ListGroupItem>
                <ListGroupItem className="border-0 px-0">
                    <h5>Service Fee</h5>
                    <span>₱ {serviceFee}</span>
                </ListGroupItem>
                <ListGroupItem className="border-0 px-0 total">
                    <h5>Total</h5>
                    <span>₱ {totalAmount}</span>
                </ListGroupItem>
            </ListGroup>
            <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>Book Now</Button>
        </div>
    </div>
    
}

export default Booking;