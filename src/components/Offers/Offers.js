import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import { sliderData } from '../../data/sliderData';
import Container from '../common/Container';

const Offers = () => {
    return (
        <div>
            {/* <Container>
                <InfiniteCarousel
                    breakpoints={[
                        {
                            breakpoint: 500,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2,
                            },
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3,
                            },
                        },
                    ]}
                    slidesToScroll={3}
                    autoCycle={true}
                    slidesToShow={3}
                    scrollOnDevice={true}
                >
                    {sliderData.map(({ id, image }) => (
                        <div className="w-full my-10" key={id}>
                            <img className="w-full" src={image} alt="" />
                        </div>
                    ))}
                </InfiniteCarousel>
            </Container> */}
        </div>
    );
};

export default Offers;
