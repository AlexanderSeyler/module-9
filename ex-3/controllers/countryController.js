const axios = require("axios");

exports.getAllCountries = async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.sampleapis.com/countries/countries"
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCountryByName = async (req, res) => {
  const countryName = req.params.country;
  try {
    const response = await axios.get(
      `https://api.sampleapis.com/countries/countries/${countryName}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
