const express = require("express");
const app = express();
require('dotenv').config();
const cookieParser = require('cookie-parser');
const {cloudinaryConnect} = require('./config/cloudinary');
const fileUploader = require('express-fileupload');
const cors = require('cors');
const authRoutes = require('./routers/Auth');

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());
app.use(fileUploader({
    useTempFiles: true,
    tempFileDir: '/temp/'
}));

app.use(
    cors({
        origin: "http://localhost:5173/",
        credentials: true,
    })
)

app.use('/api/v1/auth' , authRoutes);

cloudinaryConnect();

app.listen( PORT , ()=>{
    console.log(`server started successfully at port ${PORT}`);
});

