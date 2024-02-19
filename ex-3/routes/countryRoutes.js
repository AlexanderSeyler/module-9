const express = require("express");
const router = express.Router();
const countriesController = require("../controllers/countryController");

router.get("/", countriesController.getAllCountries);
router.get("/:country", countriesController.getCountryByName);

module.exports = router;
