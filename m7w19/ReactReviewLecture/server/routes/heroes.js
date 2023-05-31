const express = require("express");
const mockData = require("../data/superHeroData");

const router = express.Router();
// app.get
router.get("/", (req, res) => {
    res.json(mockData);
})

router.post("/", (req, res) => {
    //we are now retrieving the object from the frontend
    // and adding it to our mockData
    // Then we will send a res.status 200 for reassurance
    const idForHero = Math.random().toString(36);
    const newHero = {
        id: idForHero,
        name: req.body.newHero
    }
    mockData.push(newHero)
    res.json(mockData);
})

module.exports = router;