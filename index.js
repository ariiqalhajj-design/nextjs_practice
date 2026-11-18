const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cosrs = require('cors');
const categoriesRouter = require('./routes/categories');

dotenv.config();
app.use(cosrs());

//middleware
app.use(express.json());

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();

    console.log(`Request received at: ${req.requestTime}`);
    console.log(`Request method: ${req.method}`);
    console.log(`Request URL: ${req.originalUrl}`);

    next();
});

const port = process.env.PORT || 3000;
app.use('/categories', categoriesRouter);

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
});