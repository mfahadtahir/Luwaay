import React from 'react';
import Nav from '../../component/global/nav';
import M from 'materialize-css';
import Footer from '../../component/global/footer';
import { CheckAndRender } from '../../component/global/partials/menu';
import wallpaper from "../../images/food_home.jpg";
import veges from "../../images/vegetable.jpg";
import eggs from "../../images/eggs.jpg";
import organics from "../../images/organic.jpg";
import beverages from "../../images/beverages.jpg";
import iceCream from "../../images/ice-cream.jpg";
import fruits from "../../images/fruits.jpg";
import newArrivalPoster1 from "../../images/Food/RedPeper1.jpg";
import newArrivalPoster2 from "../../images/Food/fotolia_52283514_subscription_xl-copy.jpg";
import newArrivalPoster3 from "../../images/Food/RedPeper1.jpg";
import {FeaturesProductFood} from './ShowCaseCards/Featured'
import {PopularInYourArea} from './ShowCaseCards/PopularInArea'
import { Vegans } from './ShowCaseCards/vegans';
import { Orgnics } from './ShowCaseCards/Organics';
import { Frozen } from './ShowCaseCards/Frozen';
import { Pantry } from './ShowCaseCards/Pantry';
import { Snacks } from './ShowCaseCards/Snacks';
import { Beverages } from './ShowCaseCards/Beverages';
import { DairyAndEggs } from './ShowCaseCards/Dairy&Eggs';


class Food extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prevScrollpos: 0,
            visible: true
        }
    }
    render() {
        const foodNavItems = ['vegetables', 'fruits', 'eggs', 'organics'];
        var { isAuthenticated, userInfo, } = this.props;
        return (
            <div>
                <Nav subNavItems={foodNavItems} isAuthenticated={isAuthenticated} userInfo={userInfo} activeLink="Nails" />
                <div style={{ height: 80 }}>
                </div>
                <img style={{ width: '100%' }} src={wallpaper} alt='' />
                {this.selectBar()}
                {this.catagoryItems()}
                {this.newArriavalFood()}
                <PopularInYourArea />
                <FeaturesProductFood />
                <Vegans />
                <Orgnics/>
                <Frozen />
                <Pantry />
                <Snacks />
                <Beverages />
                <DairyAndEggs />
                <Footer />
            </div >
        )
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    // Hide or show the menu.
    handleScroll = () => {
        var { prevScrollpos } = this.state;
        var currentScrollPos = window.pageYOffset;

        var visible = prevScrollpos > currentScrollPos;
        this.setState({
            prevScrollpos: currentScrollPos,
            visible
        });
    }

    componentDidMount() {

        CheckAndRender('Nails')

        window.addEventListener("scroll", this.handleScroll);
        let select = document.querySelectorAll('select'),
            sidenav = document.querySelectorAll('.sidenav'),
            collapsible = document.querySelectorAll('.collapsible'),
            dropdown = document.querySelectorAll('.dropdown-trigger'),
            tabs = document.querySelectorAll('.tabs'),
            materialBox = document.querySelectorAll('materialboxed');


        M.Dropdown.init(dropdown);
        M.FormSelect.init(select);
        M.Sidenav.init(sidenav);
        M.Collapsible.init(collapsible);
        M.Tabs.init(tabs);
        M.Materialbox.init(materialBox);

    }

    selectBar() {
        const { userInfo } = this.props;
        return (
            <div>
                <div className='row' style={{ width: '100%', padding: 10, fontWeight: 'bolder' }}>
                    <div className="col s12 m4 l3 input-field" style={{ width: 200, margin: 0 }}>
                        <select>
                            <option selected value="1">City Market</option>
                            <option value="2">Food Marka Market</option>
                            <option value="3">Take it All Market</option>
                        </select>
                    </div>
                    <div className='col s12 m4 l3 valign-wrapper' style={{}}>
                        <p> Your Cart: $00.00</p>
                    </div>
                    <div className='col s12 m4 l3 valign-wrapper right' style={{ width: 200 }}>
                        <p>
                            Deliver to {userInfo.displayName}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
    catagoryItems() {
        return (
            <div className='center' >
                <div className='row' style={{ width: '80%' }}>
                    <div className='col s12 m4 l2'>
                        <img src={veges} style={catagoryStyle} alt='' />
                        <p>vegetables</p>
                    </div>
                    <div className='col s12 m4 l2'>
                        <img src={eggs} style={catagoryStyle} alt='' />
                        <p>eggs</p>
                    </div>
                    <div className='col s12 m4 l2'>
                        <img src={organics} style={catagoryStyle} alt='' />
                        <p>organics</p>
                    </div>
                    <div className='col s12 m4 l2'>
                        <img src={beverages} style={catagoryStyle} alt='' />
                        <p>beverages</p>
                    </div>
                    <div className='col s12 m4 l2'>
                        <img src={iceCream} style={catagoryStyle} alt='' />
                        <p>iceCream</p>
                    </div>
                    <div className='col s12 m4 l2'>
                        <img src={fruits} style={catagoryStyle} alt='' />
                        <p>fruits</p>
                    </div>
                </div>
            </div>
        )
    }
    newArriavalFood() {
        return (
            <div>

                <div className="container center" style={{ width: '80%' }}>
                    <div className='row center' ><h3>New Arrivals by Catagories</h3></div>

                    <div className='row' >
                        <div className="col s12 m4">
                            <div className="card">
                                <div className="card-image">
                                    <img src={newArrivalPoster1} style={{ height: 300 }} alt='' />
                                </div>
                                <div className="card-content">
                                    <p>$ 19.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m4" >
                            <div className="card">
                                <div className="card-image">
                                    <img src={newArrivalPoster2} style={{ height: 300 }} alt='' />
                                </div>
                                <div className="card-content">
                                    <p>$ 19.00</p>
                                </div>
                            </div>
                        </div>

                        <div className="col s12 m4">
                            <div className="card">
                                <div className="card-image">
                                    <img src={newArrivalPoster3} style={{ height: 300 }} alt='' />
                                </div>
                                <div className="card-content">
                                    <p>$ 19.00</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

const catagoryStyle = {
    border: '0px solid',
    borderRadius: '100%',
    width: "100%",
    height: 130
}
export default Food;