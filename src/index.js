require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express()

const port = process.env.PORT;
const db_uri = process.env.DB_URI_NEW;

const middlewareLog = require("./middleware/logs.js");
const APIRoutes = require("./routes/api.js");

app.use(middlewareLog);
app.use(express.json());

mongoose.connect(db_uri)
	.then((res) => {
		console.log('mongodb connected')
		app.listen(port, () => {
			console.log(`Listening on port http://localhost:${port}`)
		})
	}).catch((err) => 
		res.status(501).send('Database not connected!')
	);

app.use('/q/', APIRoutes);
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('*', function (req, res) {
	res.status(404).send('Not Found!');
});