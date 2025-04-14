import { Typography, Box, styled, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import TotalView from './TotalView';
import EmptyCart from './EmptyCart';
import { useState } from 'react';

const Component = styled(Box)(({ theme }) => ({
  padding: '30px 135px',
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
    padding: '15px 0',
  },
}));

const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
`;

const ButtonWrapper = styled(Box)`
  padding: 16px 22px;
  background: #fff;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
  border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #fb641b;
  color: #fff;
  width: 250px;
  height: 51px;
  border-radius: 2px;
`;

const LeftComponent = styled(Box)(({ theme }) => ({
  paddingRight: 15,
  flex: 0.7,
  minWidth: 300,
  [theme.breakpoints.down('sm')]: {
    marginBottom: 15,
  },
}));

const RightComponent = styled(Box)`
  flex: 0.3;
  min-width: 250px;
`;

const Cart = () => {
  const { cartItems } = useSelector(state => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);

  const handlePlaceOrder = async () => {
    try {
      const res = await fetch("http://localhost:8000/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: totalAmount * 100,
          currency: "INR",
        }),
      });

      const data = await res.json();
      console.log("Order created:", data);

      const options = {
        key: "rzp_test_1thbED95P17pOS",
        amount: data.amount,
        currency: data.currency,
        name: "SmartBuy",
        description: "Smart Buy",
        order_id: data.order_id,
        handler: function (response) {
          alert("Payment successful!");
          console.log("Payment ID:", response.razorpay_payment_id);
        },
        prefill: {
          name: "Smart Vendor",
          email: "smartvendor@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Smart Vendor Corporate Office",
        },
        theme: {
          color: "#528FF0",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (err) {
      console.error("Payment failed", err);
      alert("Oops! Something went wrong.\nPayment Failed");
    }
  };

  return (
    <>
      {cartItems.length ? (
        <Component container>
          <LeftComponent>
            <Header>
              <Typography>My Cart ({cartItems.length})</Typography>
            </Header>
            {cartItems.map(item => (
              <CartItem item={item} key={item.id} />
            ))}
            <ButtonWrapper>
              <StyledButton onClick={handlePlaceOrder}>Place Order</StyledButton>
            </ButtonWrapper>
          </LeftComponent>
          <RightComponent>
            <TotalView cartItems={cartItems} onTotalCalculated={setTotalAmount} />
          </RightComponent>
        </Component>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
