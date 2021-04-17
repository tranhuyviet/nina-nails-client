import React from 'react';
import { Typography, Button, Divider } from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import ReviewForm from '../ReviewForm/ReviewForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({ shippingData, checkoutToken, backStep, nextStep, handleCaptureCheckout, timeout }) => {
    // console.log('shippingdata', checkoutToken.live.line_items);
    // const [total, setTotal] = useState(0);

    // let taxTotal = 0;
    // for (const item of checkoutToken.live.line_items) {
    //     const taxItem = item.line_total.raw * 0.21;
    //     taxTotal += taxItem;
    // }

    // console.log('Taxt total', taxTotal.toFixed(2));
    let taxTotal = 0;
    if (shippingData.vat || shippingData.vat.length > 0) {
    } else {
        checkoutToken.live.line_items.map((item) => {
            const tax = item.line_total.raw * 0.21;
            item.line_total.raw = item.line_total.raw + tax;
            item.price.raw = item.price.raw = tax;
            item.tax.amount = tax;
            taxTotal += tax;
            // total += item.line_total.raw;
        });
        checkoutToken.live.tax.amount.raw = taxTotal.toFixed(2);
        // checkoutToken.live.total.raw = (total + shippingData.shippingCost).toFixed(2);
    }

    checkoutToken.live.total.raw = checkoutToken.live.total.raw + taxTotal + shippingData.shippingCost;

    // console.log('checkout Token updated', checkoutToken, taxTotal, checkoutToken.live.total.raw);
    const handleSubmit = async (event, elements, stripe) => {
        event.preventDefault();
        if (!stripe || !elements) return;

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });
        const vatName = shippingData.vat.length > 0 ? `VAT Number: ${shippingData.vat}` : 'No VAT Number';

        if (error) {
            console.log(error);
        } else {
            const orderData = {
                line_items: checkoutToken.live.line_items,
                customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email, meta: { vat: shippingData.vat } },
                shipping: {
                    name: vatName,
                    street: shippingData.address1,
                    town_city: shippingData.city,
                    country_state: shippingData.shippingSubdivision,
                    postal_zip_code: shippingData.zip,
                    country: shippingData.shippingCountry,
                },
                fulfillment: { shipping_method: shippingData.shippingOption },
                payment: {
                    gateway: 'stripe',
                    stripe: {
                        payment_method_id: paymentMethod.id,
                    },
                },
                // discount_code: shippingData.vat,
                pay_what_you_want: checkoutToken.live.total.raw,
            };

            handleCaptureCheckout(checkoutToken.id, orderData);
            timeout();
            nextStep();
            taxTotal = 0;
        }
    };

    return (
        <>
            <ReviewForm checkoutToken={checkoutToken} shippingData={shippingData} />
            <Divider />
            <Typography variant="h6" gutterBottom margin={{ margin: '20px 0' }}>
                Payment method
            </Typography>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({ elements, stripe }) => (
                        <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                            <CardElement />
                            <br />
                            <br />
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Button variant="outlined" onClick={backStep}>
                                    Back
                                </Button>
                                <Button type="submit" variant="contained" color="primary">
                                    {/* Pay {checkoutToken.live.total.formatted_with_symbol} */}
                                    Pay
                                </Button>
                            </div>
                        </form>
                    )}
                </ElementsConsumer>
            </Elements>
        </>
    );
};

export default PaymentForm;
