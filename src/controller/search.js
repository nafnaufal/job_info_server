const { getFromScrape } = require('./getter/from_scrape');
const { getFromApi } = require('./getter/from_api');

const mongoose = require('mongoose');
const { jobSchema } = require('../models/job');

const search = async (req, res) => {

	const Job = mongoose.model('Job', jobSchema)

	const currentDate = new Date().toDateString();
	const id = `Web+Developer++Indonesia++${currentDate}`;
	
	// Job.exists({ id: id }).then(result => {
	// 	console.log('ada')
	// }).catch(async (err) => {
		
		// data = await getFromScrape('Web Developer', 'indonesia', data);
		// data = await getFromApi('Web Developer', 'indonesia', data);


		const job = new Job({
			id: 'id',
			name: 'Web+Developer',
			location: 'Indonesia',
			linkedin: 'data.linkedin',
			indeed: 'data.indeed',
			glints: 'data.glints',
			jobstreet: 'data.jobstreet',
		})

		job.save().then((res) => {
			res.status(200).send(data);
		}).catch((err) => console.log('Error'));
	// })
}

	

module.exports = {
	search
};