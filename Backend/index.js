import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'
import connectDB from './utils/db.js';
import userRoute from './routes/user.route.js'
dotenv.config({});

const app = express();

app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your frontend URL
    credentials: true,
}
app.use(cors(corsOptions));

app.use(cookieParser());

// Example route
app.use('/api/v1/user', userRoute)

app.listen(process.env.PORT, () => {
    connectDB()
    console.log(`Server is running on port ${process.env.PORT}`);
});