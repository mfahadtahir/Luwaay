import React, { Component } from 'react';
import Slider from 'react-slick';
import '../../../index.css';

export class Article extends Component {
    render() {
        var { image } = this.props.data,
            // { title } = this.props.data,
            { price } = this.props.data;

        return (
            <div>
                <figure
                    className={window.location.pathname !== "/" ? 'snip1584 card' : "snip1584"}
                    style={window.location.pathname !== "/" ? { marginLeft: window.innerWidth > 700 ? '5%' : '10%' } : {}}
                // style={{width: 200, height: 300}}
                >
                    <img alt='' src={image} />
                    <figcaption>
                        {/* <span className='productName' >{title}</span> */}
                        <p>{price}</p>
                    </figcaption>
                </figure>
                <p>Discription</p>
            </div>
        )
    }
};
export class ProductSlider extends Component {
    render() {
        // const lg = window.innerWidth > 1200;
        const lg = window.innerWidth > 800 && window.innerWidth < 1200;
        const md = window.innerWidth > 600 && window.innerWidth < 800;
        const sm = window.innerWidth > 100 && window.innerWidth < 600;
        var data = this.props.data;
        var newsTemplate;
        var settings = {
            dots: false,
            infinite: true,
            slidesToShow: sm ? 2 : md ? 3 : lg ? 4 : 5,
            slidesToScroll: 1,
        }
        if (data.length > 0) {
            newsTemplate = data.map(function (item, index) {
                return (
                    <div key={index}  >
                        <Article data={item} />
                    </div>
                )
            })
        } else {
            return null
        }
        return (
            <div className='news'>
                <Slider {...settings}>{newsTemplate}</Slider>
            </div>
        );
    }
};
