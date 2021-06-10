const express=require('express')
const data=require('./data')
const app=express()
const port=process.env.PORT || 3000
app.get('',async(req,res)=>{
    res.send("use proper url endpoints like : localhost:3000/absentDays or localhost:3000/absentDetails or localhost:3000/leaveBalance or localhost:3000/holidayCalender")
})
app.get('/absentDays',async(req,res)=>{
    try
    {
        res.send(data.absentdays)
    }
    catch(e)
    {
        res.status(500).send()
    }
})
app.get('/absentDetails',async(req,res)=>{
    try
    {
        res.send(data.absentdetails)
    }
    catch(e)
    {
        res.status(500).send()
    }
})
app.get('/leaveBalance',async(req,res)=>{
    try
    {
        res.send(data.leavebalance)
    }
    catch(e)
    {
        res.status(500).send()
    }
})
app.get('/holidayCalender',async(req,res)=>{
    try
    {
        res.send(data.holidaycalender)
    }
    catch(e)
    {
        res.status(500).send()
    }
})
app.listen(port,()=>{
    console.log("Server is up! "+port)
})
