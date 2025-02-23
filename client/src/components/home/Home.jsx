import NavBar from './NavBar';
import Banner from './Banner';
import {Box,styled} from '@mui/material';

const Component=styled(Box)`
padding:10px;
background:#FBF2E9`;

const Home=()=>{
    return (
        <>
            <NavBar></NavBar>
            <Component><Banner></Banner></Component>
        </>
    )
}
export default Home;