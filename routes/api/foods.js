const express = require('express');
const router = express.Router();
const foodsCtrl = require('../../controllers/api/foods');

router.post('/foods', foodsCtrl.search);
router.post('/foods/add', foodsCtrl.addNewMeal);

module.exports = router;