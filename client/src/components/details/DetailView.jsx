import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productActions";
import { Box, Typography, Stack, styled } from "@mui/material";
import ActionItem from "./ActionItem";

const Component = styled(Box)`
  background: #F2F2F2;
  margin-top:55px;
`;
const Container=styled(Stack)`
background:#FFFFFF;
display:flex;`

const RightContainer=styled(Stack)`
margin-top:50px;`

const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, product } = useSelector((state) => state.getProductDetails);

  useEffect(() => {
    if (!product || product?.id !== id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, id, product]);

  console.log(product);

  return (
    <Component>
      {product && Object.keys(product).length > 0 && (
        <Container spacing={2} direction={{ xs: "column", md: "row" }}>
          <Box flex={1}>
            <ActionItem product={product} />
          </Box>
          <RightContainer flex={1}>
            <Typography variant="h6">{product.title?.longTitle}</Typography>
            <Typography style={{marginTop:5,color:'#878787', fontSize:14}}>8 Ratings & 1 Reviews
            </Typography>
            <Typography>
                <Box component="span" style={{fontSize:28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{color:'#878787'}}><strike>{product.price.mrp}</strike></Box>&nbsp;
                <Box component="span" style={{color:'#388E3C'}}>{product.price.discount}</Box>
            </Typography>
            </RightContainer>
        </Container>
      )}
    </Component>
  );
};

export default DetailView;
