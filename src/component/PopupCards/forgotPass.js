import React from 'react';
import { Link } from 'react-router-dom';
import { HideCard } from '../global/popupCard';

class ForgotPassCard extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        return (
            <div className="popup-card" id='forgotPass' >
                <div className="container">
                    <div className="row">
                        <div className="popup-form card col s12 m8 l8" >
                            <span className="heading" >

                                <h3 >Reset Password
                                    <Link to="#!" onClick={() => HideCard('forgotPass')} className="black" ><i className="material-icons right">close</i></Link></h3>
                            </span>
                            <input className="col s12 m12 l12" type="email" placeholder="Enter Email" />
                            <button className="btn btn-large btn-primary pop-btn col s12 m12 l12">Reset</button>
                    </div>
                </div>
                </div>     
            </div>
        )
    }
}

export default ForgotPassCard;