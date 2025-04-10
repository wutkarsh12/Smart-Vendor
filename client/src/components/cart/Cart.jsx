import { Typography, Box, styled, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import TotalView from './TotalView';
import EmptyCart from './EmptyCart';

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

const LeftComponent = styled(Box)(({theme})=>({
    paddingRight:15,
    flex: 0.7,
    minWidth: 300,
    [theme.breakpoints.down('sm')]:{
        marginBottom:15
    }
}));

const RightComponent = styled(Box)`
  flex: 0.3;
  min-width: 250px;
`;

const Cart = () => {
  const { cartItems } = useSelector(state => state.cart);

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
              <StyledButton>Place Order</StyledButton>
            </ButtonWrapper>
          </LeftComponent>
          <RightComponent>
            <TotalView cartItems={cartItems} />
          </RightComponent>
        </Component>
      ) : <EmptyCart/>
      }
    </>
  );
};

export default Cart;
