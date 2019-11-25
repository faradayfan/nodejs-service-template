var express = require('express');
var router = express.Router();
const IndexController = require('../controllers/index.controller')
const HealthService = require('../services/health.service')
const controller = new IndexController(new HealthService())

router.get('/', controller.indexGet.bind(controller))
router.get('/health', controller.healthGet.bind(controller))

module.exports = router;
