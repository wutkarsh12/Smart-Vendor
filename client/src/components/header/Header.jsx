import {AppBar,Toolbar,styled,Box} from '@mui/material';
import logo from '../../images/SMART_VENDOR.png';
import Search from './Search';
import CustomButton from './CustomButton';

const StyledHeader=styled(AppBar)`
background:#ECC196;
height:70px;
 overflow:hidden;
`;
const CustomButtonWrapper=styled(Box)`
margin:0 5% 0 auto;
`;

const Component=styled(Box)`
margin-left:70px;
 `;
const Header=()=>{
    return (
        <StyledHeader>
        <Toolbar style={{minHeight:55}}>
            <Component>
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