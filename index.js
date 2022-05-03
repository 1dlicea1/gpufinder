const express = require("express")
const router = express.Router();
const bodyParser = require("body-parser")
const app = express().use(bodyParser.json())
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
app.get("/David test", (req, res) => {
    console.log("Test Complete");
    res.status(200).end();
})
