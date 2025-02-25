
import {Dialog,Box,TextField,Typography,Button,styled} from '@mui/material';

const Component=styled(Box)`
height:70vh;
width:90vh;`;

const Image=styled(Box)`
background:#ECC196 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
height:100%;
width:40%;
padding:45px 35px;`;

const Wrapper=styled(Box)`
display:flex;
flex-direction:column;
padding:25px 35px;
flex:1;
&>div, &>button, &>p{
margin-top:20px;
}`

const LoginButton=styled(Button)`
text-transform:none;
background:#1D1D1D;
color:#fff;
height:48px;
border-radius:2px;`

const RequestOTP=styled(Button)`
text-transform:none;
background:#1D1D1D;
color:#fff;
height:48px;
border-radius:2px;
box-shadow:0 2px 4px 0 rgb(0 0 0/20%);`

const Text=styled(Typography)`
font-size:12px;
color:#878787;`

const CreateAccount=styled(Typography)`
font-size:14px;
text-align:center;
color:#2874f0;
font-weight:600;
cursor:pointer;`

const LoginDialog=({open,setOpen})=>{
    const handleClose=()=>{
        setOpen(false);
    }
    return(
        <Dialog open={open} onClose={handleClose}>
            <Component>
                <Box style={{display:'flex',height:'100%'}}>
                <Image>
                    <Typography variant="h5">Login</Typography>
                    <Typography style={{marginTop:20}}>Get access to your Orders, Wishlist and Recommendations</Typography>
                </Image>
                <Wrapper>
                    <TextField variant="standard" label="Enter Email/Mobile Number"/>
                    <TextField variant="standard" label="Enter Password"/>
                    <Text>By continuing, you agree to Smart Vendor's Terms of Use and Privacy Policy.</Text>
                    <Button>Login</Button>
                    <Typography>OR</Typography>
                    <RequestOTP>Request OTP</RequestOTP>
                    <CreateAccount> New to Smart Vendor? Create an Account</CreateAccount>
                </Wrapper>
                </Box>
            </Component>
        </Dialog>
    )
}
export default LoginDialog;