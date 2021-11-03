const express=require('express')
const router=express.Router();

const{clothesCollection}=require('../models/index')

router.post('/clothes',createCloth);
router.get('/clothes',getClothes);
router.get('/clothes/:id',getCloth);
router.put('/clothes/:id',updateCloth);
router.delete('/clothes/:id',deleteCloth);


async function createCloth(req,res){

    const obj=req.body;
    let cloth=await clothesCollection.create(obj)
    res.status(201).json(cloth)
}

async function getClothes(req,res){
    let cloth=await clothesCollection.read();
    res.status(200).json(cloth)
}

async function getCloth(req,res){
    const id=parseInt(req.params.id);
    let cloth=await clothesCollection.read(id)
    res.status(200).json(cloth)
}

async function updateCloth(req,res){
    const obj=req.body;
    const id=parseInt(req.params.id);
    let cloth=await clothesCollection.update(id,obj)
    res.status(201).json(cloth)
}

async function deleteCloth(req,res){
    const id=parseInt(req.params.id);
    let cloth=await clothesCollection.delete(id)
    res.status(204).json(cloth)

}
module.exports = router;