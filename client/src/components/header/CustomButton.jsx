import {useState,useContext} from 'react';
import {Box,Button,Typography,styled,Badge} from '@mui/material';
import {ShoppingCart} from '@mui/icons-material';
import {Link} from 'react-router-dom';

import {DataContext} from '../../context/DataProvider';
import LoginDialog from '../login/LoginDialog';
import Profile from './Profile';
import {useSelector} from 'react-redux';

const Wrapper=styled(Box)(({theme})=>({
display:'flex',
margin:'0 3% 0 auto',
'&> *':{
marginRight:40,
fontSize:16,
alignItems:'center'
},
[theme.breakpoints.down('md')]:{
    display:'block'
}
}));

const Container=styled(Link)(({theme})=>({
    display:'flex',
    textDecoration:'none',
    color:'inherit',
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}));

const LoginButton=styled(Button)`
 color:black;
 padding: 5px 40px;
 box-shadow:none;
 font-weight:600;
 background:#FFFFFF;
 height:32px;
 border-radius:18px;
 text-transform:none ;`;

const CustomButton=()=>{
    const [open,setOpen]=useState(false);
    const {account,setAccount}=useContext(DataContext);
    const {cartItems}=useSelector(state=>state.cart);
    const openDialog=()=>{
        setOpen(true);
    }
    return(
        <Wrapper>
            {
                account?<Profile account={account} setAccount={setAccount}/>:
                <LoginButton variant="contained" onClick={()=>openDialog()} style={{marginLeft:10,marginRight:10}}>Login</LoginButton>
            }
            <Container to="/cart">
            <Badge badgeContent={cartItems?.length} color="secondary">
                <ShoppingCart/>
            </Badge>
                <Typography style={{marginLeft:10,marginRight:10}}>Cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen}/>
        </Wrapper>
    )
}
export default CustomButton