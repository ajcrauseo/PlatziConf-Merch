import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';

import AppContext from '../context/AppContext';

import '../styles/components/Payment.scss';

const Payment = ({ history }) => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  const paypalOptions = {
    clientId:
      'AXmLxA01jyJSKgrpORE3VkgHSTroFLqvwGWWUdsl1I-GHX_ilKMMuYwymG4B9DF1fchS1uiQtP1ukslP',
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    color: 'blue',
    shape: 'rect',
    label: 'paypal',
  };

  const handlePaymentSuccess = (data) => {
    const newOrder = {
      buyer,
      products: cart,
      payment: data,
      orderId: data.orderId,
    };
    addNewOrder(newOrder);
    history.push('/checkout/success');
  };

  const handleSumTotal = () => {
    const reducer = (acumulator, currentValue) =>
      acumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del Pedido</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.cartId}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span> ${item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            options={paypalOptions}
            style={buttonStyles}
            amount={handleSumTotal()}
            createOrder={(data, actions) =>
              actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: 'USD',
                      value: `${handleSumTotal()}`,
                    },
                  },
                ],
              })
            }
            onSuccess={(details, data) => {
              handlePaymentSuccess(data);
            }}
          />
        </div>
      </div>
      <div />
    </div>
  );
};

export default Payment;
