var express = require('express');
var router = express.Router();
var sql = require('../database/mysqlLib');

router.get('/:id', function (req, res, next) {
    sql.getItemByID(req.params.id, function (err, preresult, results) {
        res.render('item', {title: "Item Page",item: results[0],no_review: preresult[0]===undefined,list: results,sum:0});
    });
});

module.exports = router;