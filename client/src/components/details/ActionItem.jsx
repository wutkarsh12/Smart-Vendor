import {Box,Button,styled} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';

const Cart = ShoppingCartIcon;
const Flash = FlashOnIcon;

const LeftContainer=styled(Box)`
min-width:40%;
padding:40px 0 0 80px;`;

const Image=styled('img')({
    width:'75%',
    padding:'15px'
});

const StyledButton=styled(Button)(({theme})=>({
    width:'48%',
    height:50,
    backgroundColor:'#133e69',
    borderRadius:2,
    [theme.breakpoints.down('lg')]:{
      width:'46%'
  },
    [theme.breakpoints.down('sm')]:{
      width:'48%'
    }
  }));

const ActionItem=({product})=>{
  const navigate=useNavigate();

  const addItemToCart=()=>{
    navigate('/cart');
  }
    return(
        <LeftContainer>
            <Box style={{padding:'15px 20px',border:'1px solid #f0f0f0',marginBottom:10}}>
            <Image src={product.detailUrl} alt="product"/>
            </Box>
            <StyledButton variant="contained" onClick={()=>addItemToCart()} style={{marginRight:10}}><Cart/>Add to Cart</StyledButton>
            <StyledButton variant='contained'><Flash/>Buy Now</StyledButton> 
        </LeftContainer>
    )
}
export default ActionItem;