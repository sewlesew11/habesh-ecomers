import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { payOrder } from '../action/orderActions';



function Payment({ fname, lname, email, amount, tx_ref, public_key, orderId, order, setPaymentMethod, }) {
    const dispatch = useDispatch();


    const successPaymentHandler = (paymentResult) => {
        dispatch(payOrder(order, paymentResult));
        // Set payment method to 'Chapa'
    };

    useEffect(() => {
        // Call successPaymentHandler when payment is successful
        // successPaymentHandler();
    }, [dispatch, order, setPaymentMethod]);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Call successPaymentHandler when payment is successful
        successPaymentHandler();
        // Submit the form to proceed to the Chapa payment website
        event.target.submit();
    };

    return (
        <div>
            <form method="POST" action="https://api.chapa.co/v1/hosted/pay" onSubmit={handleFormSubmit} >
                <input type="hidden" name="public_key" value={public_key} />
                <input type="hidden" name="tx_ref" value={tx_ref} />
                <input type="hidden" name="amount" value={order.totalPrice} />
                <input type="hidden" name="currency" value="ETB" />
                <input type="hidden" name="email" value={email} />
                <input type="hidden" name="first_name" value={fname} />
                <input type="hidden" name="last_name" value={lname} />
                <input type="hidden" name="title" value="Let us do this" />
                <input
                    type="hidden"
                    name="description"
                    value="Paying with Confidence with cha" />
                <input
                    type="hidden"
                    name="logo"
                    value="https://chapa.link/asset/images/chapa_swirl.svg" />
                <input
                    type="hidden"
                    name="callback_url"
                    value="https://example.com/callbackurl" />
                <input
                    type="hidden"
                    name="return_url"
                    value={`http://localhost:3000/order/${order._id}`}

                />
                <input type="hidden" name="meta[title]" value="test" />
                <button
                    type="submit"
                >Pay Now</button>

            </form>
        </div>
    )

}



export default Payment;
