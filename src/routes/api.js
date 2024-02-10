const express = require("express");
const APIController = require("../controller/api.js");
const ScrapeController = require("../controller/scrape.js");
const routes = express.Router();

routes.post("/", APIController.getCountJobs);
routes.post("/scrape", ScrapeController.scrape);

module.exports = routes;