import React from 'react';
import food from '../../images/food.jpg';
import grocery from '../../images/grocery.jpg';
import fashion from '../../images/fashion.jpg'
import services from '../../images/services.jpg';
import { Link } from 'react-router-dom';
export const PageLinks = () => {
    const HomeCard = {
        top: 50,
        fontWeight: '800 !important',
        backgroundColor: 'transparent',
        fontSize: 30
    }
    return (
        <div>
            <div style={{ marginTop: 14, width:'90%' }} className="row center">
                {/* <div className="col m2 l2 " ></div> */}
                <div className="col s12 m6 l3 ">
                    <div className="card">
                        <Link to='/food'>
                            <div className="card-image">
                                <img style={{ height: 200 }} src={food} alt='' />
                                <div className="card-title link-Name"></div>
                                <div className="card-title link-Name link-detail" style={ HomeCard }>Food</div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col s12 m6 l3">
                    <div className="card">
                        <Link to='/fashion'>
                            <div className="card-image">
                                <img style={{ height: 200 }} src={fashion} alt='' />
                                <span className="card-title link-Name"></span>
                                <div className="card-title link-Name link-detail" style={ HomeCard }>Fashion</div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col s12 m6 l3 hide-on-med-only">
                    <div className="card">
                        <Link to='/grocery'>
                            <div className="card-image">
                                <img style={{ height: 200 }} src={grocery} alt='' />
                                <span className="card-title link-Name"></span>
                                <div className="card-title link-Name link-detail" style={ HomeCard }>Grocery</div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col s12 m6 l3 hide-on-med-only">
                    <div className="card">
                        <Link to='/services'>
                            <div className="card-image">
                                <img style={{ height: 200 }} src={services} alt='' />
                                <span className="card-title link-Name"></span>
                                <div className="card-title link-Name link-detail" style={ HomeCard }>Services</div>
                            </div>
                        </Link>
                    </div>
                </div>
                {/* <div className="col m2 l3 " ></div> */}
            </div>
            <div className='row center show-on-medium hide-on-large-only hide-on-small-only' style={{width:'95%'}}>
                {/* <div className="col m2" ></div> */}
                <div className="col m6">
                    <div className="card">
                        <Link to='/grocery'>
                            <div className="card-image">
                                <img style={{ height: 200 }} src={grocery} alt='' />
                                <span className="card-title link-Name"></span>
                                <div className="card-title link-Name link-detail" style={ HomeCard }>Grocery</div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col m6">
                    <div className="card">
                        <Link to='/services'>
                            <div className="card-image">
                                <img style={{ height: 200 }} src={services} alt='' />
                                <span className="card-title link-Name"></span>
                                <div className="card-title link-Name link-detail" style={ HomeCard } >Services</div>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
