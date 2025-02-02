const express = require('express')
const dotenv = require("dotenv");
const mongoSanitizer = require("express-mongo-sanitize");
const path = require("path");
const connectToMongo = require('./config/db');
const fileupload = require("express-fileupload");
const errorHandler = require("./middleware/error");
const cors = require("cors");

connectToMongo()

const app = express()
app.use(express.json({ limit: "50mb" }));
app.use(errorHandler);

//Data sanitization against NoSQL query injection
app.use(mongoSanitizer());

// set static folder
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

//File uploading
app.use(fileupload());

// Load env vars
dotenv.config({ path: "./config/config.env" });

const PORT = 5000


// Available Routes
app.use('/api', require('./routes/admin'))
app.use('/api/v1/auth', require('./routes/auth'))
app.use('/api/v1/admin/datapoints', require('./routes/admin/datapoints'))
app.use('/api/v1/admin/datatemplate', require('./routes/admin/datatemplate'))
app.use('/api/v1/admin/usergroups', require('./routes/admin/usergroups'));
app.use('/api/v1/admin/roles', require('./routes/admin/adminRoles'));
app.use('/api/v1/company', require('./routes/company'));


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})