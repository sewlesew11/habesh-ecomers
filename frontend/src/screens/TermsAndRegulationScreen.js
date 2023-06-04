import React from 'react';
import { Link } from 'react-router-dom';
import { redirect } from '../../node_modules/react-router-dom/dist/index';



export default function TermsAndRegulationScreen(props) {
    return (
        <div className="terms-container">

            <h1>Terms and Regulations</h1>
            <div className="terms-content">

                <ol>
                    <li>
                        <strong>Placing Orders:</strong>
                        <ul>
                            <li>Customers can place up to three orders without making immediate payment.</li>
                            <li>At the time of delivery, customers must make the payment for the products ordered.</li>
                            <li>If a customer wishes to cancel an order before delivery, they can do so, but they will be responsible for paying the shipping charges.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Payment:</strong>
                        <ul>
                            <li>Customers must make the payment for their orders at the time of delivery.</li>
                            <li>Accepted payment methods will be communicated during the checkout process.</li>
                            <li>The e-commerce site will ensure a secure payment gateway to protect customer information.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Order Cancellation:</strong>
                        <ul>
                            <li>Customers have the option to cancel their orders before delivery.</li>
                            <li>In case of cancellation, customers will be responsible for paying the shipping charges.</li>
                            <li>The cancellation request must be made within a specified timeframe, which will be communicated to customers.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Shipping:</strong>
                        <ul>
                            <li>The e-commerce site will provide shipping services to deliver the ordered products to the customer's designated address.</li>
                            <li>Shipping charges will apply and will be communicated during the checkout process.</li>
                            <li>The estimated delivery timeframe will be provided to customers, but it may vary depending on the shipping destination and other factors.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Returns and Refunds:</strong>
                        <ul>
                            <li>Customers can request returns or exchanges for eligible products within a specified timeframe, subject to the site's return policy.</li>
                            <li>Refunds will be issued according to the site's refund policy, which may include deductions for shipping charges.</li>
                            <li>The condition and packaging of returned products should comply with the site's return policy to be eligible for a refund or exchange.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Product Availability and Pricing:</strong>
                        <ul>
                            <li>The availability of products on the site is subject to change without prior notice.</li>
                            <li>The e-commerce site will make efforts to provide accurate product descriptions, images, and pricing information, but errors may occur occasionally. In such cases, the site reserves the right to correct any errors and cancel or refuse orders if necessary.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Privacy and Data Protection:</strong>
                        <ul>
                            <li>The e-commerce site will adhere to applicable privacy laws and regulations.</li>
                            <li>Customer information, including personal and payment details, will be handled securely and in accordance with the site's privacy policy.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Intellectual Property:</strong>
                        <ul>
                            <li>All content and materials on the e-commerce site, including logos, images, text, and trademarks, are protected by intellectual property rights and are the property of the site or its licensors.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Governing Law and Dispute Resolution:</strong>
                        <ul>
                            <li>Any disputes arising from the use of the e-commerce site or related services will be governed by the laws of the jurisdiction where the site operates.</li>
                            <li>In case of disputes, customers are encouraged to contact customer support for resolution. If an amicable resolution cannot be reached, the parties may resort to mediation, arbitration, or legal proceedings as per applicable laws.</li>
                        </ul>
                    </li>
                </ol>

            </div>
            If you agree by the terms and regulation{' '}
            <Link to={`/register?redirect=${redirect}`}>
                <span style={{ fontSize: '18px' }}>You can create your account.</span>
            </Link>

        </div>
    );
}
