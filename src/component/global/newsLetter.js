import React from 'react';
import emailIcon from '../../images/home/emailIcon.PNG'

class NewsLetter extends React.Component {
    render() {
        return (
            <div className="card subscribe-card">
                <div className="container">
                    <div className="row">
                        <div className="col s12 m12 l12">
                            <center>
                                <h5 className='valign-wrapper center' style={{ color: "rgb(42,128,213)", fontWeight: "bold", width: 360 }}>
                                    <img src={emailIcon} style={{width: 70, height: 70}} alt='' />  Let's keep in touch
                                </h5>
                                <p style={{ color: "black", fontWeight: "bold" }}>
                                    Get our last Recommandation in your Inbox
                                    </p>
                            </center>
                            <form>
                                <input className="subscribe-form col s12 m4 l8 " type="email" placeholder=" Your email here" />
                                <button style={{background: 'rgb(42,128,213)', color: 'white'}} className={window.innerWidth > 100 && window.innerWidth < 600 ? "btn btn-small btn-primary center col s12 m3 l2" : "btn btn-large btn-primary col s6 m3 l2"}>
                                    Subscribe
                            </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default NewsLetter;