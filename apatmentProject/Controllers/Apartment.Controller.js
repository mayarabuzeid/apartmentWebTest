
const Apartment = require('../Models/Apartment.model')
const mongoose = require('mongoose');
const createError = require('http-errors');

module.exports = {
    getAllApartments: async (req,res,next)=>{
        try{
            
            const result = await Apartment.find({},{__v: 0});
            res.status(200).send(result);
        } catch(error){
            console.log(error.message)
            next(error)
        }

    },
    createNewApartment: async (req,res,next)=>{
        try{
            const apartment =new Apartment(req.body);
            const result = await apartment.save();
            res.send(result);
        } catch(error){
            console.log(error.message)
            if(error.name === 'ValidationError'){
                next(createError(422,error.message));
                return;
            }
            next(error)
        }
        
    },
    findApartmentById: async (req,res,next)=>{
        const id = req.params.id
        try{
            
            const result = await Apartment.findById(id);
            if(!result){
                throw createError(404,'Apartment not found');
            }
            res.send(result);
        } catch(error){
            console.log(error.message)
            if(error instanceof mongoose.CastError){
                next(createError(400,'invalid apartment id'));
                return;
            }
            next(error)
        }
    },
    findApartmentByIdAndUpdate:async(req,res,next)=>{
    
        try{
            const id = req.params.id
            const updates = req.body
            const options = {new: true}
            const result = await Apartment.findByIdAndUpdate(id,updates,options);
            if(!result){
                throw createError(404,'Apartment not found');
            }
            res.send(result);
        } catch(error){
            console.log(error.message)
            if(error instanceof mongoose.CastError){
                next(createError(400,'invalid apartment id'));
                return;
            }
            next(error)
        }
    },
    findApartmentByIdAndDelete: async (req,res,next)=>{
        const id = req.params.id
        try{
            
            const result = await Apartment.findByIdAndDelete(id);
            if(!result){
                throw createError(404,'Apartment not found');
            }
            res.send(result);
        } catch(error){
            console.log(error.message)
            if(error instanceof mongoose.CastError){
                next(createError(400,'invalid apartment id'));
                return;
            }
            next(error)
        }
    }
}