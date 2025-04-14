import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import DefaultData from './default.js';
import Router from './routes/route.js';
import Razorpay from "razorpay";

const app= express();

dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Router);

app.post('/order',async(req,res)=>{
    const razorpay=new Razorpay({
        key_id:"rzp_test_1thbED95P17pOS",
        key_secret:"JhxlpFauUTAiuh6ZJDcbW5c7"
    })
    const options={
        amount:req.body.amount,
        currency:req.body.currency,
        receipt:"receipt#1",
        payment_capture:1
    }
    try{
        const response=await razorpay.orders.create (options)

        res.json({
            order_id: response.id,
            currency:response.currency,
            amount:response.amount
        })
    }
    catch(error){
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
    
})
app.get("/payment/:paymentId",async(req,res)=>{
    const {paymentId}=req.params;
    const razorpay=new Razorpay({
        key_id:"rzp_test_1thbED95P17pOS",
        key_secret:"JhxlpFauUTAiuh6ZJDcbW5c7"
    })
    try{
        const payment=await razorpay.payments.fetch(paymentId)
        if(!payment){
            return res.status(500).json("Error at razorpay loading")
        }
        res.json({
            status:payment.status,
            method:payment.method,
            amount:payment.amount,
            currency:payment.currency
        })
    } catch(error){
        res.status(500).json("Failed to fetch")
    }
})

const PORT= 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


Connection(USERNAME, PASSWORD);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

DefaultData();