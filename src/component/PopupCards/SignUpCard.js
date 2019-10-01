import React from 'react';
import { Link } from 'react-router-dom';
import { HideCard, PopupCard } from '../global/popupCard';
import { SignUp } from '../../Authentication/auth';
class SignUpCard extends React.Component {
    render() {
        return (
            <center>
                <div className="popup-card" id='signUp'>
                    <div className="container">
                        <div className="row">
                            <div className="popup-form  card col s12 m8 l8" >
                                <span className="heading" >

                                    <h3 >Sign Up
                                    <Link to="#!" className="black" onClick={() => HideCard('signUp')} ><i className="material-icons right">close</i></Link>
                                    </h3>
                                </span>
                                <input id='reg-name' className="col s12 m12 l12" type="text" placeholder="Enter Name" />
                                <input id='reg-email' className="col s12 m12 l12" type="email" placeholder="Enter Email" />
                                <input id='reg-password' className="col s12 m12 l12" type="password" placeholder="Enter Password" />
                                <input id='reg-sec-pass' className="col s12 m12 l12" type="password" placeholder="ReType Pasword" />
                                <button id='reg-button' onClick={() => {SignUp()}} className="btn btn-large btn-primary pop-btn col s12 m12 l12">Sign Up</button>
                                <span >Already A Member ? <Link to="#!" className="pink" onClick={() => {HideCard('signUp'); PopupCard('signIn')}}>Sign In</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </center>

        )
    }
}

export default SignUpCard;