import {Typography,Box,styled, Table, TableBody, TableRow,TableCell} from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const Badge = LocalOfferIcon;

const StyledBadge=styled(Badge)`
margin-right:10px;
color:#
font-size:15px;
color: #FF5B00;`

const SmallText =styled(Box)`
font-size:14px;
vertical-align:baseline;
&>p{
font-size:14px;
margin-top:10px;
}`

const ColumnText=styled(TableRow)`
font-size:14px;
vertical-align:baseline;
&>td{
font-size:14px;
margin-top:10px;
border:none;}
`

const ProductDetail=({product})=>{
    const date=new Date(new Date().getTime()+(5*24*60*60*1000));
    return (
        <>
        <Typography variant="h6">{product.title?.longTitle}</Typography>
        <Typography style={{marginTop:5,color:'#878787', fontSize:14}}>8 Ratings & 1 Reviews
        </Typography>
        <Typography>
            <Box component="span" style={{fontSize:28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
            <Box component="span" style={{color:'#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;
            <Box component="span" style={{color:'#388E3C'}}>{product.price.discount}</Box>
        </Typography>
        <Typography>Available Offers</Typography>
        <SmallText>
            <Typography><StyledBadge/>Get extra 20% off upto ₹50 on 1 item(s) T&C</Typography>
            <Typography><StyledBadge/>Get extra 13% off (price inclusive of discount) T&C</Typography>
            <Typography><StyledBadge/>Sign up for Smart Vendor's Pay Later and get Smart Gift Card worth ₹100* Know More</Typography>
            <Typography><StyledBadge/>Buy 2 Items save 5%; Buy 3 or more save 10% T&C</Typography>
            <Typography><StyledBadge/>5% Cashback on Smart Vendor's Axis Bank Card</Typography>
            <Typography><StyledBadge/>No Cost EMI on Bajaj Finserv EMI Card on cart value above ₹2999 T&C</Typography>
        </SmallText>
        <Table>
            <TableBody>
                <ColumnText>
                    <TableCell style={{color:'#878787'}}>Delivery</TableCell>
                    <TableCell style={{fontWeight:600}}>Delivery by {date.toDateString()}| ₹40</TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style={{color:'#878787'}}>Warranty</TableCell>
                    <TableCell>No Warranty</TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style={{color:'#878787'}}>Seller</TableCell>
                    <TableCell>
                        <Box component="span" style={{color:'#2874f0'}}>SuperComNet</Box>
                        <Typography>GST Invoice Available</Typography>
                        <Typography>View More Sellers starting from ₹{product.price.cost}</Typography>
                    </TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style={{color:'#878787'}}>Description</TableCell>
                    <TableCell>{product.description}</TableCell>
                </ColumnText>
            </TableBody>
        </Table>
        </>   
    )
}
export default ProductDetail;