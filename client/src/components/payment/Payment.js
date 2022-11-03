import React from "react";
import StripeCheckout from "react-stripe-checkout";

const Payment = ({ price, amount }) => {
  return (
    <>
      {amount ? (
        <StripeCheckout
          name="Fantero"
          description={`$${price} per ticket`}
          amount={price * amount * 100}
          token={(token) => console.log(token)}
          stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
        >
          <button>Pay Now</button>
        </StripeCheckout>
      ) : (
        <></>
      )}
    </>
  );
};

export default Payment;
