import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton=({price})=>{
    const priceForStripe=price*100;
    const publishablekey='pk_test_51MOXssG0JFTDzSPNMEf9sSSShPa6FFM4OzhB2IOJbpR5YLGMze5mwvkLXVT8a6oZGVPDv5Gr9MFOM6Bj4DuLZDvt00xYWP5MWA';
    
   const onToken=token=>{
        console.log(token);
        alert('Payment Successful');
    }
    return(
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="../../../images/IMG_20221012_140641.png"
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishablekey}
        >
        </StripeCheckout>
    );
}
export default StripeCheckoutButton;