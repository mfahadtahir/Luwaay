import React from 'react';
import { Link } from 'react-router-dom';
import { HideCard } from '../global/popupCard';
import { SignOut } from '../../Authentication/auth';
import { PopupCard } from './popupCard';
class ProfileDropDown extends React.Component {
    render() {
        const { isAuthenticated, userInfo } = this.props;
        return (
            <div className="right" id='profileDetail'
                style={{
                    position: "fixed",
                    zIndex: 1000,
                    height: 5000,
                    width: 300,
                    right: 10,
                    top: 0
                }} >
                <div onMouseLeave={() => HideCard('profileDetail')} style={{ padding: 10 }} id='dropdownMenu' className=" card col s12 m8 l8" >
                    {isAuthenticated ?
                        <div>
                            <p>Hello, <i class="material-icons">person</i> {userInfo.displayName}</p>
                            <button style={{
                                background: 'lightgray',
                                color: 'black',
                                borderRadius: 10,
                            }}>My profile
                        </button>
                            <hr />
                            <ul id='menu' style={{
                                padding: '10px 20px',
                                lineHeight: 2
                            }}>
                                <li>Account Overview</li>
                                <li><Link to='' >Dashboard</Link></li>
                                <li><Link to='' >Inbox</Link></li>
                                <li><Link to='' >Order & Reviews</Link></li>
                                <li><Link to='' >Tracking Order</Link></li>
                                <li><Link to='' >Create An Account</Link></li>
                                <hr />
                                <li><Link to='' onClick={() =>{SignOut()}} >Sign Out</Link></li>
                            </ul>
                        </div>
                        
                        :

                        <div>
                        <p>Please Login To View Your Account</p>
                        <button style={{
                            background: 'lightgray',
                            color: 'black',
                            borderRadius: 10,
                        }}>My profile
                    </button>
                        <hr />
                        <ul id='menu' style={{
                            padding: '10px 20px',
                            lineHeight: 2
                        }}>
                            <li>Account Overview</li>
                            <li><Link to='' >Dashboard</Link></li>
                            <li><Link to='' >Inbox</Link></li>
                            <li><Link to='' >Order & Reviews</Link></li>
                            <li><Link to='' >Tracking Order</Link></li>
                            <li><Link to='' onClick={() => PopupCard('signUp')} >Create An Account</Link></li>
                            <hr />
                            <li><Link to='' onClick={() => PopupCard('signIn')} >Sign In</Link></li>
                        </ul>
                    </div>

                }
                    {/* </span> */}
                    {/* <p> </p>
                    Welcome to our Store */}
                </div>
            </div>
        )
    }
}
export default ProfileDropDown;