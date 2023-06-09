import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { deliverOrder, detailsOrder, payOrder } from '../action/orderActions';

import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Payment from '../components/Payment';
import { ORDER_DELIVER_RESET, ORDER_PAY_RESET } from '../constants/orderConstants';




export default function OrderScreen(props,) {
    const { id } = useParams();
    const orderId = id;
    // const { paymentMethod } = props;
    const paymentMethod = useSelector((state) => state.cart.paymentMethod);
    // const [paymentMethod, setPaymentMethod] = useState('');
    const [sdkReady, setSdkReady] = useState(false);

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');

    const generateTxRef = () => {
        const timestamp = Date.now();
        const uniqueId = Math.random().toString(36).substring(2, 15);
        return `${fname}-tx-${timestamp}-${uniqueId}`;
    };

    const tx_ref = generateTxRef();
    const public_key = 'CHAPUBK_TEST-f23unAi8tFo0Mh0WikIexcVpWzxPGwoZ';

    const orderDetails = useSelector((state) => state.orderDetails);
    const { order, loading, error } = orderDetails;
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const orderPay = useSelector((state) => state.orderPay);
    const {
        loading: loadingPay,
        error: errorPay,
        success: successPay
    } = orderPay;
    const orderDeliver = useSelector((state) => state.orderDeliver);
    const {
        loading: loadingDeliver,
        error: errorDeliver,
        success: successDeliver,
    } = orderDeliver;
    const dispatch = useDispatch();
    useEffect(() => {
        const addPayPalScript = async () => {
            const { data } = await axios.get('http://localhost:5000/api/config/paypal');
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
            script.async = true;
            script.onload = () => {
                setSdkReady(true);
            };
            document.body.appendChild(script);
        };
        if (
            !order ||
            successPay ||
            successDeliver ||
            (order && order._id !== orderId)
        ) {
            dispatch({ type: ORDER_PAY_RESET });
            dispatch({ type: ORDER_DELIVER_RESET });
            dispatch(detailsOrder(orderId));
        } else {
            if (!order.isPaid) {
                if (!window.paypal) {
                    addPayPalScript();
                } else {
                    setSdkReady(true);
                }
            }
        }
    }, [dispatch, orderId, sdkReady, successPay, successDeliver, order]);

    const successPaymentHandler = (paymentResult) => {
        // TODO: dispatch pay order
        dispatch(payOrder(order, paymentResult));
    };
    const deliverHandler = () => {
        dispatch(deliverOrder(order._id));
    };



    return loading ? (
        <LoadingBox></LoadingBox>
    ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
    ) : (
        <div>
            <h1>Order {order._id}</h1>
            <div className="row top">
                <div className="col-2">
                    <ul>
                        <li>
                            <div className="card card-body">
                                <h2>Shippring</h2>
                                <p>
                                    <strong>Name:</strong> {order.shippingAddress.fullName} <br />
                                    <strong>Address: </strong> {order.shippingAddress.address},
                                    {order.shippingAddress.city},{' '}
                                    {order.shippingAddress.postalCode},
                                    {order.shippingAddress.country}
                                </p>
                                {order.isDelivered ? (
                                    <MessageBox variant="success">
                                        Delivered at {order.deliveredAt}
                                    </MessageBox>
                                ) : (
                                    <MessageBox variant="danger">Not Delivered</MessageBox>
                                )}
                            </div>
                        </li>
                        <li>
                            <div className="card card-body">
                                <h2>Payment</h2>
                                <p>
                                    <strong>Method:</strong> {order.paymentMethod}
                                </p>
                                {order.isPaid ? (
                                    <MessageBox variant="success">
                                        Paid at {order.paidAt}
                                    </MessageBox>
                                ) : (
                                    <MessageBox variant="danger">Not Paid</MessageBox>
                                )}
                            </div>
                        </li>
                        <li>
                            <div className="card card-body">
                                <h2>Order Items</h2>
                                <ul>
                                    {order.orderItems.map((item) => (
                                        <li key={item.product}>
                                            <div className="row">
                                                <div>
                                                    <img
                                                        src={`http://localhost:5000${item.image}`}
                                                        alt={item.name}
                                                        className="small"
                                                    ></img>
                                                </div>
                                                <div className="min-30">
                                                    <Link to={`/product/${item.product}`}>
                                                        {item.name}
                                                    </Link>
                                                </div>

                                                <div>
                                                    {item.qty} x {item.price} birr = {item.qty * item.price} birr
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <h2>Order Summary</h2>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Items</div>
                                    <div>{order.itemsPrice.toFixed(2)} birr</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Shipping</div>
                                    <div>{order.shippingPrice.toFixed(2)} birr</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Tax</div>
                                    <div>{order.taxPrice.toFixed(2)} birr</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>
                                        <strong> Order Total</strong>
                                    </div>
                                    <div>
                                        <strong>{order.totalPrice ? order.totalPrice.toFixed(2) : ''} birr</strong>
                                    </div>
                                </div>
                            </li>
                            {!order.isPaid && (
                                <li>
                                    {paymentMethod === 'PayPal' && (
                                        <>
                                            {!sdkReady ? (
                                                <LoadingBox></LoadingBox>
                                            ) : (

                                                <>
                                                    {errorPay && (
                                                        <MessageBox variant="danger">{errorPay}</MessageBox>
                                                    )}
                                                    {loadingPay && <LoadingBox></LoadingBox>}

                                                    <PayPalButton
                                                        amount={order.totalPrice}
                                                        onSuccess={successPaymentHandler}
                                                    ></PayPalButton>




                                                </>
                                            )}
                                        </>
                                    )}
                                    {/* Chapa payment */}
                                    {paymentMethod === 'Chapa' && (
                                        <>

                                            <div className='form'>
                                                <h2>Pay With Chapa</h2>
                                                <lable htmlfor="fname">First Name:</lable> <br />
                                                <input
                                                    onChange={(e) => {
                                                        setFname(e.target.value)
                                                        console.log(fname)
                                                    }}
                                                    type="text" /> <br />

                                                <lable htmlfor="lname">Last Name:</lable><br />
                                                <input
                                                    onChange={(e) => {
                                                        setLname(e.target.value)
                                                        console.log(lname)
                                                    }}
                                                    type="text" /> <br />

                                                <label htmlFor="email">Email</label> <br />
                                                <input
                                                    onChange={(e) => {
                                                        setEmail(e.target.value)
                                                        console.log(email)
                                                    }}
                                                    type="email" /> <br />

                                                <lable htmlfor="amount">Amount:</lable> <br />
                                                <input
                                                    value={order.totalPrice}
                                                    type="number" />

                                                <>
                                                    {errorPay && (
                                                        <MessageBox variant="danger">{errorPay}</MessageBox>
                                                    )}
                                                    {loadingPay && <LoadingBox></LoadingBox>}

                                                    <Payment
                                                        fname={fname}
                                                        lname={lname}
                                                        email={email}
                                                        amount={order.totalPrice}
                                                        tx_ref={tx_ref}
                                                        public_key={public_key}
                                                        orderId={orderId}
                                                        order={order}

                                                    //  setPaymentMethod={setPaymentMethod}

                                                    />

                                                </>

                                            </div>

                                        </>
                                    )}
                                </li>

                                // tomorow will be continued!!
                            )}



                            {!userInfo.isAdmin && order.isPaid && !order.isDelivered && (
                                <li>
                                    {loadingDeliver && <LoadingBox></LoadingBox>}
                                    {errorDeliver && (
                                        <MessageBox variant="danger">{errorDeliver}</MessageBox>
                                    )}
                                    <button
                                        type="button"
                                        className="primary block"
                                        onClick={deliverHandler}
                                    >
                                        Deliver Order
                                    </button>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
}




