var express = require('express');
var app = express();
let middleware = require('./middleware');

var promo = require('../model/promotionentityModel.js');

app.get('/api/getAllPromotions', function (req, res) {
    promo.getAllDisplayPromotions()
        .then((result) => {
            console.log(result)
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send("Failed to get all promotions");
        });
});

module.exports = app;