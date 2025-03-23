import {imageURL} from '../../constants/data'
import {styled,Box} from '@mui/material';

const Wrapper = styled(Box)`
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Image = styled('img')(({ theme }) => ({ 
    width: '100%',
    marginTop: 20,
    [theme.breakpoints.down('md')]: {
        objectFit: 'cover',
        height: 120
    }
}));

const MidSection = () => {
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

    return (
        <>
            <Wrapper>
                {imageURL.map((image, index) => (
                    <Box key={index} sx={{ width: { lg: '32%', md: '32%', sm: '100%', xs: '100%' } }}>
                        <img src={image} alt="banner" style={{ width: '100%' }} />
                    </Box>
                ))}
            </Wrapper>
            <Image src={url} alt="covid" />
        </>
    );
};

export default MidSection;
