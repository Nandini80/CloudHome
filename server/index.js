const express = require("express");
const app = express();
require('dotenv').config();
const cookieParser = require('cookie-parser');
const {cloudinaryConnect} = require('./config/cloudinary');
const fileUploader = require('express-fileupload');
const cors = require('cors');
const paymentRoutes = require('./routers/Payments');
const userRoutes = require('./routers/Auth');
const landRoutes = require('./routers/Lands');
const ratingsRoutes = require('./routers/RatingsAndReviews');
const profileRoutes = require('./routers/Profile');
const messageRoutes = require('./routers/Message');

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());
app.use(fileUploader({
    useTempFiles: true,
    tempFileDir: '/temp/'
}));

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
)

//add routes
app.use('/api/v1/payments' , paymentRoutes);
app.use('/api/v1/auth' , userRoutes);
app.use('/api/v1/profile' , profileRoutes);
app.use('/api/v1/land' ,landRoutes);
app.use('/api/v1/messages' , messageRoutes);
app.use('/api/v1/ratings' , ratingsRoutes);

cloudinaryConnect();

app.listen( PORT , ()=>{
    console.log(`server started successfully at port ${PORT}`);
});