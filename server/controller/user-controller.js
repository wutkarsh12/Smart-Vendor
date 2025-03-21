
import User from '../model/user-schema.js';

export const userSignUp = async (request, response) => {
    try {
        const exist=await User.findOne({username:request.body.username});
        if(exist){
            return response.status(409).json({message:'Username already exists'});
        }
       const user=request.body;
       const newUser=new User(user);
       await newUser.save();
       response.status(200).json({message:user});
    } catch (error) {
        response.status(500).json({message:error.message});
    }
}

export const userLogin = async (request, response) => {
    try {
        const { username, password } = request.body;
        const user = await User.findOne({ username, password });

        if (user) {
            return response.status(200).json({ message: 'Login successful', data: user });
        } else {
            return response.status(409).json({ message: 'Invalid username or password' });
        }

    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};
