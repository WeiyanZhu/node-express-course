require(`dotenv`).config();
const express = require(`express`);
require("express-async-errors");

const app = express();
const port = process.env.port || 5000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const productRouter = require(`./routes/products`);
app.use(`/api/v1/products`, productRouter);

const errorHandler = require(`./middleware/error-handler`);
const notFoundHandler = require(`./middleware/not-found`);
app.use(errorHandler);
app.use(notFoundHandler);

const connectDB = require(`./db/connect`);

app.listen(port, async () => {
    await connectDB(process.env.MONGO_URI);
    console.log(`Example app listening on port ${port}`);
})

