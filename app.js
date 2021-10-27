const express = require('express');
const app = express();
const mongoose = require('mongoose');
const myAd = require("./myAd");

const PORT = process.env.PORT || 4500;

// npm run server

app.use(express.json());

mongoose.connect('mongodb+srv://larrendamentos:cet57passw0rd@cluster0.9e5h6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

// postman post -> localhost:4500/api/postAds

app.post("/api/postAds", async(request, response) =>{
    const newAd = new myAd(request.body);

    try{
        const saveAd = await newAd.save();
        response.status(200).json(saveAd);

    }
    catch(err){
        response.status(500).json(err);

    }
});


// postman get -> localhost:4500/api/getAds

app.get("/api/getAds", async (response) => {
	const Ads = await myAd.find()

	response.send(Ads)

});


app.listen(PORT, () =>{
    console.log("Server is now running...")

});