import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './slider.css'
import './style.css'

class ImageSlider extends React.Component {
    render() {
        return (
            <Slider infinite="true" autoplay="1000" className="slider-wrapper">
                {content.map((item, index) => (
                    <div
                        key={index}
                        className="slider-content"
                        style={{ background: `url(${images[index]}) no-repeat center center` }}
                    >
                        <div className="inner">
                            <h1>{item.title}</h1>
                            <h5 style={{
                                color: "white"
                            }}>{item.description}</h5>
                            <button className="btn btn-large btn-primary">{item.button}</button>
                        </div>
                    </div>
                ))}
            </Slider>
        )
    }
}
const content = [
    {
        title: "Our New Arrival Is Here",
        button: "Shop Now"
    },
    {
        title: "Something great",
        description: "a place where you buy things ",
        button: "buy now"
    },
]
const images = [
    "https://www.staysky.com/wp-content/uploads/shopping_banner.jpg",
    'https://www.wns.com/Portals/0/Images/Articles/DesktopImages/600/128/Header-Image-Banner_1980X1080.jpg'
]

export default ImageSlider;