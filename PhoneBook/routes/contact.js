const express = require('express');
const Contact = require('../dbModels/contact');
const { addContactValidation} = require('../routes/validation');
const router = express.Router();

router.get('/getAllContacts',async(req,res) => {
    try{
        var query = { address: req.body.userId };
        const allContacts = await Contact.find(query);
        res.json(allContacts);
    }catch(err){
        res.json({messagee : err});
    }
});

router.post('/addContact',async (req,res) => {
    
    const { error } = addContactValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const contacts = new Contact({
        name : req.body.name,
        mobileNumber : req.body.mobileNumber
    });
    try{
        const saveContacts = await contacts.save();
        res.json(saveContacts);
    }catch(err){
        res.json({messagee : err});
    }
});

router.get('/get/:mobileNumber',async(req,res) => {
    try{
        const contact = await Contact.findById(req.params.mobileNumber);
        res.json(contact);
    }catch(err){
        res.json({messagee : err});
    }
});

router.patch('/update/:mobileNumber',async(req,res) => {
    try{
        const contactUpdate = await Contact.updateOne({_id : req.params.mobileNumber},{ $set : {blog: req.body.name , blogName: req.body.mobileNumber}});
        res.json(contactUpdate);
    }catch(err){
        res.json({messagee : err});
    }
});

router.delete('/delete/:mobileNumber',async(req,res) => {
    try{
        const contactDelete = await Contact.remove({_id : req.params.mobileNumber});
        res.json(contactDelete);
    }catch(err){
        res.json({messagee : err});
    }
});

module.exports = router;