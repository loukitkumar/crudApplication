const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const { body } = require('express-validator');

router.get('/',authController.fetchAll);

router.post(
    '/post',
    [
     body('title').trim().not().isEmpty(),
     body('body').trim().not().isEmpty()
    ],
    authController.postpost
)

router.delete('/delete/:id',authController.deletepost);

router.put('/update/:id',authController.updatepost);
module.exports = router;