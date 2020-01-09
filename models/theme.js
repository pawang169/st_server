const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ThemeSchema = Schema({
    id : Number,
    title : String
});

module.exports = mongoose.model("themes",ThemeSchema);