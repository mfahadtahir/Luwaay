import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles(theme => ({
    root: {
        width: '90%',
        margin: '2px auto'
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    }
}));



function getSteps() {
    return ['Personal', 'Shop', 'Payment', 'Finalizing'];
}

function getStepContent(step) {

    switch (step) {
        case 0:
            return (
                <div className='row center'>
                    <div className='col s12 m6 l3'>
                        <div className="input-field">
                            <input type="text" id="firstNameInput" className="autocomplete" />
                            <label htmlFor="firstNameInput">First Name</label>
                        </div>
                    </div>
                    <div className='col s12 m6 l3'>
                        <div className="input-field">
                            <input type="text" id="secondNameInput" className="autocomplete" />
                            <label htmlFor="secondNameInput">Last Name</label>
                        </div>
                    </div>

                    <div className='col s12 m6 l3'>
                        <div className="input-field">
                            <input type="text" id="phoneInput" className="autocomplete" />
                            <label htmlFor="phoneInput">Phone Number</label>

                        </div>
                    </div>
                    <div className='col s12 m6 l3'>
                        <div className="input-field">
                            <input type="text" id="countryInput" className="autocomplete" />
                            <label htmlFor="countryInput">Country</label>
                        </div>
                    </div>

                    <div className='col s12 m6 l4'>
                        <div className="input-field">
                            <input type="text" id="addInput" className="autocomplete" />
                            <label htmlFor="addInput">Address</label>
                        </div>
                    </div>


                    <div className='col s12 m6 l3'>
                        <div className="input-field">
                            <input type="text" id="stateInput" className="autocomplete" />
                            <label htmlFor="stateInput">State</label>
                        </div>
                    </div>

                    <div className='col s12 m6 l3'>
                        <div className="input-field">
                            <input type="text" id="cityInput" className="autocomplete" />
                            <label htmlFor="cityInput">City</label>
                        </div>
                    </div>

                    <div className='col s12 m6 l2'>
                        <div className="input-field">
                            <input type="text" id="postalInput" className="autocomplete" />
                            <label htmlFor="postalInput">Postal Code</label>
                        </div>
                    </div>
                </div >
            );
        case 1:
            return (
                <div className='row' >
                    <div className='col s12 m6 l4'>
                        <div className="input-field">
                            <input type="text" id="shopNameInput" className="autocomplete" />
                            <label htmlFor="shopNameInput">Shop Name</label>
                        </div>
                    </div>
                    <div className='col s12 m6 l4'>
                        <div className="input-field">
                            <input type="text" id="shopCatagoryInput" className="autocomplete" />
                            <label htmlFor="shopCatagoryInput">Shop Catagory</label>
                        </div>
                        {/* <div className="input-field">
                            <select>
                                <option value="" disabled selected>Choose your option</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                            <label>Materialize Select</label>
                        </div> */}
                    </div>
                    <div className='col s12 m12 l12' >
                        <Button variant="contained" component="label">Upload Shop Cover Picture
                        <input type="file" style={{ display: "none" }} />
                        </Button>
                    </div>
                </div>
            )
        case 2:
            return (
                <div className='row'>
                    <div className='col s12 m6 l4'>
                        <div className="input-field">
                            <input type="text" id="accountTypeInput" className="autocomplete" />
                            <label htmlFor="vInput">Account Type</label>
                        </div>

                        <div className="input-field">
                            <input type="text" id="cardInput" className="autocomplete" />
                            <label htmlFor="cardInput">Credit Card Number</label>
                        </div>

                    </div>
                </div>
            )
        default:
            return (
                <blockquote>
                    <input style={{color: 'blue'}} type="checkbox" class="filled-in" />
                    <span>Accept all Terms and Conditions</span>
                </blockquote>
            );
    }
}

export default function VerticalLinearStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    function handleNext() {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    }

    function handleBack() {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    }

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                            <Typography>{getStepContent(index)}</Typography>
                            <div className={classes.actionsContainer}>
                                <div>
                                    <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>Back </Button>
                                    <Button variant="contained" color="primary" onClick={handleNext} className={classes.button}>
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
}
