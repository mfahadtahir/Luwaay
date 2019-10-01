import React from 'react';
import { Link } from 'react-router-dom';
import { PopupCard } from '../popupCard';

class SideNav extends React.Component {
    render() {
        return (
            <ul className="sidenav collapsible" id="mobile-demo">
                {this.listItems()}
            </ul>
        )
    }

    listItems() {
        let temp = [], i;
        
        for (i = 0; i < this.props.text.length; i++) {

            if (this.props.active === this.props.text[i]) {
                temp.push(
                    <li key={i} id={this.props.text[i]} >
                       <Link to={this.props.text[i]} className="active waves-effect waves-light sidenav-close">
                            {this.props.text[i]}
                            {this.props.text[i] === 'Clothing' ? 
                            <img alt='' src={require('../../../images/dress.svg')} className='svgIcon right' />: 
                            this.props.text[i] === 'Accessories' ?
                            <img alt='' src={require('../../../images/handbag-elegant-design.svg')} className='svgIcon right' /> :
                            this.props.text[i] === 'Face & Body' ?
                            <img alt='' src={require('../../../images/beauty-products.svg')} className='svgIcon right' />
                            : this.props.text[i] === 'Nails' ?
                            <img alt='' src={require('../../../images/nail-polish-bottle.svg')} className='svgIcon right' /> :
                            this.props.text[i] === 'Shoes' ?
                            <img alt='' src={require('../../../images/high-heel.svg')} className='svgIcon right' /> 
                            : null}
                        </Link>
                    </li>

                )
            }
            else {
                temp.push(
                    <li key={i} id={this.props.text[i]} >
                      <Link to={this.props.text[i] === 'Help & Contact' ? '#!' :`${this.props.text[i]}`} onClick={() => this.props.text[i] === 'Help & Contact' ? PopupCard('contact') : ''} className="waves-effect waves-light sidenav-close">
                            {this.props.text[i]}
                            {this.props.text[i] === 'Clothing' ? 
                            <img alt='' src={require('../../../images/dress.svg')} className='svgIcon right' />: 
                            this.props.text[i] === 'Accessories' ?
                            <img alt='' src={require('../../../images/handbag-elegant-design.svg')} className='svgIcon right' /> :
                            this.props.text[i] === 'Face & Body' ?
                            <img alt='' src={require('../../../images/beauty-products.svg')} className='svgIcon right' />
                            : this.props.text[i] === 'Nails' ?
                            <img alt='' src={require('../../../images/nail-polish-bottle.svg')} className='svgIcon right' /> :
                            this.props.text[i] === 'Shoes' ?
                            <img alt='' src={require('../../../images/high-heel.svg')} className='svgIcon right' /> 
                            : null}
                        </Link>
                    </li>
                )
            }
        }

        return temp;
    }
}

export default SideNav;