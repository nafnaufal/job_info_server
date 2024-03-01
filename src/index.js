require('dotenv').config();
const express = require('express');;
const app = express()

const port = process.env.PORT;

const middlewareLog = require("./middleware/logs.js");
const connectToDatabase = require("./middleware/mongo_log.js");
const APIRoutes = require("./routes/api.js");

app.use(middlewareLog);
app.use(connectToDatabase);
app.use(express.json());


app.use('/q/', APIRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('*', function (req, res) {
	res.status(404).send('Not Found!');
});

app.listen(port, () => {
	console.log("Server is running on port ", port);
 });