import {Box,styled,Typography} from '@mui/material';
import {navData} from '../../constants/data';
import Banner from './Banner';

const Component = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '55px 130px 0 130px !important',
    overflowX: 'hidden',
    [theme.breakpoints.down('lg')]: {
        margin: '0px !important'
    }
}))

const Container=styled(Box)`
padding:12px 8px;
text-align:center;
`
const Text=styled(Typography)`
font-size:14px;
font-weight:600;
font-family:inherit;
`
const NavBar=()=>{
    return(
        <Component>{
            navData.map(data=>(
                <Container>
                    <img src={data.url} alt="nav" style={{width:64}}></img>
                    <Text>{data.text}</Text>
                </Container>
        ))}</Component>
    )
}
export default NavBar;