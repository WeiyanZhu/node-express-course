const express = require(`express`);
const taskRouter = require(`./routes/tasks`);
require(`dotenv`).config();
const connectDB = require("./db/connector");

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.static(`./public`));
app.use("/api/v1/tasks", taskRouter);

const startServer = async () => {
    try{
        await connectDB(process.env.MONGO_URL);
        app.listen(port, console.log("Listening to port %s", port));
    }catch(error){
        console.log(error);
    }
}

startServer();
