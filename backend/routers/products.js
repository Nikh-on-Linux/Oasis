const express = require('express');
const supabase = require('../config/supabaseClient');
const { ObjectId } = require('bson')
const router = express.Router();

router.get("/",async(req,res)=>{
    try{
        const { data, error } = await supabase.from('products').select();
        res.send(data);
    }
    catch(error){
        console.log(error);
    }
})


router.get("/products/:id",async(req,res)=>{
    try{
        let id = req.params.id;
        const { data, error } = await supabase.from('products').select().eq('itemId',id);
        res.send(data);
    }
    catch(error){
        console.log(error);
    }
});

router.post("/products",async(req,res)=>{
    try{
        console.log(req.body);
        let itemId = new ObjectId();
        const { data, error } = await supabase.from('products').insert(
            {
                itemId : itemId,
                name : req.body.name,
                '3d_model_id' : req.body['3d_model_id'],
                oldPrice : req.body.oldPrice,
                newPrice : req.body.newPrice,
            }
        );
        if (error) console.log(error);
        res.json(`{status: "success"}`);
    }
    catch(error){
        console.log(error);
    }
});

router.put('/products/:id',async(req,res)=>{
    try{    
        let id = req.params.id;
        const { data, error } = await supabase.from('products')
            .update(
            {
                name : req.body.name,
                '3d_model_id' : req.body['3d_model_id'],
                oldPrice : req.body.oldPrice,
                newPrice : req.body.newPrice,
            })
            .match({itemId : id});
        if (error) console.log(error);
        res.json(`{status: "success"}`);
    }catch(error){
        console.log(error);
    }
});

router.delete('/products/:id',async(req,res)=>{
    try{    
        let id = req.params.id;
        const { data, error } = await supabase.from('products').select().eq('itemId',id);
        if (error) console.log(error);
        await supabase.from('products').delete().match({itemId: id});
        res.json(`{status: "success"}`);
    }catch(error){
        console.log(error);
    }
});

module.exports = router;