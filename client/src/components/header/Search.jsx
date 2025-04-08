import {useState,useEffect} from 'react';
import {InputBase,Box,styled,List,ListItem} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector,useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';
import {Link} from 'react-router-dom';

const SearchContainer=styled(Box)`
 background: #fff;
  width: 450px;
  border-radius: 18px;
  display: flex;
  position: relative;
  z-index: 10; 
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

const ListWrapper=styled(List)`
   position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #fff;
  color: #000;
  z-index: 30;
  max-height: 300px;
  overflow-y: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 0;
`

const Search=()=>{
    const [text,setText]=useState('');
    const {products} =useSelector(state=>state.getProducts);
    const dispatch=useDispatch();
    useEffect(()=>{dispatch(getProducts())},[dispatch])
    const getText=(text)=>{
        setText(text);
    }
    return(
        <SearchContainer>
            <InputSearchBase placeholder='Search for products' onChange={(e)=>getText(e.target.value)} value={text}/>
            <SearchIconWrapper>
            <SearchIcon/>
            </SearchIconWrapper>
            {
                text && 
                <ListWrapper>
                    {
                        products.filter(product=>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
                            <ListItem>
                                <Link to={`/product/${product.id}`} onClick={()=>setText('')} style={{ textDecoration: 'none', color: 'inherit', fontSize: 14 }}>
                                    {product.title.longTitle}
                                </Link>
                            </ListItem>
                        ))
                    }
                </ListWrapper>
            }
        </SearchContainer>
    )
}
export default Search;