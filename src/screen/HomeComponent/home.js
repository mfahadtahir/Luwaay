import React, { Component } from 'react';
import M from 'materialize-css';

// -------Components
import Nav from '../../component/global/nav';
import Footer from '../../component/global/footer';
// import Cards from '../../component/RenderCards/HomeCards';
// import ImageSlider from '../../component/ImageSlider/slider';
import NewsLetter from '../../component/global/newsLetter';
import { PageLinks } from '../../component/global/PageLinks'
import { HomeCardList } from './HomeCardList.js';
import { TrendingFashion } from './TrendingFashion.js';
import { Blogs } from './Blogs'

// ---------Images
import firstAdd from '../../images/home/first_add.png'
import secondAdd from '../../images/home/second_add.png'
import sampleImage from "../../images/home/sampleCatagory.png";
import mainPoster from '../../images/home/mainPoster.jpg'
import { Reviews } from './Reviews';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prevScrollpos: 0,
            visible: true
        }

    }
    render() {
        var { isAuthenticated, userInfo } = this.props;
        return (
            <div className="app">
                <Nav isAuthenticated={isAuthenticated} userInfo={userInfo} visible={this.state.visible} />
                {/* <ImageSlider /> */}
                <img src={mainPoster} style={{ width: '100%', height: '-webkit-fill-available' }} alt='' />
                <PageLinks />
                <img style={{ width: '100%' }} src={firstAdd} alt='' />
                {this.ShopByCatagories()}

                <HomeCardList heading='Popular on right now' />
                <TrendingFashion />
                <HomeCardList heading='Featured'/>
                <img style={{ width: '100%' }} src={secondAdd} alt='' />
                <Reviews />
                <Blogs />
                <NewsLetter />
                <Footer />
            </div>)
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
        // CheckAndRender('home')
        window.addEventListener("scroll", this.handleScroll);
        //JQuery Initialization
        let select = document.querySelectorAll('select'),
            sidenav = document.querySelectorAll('.sidenav'),
            collapsible = document.querySelectorAll('.collapsible'),
            tabs = document.querySelectorAll('.tabs'),
            modal = document.querySelectorAll('.modal'),
            parallax = document.querySelectorAll('.parallax'),
            dropdown = document.querySelectorAll('.dropdown-trigger'),
            matiralbox = document.querySelectorAll('.materialboxed');

        M.Tabs.init(tabs);
        M.FormSelect.init(select);
        M.Sidenav.init(sidenav);
        M.Collapsible.init(collapsible);
        M.Modal.init(modal)
        M.Parallax.init(parallax)
        M.Dropdown.init(dropdown, {
            hover: true,
            constrainWidth: false,
            coverTrigger: false,
        })
        M.Materialbox.init(matiralbox);
        M.AutoInit();

    }
    ShopByCatagories() {
        return (
            <div className="row center" style={{ width: '80%' }}>
                <div className='row'>
                    <div className="col l1 hide-on-med-and-down" ></div>

                    <div className="col s6 m3 l2">
                        <div className="card-image">
                            <img src={sampleImage} style={TopCatagoriesStyle} alt='' />
                            <span className="card-title">Accessories</span>
                        </div>
                    </div>

                    <div className="col s6 m3 l2">
                        <div className="card-image">
                            <img src={sampleImage} alt='' style={TopCatagoriesStyle} />
                            <span className="card-title">Home Decor</span>
                        </div>
                    </div>

                    <div className="col s6 m3 l2">
                        <div className="card-image">
                            <img src={sampleImage} alt='' style={TopCatagoriesStyle} />
                            <span className="card-title">Make up</span>
                        </div>
                    </div>

                    <div className="col s6 m3 l2">
                        <div className="card-image">
                            <img src={sampleImage} alt='' style={TopCatagoriesStyle} />
                            <span className="card-title">Art and Craft</span>
                        </div>
                    </div>

                    <div className="col s6 m3 l2">
                        <div className="card-image">
                            <img src={sampleImage} alt='' style={TopCatagoriesStyle} />
                            <span className="card-title">Body and Bath</span>
                        </div>
                    </div>

                    <div className="col s6 m3 hide-on-large-only l2">
                        <div className="card-image">
                            <img src={sampleImage} style={TopCatagoriesStyle} alt='' />
                            <span className="card-title">Hair Care</span>
                        </div>
                    </div>

                    <div className="col s6 m3 hide-on-large-only l2">
                        <div className="card-image">
                            <img src={sampleImage} style={TopCatagoriesStyle} alt='' />
                            <span className="card-title">Jewelry</span>
                        </div>
                    </div>

                    <div className="col s6 m3 hide-on-large-only l2">
                        <div className="card-image">
                            <img src={sampleImage} style={TopCatagoriesStyle} alt='' />
                            <span className="card-title">Purse and Bag</span>
                        </div>
                    </div>

                    <div className="col s6 m3 hide-on-large-only l2">
                        <div className="card-image">
                            <img src={sampleImage} style={TopCatagoriesStyle} alt='' />
                            <span className="card-title">Shoes</span>
                        </div>

                    </div>

                    <div className="col s6 m3 hide-on-large-only l2">
                        <div className="card-image">
                            <img src={sampleImage} style={TopCatagoriesStyle} alt='' />
                            <span className="card-title">Deal</span>
                        </div>
                    </div>

                    <div className="col l1 hide-on-med-and-down" ></div>
                    <div className="col l1 hide-on-med-and-down" ></div>

                </div>
                {/*---------------New Row----------------*/}
                <div className='row hide-on-med-and-down'>

                    <div className="col  l1"></div>

                    <div className="col s6 m3 l2">
                        <div className="card-image">
                            <img src={sampleImage} style={TopCatagoriesStyle} alt='' />
                            <span className="card-title">Hair Care</span>
                        </div>
                    </div>

                    <div className="col s6 m3 l2">
                        <div className="card-image">
                            <img src={sampleImage} alt='' style={TopCatagoriesStyle} />
                            <span className="card-title">Jewelry</span>
                        </div>
                    </div>

                    <div className="col s6 m3 l2">
                        <div className="card-image">
                            <img src={sampleImage} alt='' style={TopCatagoriesStyle} />
                            <span className="card-title">Purse and Bag</span>
                        </div>
                    </div>

                    <div className="col s6 m3 l2">
                        <div>
                            <img src={sampleImage} alt='' style={TopCatagoriesStyle} />
                            <span className="card-title">Shoes</span>
                        </div>
                    </div>

                    <div className="col s6 m3 l2">
                        <div className="card-image">
                            <img src={sampleImage} alt='' style={TopCatagoriesStyle} />
                            <span className="card-title">Deal</span>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

const TopCatagoriesStyle = {
    padding: 20,
    // border: '4px solid black',
    // borderRadius: '100%'
    height: 150,
    display: 'block',
    textAlign: 'center'
}
export default Home;