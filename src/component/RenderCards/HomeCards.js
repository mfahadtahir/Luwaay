import React from 'react';
import { Link } from 'react-router-dom';
import { freeShipment } from '../global/freeShipment';

class Cards extends React.Component {
    render() {
        
        const lg = window.innerWidth > 1200;
        const md = window.innerWidth > 700 && window.innerWidth < 1200;
        const sm = window.innerWidth > 100 && window.innerWidth < 700;
        return (
            <div>
        {freeShipment()}
            <div className="card-main-container ">
                <div className="row">
                    <div className="col s12 m12 l12">
                        <div className="card">
                            <div className="card horizontal">
                                <div className="col s5 m6 l3 card-image ">
                                    <h3 ><a href="#!" className="badge-button">SALE</a></h3>
                                    <center>
                                        <img alt='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnx4wuAq0IeRM5GwOdv0rbM_qUx_ATpTfuLZ0Pk6fz2F0pCAsY" />
                                    </center>
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content">
                                        <h4>Vera Bradley</h4>
                                        <p style={{ color: "grey" }}>Carry the day in style with this extra-large tote craftedin our chic B.B. Collection textured PVC.
                         Featuring colorful faux leather trim, this tote offersa roomy interior.</p>
                                        <br />
                                        <br />
                                        <div className="col s12 m12 l12" >
                                            <button className="btn btn-large btn-primary" >Shop Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card 2 */}
                    <div className="col s12 m4 l4">
                        <div className="col s12 m12 l12 card"
                            style={{
                                height: md ? '320px' :"360px",
                                background: "#6de7fc"
                            }}>
                            <div className="card-content"
                                style={{
                                    padding: lg ? "18%" : sm ? "22%" : "10%" ,
                                }}
                            >
                                <center >
                                    <h1
                                        style={{
                                            color: "black",
                                            fontFamily: "serif",
                                        }}
                                    >WOW</h1>
                                    <h5
                                        style={{
                                            color: "red",
                                        }}
                                    >Check <br /> WHAT!</h5>
                                </center>
                            </div>
                        </div>
                        {/* card 3  */}
                        <Link to="/men" className='col s12 m12 l12 ' >
                            <div className="card men-card" >
                                <div className="card-image" style={{ 
                                height: md ? '320px ' :"350px ", 
                                background: `url('https://www.redwallpapers.com/public/redwallpapers-small-thumb/woman-with-gold-colored-accessories-taking-picture-inside-room-free-stock-photo-image-wallpaper.jpeg') center/cover no-repeat` }}>
                                        <h2 style={{
                                            position: 'relative',
                                            top: window.innerWidth < 1000 ? "35%" : '32%',
                                            left: md ? "18%" : sm ? '20%' : '20%',
                                            color: 'white',
                                            fontWeight: 'bold',
                                            fontSize: sm ? '3rem' : md ? '2.6rem' : '3.56rem',
                                            zIndex: 20
                                        }}>
                                            WOMAN
                                        </h2>
                                </div>
                               
                            </div>
                        </Link>
                    </div> 
                    
                    {/* card 4 */}
                    <div className="col s12 m8 l8">
                        <div className="card" style={{ height: "720px" }}>
                            <h3 ><a href="#!" className="badge-button" style={{ background: "red" }}>POP</a></h3>
                            <div className="card-image" style={{ background: "url(http://1.bp.blogspot.com/-FzjkgNbPRzo/T5ISOm6CyiI/AAAAAAAAAeI/UdCBkc67QN0/s1600/fashion-photography-blog.jpg) center/cover no-repeat"}}>
                            </div>
                            <div className="container">
                                <div className="card-content">
                                    <h4
                                        style={{
                                            color: "#f55094",
                                        }}
                                    >Let The Game Begin</h4>
                                    <p style={{ fontWeight: "bold" }}>Registration is on - get ready for Open</p>
                                </div>
                                <div className="col s4 m4 l6 ">
                                    <button className="btn btn-large btn-primary" >
                                        Register
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </div>
        );
    }
}

export default Cards;
