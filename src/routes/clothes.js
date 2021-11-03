const express=require('express')
const router=express.Router();

const{clothesCollection}=require('../models/index')

router.post('/clothes',createCloth);
router.get('/clothes',getClothes);
router.get('/clothes/:id',getCloth);
router.put('/clothes/:id',updateCloth);
router.delete('/clothes/:id',deleteCloth);


function createCloth(req,res){

    const obj=req.body;
    let cloth=clothesCollection.create(obj)
    res.status(201).json(cloth)
}

function getClothes(req,res){
    let cloth=clothesCollection.read();
    res.status(200).json(cloth)
}

function getCloth(req,res){
    const id=parseInt(req.params.id);
    let cloth=clothesCollection.read(id)
    res.status(200).json(cloth)
}

function updateCloth(req,res){
    const obj=req.body;
    const id=parseInt(req.params.id);
    let cloth=clothesCollection.update(id,obj)
    res.status(201).json(cloth)
}

function deleteCloth(req,res){
    const id=parseInt(req.params.id);
    let cloth=clothesCollection.delete(id)
    res.status(204).json(cloth)

}
module.exports = clothesRouter;