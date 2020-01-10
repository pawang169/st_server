const express =require("express");
var cors = require('cors');

const app = express();
const port = 5000;

app.use(express.static("public"));
app.use(cors());
//app.use(port || "3000");
const routes = require("./routes");
routes(app);

app.listen(port,()=>{
    console.log("Server is running at port : " + port);
})

