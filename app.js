const express =require("express");

const app = express();
const port = 5000;

app.use(express.static("public"));

//app.use(port || "3000");
const routes = require("./routes");
routes(app);

app.listen(port,()=>{
    console.log("Server is running at port : " + port);
})

