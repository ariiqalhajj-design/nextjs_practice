const express = require('express');
const app = express();
const PORT = 3000;
const categoriesRouter = require('./routes/categories');
app.use(express.json());

//middleware
app.use('/categories', categoriesRouter);

app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`);
});