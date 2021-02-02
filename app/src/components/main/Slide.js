import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from 'assets/images/galery/image1.jpg';
import image2 from 'assets/images/galery/image2.jpg';
import image3 from 'assets/images/galery/image3.jpg';

function Slide() {
    return (
        <div className="slide">
            <Carousel 
                autoPlay 
                infiniteLoop 
                showArrows={false} 
                showStatus={false}
                showIndicators={false}
            >
                <div>
                    <img src={image1} alt="image1" />
                    <p className="legend">
                        <span>Featured</span>
                        <a href="/">18 Robinson Building / KPF</a>
                    </p>
                </div>
                <div>
                    <img src={image2} alt="image2" />
                    <p className="legend">
                        <span>Featured</span>
                        <a href="/">Eterea House / Prashant Ashoka</a>
                    </p>
                </div>
                <div>
                    <img src={image3} alt="image3" />
                    <p className="legend">
                        <span>Featured</span>
                        <a href="/">Elements House  / G&amp;A Evripiotis</a>
                    </p>
                </div>
            </Carousel>
        </div>
    );
}

export default Slide;