import {useState} from 'react';
import {Dialog,Box,TextField,Typography,Button,styled} from '@mui/material';
import {authenticateSignup} from '../../service/api';

const Component=styled(Box)`
height:70vh;
width:85vh;`;

const Image=styled(Box)`
background:#ECC196 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
height:82%;
width:28%;
padding:45px 35px;
&>p,&>h5{
color:#FFFFFF;
font-weight:600;}`;

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
font-size:14px;
color:#fff;
height:48px;
border-radius:2px;`

const RequestOTP=styled(Button)`
text-transform:none;
background:#1D1D1D;
color:#fff;
height:48px;
font-size:14px;
border-radius:2px;
box-shadow:0 2px 4px 0 rgb(0 0 0/20%);`

const Text=styled(Typography)`
font-size:12px;
color:#878787;`

const CreateAccount=styled(Typography)`
font-size:14px;
text-align:center;
color:#1D1D1D;
font-weight:600;
cursor:pointer;
`
const accountInitialValues={
    login:{
        view:'login',
        heading:'Login',
        subHeading:'Get access to your Orders, Wishlist and Recommendations'
    },
    signup:{
        view:'signup',
        heading:"Looks like you're new here!",
        subHeading:'Sign up with your mobile number to get started'
    }
}

const signupInitialValues={
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    password:'',
    phone:''
}

const LoginDialog=({open,setOpen})=>{
    const [account,toggleAccount]=useState(accountInitialValues.login);
    const [signup,setSignup]=useState(signupInitialValues);
    const handleClose=()=>{
        setOpen(false);
        toggleAccount(accountInitialValues.login);
    }
    const toggleSignup=()=>{
        toggleAccount(accountInitialValues.signup);
    }
    const onInputChange=(e)=>{
        setSignup({...signup,[e.target.name]:e.target.value});
    }
    const signupUser=async()=>{
        let response =await authenticateSignup(signup);
        if(!response)return;
        handleClose();
    }

    return(
        <Dialog open={open} onClose={handleClose} slotProps={{paper:{sx:{maxWidth:'unset'}}}}>
            <Component>
                <Box style={{display:'flex',height:'100%'}}>
                <Image>
                    <Typography variant="h5">{account.heading}</Typography>
                    <Typography style={{marginTop:20}}>{account.subHeading}</Typography>
                </Image>
                {account.view ==='login' ?
                    <Wrapper>
                    <TextField variant="standard" label="Enter Email/Mobile Number"/>
                    <TextField variant="standard" label="Enter Password"/>
                    <Text>By continuing, you agree to Smart Vendor's Terms of Use and Privacy Policy.</Text>
                    <LoginButton>Login</LoginButton>
                        <Typography style={{textAlign:'center'}}>OR</Typography>
                    <RequestOTP>Request OTP</RequestOTP>
                    <CreateAccount onClick={()=>toggleSignup()}> New to Smart Vendor? Create an Account</CreateAccount>
                </Wrapper>
                :
                <Wrapper>
                    <TextField variant="standard" onChange={(e) => onInputChange(e)} name='firstname' label="Enter FirstName"/>
                    <TextField variant="standard" onChange={(e) => onInputChange(e)} name='lastname' label="Enter LastName"/>
                    <TextField variant="standard" onChange={(e)=> onInputChange(e)} name='username' label="Enter Username"/>
                    <TextField variant="standard" onChange={(e) => onInputChange(e)}name='email' label="Enter Email"/>
                    <TextField variant="standard" onChange={(e) => onInputChange(e)}name='password' label="Enter Password"/>
                    <TextField variant="standard" onChange={(e) => onInputChange(e)}name='phone' label="Enter PhoneNo"/> 
                    <LoginButton onClick={()=>signupUser()}>Continue</LoginButton>
                </Wrapper>
                }
                </Box>
            </Component>
        </Dialog>
    )
}
export default LoginDialog;