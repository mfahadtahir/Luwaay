import React from 'react';
import { Link } from 'react-router-dom';

class NavLinks extends React.Component {
    render() {
        return (
            <div>
            <ul id="nav-mobile"
                style={{
                    width: "60%",
                    marginRight: 140
                }}
                className=" hide-on-med-and-down container">
                {this.listItems()}
        </ul>
     </div>
        )
    }

    listItems() {

        let temp = [], i;

        for (i = 0; i < this.props.text.length; i++) {

            if (this.props.active === this.props.text[i]) {
                temp.push(
                    <li key={i} id={this.props.text[i]}>
                        <Link to={this.props.text[i]}
                         className="active waves-effect waves-light">
                            {this.props.text[i]}
                        </Link>
                        <div className='navDiv' ></div>
                    </li>
                )
            }
            else {
                temp.push(
                    <div key={i} id='navDropDown' >
                    <li  id={this.props.text[i]}>
                        <Link to={this.props.text[i]} 
                         className="waves-effect waves-light">
                            {this.props.text[i]}
                        </Link>
                    </li>
                    </div>
                );
            }
        }
        return temp;
    }

    componentWillMount() {
        this.listItems()
    }
    
}

export default NavLinks;