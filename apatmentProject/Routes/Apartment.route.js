const express =require('express')
const router = express.Router();


const Apartment = require('../Models/Apartment.model')
const  ApartmentController  = require('../Controllers/Apartment.Controller');
router.get('/',ApartmentController.getAllApartments);

router.post('/',ApartmentController.createNewApartment);

router.get('/:id',ApartmentController.findApartmentById);

router.patch('/:id',ApartmentController.findApartmentByIdAndUpdate);

router.delete('/:id',ApartmentController.findApartmentByIdAndDelete);
module.exports = router;