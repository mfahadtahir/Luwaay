import React from 'react';
import fashion1 from "../../images/home/fashion3.jpg";
import fashion2 from "../../images/home/trendingFashion2.jpg";
import "../../index.css"

const OneTrendingFashion = (props) => {
    const { image, fashionfor } = props;
    return (
        <div className="col s12 m6 l6">
            <div className="card">
                <div className="card-image">
                    <img src={image} alt='' className='mainFashion'/>
                </div>
                <div className="card-content flow-text" style={{ textAlign: "left", fontSize: 16, paddingLeft: 16, paddingRight: 16 }}>
                    <p>{fashionfor} Fashion</p>
                    <button className='waves-effect waves-light btn' style={{background: 'black', color: 'white'}} >Shop Now</button>
                </div>
            </div>
        </div>
    )
}

export const TrendingFashion = () => {
    return (
        <div className='row center' style={{ width: '80%' }} >
            <OneTrendingFashion image={fashion1} fashionfor='Women'/>
            <OneTrendingFashion image={fashion2} fashionfor='Men'/>
        </div>
    )
}

