const express = require('express');
const router = express.Router();
const db = require('../services/dbClient');


router.post('/', async function(req, res, next) {
    try {
        res.json(await db.query(req.body));
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        next(err);
    }
});

module.exports = router;
