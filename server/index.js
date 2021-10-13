const express = require("express");
const app = express(); // create express app
const path = require("path");
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use('/api', apiRouter);

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});



/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({'message': err.message});

    return;
});

// start express server on port 5000
app.listen(5000, () => {
    console.log("server started on port 5000");
});
