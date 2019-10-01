import React from 'react';
import { Link } from 'react-router-dom';
import { PopupCard, hideAllOnStart } from './popupCard';
import SignInCard from '../PopupCards/signCard';
import SignUpCard from '../PopupCards/SignUpCard';
import ContactCard from '../PopupCards/contactCard';
import ForgotPassCard from '../PopupCards/forgotPass';
import ProfileDropDown from './profileDropdown';


class Nav extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            logo: {
                imgId: ["nav-logo", "nav-logo-sm"],
            },
            dropdownText: ["My Bag", "my Profile"],
            navText3: ["Gift Vouchers", "Help & Contact"],
        }

    }

    render() {
        const { isAuthenticated, userInfo, subNavItems } = this.props
        return (
            <div>
                {/* Popup cards */}
                <SignInCard />
                <SignUpCard />
                <ContactCard />
                <ForgotPassCard />
                <ProfileDropDown isAuthenticated={isAuthenticated} userInfo={userInfo} />
                {/* {MenuListComposition()} */}
                <nav>
                    <div className="nav-wrapper" style={{ background: 'rgb(4,30,65)', height: 54 }}>

                        {/* CART ICON */}
                        <div className="row" style={{ marginBottom: 0 }}>
                            {window.innerWidth > 600 ?
                                <div className=''>
                                    <Link to="/cart" >
                                        <i style={{ height: 40, marginTop: 12, marginRight: 40, color: 'white' }} className="material-icons right cartIcon" >shopping_cart</i>
                                        <span className="badge" style={{ marginTop: 2, color: 'white' }} >0</span>
                                    </Link>
                                </div>
                                : null
                            }
                            {/* PROFILE */}
                            {isAuthenticated ?
                                <div className='right ' style={{ lineHeight: '54px' }}>
                                    &nbsp;
                                    <span onMouseOver={() => PopupCard('profileDetail')} style={{ color: "#f0458cee", paddingLeft: "5px", fontWeight: 800, fontSize: 20 }}>
                                        <i class="fas fa-user-circle" style={{ marginTop: '0px !important', color: 'white', height: 25 }} ></i>
                                        {/* {userInfo.displayName} */}
                                    </span>
                                </div>
                                :
                                <div className='right black' style={{ lineHeight: '54px' }} > &nbsp;
                                    <span className="signInLink " style={{ color: 'white', paddingLeft: "5px", cursor: 'pointer', fontWeight: 800, fontSize: 20 }}
                                        onClick={() => PopupCard('signIn')} >
                                        <i class="fas fa-user-circle" style={{ marginTop: '0px !important', color: 'white', height: 25 }} ></i>
                                    </span>
                                </div>
                            }
                            <div className='right' style={{ lineHeight: '52px', marginTop: 2, paddingLeft: 10, paddingRight: 10 }} >
                                <i class="fas fa-bell" style={{ height: 25 }} ></i>
                            </div>
                            <div className='right' style={{ lineHeight: '54px', fontWeight: "bolder", paddingLeft: 10, paddingRight: 10 }}
                                onClick={
                                isAuthenticated?
                                    // () => window.location.replace('/openShop')
                                    () => this.props.history.push('/openShop')
                                    // to="/open-a-shop"
                                    :
                                    () => PopupCard('signIn')
                                }
                            >
                                Become a Seller New
                            </div>
                            <Link to="/" className='left' style={{ lineHeight: '54px', fontSize: 24, paddingLeft: 5, paddingRight: 0 }} >
                                Luwaay
                        </Link>
                            {/* Search */}
                            <div className="left hide-on-med-and-down" style={{ marginLeft: 200, marginTop: 4, height: 45, background: 'white', width: 480, border: "0px solid ", borderRadius: 10 }}>
                                <input id='navSearch' placeholder='Search for anything...' style={{ fontSize: "20px", outline: 'none', borderBottom: '0px', boxShadow: 'none', height: '25 !important', marginLeft: 5, display: 'inline', width: 420 }} type="search" />
                                <label style={{ display: 'inline-block', width: 50 }} className="label-icon black" htmlFor="navSearch"><i className="material-icons" style={{ marginTop: 5, height: 25, padding: 5 }}>search</i></label>
                            </div>
                        </div>

                        {/* another nav */}
                        <div className={window.pageYOffset < 500 ? "row upper-nav" : "hidden-navbar"} >
                            <ul style={{ display: 'flex', justifyContent: 'center' }} >
                                {subNavItems ?
                                    subNavItems.map((item) => {
                                        return (
                                            <li style={{
                                                padding: 10,
                                                display: 'flex',
                                                justifyContent: 'center',
                                                flexWrap: 'nowrap',
                                                color: 'black',
                                                fontWeight: 'bolder'
                                            }}>
                                                {item}
                                            </li>
                                        )
                                    })
                                    : null
                                }

                            </ul>
                        </div>
                    </div>
                </nav >
            </div>
        );
    }


    listItems(textArray) {

        let temp = [], i;

        for (i = 0; i < textArray.length; i++) {
            temp.push(
                <li key={i} style={{ fontWeight: "bold !important", marginRight: 10 }}><Link to={textArray[i]} >{textArray[i]}</Link></li>
            )
        }

        return temp;

    }

    componentWillMount() {
        return window.onresize = () => {
            if (window.innerWidth >= 715 || window.innerWidth < 715) {
                this.forceUpdate()
            }
        };
    }

    componentDidMount() {
        // hide all popup card
        hideAllOnStart();
    }
}

export default Nav;
