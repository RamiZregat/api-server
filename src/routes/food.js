const express=require('express')
const router=express.Router();

const{foodCollection}=require('../models/index')


router.post('/food',createFood);
router.get('/food',getFood);
router.get('/food/:id',getOneFood);
router.put('/food/:id',updateFood);
router.delete('/food/:id',deleteFood);


function createFood(req,res){

    const obj=req.body;
    let food=foodCollection.create(obj)
    res.status(201).json(food)
}

function getFood(req,res){
    let food=foodCollection.read();
    res.status(200).json(food)
}

function getOneFood(req,res){
    const id=parseInt(req.params.id);
    let food=foodCollection.read(id)
    res.status(200).json(food)
}

function updateFood(req,res){
    const obj=req.body;
    const id=parseInt(req.params.id);
    let food=foodCollection.update(id,obj)
    res.status(201).json(food)
}

function deleteFood(req,res){
    const id=parseInt(req.params.id);
    let food=foodCollection.delete(id)
    res.status(204).json(food)

}

module.exports = foodRouter;