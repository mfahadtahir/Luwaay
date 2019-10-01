import React, { Component } from 'react';
import Slider from 'react-slick';
import ProductSliderIcon from '../../../images/Services/ProductSliderIcon.png'
import '../../../index.css';
import { StarRatingsOnProfile } from '../../../component/global/StarRating';
export class Article extends Component {
    render() {
        var { image } = this.props.data,
            // { title } = this.props.data,
            { price } = this.props.data;

        return (

            <div className="ServicesPageSliders">
                <div className="card">
                    <div className="card-image">
                        <img src={image} alt='' style={{ height: 150 }} />                        
                    </div>
                    <div className="card-content flow-text" style={{ textAlign: "left", fontSize: 16, paddingLeft: 16, paddingRight: 16 }}>
                        <div style={{ display: 'flex', justifyContent: 'left' }}>

                            <img src={ProductSliderIcon} alt='' style={{ width: 30, height: 30, borderRadius: '100%', marginRight: 10 }} />
                            <p style={{ padding: 5}} >Trey K.</p>

                        </div>
                        <p  >I will repair your refrigirator and i will maintain it to make sure the jo is...</p>
                        <StarRatingsOnProfile />
                    </div>


                    <div className="card-action card-action" style={{ textAlign: "left", padding: 15, height: 70 }} >
                        <p className='left' style={{fontWeight: 'bolder', fontSize: 14, padding: '5 !important' }}>{price}</p>
                        <button className='right' style={{ padding: '15px', background: 'rgb(42,128,213)', color: 'white', border: '0px', borderRadius: 10 }} >Book Now</button>
                    </div>

                </div>
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
            slidesToShow: sm ? 1 : md ? 3 : lg ? 3 : 4,
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
