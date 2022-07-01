import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Model from "../../../images/arranged-marriage-759.jpg";
import Corporate from "../../../images/corporateff.jpg";
import video from "../../../images/video.jpg";

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Corporate}
                    alt="First slide"
                />
                <Carousel.Caption className='text-primary'>
                    <h3>Corporate Banding Photography</h3>
                    <p>In This technology every corporate branding is most important for Business.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Model}
                    alt="Second slide"
                />

                <Carousel.Caption className='text-primary'>
                    <h3>Wedding Photography</h3>
                    <p>The best photography  service for wedding and reception also special capture for bride and groom.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={video}
                    alt="Third slide"
                />

                <Carousel.Caption className='text-primary'>
                    <h3>Videography</h3>
                    <p>
                    Wedding, Events or others memorable programs is most important for life if you want save your memory join us.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;