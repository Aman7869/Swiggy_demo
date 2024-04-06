import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../../assets/images/slider1.jpg'
import slider2 from '../../assets/images/slider2.jpg'
import slider3 from '../../assets/images/slider3.jpg'
import { SliderStyle } from './style';
const Slider = () => {
    return (
        <>
            <SliderStyle>
                <Carousel data-bs-theme="dark">

                    <Carousel.Item>
                        <img
                            className="d-block w-100 slider-img"
                            src={slider1}
                            alt="First slide"
                            height="540rem"
                        />
                        <Carousel.Caption>
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 slider-img"
                            src={slider2}
                            alt="Second slide"
                            height="540rem"
                        />
                        <Carousel.Caption>
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 slider-img"
                            src={slider3}
                            alt="Third slide"
                            height="540rem"
                        />
                        <Carousel.Caption>
                            <h5>Third slide label</h5>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </SliderStyle>
        </>
    )
}

export default Slider