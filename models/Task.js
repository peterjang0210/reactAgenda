const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    completed:{
        type: Boolean,
        required: true,
        default: false
    },
    category:{
        type: String,
        trim: true
    },
    list:{
        type: Schema.Types.ObjectId,
        ref: "List"
    }
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;