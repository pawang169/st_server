const mongoose = require('mongoose');
const {mongourl} = require("./config/keys")
const theme = require("./models/theme")
const week = require("./models/week")

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

    app.get("/ListThemes",(req,res)=>{
        console.log("list theme")
        const themeList = theme.find({}).then(data=>{
                console.log(data)
                res.send(JSON.stringify(data))
        });
        
    })

    app.get("/SaveTheme",(req,res)=>{
         let data =[];
         data.map(rec=>{
            const item = new theme(
                {templateId:1 , templateName: 'Week-1' , templateTitle : "Spirit of Giving"}
            );
            item.save().then(data=>{
                console.log(data);
                console.log("saved record");
            })
        });    

    
    res.send("Done !!!!!!!!")
    });

    app.get("/SaveWeek",(req,res)=>{
        let sectionData = [
            // {weekId:1,sectionId:1,speaker:'',heading:'Welcome',sectionType:'div'},
            // {weekId:1,sectionId:2,speaker:'pawan1',heading:'h1',sectionType:'div'},
            // {weekId:1,sectionId:3,speaker:'pawan2',heading:'h2',sectionType:'vid',videoStart:10,videoEnd:20,videoURL:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'},
            // {weekId:1,sectionId:4,speaker:'pawan3',heading:'h3',sectionType:'div'},
            // {weekId:1,sectionId:5,speaker:'pawan4',heading:'h4',sectionType:'vid',videoStart:0,videoEnd:0,videoURL:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'},
            
            // {weekId:2,sectionId:1,speaker:'',heading:'Welcome',sectionType:'div'},
            // {weekId:2,sectionId:2,speaker:'2222pawan1',heading:'h1',sectionType:'div'},
            // {weekId:2,sectionId:3,speaker:'2222pawan2',heading:'h2',sectionType:'vid',videoStart:10,videoEnd:20,videoURL:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'},
            // {weekId:2,sectionId:4,speaker:'222pawan3',heading:'h3',sectionType:'div'},
            // {weekId:2,sectionId:5,speaker:'222222pawan4',heading:'h4',sectionType:'vid',videoStart:0,videoEnd:0,videoURL:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'},
            
            // {weekId:3,sectionId:1,speaker:'',heading:'Welcome',sectionType:'div'},
            // {weekId:3,sectionId:2,speaker:'33333',heading:'h1',sectionType:'div'},
            // {weekId:3,sectionId:3,speaker:'333333',heading:'h2',sectionType:'div',videoStart:10,videoEnd:20,videoURL:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'},
            // {weekId:3,sectionId:4,speaker:'33333',heading:'h3',sectionType:'div'},
            // {weekId:3,sectionId:5,speaker:'333333333',heading:'h4',sectionType:'div',videoStart:0,videoEnd:0,videoURL:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'},
            
        ];
        sectionData.map(rec=>{
            let item = new week(rec);
            item.save().then(console.log('Save Recod'));
        })

        res.send("All weeks saved")

    })

    app.get("/ListWeek/:id",(req,res)=>{
        console.log("list week")
        const id = req.params.id;
        console.log(id);
        //res.send("Week id is " + id);
        week.find({weekId:id}).then(data=>{
           res.send(JSON.stringify(data));
        });
    })

    app.post("addTheme",(req,res)=>{

    })
}
