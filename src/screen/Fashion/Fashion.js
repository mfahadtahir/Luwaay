import React from 'react';
import Nav from '../../component/global/nav';
import M from 'materialize-css';
import Header from '../../component/global/header';
import Footer from '../../component/global/footer';
// import { CheckAndRender } from '../../component/global/partials/menu';
import SearchCard from '../../component/global/searchCard';
import ItemCard from '../../component/RenderCards/itemCard';

class Fashion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prevScrollpos: 0,
            visible: true
        }
    }

    render() {
        var { isAuthenticated, userInfo} = this.props,
        ClothesNavItems = ['Acessory', 'Women', 'Men', 'Kids', 'Baby', 'Beauty'];
        return (
            <div>
                <Nav subNavItems={ClothesNavItems} isAuthenticated={isAuthenticated} userInfo={userInfo} visible={this.state.visible} />
                <Header text='clothing' />
                <div className='row'>
                    <div className='col m12 m12 l12'>
                        <SearchCard value={'Clothing'} />
                        <ItemCard />
                    </div>
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
        
        // CheckAndRender('Clothing')

        window.addEventListener("scroll", this.handleScroll);
        //JQuery Initialization
        let select = document.querySelectorAll('select'),
            sidenav = document.querySelectorAll('.sidenav'),
            collapsible = document.querySelectorAll('.collapsible'),
            dropdown = document.querySelectorAll('.dropdown-trigger'),
            tabs = document.querySelectorAll('.tabs');

        M.Dropdown.init(dropdown)
        M.Sidenav.init(sidenav);
        M.Collapsible.init(collapsible);
        M.Tabs.init(tabs);
        M.FormSelect.init(select);
    }

}

export default Fashion;