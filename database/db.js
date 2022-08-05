import mongoose from "mongoose";


export const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.mjpoo.mongodb.net/grandBazaar`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log('Database is connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database', error.message);
    }
}

export default Connection;