import {useState} from 'react';
import {AppBar,Toolbar,styled,Box,Drawer,List,ListItem,IconButton} from '@mui/material';
import logo from '../../images/SMART_VENDOR.png';
import Search from './Search';
import CustomButton from './CustomButton';
import {Link} from 'react-router-dom';
import {Menu} from '@mui/icons-material';

const StyledHeader=styled(AppBar)`
background:#ECC196;
height:70px;
 overflow:visible;
`;
const CustomButtonWrapper=styled(Box)(({theme})=>({
    margin:'0 5% 0 auto',
    [theme.breakpoints.down('md')]:{
        display:'none'
    }
}));

const MenuButton=styled(IconButton)(({theme})=>({
    display:'none',
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}))

const Component=styled(Link)`
margin-left:70px;
line-height:0;
text-decoration:none;
 `;
const Header=()=>{
    const [open,setOpen]=useState(false);
    const handleOpen=()=>{
        setOpen(true);
    }
    const handleClose=()=>{
        setOpen(false)
    }
    const list=()=>(
        <Box style={{width:200}} onClick={handleClose}>
            <List>
                <ListItem button>
                    <CustomButton/>
                </ListItem>
            </List>
        </Box>
    )

    return (
        <StyledHeader>
        <Toolbar style={{minHeight:55}}>
            <MenuButton color="inherit" onClick={handleOpen}>
                <Menu/>
            </MenuButton>
            <Drawer open={open} onClose={handleClose}>
                {list()}
            </Drawer>
            <Component to='/'>
                <Box>
                <img src={logo} alt="logo" style={{width:150, height:120,padding:0,margin:0}}/>
                </Box>
            </Component>
            <Search/>
            <CustomButtonWrapper>
                <CustomButton/>
            </CustomButtonWrapper>
        </Toolbar>
        </StyledHeader>
    )
}
export default Header;