import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const ProductCarousel = ({ name, images }) => {
    return (
        <Carousel
            className="product-carousel"
            showIndicators={false}
            showStatus={false}
            showArrows={false}
        >
            {images.map((item) => (
                <div key={new Date()}>
                    <img src={item} alt={name} />
                </div>
            ))}
        </Carousel>
    );
};

export default ProductCarousel;
