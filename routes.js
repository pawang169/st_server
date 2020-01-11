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
        const themeList = theme.find({}).sort("templateId").then(data=>{
                console.log(data)
                res.send(JSON.stringify(data))
        });
        
    })

    app.get("/SaveTheme",(req,res)=>{
         let data =[
            // { templateId: 1, templateName: 'Week-1',  templateTitle: 'Setting Priorities in Life',},
            // { templateId: 2, templateName: 'Week-2',  templateTitle: 'True Purpose of Life',},
            // { templateId: 3, templateName: 'Week-3',  templateTitle: 'Physical, Mental, and Spiritual Benefits of Meditation',},
            // { templateId: 4, templateName: 'Week-4',  templateTitle: 'Importance and Benefits of Satsang',},
            // { templateId: 5, templateName: 'Week-5',  templateTitle: 'Receptivity',},
            // { templateId: 6, templateName: 'Week-6',  templateTitle: 'Introspection Diary and Developing Ethical Values',},
            // { templateId: 7, templateName: 'Week-7',  templateTitle: 'Bhakti: Love and Devotion',},
            // { templateId: 8, templateName: 'Week-8',  templateTitle: 'Theory and Practice of Meditation on the Inner Light and Sound',},
            // { templateId: 9, templateName: 'Week-9',  templateTitle: 'What Are the Impediments on the Spiritual Path and Overcoming Them',},
            // { templateId: 10, templateName: 'Week-10',  templateTitle: 'Role of the Living Master',},
            // { templateId: 11, templateName: 'Week-11',  templateTitle: 'Positive Mysticism',},
            // { templateId: 12, templateName: 'Week-12',  templateTitle: 'Helping Factors in Meditation',},
            // { templateId: 13, templateName: 'Week-13',  templateTitle: 'Attaining Lasting Happiness',},
            // { templateId: 14, templateName: 'Week-14',  templateTitle: 'Benefits of Having a Spiritual Master',},
            // { templateId: 15, templateName: 'Week-15',  templateTitle: 'Difficulties in Developing Devotion',},
            // { templateId: 16, templateName: 'Week-16',  templateTitle: 'Inner and Outer Peace',},
            // { templateId: 17, templateName: 'Week-17',  templateTitle: 'How to Find God',},
            // { templateId: 18, templateName: 'Week-18',  templateTitle: 'Nonviolence',},
            // { templateId: 19, templateName: 'Week-19',  templateTitle: 'Inner Journey',},
            // { templateId: 20, templateName: 'Week-20',  templateTitle: 'How to Develop Detachment',},
            // { templateId: 21, templateName: 'Week-21',  templateTitle: 'True Prayer',},
            // { templateId: 22, templateName: 'Week-22',  templateTitle: 'Master-Disciple Spiritual Relationship',},
            // { templateId: 23, templateName: 'Week-23',  templateTitle: 'Truthfulness',},
            // { templateId: 24, templateName: 'Week-24',  templateTitle: 'Awaken Spiritually',},
            // { templateId: 25, templateName: 'Week-25',  templateTitle: 'Karma, Reincarnation, and Transmigration',},
            // { templateId: 26, templateName: 'Week-26',  templateTitle: 'Truthfulness',},
            // { templateId: 27, templateName: 'Week-27',  templateTitle: 'Truthfulness',},

         ];
         
        data.map(rec=>{
            let item = new theme(rec);                 
            item.save().then(res=>{
                console.log("saved record");
            })
        }); 
    res.send("Done !!!!!!!!")
    });

    app.get("/SaveWeek",(req,res)=>{
        let sectionData = [
            // {weekId:1,sectionId:1,speaker:'',heading:'Welcome',sectionType:'div'},
            // {weekId:1,sectionId:2,speaker:'',heading:'SETTING PRIORITIES IN LIFE',sectionType:'div'},
            // {weekId:1,sectionId:3,speaker:'Adi',heading:'NEW YEAR’S MESSAGE 2020',sectionType:'div'},
            // {weekId:1,sectionId:4,speaker:'Paul',heading:'MAKE SPIRITUALITY A PRIORITY IN LIFE',sectionType:'div'},
            // {weekId:1,sectionId:5,speaker:'pawan2',heading:'h2',sectionType:'vid',videoStart:0,videoEnd:540,videoURL:'https://vod-progressive.akamaized.net/exp=1578712408~acl=%2A%2F1597472859.mp4%2A~hmac=7dc529e81a63ec427db6fde7b0b5c9caaf2b3ea572817c639c4af0c12bca5751/vimeo-prod-skyfire-std-us/01/1206/15/381030514/1597472859.mp4'},
            // {weekId:1,sectionId:6,speaker:'Pawan',heading:'THE WOODCUTTER AND THE YOGI',sectionType:'div'},
            // {weekId:1,sectionId:7,speaker:'pawan4',heading:'h4',sectionType:'vid',videoStart:550,videoEnd:1038,videoURL:'https://vod-progressive.akamaized.net/exp=1578712408~acl=%2A%2F1597472859.mp4%2A~hmac=7dc529e81a63ec427db6fde7b0b5c9caaf2b3ea572817c639c4af0c12bca5751/vimeo-prod-skyfire-std-us/01/1206/15/381030514/1597472859.mp4'},
            // {weekId:1,sectionId:8,speaker:'Pawan',heading:'THE WOODCUTTER AND THE YOGI Cont..',sectionType:'div'},
            // {weekId:1,sectionId:9,speaker:'Pawan',heading:'GROW INTO A BEAUTIFUL FLOWER',sectionType:'div'},
            // {weekId:1,sectionId:10,speaker:'Pawan',heading:'MEDITATION',sectionType:'div'},
            // {weekId:1,sectionId:11,speaker:'Pawan',heading:'CLOSING',sectionType:'div'},            
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
        week.find({weekId:id}).sort("sectionId").then(data=>{
           res.send(JSON.stringify(data));
        });
    })

    app.post("addTheme",(req,res)=>{

    })
}
