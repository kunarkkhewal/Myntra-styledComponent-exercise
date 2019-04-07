import React from 'react';
import { Carousel } from 'react-bootstrap';
import { CarouselDiv } from './Discount.SC';

const DiscountSection = () => {

    return (
        <CarouselDiv>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/11/27/f480445c-db1b-456d-b48e-e1dea21867941543338528570-icici-dk--1-.jpg" alt="First Slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/26/96a641be-a42f-4919-bacf-9d84ec173e091553594813424-Desktop_02_02--1-.jpg" alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/26/4874863e-c3ac-4052-b5b9-14ef073a67631553594813440-Desktop_02_02--2-.jpg" alt="Third slide" />
                </Carousel.Item>
            </Carousel>
        </CarouselDiv>
    )
}

export default DiscountSection;