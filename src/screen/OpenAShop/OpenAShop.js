import React from 'react';
import Nav from '../../component/global/nav';
import M from 'materialize-css';
import Footer from '../../component/global/footer';
// import { MStepper } from 'materialize-stepper'
import StepperList from './stepperList'
// import OpenShopForm from './OpenShopForm'
// import { CheckAndRender } from '../../component/global/partials/menu';
import "../../index.css";
// import FormStepper from './OpenAShopStepper';
class OpenAShop extends React.Component {
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
            <div>
                <Nav style={{ top: 0 }} isAuthenticated={isAuthenticated} userInfo={userInfo} />
                <div style={{ height: '60px' }} ></div>
                {/* <OpenShopForm isAuthenticated={isAuthenticated} userInfo={userInfo}/> */}
                {/* {this.formSlider()} */}
                {/* <StepperList /> */}
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

        // CheckAndRender('FAB')

        window.addEventListener("scroll", this.handleScroll);
        //JQuery Initialization
        let select = document.querySelectorAll('select'),
            // sidenav = document.querySelectorAll('.sidenav'),
            // collapsible = document.querySelectorAll('.collapsible'),
            // dropdown = document.querySelectorAll('.dropdown-trigger'),
            tabs = document.querySelectorAll('.tabs');
            // var stepper = document.querySelector('.stepper');
            // var stepperInstace = new MStepper(stepper, {
               // options
            //    firstActive: 0 // this is the default
            // })
            
        // M.Dropdown.init(dropdown)
        M.FormSelect.init(select);
        // M.Sidenav.init(sidenav);
        // M.Collapsible.init(collapsible);
        M.Tabs.init(tabs);
    }

    formSlider() {
        return (
            <div className='center' style={{ width: '90%', margin: '0px auto' }} >
                <ul className="stepper horizontal">
                    <li className="step active">
                        <div className="step-title waves-effect">Personal Information</div>
                        <div className="step-content">
                            {/* <!-- Your step content goes here (like inputs or so) --> */}
                            Step 1
                            <div className="step-actions">
                                {/* <!-- Here goes your actions buttons --> */}
                                <button className="waves-effect waves-dark btn next-step">CONTINUE</button>
                            </div>
                        </div>
                    </li>
                    <li className="step">
                        <div className="step-title waves-effect">Additional Information</div>
                        <div className="step-content">
                            Step 2
                            {/* <!-- Your step content goes here (like inputs or so) --> */}
                            <div className="step-actions">
                                {/* <!-- Here goes your actions buttons --> */}
                                <button className="waves-effect waves-dark btn next-step">CONTINUE</button>
                            </div>
                        </div>
                    </li>
                    <li className="step">
                        <div className="step-title waves-effect">Images</div>
                        <div className="step-content">
                            Step 3
                            {/* <!-- Your step content goes here (like inputs or so) --> */}
                            <div className="step-actions">
                                {/* <!-- Here goes your actions buttons --> */}
                                <button className="waves-effect waves-dark btn next-step">CONTINUE</button>
                            </div>
                        </div>
                    </li>
                    <li className="step">
                        <div className="step-title waves-effect">Payment Information</div>
                        <div className="step-content">
                            Step 4
                            {/* <!-- Your step content goes here (like inputs or so) --> */}
                            <div className="step-actions">
                                {/* <!-- Here goes your actions buttons --> */}
                                <button className="waves-effect waves-dark btn next-step">CONTINUE</button>
                            </div>
                        </div>
                    </li>
                    <li className="step">
                        <div className="step-title waves-effect">Finalizing Shop</div>
                        <div className="step-content">
                            Step 5
                            {/* <!-- Your step content goes here (like inputs or so) --> */}
                            <div className="step-actions">
                                {/* <!-- Here goes your actions buttons --> */}
                                <button className="waves-effect waves-dark btn next-step">CONTINUE</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}


export default OpenAShop;