
const mongoose = require('mongoose');
module.exports = () => {

    mongoose.connect(process.env.MONGODB_URI).then(()=>{
        console.log('Mongodb connected');
    }).catch(err=>console.log(err.message))
    
    mongoose.connection.on('connected', () => {
        console.log('Mongoose connected to db...');
      });
    
      mongoose.connection.on('error', err => {
        console.log(err.message);
      });
    
      mongoose.connection.on('disconnected', () => {
        console.log('Mongoose connection is disconnected...');
      });
    
};