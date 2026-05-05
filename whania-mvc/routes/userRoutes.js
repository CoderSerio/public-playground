/**
 * User Routes
 */
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.list);
router.get('/:id', userController.show);
router.post('/', userController.create);

module.exports = router;
