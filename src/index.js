require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT;

const middlewareLog = require("./middleware/logs.js");
const APIRoutes = require("./routes/api.js");


app.use(middlewareLog);
app.use(express.json());


app.use("/Jobs", APIRoutes);
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})