import React from "react";
import ServiceCard from "./ServiceCard";
import {Col} from "reactstrap";

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
    {
        imgUrl: weatherImg,
        title: "Weather",
        desc: "Rain or Shine"
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Only in the Philippines"
    },
    {
        imgUrl: customizationImg,
        title: "Customize",
        desc: "Best Experience Spots"
    },
]


const ServiceList = () => {
    return (
    <>
    {servicesData.map((item, index) => (
        <Col lg='3' key={index}>
            <ServiceCard item={item}/>
        </Col>
    ))}
    </>
    );
};
export default ServiceList;