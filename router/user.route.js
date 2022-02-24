var express = require('express');
var router = express.Router();

// var user = [
//     {
//         "id": 1,
//         "name": "Luan"
//     },
//     {
//         "id": 2,
//         "name": "Quynh"
//     }
// ]

var controller = require('../controller/user.controller')

router.get('/', controller.get)

router.post('/', controller.post)

router.get('/:id', controller.getOne)

router.delete('/:id', controller.delete)

router.put('/:id', controller.put)

module.exports = router;