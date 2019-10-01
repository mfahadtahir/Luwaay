import React from 'react';
import { Link } from 'react-router-dom';
import { HideCard, PopupCard } from '../global/popupCard';
import { SignIn } from "../../Authentication/auth";
class SignInCard extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        return (
            <div className="popup-card" id='signIn' >
                <div className="container">
                    <div className="row">
                        <div className="popup-form card col s12 m8 l8" >
                            <span className="heading" >

                                <h3 >Sign In
                                    <Link to="#!" onClick={() => HideCard('signIn')} className="black" ><i className="material-icons right">close</i></Link></h3>
                            </span>
                            <input id='login-email' className="col s12 m12 l12" type="email" placeholder="Enter Email" />
                            <input id='login-pass' className="col s12 m12 l12" type="password" placeholder="Enter Password" />
                            <p>
                                <label>
                                    <input name="group1" type="checkbox" />
                                    <span  >Remember Me</span>
                                </label>
                            </p>
                            <button onClick={() =>{SignIn()}} className="btn btn-large btn-primary pop-btn col s12 m12 l12">Sign In</button>
                            <Link
                            to='#!'
                            className=" pink-bg left col s12 m6 l6"
                            style={{
                                background: 'transparent', color: 'black'
                            }}
                            onClick={() => {
                                HideCard('signIn')
                                PopupCard('forgotPass')
                            }}
                            >
                            Forgot Password
                            </Link>
                            <Link
                            to='#!'
                            className=" pink-bg right col s12 m6 l6"
                            style={{
                                background: 'transparent', color: 'black'
                            }}
                             onClick={() => {
                                PopupCard('signUp')
                                HideCard('signIn')
                                }}>Not a Member?
                            </Link>
                        </div>
                    </div>
                </div>
                           
            </div>
        )
    }
}

export default SignInCard;