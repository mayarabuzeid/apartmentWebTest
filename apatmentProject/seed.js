const mongoose = require('mongoose');
const Apartment = require('./Models/Apartment.model')

const seedApartments=[{
    location : "ALX_Smouha",
    price: 5000000,
    roomsNumber: 4
},
{
    location : "ALX_KafrAbdo",
    price: 8000000,
    roomsNumber: 2
},
{
    location : "ALX_Shatby",
    price: 500000,
    roomsNumber: 3
},
{
    location : "CAI_Tamgoo",
    price: 10000000,
    roomsNumber: 5
}]

const seedDB= async()=>{
    await Apartment.deleteMany({});
    await Apartment.insertMany(seedApartments);
};
seedDB();


