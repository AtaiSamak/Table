const express = require("express");
const cors = require("cors");
const tableRouter = require("./routes/table.routes");

const PORT = 8080;
const app = express();

app.use(cors());
app.use("/api", tableRouter);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
