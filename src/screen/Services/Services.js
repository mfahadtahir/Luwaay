import React from 'react';
import Nav from '../../component/global/nav';
import M from 'materialize-css';
import Footer from '../../component/global/footer';
import { CheckAndRender } from '../../component/global/partials/menu';
import photographer from "../../images/Services/photographer.jpg";
import makeup from "../../images/Services/makeupArtists.jpg";
import Wedding from "../../images/Services/weddingLawn.jpg";
import eventDj from "../../images/Services/eventDj.jpg";
import babySitting from "../../images/Services/babySitting.jpg";
import translation from "../../images/Services/translation.jpg";
import wallpaper from '../../images/Services/Header.jpg'
import {ProductSlider} from "./ProductSlider/ProductSlider"
import {CatagorySliderImages} from "../Food/ShowCaseCards/images"
class Services extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prevScrollpos: 0,
            visible: true
        }
    }
    render() {
        const servicesNavItems = ['Photographer', 'Wedding Services', 'Makeup', 'Event Dj', 'Baby Sitter', 'Translation'];
        var { isAuthenticated, userInfo } = this.props;
        return (
            <div>
                <Nav subNavItems={servicesNavItems} isAuthenticated={isAuthenticated} userInfo={userInfo} visible={this.state.visible} />
                <div style={{ height: 80 }}></div>
                <img style={{ width: '100%' }} src={wallpaper} alt='' />
                {this.catagoryItems()}
                <div className="container center" style={{ width: '90%' }}>
                    <div className='row' ><h4 style={{ textAlign: 'left' }} >Vegetables</h4></div>
                    <ProductSlider data={CatagorySliderImages} />
                </div>

                <div className="container center" style={{ width: '90%' }}>
                    <div className='row' ><h4 style={{ textAlign: 'left' }} >Best Seller</h4></div>
                    <ProductSlider data={CatagorySliderImages} />
                </div>

                <div className="container center" style={{ width: '90%' }}>
                    <div className='row' ><h4 style={{ textAlign: 'left' }} >Wedding Services</h4></div>
                    <ProductSlider data={CatagorySliderImages} />
                </div>
                <Footer />
            </div>
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
        CheckAndRender('Accessories')
        window.addEventListener("scroll", this.handleScroll);
        //JQuery Initialization
        let select = document.querySelectorAll('select'),
            sidenav = document.querySelectorAll('.sidenav'),
            collapsible = document.querySelectorAll('.collapsible'),
            dropdown = document.querySelectorAll('.dropdown-trigger'),
            tabs = document.querySelectorAll('.tabs');

        M.Dropdown.init(dropdown)
        M.FormSelect.init(select);
        M.Sidenav.init(sidenav);
        M.Collapsible.init(collapsible);
        M.Tabs.init(tabs);
    }

    catagoryItems() {
        return (
            <div class="row center" style={{ width: '80%' }}>

                <div class="col s12 m6 l4">
                    <div class="card">
                        <div class="card-image">
                            <img src={photographer} style={TopCatagoriesStyle} alt='' />
                            <span class="card-title">Photographer</span>
                        </div>
                    </div>
                </div>

                <div class="col s12 m6 l4">
                    <div class="card">
                        <div class="card-image">
                            <img src={makeup} alt='' style={TopCatagoriesStyle} />
                            <span class="card-title">Makeup Artists</span>
                        </div>
                    </div>
                </div>

                <div class="col s12 m6 l4">
                    <div class="card">
                        <div class="card-image">
                            <img src={Wedding} alt='' style={TopCatagoriesStyle} />
                            <span class="card-title">Wedding Services</span>
                        </div>
                    </div>
                </div>

                <div class="col s12 m6 l4">
                    <div class="card">
                        <div class="card-image">
                            <img src={eventDj} alt='' style={TopCatagoriesStyle} />
                            <span class="card-title">Event DJ</span>
                        </div>
                    </div>
                </div>

                <div class="col s12 m6 l4">
                    <div class="card">
                        <div class="card-image">
                            <img src={babySitting} alt='' style={TopCatagoriesStyle} />
                            <span class="card-title">Baby Sitting</span>
                        </div>
                    </div>
                </div>

                <div class="col s12 m6 l4">
                    <div class="card">
                        <div class="card-image">
                            <img src={translation} alt='' style={TopCatagoriesStyle} />
                            <span class="card-title">Translation</span>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
const TopCatagoriesStyle = {
    height: 200,
}
export default Services;