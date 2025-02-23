import {InputBase,Box,styled} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
const SearchContainer=styled(Box)`
background:#fff;
width:450px;
border-radius:18px;
display:flex;
`;
const InputSearchBase=styled(InputBase)`
padding-left:20px;
width:100%;
font-size:unset;
`;
const SearchIconWrapper=styled(Box)`
color:black;
padding:5px;
margin-top:2px;
display:flex;
margin-right:4px;`;
const Search=()=>{
    return(
        <SearchContainer>
            <InputSearchBase placeholder='Search for products'/>
            <SearchIconWrapper>
            <SearchIcon/>
            </SearchIconWrapper>
        </SearchContainer>
    )
}
export default Search;