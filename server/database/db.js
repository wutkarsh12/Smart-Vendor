import mongoose from "mongoose";

export const Connection = async (username, password) => {
    const URL= `mongodb+srv://${username}:${password}@cluster0.90jer.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
   
    try {
        // await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
        await mongoose.connect(URL);
        console.log('Database Connected Succesfully');
       
    } catch(error) {
        console.log('Error: ', error.message);
    }

}

export default Connection;