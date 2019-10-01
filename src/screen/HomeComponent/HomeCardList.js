import React from 'react';
import popularNowImage from "../../images/home/dresses.jpg";
import profileIcon from "../../images/home/ProfileSample.png";
import '../../index.css'

const OneHomeCard = () => {
    return (
        <div className="col s6 m4 l3">
            <div className="card" style={{ minHeight: 200 }}>
                <div className="card-image">
                    <img src={popularNowImage} alt='' style={{ height: 170 }} />
                </div>
                <div className="card-content flow-text" style={{ textAlign: "left", fontSize: 16, paddingLeft: 16, paddingRight: 16 }}>

                    <div style={{ display: 'flex', justifyContent: 'left' }}>
                        <img src={profileIcon} alt='' style={{ width: 30, height: 30, borderRadius: '100%', marginRight: 10 }} />
                        <p style={{ padding: 5 }} >Trey K.</p>
                    </div>
                    <p>Beige Wedding flower wallet d...</p>
                    <b>$134.99</b>
                    <i style={{ margin:2 , padding: 5 ,border: '1px solid black', borderRadius: '100%' }} className="right far fa-heart setAsFavouriteHome"></i>
                    {/* <blockquote ><i class="fa fa-gift" aria-hidden="true"></i> Free Shipping</blockquote> */}
                </div>
            </div>
        </div>
    )
}

export const HomeCardList = (props) => {
    const { heading } = props
    return (
        <div className='row center' style={{ width: '90%' }}>
            <h4 style={{textAlign: "left"}}>{heading}</h4>
            <div className='row' >
                <OneHomeCard />
                <OneHomeCard />
                <OneHomeCard />
                <OneHomeCard />
            </div>
        </div>
    )
}

