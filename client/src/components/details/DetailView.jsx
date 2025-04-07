import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productActions";
import { Box,Stack, styled } from "@mui/material";
import ActionItem from "./ActionItem";
import ProductDetail from "./ProductDetail";

const Component = styled(Box)`
  background: #F2F2F2;
  margin-top:55px;
`;
const Container = styled(Stack)(({ theme }) => ({
  background: "#ffffff",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  padding: "20px",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

const LeftContainer = styled(Box)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightContainer = styled(Stack)(({ theme }) => ({
  flex: 2,
  marginTop: "20px",
  [theme.breakpoints.up("md")]: {
    marginTop: "0px",
    paddingLeft: "20px",
  },
}));


const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product } = useSelector((state) => state.getProductDetails);

  useEffect(() => {
    if (!product || product?.id !== id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, id, product]);

  console.log(product);

  return (
    <Component>
      {product && Object.keys(product).length > 0 && (
        <Container>
          <LeftContainer>
            <ActionItem product={product} />
          </LeftContainer>
          <RightContainer>
            <ProductDetail product={product} />
          </RightContainer>
        </Container>
      )}
    </Component> 
  );
};

export default DetailView;
