
const express = require('express');
const router = express.Router()
let employeeSchema = require("../models/Employee");

router.post('/create-employee', async (req, res) => {
    const data = new employeeSchema({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        gender: req.body.gender
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.get('/list-employee', async (req, res) => {
    try{
        const data = await employeeSchema.find();
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


module.exports = router;
