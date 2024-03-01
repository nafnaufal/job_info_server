const { getFromScrape } = require('./getter/from_scrape');
const { getFromApi } = require('./getter/from_api');

const mongoose = require('mongoose');
const Job = require('../models/job');

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
			linkedin: 'data linkedin',
			indeed: 'data indeed',
			glints: 'data glints',
			jobstreet: 'data jobstreet',
		})

		job.save().then((res) => {
			res.status(200).send(data);
		}).catch((err) => console.log('Error'));
	// })
}

const addData = async (req, res) => {
	let data = {};
	data = await getFromScrape('Web Developer', 'indonesia');
	const jobst = await getFromApi('Web Developer', 'indonesia');
	const currentDate = new Date().toDateString();
	const id = `Web+Developer++Indonesia++${currentDate}`;
	const jobs = new Job({
		id: id,
		name: 'Web Developer',
		location: 'Indonesia',
		linkedin: data.linkedin,
		indeed: data.indeed,
		glints: data.glints,
		jobstreet: jobst.jobstreet,
	})
	try{
		const savedJob = await jobs.save();
		return res.json({
			status: 'success',
			data: savedJob,
		});
	}
	catch(error){
		return res.json({
			message: "Server Error",
			error: error,
		 });
	}
}

	

module.exports = {
	search,
	addData
};