const express = require('express');
const router = express.Router();
const controller = require("../controllers/orders")
const cors = require('cors')

app.use(cors({
  origin: 'https://michaels-final-app.herokuapp.com'
}))


router.post("/orders/:user_id/:service_level/:date/:time/:now",controller.uploadOrder)


module.exports = router