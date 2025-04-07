import {useState,useContext} from 'react';
import {Box,Button,Typography,styled} from '@mui/material';
import {ShoppingCart} from '@mui/icons-material';

import {DataContext} from '../../context/DataProvider';
import LoginDialog from '../login/LoginDialog';
import Profile from './Profile';

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

const Container=styled(Box)(({theme})=>({
    display:'flex',
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
    const openDialog=()=>{
        setOpen(true);
    }
    return(
        <Wrapper>
            {
                account?<Profile account={account} setAccount={setAccount}/>:
                <LoginButton variant="contained" onClick={()=>openDialog()}>Login</LoginButton>
            }
            <Typography style={{marginTop:3,width:135}}>Become a Seller</Typography>
            <Typography style={{marginTop:3}}>More</Typography>
            <Container>
                <ShoppingCart/>
                <Typography>Cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen}/>
        </Wrapper>
    )
}
export default CustomButton