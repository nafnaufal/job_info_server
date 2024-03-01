const express = require("express");
const SearchController = require("../controller/search.js");
const routes = express.Router();

// routes.post("/", APIController.getCountJobs);
routes.get("/", SearchController.addData);

module.exports = routes;