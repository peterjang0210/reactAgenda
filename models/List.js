const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListSchema = new Schema({
  date: {
      type: String,
      required: true
  },
  tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: Task,
    },
  ],
});

const List = mongoose.model("List", ListSchema);

module.exports = List;