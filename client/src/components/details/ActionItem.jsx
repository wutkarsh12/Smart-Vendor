import {Box,Button,styled} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';

const Cart = ShoppingCartIcon;
const Flash = FlashOnIcon;

const LeftContainer=styled(Box)`
min-width:40%;
padding:40px 0 0 80px;`;

const Image=styled('img')({
    width:'75%',
    padding:'15px'
});

const StyledButton=styled(Button)`
width:46%;
height:50px;
border-radius:2px;
background-color:#ECC196;
font-weight:bold;
`

const ActionItem=({product})=>{
    return(
        <LeftContainer>
            <Box style={{padding:'15px 20px',border:'1px solid #f0f0f0',}}>
            <Image src={product.detailUrl} alt="product"/>
            </Box>
            <StyledButton variant="contained" style={{marginRight:10}}><Cart/>Add to Cart</StyledButton>
            <StyledButton variant='contained'><Flash/>Buy Now</StyledButton> 
        </LeftContainer>
    )
}
export default ActionItem;