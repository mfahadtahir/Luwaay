import React from 'react';

class OpenShopForm extends React.Component {

    render() {
        // let { isAuthenticated, userInfo } = this.props;
        return (
            <div style={{ width: '80%', margin: '3px auto' }}>
                <h4 > Submit Your Form Now  </h4>
                <div className="row" style={{ marginBottom: '0px' }}>
                    <div className="col s12 m4 l4">
                        <div className="row">
                            <div className="input-field col s12">
                                <input type="text" id="firstNameInput" className="autocomplete" />
                                <label htmlFor="firstNameInput">First Name</label>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4 l4">
                        <div className="row">
                            <div className="input-field col s12">
                                <input type="text" id="lastNameInput" className="autocomplete" />
                                <label htmlFor="lastNameInput">Last Name</label>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4 l4">
                        <div className="row">
                            <div className="input-field col s12">
                                <input type="text" id="shopNameInput" className="autocomplete" />
                                <label htmlFor="shopNameInput">Shop Name</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row" style={{ marginBottom: '0px' }}>
                    <div className="col s12 m8 l8">
                        <div className="row">
                            <div className="input-field col s12">
                                <input type="text" id="addressInput" className="autocomplete" />
                                <label htmlFor="addressInput">Address</label>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4 l4">
                        <div className="row">
                            <div className="input-field col s12">
                                <input type="text" id="phoneInput" className="autocomplete" />
                                <label htmlFor="phoneInput">Phone Number</label>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row" style={{ marginBottom: '0px' }}>
                    <div className="col s12 m6 l4">
                        <div className="row">
                            <div className="input-field col s12">
                                <input type="text" id="countryInput" className="autocomplete" />
                                <label htmlFor="countryInput">Country</label>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6 l3">
                        <div className="row">
                            <div className="input-field col s12">
                                <input type="text" id="stateInput" className="autocomplete" />
                                <label htmlFor="stateInput">State</label>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6 l3">
                        <div className="row">
                            <div className="input-field col s12">
                                <input type="text" id="cityInput" className="autocomplete" />
                                <label htmlFor="cityInput">City</label>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6 l2">
                        <div className="row">
                            <div className="input-field col s12">
                                <input type="text" id="postalCodeInput" className="autocomplete" />
                                <label htmlFor="postalCodeInput">Postal Code</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row center' >
                    <button class="btn waves-effect waves-light indigo darken-4" type="submit" name="action">Submit
                    <i class="material-icons right">&nbsp; &nbsp; send</i>
                    </button>
                </div>
            </div>
        )
    }
}

export default OpenShopForm;