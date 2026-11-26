const express=require("express");
const app=express();
const PORT=3000;
// الـ app هو عبارة عن كائن (Object) أنشأناه باستخدام Express، ومن خلاله منقدر نتحكم بسلوك السيرفر.
// Middleware to read JSON requests
app.use(express.json());

//Home route
app.get("/",(req,res)=>{
    res.send("Welcome to Little Paws API ");
});
// Start server
app.listen(PORT,()=>{
    console.log(`Little Paws server running on http://localhost:${PORT}`);
})