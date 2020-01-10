const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WeekSchema = Schema({
    weekId : Number,
    sectionId:Number,
    speaker:String,
    heading:String,
    sectionType:String,
    videoStart:Number,
    videoEnd:Number,
    videoURL:String
});

module.exports = mongoose.model("weeks",WeekSchema);