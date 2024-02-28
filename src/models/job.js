const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
	id: String,
	name: String,
	location: String,
	linkedin: Number,
	indeed: Number,
	glints: Number,
	jobstreet: Number,
}, { timestamps: true})


module.exports = jobSchema;