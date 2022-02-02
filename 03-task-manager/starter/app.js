const express = require(`express`);
const taskRouter = require(`./routes/tasks`);

const app = express();
const port = 5000;

app.use("/api/v1/tasks", taskRouter);
app.listen(port, console.log("Listening to port %s", port));

