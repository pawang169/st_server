const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ThemeSchema = Schema({
    templateId : Number,
    templateName : String,
    templateTitle : String
});

module.exports = mongoose.model("themes",ThemeSchema);