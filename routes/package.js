const express = require('express');
const router = express.Router();
const controller = require("../controllers/package")
const cors = require('cors')


app.use(cors({
  origin: 'https://michaels-final-app.herokuapp.com'
}))


router.get("/package",controller.getPackage)

router.post("/createPackage/:packageName/:packageInfo",controller.createPackage)


module.exports = router