import axios from 'axios';
const URL='https://localhost:8000';
export const authenticateSignup=async(data)=>{
    try{
        return await axios.post(`${URL}/signup`,data);
    } catch(error){
        console.log('Error',error);
    }
}