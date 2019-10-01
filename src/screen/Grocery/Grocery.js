import React from 'react';
import Nav from '../../component/global/nav';
import M from 'materialize-css';
import Header from '../../component/global/header';
import Footer from '../../component/global/footer';
import { CheckAndRender } from '../../component/global/partials/menu';

class Grocery extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            prevScrollpos: 0,
            visible: true
        }
    }
    render() {
        var { isAuthenticated, userInfo} = this.props;
        return (
            <div>
                <Nav isAuthenticated={isAuthenticated} userInfo={userInfo} activeLink="Face & Body" visible={this.state.visible}/>
                <Header text='faceBody'/>
                <Footer />
            </div>
        )
    }

    componentWillUnmount() {
        window.removeEventListener("scroll",this.handleScroll);
      }
    
      // Hide or show the menu.
      handleScroll = () => {
        var {prevScrollpos} = this.state;
        var currentScrollPos = window.pageYOffset;
        
        var visible = prevScrollpos > currentScrollPos ;
        this.setState({
          prevScrollpos: currentScrollPos,
          visible
        });
    }

    componentDidMount() {

        CheckAndRender('FAB')

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

}

export default Grocery;