const { getFromScrape } = require('./getter/from_scrape.js');
const { getFromApi } = require('./getter/from_api.js');

let data = {}

const search = async (req, res) => {
	data = await getFromScrape('Web Developer', 'indonesia', data);
	data = await getFromApi('Web Developer', 'indonesia', data);
	res.status(200).send(data);
}

module.exports = {
	search
};