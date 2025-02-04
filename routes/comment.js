const express = require('express');
const router = express.Router();

const commentController = require('../controllers/commentController');

router.post('/', commentController.create);
router.get('/', commentController.get);
router.delete('/:id', commentController.delete);

module.exports = router;