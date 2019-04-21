var express = require('express');
var router = require('express').Router();
var sql = require('../database/mysqlLib');
/* GET home page. */
router.get('/', function(req, res, next) {
  sql.getItems(function(err, results) {
    console.log(results);
    res.render('index', { products: results });
  });

});

module.exports = router;
