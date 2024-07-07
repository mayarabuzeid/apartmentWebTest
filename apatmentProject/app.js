const express =require('express');
const cors = require('cors');

const createError = require('http-errors');
const dotenv = require('dotenv').config();



const app = express();
 // Use CORS middleware
 app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Initialize DB
require('./initDB')();

//seed database
require('./seed');


const apartmentRoute =require('./Routes/Apartment.route');

app.use('/apartments',cors(),apartmentRoute);

app.use((req,res,next)=>{
    
    next(createError(404,"Not hee Found"));
});
// error handler
app.use((err,req,res,next)=>{
    res.status(err.status || 500);
    res.send({
        error:{
            status: err.status || 500,
            message: err.message
        }
    });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log('server started on port '+ PORT);
});