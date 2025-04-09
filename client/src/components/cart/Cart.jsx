import { Typography, Box, styled, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import TotalView from './TotalView';
import EmptyCart from './EmptyCart';

const Container = styled(Box)`
  display: flex;
  padding: 30px 135px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

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

const LeftComponent = styled(Box)`
  flex: 0.7;
  min-width: 300px;
`;

const RightComponent = styled(Box)`
  flex: 0.3;
  min-width: 250px;
`;

const Cart = () => {
  const { cartItems } = useSelector(state => state.cart);

  return (
    <>
      {cartItems.length ? (
        <Container>
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
        </Container>
      ) : <EmptyCart/>
      }
    </>
  );
};

export default Cart;
