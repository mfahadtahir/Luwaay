import React from 'react';
import Nav from '../global/nav';
import Footer from '../global/footer';
import { Link } from 'react-router-dom';

const prize = 10;

class CartCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quan: 1,
            prize: 0
        }
    }
    render() {
        var {quan, prize} = this.state
        
        return (

            <div className="" >
            <Nav />
            {window.innerWidth > 600 ? 
            <div> <br/> <br/> <br /> <br/> <br/><br/> </div> :
            <div> <br/> <br/> <br/> <br/> </div> }
            <div className="container" >
                <div className="row">
                    <div className="card col s12 m12 l12" >
                        <center> <h3 >0 Items In Your Cart </h3> </center>
                        <div className="container">
                            <div className="row ">
                                <div className="mobile-show col s12 m7 l7">
                                    Item
                        </div>
                                <div className="mobile-hide col s12 m3 l3">
                                    Quantity
                        </div>
                                <div className="mobile-hide col s12 m2 l2">
                                    Price
                        </div>
                            </div>
                        </div>
                        <div className="divider" ></div>
                        <div className="container" >
                            <div className="row" style={{ paddingTop: 20 }}>
                                <div className="col s12 m7 l7">
                                    <img className="col s4 m4 l4 item-img" src="https://static3.cilory.com/273124-thickbox_default/nologo-navy-casual-shirt.jpg" alt="" />
                                    <div className="col s8 m8 l8">
                                        <span className="btn btn-primary col s12 m12 l12 pink-bg "> Remove <i className="material-icons right">close</i></span>
                                        <h5 className="col s12 m12 l12" >Green Shirt</h5>
                                        <p className="col s12 m12 l12" >Men BK3569</p>
                                    </div>
                                </div>
                                
                                <div className="col s6 m3 l3">
                                    <div className="row">
                                        <button className="plus" onClick={() => this.Increase()}>+</button>
                                        <span className="quantity" >{quan}</span>
                                        <button className="minus" onClick={() => this.Decrease()}>-</button>
                                    </div>
                                </div>
                                <div className="col s3 m2 l2">
                                    $ {parseFloat(prize).toFixed(2)}
                                </div>

                            </div>
                            <div className="row grey-bg">
                                <button className="btn btn-large btn-primary col s10 m5 l3 left pink-bg" onClick={() => window.history.back()}>Back To Shop</button>
                                <button className="btn btn-large btn-primary col s10 m5 l3 right white" ><Link to='/checkout'>CheckOut</Link></button>
                            </div>
                        </div>
                    </div>
                  </ div>
                  </ div>
                  <Footer />
              </div> 
        )
    }
    Increase = (id) => {
        var {quan} = this.state
        quan += 1
        this.setState({
            quan: quan,
            prize: prize*quan 
        })
        
    }
    Decrease = (id) => {
        var {quan} = this.state;
        var updatedPrize = this.state.prize;
        if(quan > 1){
            quan -= 1 
            this.setState({
                quan: quan,
                prize: updatedPrize/quan
            })

        }else {
            this.setState({
                quan: 1 
            })

        }
    }
}

export default CartCard;