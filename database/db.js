import mongoose from 'mongoose';

const Connection = async () => {
    const URL = `mongodb+srv://Deeya:Deeya@cluster0.ta9amdj.mongodb.net/Blog?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;