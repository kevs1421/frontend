import React from "react";
import '../styles/home.css';
import {Container, Row, Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import Subtitle from './../shared/Subtitle';
import experienceImg from '../assets/images/experience.png'
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

const Home = () => {
    return <>
    <section>
       <Container>
        <Row>
            <Col lg='6'>
                <div className="hero__content">
                    <div className="hero__subtitle d-flex align-items-center">
                        <Subtitle subtitle={'Lets Travel !!!'}/>
                        <img src={worldImg} alt="" />
                    </div>
                    <h1>Best Tourist Spots in the <span className="highlight">Philippines</span></h1>
                    <p>The Philippines has over 7,000 islands and is the perfect getaway to experience a mix of nature, culture, and fun. The geographical features of the Philippines ensure that there are natural attractions wherever you go. Whether you're headed to Luzon tourist spots, Visayas tourist spots, or Mindanao tourist spots, expect beautiful sights, unique attractions, friendly locals, and memorable experiences.</p>
                </div>
            </Col>
            <Col lg='2'>
                <div className="hero__img-box">
                    <img src={heroImg} alt="" />
                </div>
            </Col>
            <Col lg='2'>
                <div className="hero__img-box mt-4">
                    <video src={heroVideo} alt="" controls/>
                </div>
            </Col>
            <Col lg='2'>
                <div className="hero__img-box mt-5">
                    <img src={heroImg02} alt="" />
                </div>
            </Col>
            <SearchBar />
        </Row>
       </Container> 
    </section>
    <section>
        <Container>
            <Row>
                <Col lg='3'>
                    <h5 className="services__subtitle">What we serve</h5>
                    <h2 className="services__title">Best Services</h2>
                </Col>
                <ServiceList />
            </Row>
        </Container>
    </section>
    <section>
        <Container>
            <Row>
                <Col lg='12' className="mb-5">
                    <Subtitle subtitle={'Explore'}/>
                    <h2 className="featured__tour-title">Our Tourist Spots</h2>
                </Col>
                <FeaturedTourList />
            </Row>
        </Container>
    </section>
    <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="experience__content">
                        <Subtitle subtitle={'Experience'} />
                        <h2>Travelers Experience</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="counter__wrapper d-flex align-items-center gap-5">
                        <div className="counter__box">
                            <span>12k+</span>
                            <h6>Successful</h6>
                        </div>
                        <div className="counter__box">
                            <span>2k+</span>
                            <h6>Client</h6>
                        </div>
                        <div className="counter__box">
                            <span>10</span>
                            <h6>Years Experience</h6>
                        </div>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className="experience__img">
                        <img src={experienceImg} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <Subtitle subtitle={'Gallery'} />
                    <h2 className="gallery__title">Places Dreams Come True</h2>
                </Col>
                <Col lg='12'>
                    <MasonryImagesGallery />
                </Col>
            </Row>
        </Container>
    </section>
    <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <Subtitle subtitle={'Fans'}/>
                    <h2 className="testimonial__title">What our Fans</h2>
                </Col>
                <Col lg='12'>
                    <Testimonials />
                </Col>
            </Row>
        </Container>
    </section>
    <Newsletter />
    </>
};

export default Home;