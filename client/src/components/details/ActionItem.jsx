import { useState } from 'react';
import { Box, Button, styled } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addToCart } from '../../redux/actions/cartAction';

const Cart = ShoppingCartIcon;
const Flash = FlashOnIcon;

const LeftContainer = styled(Box)`
  min-width: 40%;
  padding: 40px 0 0 80px;
`;

const Image = styled('img')({
  width: '75%',
  padding: '15px'
});

const StyledButton = styled(Button)(({ theme }) => ({
  width: '48%',
  height: 50,
  backgroundColor: '#133e69',
  borderRadius: 2,
  [theme.breakpoints.down('lg')]: {
    width: '46%'
  },
  [theme.breakpoints.down('sm')]: {
    width: '48%'
  }
}));

const ActionItem = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { id } = product;

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate('/cart');
  };

  const handleBuyNow = async () => {
    try {
      const res = await fetch("http://localhost:8000/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          amount: product.price?.cost * 100,
          currency: "INR"
        })
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
          contact: "9999999999"
        },
        notes: {
          address: "Smart Vendor Corporate Office"
        },
        theme: {
          color: "#528FF0"
        }
      };
  
      const razorpay = new window.Razorpay(options);
      razorpay.open();
  
    } catch (err) {
      console.error("Payment failed", err);
      alert("Oops! Something went wrong.\nPayment Failed");
    }
  };
  

  return (
    <LeftContainer>
      <Box style={{ padding: '15px 20px', border: '1px solid #f0f0f0', marginBottom: 10 }}>
        <Image src={product.detailUrl} alt="product" />
      </Box>
      <StyledButton variant="contained" onClick={addItemToCart} style={{ marginRight: 10 }}>
        <Cart /> Add to Cart
      </StyledButton>
      <StyledButton variant='contained' onClick={handleBuyNow}>
        <Flash /> Buy Now
      </StyledButton>
    </LeftContainer>
  );
};

export default ActionItem;
