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

    app.get("/Topics",(req,res)=>{
        
    })
}
