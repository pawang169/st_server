const mongoose = require('mongoose');
const {mongourl} = require("./config/keys")
const theme = require("./models/theme")

mongoose.connect(mongourl);

module.exports=(app)=>{
    app.get("/home",(req,res)=>{
        res.send("Home Route")
    });
    app.get("/",(req,res)=>{
    res.send("root page");
    //res.sendfile('')
    //__dirname
    // static files
    });

    app.get("/Theme",(req,res)=>{
        const item = new theme({
            id:1,title:"Spirit of Giving"
        });

    item.save().then(data=>{
        console.log(data);
        console.log("save record");
    })

    })

    app.post("addTheme",(req,res)=>{

    })
}
