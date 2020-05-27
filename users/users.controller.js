const express = require('express');
const router = express.Router();
const userService = require('./users.service');

// routes
router.get('/employees', getEmployees)
router.get('/surveys', getSurveys)
router.post('/update', updateEmployeeSurvey)

module.exports = router;

function getEmployees(req, res, next) {
    userService.getEmployees()
        .then((obj) => res.json(obj))
        .catch(err => next(err));
}

function getSurveys(req, res, next) {
    userService.getSurveys()
        .then((obj) => res.json(obj))
        .catch(err => next(err));
}

function updateEmployeeSurvey(req, res, next) {
    userService.updateEmployeeSurvey(req.body.sid, req.body.eid, req.body.action)
        .then((obj) => res.json(obj))
        .catch(err => next(err));
}
