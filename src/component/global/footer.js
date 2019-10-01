import React from 'react';
import FontAwesomeIcons from './fontAwesomeIcons';
import { Link } from 'react-router-dom';

class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            linkText: [],
            show: false,
            socialClasses: ["fab fa-facebook-f", "fab fa-twitter"
                , "fab fa-google-plus-g", "fab fa-linkedin-in"]
        }
    }
    render() {

        return (
            <footer className="container-fluid footer">
                <div className="container container-first">
                    <div className="row">
                        <div className="col hide-on-med-and-down l1"></div>
                        {this.first()}
                        {this.second()}
                        {this.third()}
                        {this.forth()}
                        {this.fifth()}
                        <div className="col hide-on-med-and-down l1"></div>
                    </div>
                </div>
                <div className="container footer-second-container">
                    <div className="divider"></div>
                    <div className="row">
                        <div className="col s8 offset-s2">
                            <h4 style={{ fontWeight: "bold", color: "#f35698", letterSpacing: 10 }}>LUWAAY</h4>
                            {/* <div>
                                {this.renderIcons()}
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className='center' style={{ padding: 10, background: 'lightgrey', color: 'black', letterSpacing: 5, fontWeight: 'bolder' }}>
                    <p ><b> &copy; 2019 Luwaay.com, LLC. All rights reserved <a href='!#'>Conditions of Use</a> | <a href='!#'>Privacy Notice</a> </b></p>
                </div>
            </footer>
        )
    }

    first() {
        return (
            <div className="col s12 m6 l2">
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <h5 style={{ fontSize: 20 }}>Support</h5>
                            <div className="divider"></div>
                            <div className="row">
                                <div className="col s12">
                                    <ul>
                                        {this.getList()}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

    second() {
        return (
            <div className="col s12 m6 l2">
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <h5 style={{ fontSize: 20 }}>Sell</h5>
                            <div className="divider"></div>
                            <div className="row">
                                <div className="col s12">
                                    <ul>
                                        {this.getList2()}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    third() {
        return (
            <div className="col s12 m6 l2">
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <h5 style={{ fontSize: 20 }}>About</h5>
                            <div className="divider"></div>
                            <div className="row">
                                <div className="col s12">
                                    <ul>
                                        {this.getList3()}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    forth() {
        return (
            <div className="col s12 m6 l2">
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <h5 style={{ fontSize: 20 }}>Services</h5>
                            <div className="divider"></div>
                            <div className="row">
                                <div className="col s12">
                                    <ul>

                                        {this.getList4()}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    fifth() {
        return (
            <div className="col s12 m6 l2">
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <h5 style={{ fontSize: 20 }} >Follow Us</h5>
                            <div className="divider"></div>
                            <div className="row">
                                <div className="col s12">
                                    <ul>
                                        {this.getList5()}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    getList() {
        const linkText = ['Help & contact', 'Shipping Center', 'Return Center', 'FAQ']

        let temp = [];
        for (let i = 0; i < linkText.length; i++) {

            temp.push(
                <li key={i} >
                    <Link to="#!" style={{ fontSize: 12 }} className="footer-link">
                        {linkText[i]}
                    </Link>
                </li>
            )
        }
        return temp
    }

    getList2() {
        var linkText = ['Sell on Luwaay', 'Forums ', 'Affiliate'];
        var temp2 = [];
        for (let i = 0; i < linkText.length; i++) {
            temp2.push(
                <li key={i} style={{ fontSize: 11 }} >
                    <Link to="#!" className="footer-link">
                        {linkText[i]}
                    </Link>
                </li>
            )
        }
        return temp2
    }
    getList3() {
        var linkText = ['Luwaay.Inc', 'Policies ', 'Blog', 'Advertise with us'];
        var temp3 = [];
        for (let i = 0; i < linkText.length; i++) {
            temp3.push(
                <li key={i} >
                    <Link to="#!" style={{ fontSize: 12 }} className="footer-link">
                        {linkText[i]}
                    </Link>
                </li>
            )
        }
        return temp3
    }

    getList4() {
        const linkText = ['Stores', 'Grocery', 'Kitchen & Recipe', 'Top Service']
        let temp = [];
        for (let i = 0; i < linkText.length; i++) {
            temp.push(
                <li key={i} >
                    <Link to="#!" style={{ fontSize: 12 }} className="footer-link">
                        {linkText[i]}
                    </Link>
                </li>
            )
        }
        return temp
    }
    getList5() {
        let temp = [];
        for (let i = 0; i < 4; i++) {
            temp.push(
                <li key={i} >
                    <Link to="#!" style={{ fontSize: 11 }} className="footer-link">
                        <a key={i} className="btn-floating btn-small"  style={{ height: 30, width: 30, marginLeft: 20 }} href="#!">
                            <FontAwesomeIcons iconClasses={this.state.socialClasses[i]} />
                        </a>
                    </Link>
                </li>
            )
        }
        return temp
    }
}

export default Footer;