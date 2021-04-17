import { Button, CircularProgress, Divider, Paper, Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useCart } from '../../context';
import AddressForm from './AddressForm/AddressForm';
import PaymentForm from './PaymentForm/PaymentForm';
import { useStyles } from './styles';
import { refreshCart, captureCheckout, generateToken, getLiveToken } from '../../lib/api';
// import { commerce } from '../../lib/commerce';

const steps = ['Shipping address', 'Payment details'];

const CheckoutPage = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({});
    const [isFinish, setIsFinish] = useState(false);
    const history = useHistory();

    const { cart, setCart } = useCart();
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const generateTokenFun = async () => {
            try {
                const token = await generateToken(cart.id);
                setCheckoutToken(token);
            } catch (error) {
                history.push('/');
            }
        };
        generateTokenFun();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // useEffect(() => {
    //     const generateToken = async () => {
    //         try {
    //             console.log('cart id', cart.id);
    //             const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
    //             console.log(token);
    //             setCheckoutToken(token);
    //         } catch (error) {
    //             console.log(error);
    //             history.push('/');
    //         }
    //     };
    //     generateToken();
    // }, []);

    const nextStep = () => setActiveStep((prev) => prev + 1);
    const backStep = () => setActiveStep((prev) => prev - 1);

    const next = async (data) => {
        setShippingData(data);
        await getLiveToken(checkoutToken.id);
        nextStep();
    };

    const timeout = () => {
        setTimeout(() => {
            setIsFinish(true);
        }, 8000);
    };

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const capture = await captureCheckout(checkoutTokenId, newOrder);
            // console.log('capture', capture);
            setOrder(capture);
            setCart(refreshCart());
        } catch (error) {
            setErrorMessage(error.data.error.message);
        }
    };

    let Confirmation = () =>
        order.customer ? (
            <>
                <div>
                    <Typography variant="h6">
                        Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}
                    </Typography>

                    <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
                </div>
                <br />
                <Button variant="outlined" type="button" component={Link} to="/home">
                    Back to Home
                </Button>
            </>
        ) : isFinish ? (
            <>
                <div>
                    <Typography variant="h6">Something went wrong with your payment. Please try again.</Typography>
                    <Divider className={classes.divider} />
                </div>
                <br />
                <Button variant="outlined" type="button" component={Link} to="/home">
                    Back to Home
                </Button>
            </>
        ) : (
            <div className={classes.spinner}>
                <CircularProgress />
            </div>
        );

    if (errorMessage) {
        <>
            <Typography variant="h5">Error: {errorMessage}</Typography>
            <br />
            <Button variant="outlined" type="button" component={Link} to="/">
                Back to Home
            </Button>
        </>;
    }

    // console.log('checkout token', checkoutToken);

    return (
        <>
            {checkoutToken && (
                <div className={classes.checkoutPage}>
                    <Paper className={classes.paper}>
                        <Typography align="center" className={classes.title}>
                            Checkout
                        </Typography>
                        <Stepper activeStep={activeStep} className={classes.stepper}>
                            {steps.map((step) => (
                                <Step key={step}>
                                    <StepLabel>{step}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        {/* {activeStep === steps.length ? <Confirmation /> : checkoutToken ? <p>Hello</p> : <p>Cac</p>} */}
                        {activeStep === 0 && <AddressForm checkoutToken={checkoutToken} next={next} />}
                        {activeStep === 1 && (
                            <PaymentForm
                                shippingData={shippingData}
                                checkoutToken={checkoutToken}
                                backStep={backStep}
                                nextStep={nextStep}
                                handleCaptureCheckout={handleCaptureCheckout}
                                timeout={timeout}
                            />
                        )}
                        {activeStep === steps.length && <Confirmation />}
                    </Paper>
                </div>
            )}
        </>
    );
};

export default CheckoutPage;
