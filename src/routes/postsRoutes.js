const postsControllers = require('./../controllers/postsControllers')
const express = require('express');
const router = express.Router();

router.get('/', postsControllers.show)
router.post('/', postsControllers.create)
router.put('/like/:id', postsControllers.modify)
router.delete('/:id', postsControllers.remove)

module.exports = router;