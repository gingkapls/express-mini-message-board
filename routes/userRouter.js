const { Router } = require('express');
const { getUserMessages } = require('../controllers/userController');
const router = Router();

router.get('/:username', getUserMessages);

module.exports = router;