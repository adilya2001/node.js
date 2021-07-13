var express = require('express');
var router = express.Router();
var faker = require('faker');

router.get('/',function(req,res,next) {
res.status(200).send([{
    id: faker.random.number(),
    name: faker.commerce.product(),
    price: faker.commerce.price(),
    color: faker.commerce.color()
}]);
});
router.get('/:id',function(req,res,next) {
res.status(200).send({
    id: req.params.id,
    name: faker.commerce.product(),
    price: faker.commerce.price(),
    color: faker.commerce.color()
});
});

router.post('/', function(req,res){
res.status(201).send(req.body);
});

module.exports = router; 