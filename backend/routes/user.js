const { Router } = require('express');
const candidate = require('../model/candidate')
const Voter = require('../model/voter')
const router = require("express").Router();
const CryptoJS = require("crypto-js");
const voter = require('../model/voter');


router.post("/register", async (req, res) => {
    const newVoter = new Voter({
        Citizenshipnumber: req.body.Citizenshipnumber,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString(),

        Name: req.body.Name,
        DateOfBirth: req.body.DateOfBirth,
        Address: [{
            PermanentAddress: req.body.PermanentAddress,
            TemporaryAddress: req.body.TemporaryAddress,
        }],
        ParentsName: [
            {
                FatherName: req.body.FatherName,
                MotherName: req.body.MotherName,
            }
        ],
    })
    try {
        if (req.body.password === req.body.confirmpassword) {
            const savedVoter = await newVoter.save();
        }

    } catch (err) {
        res.status(500).json(err);
    }

})

router.post("/login", async (req, res) => {
    try {
        const voter = await Voter.findOne({ Citizenshipnumber: req.body.Citizenshipnumber });
        !voter && res.status(401).json("Wrong credentials!");

        const hashedPassword = CryptoJS.AES.decrypt(
            voter.password,
            process.env.PASS_SEC
        );
        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        OriginalPassword !== req.body.password &&
            res.status(401).json("Wrong credentials!");
        const{password,...other}=voter;
        res.status(200).json(other)

    }
    catch(err){
        res.status(401).json(err)
    }
  });

module.exports = router;
