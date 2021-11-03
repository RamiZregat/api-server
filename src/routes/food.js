const express=require('express')
const router=express.Router();

const{foodCollection}=require('../models/index')


router.post('/food',createFood);
router.get('/food',getFood);
router.get('/food/:id',getOneFood);
router.put('/food/:id',updateFood);
router.delete('/food/:id',deleteFood);


async function createFood(req,res){

    const obj=req.body;
    let food=await foodCollection.create(obj)
    res.status(201).json(food)
}

async function getFood(req,res){
    let food=await foodCollection.read();
    res.status(200).json(food)
}

async function getOneFood(req,res){
    const id=parseInt(req.params.id);
    let food=await foodCollection.read(id)
    res.status(200).json(food)
}

async function updateFood(req,res){
    const obj=req.body;
    const id=parseInt(req.params.id);
    let food=await foodCollection.update(id,obj)
    res.status(201).json(food)
}

async function deleteFood(req,res){
    const id=parseInt(req.params.id);
    let food=await foodCollection.delete(id)
    res.status(204).json(food)

}

module.exports = router;