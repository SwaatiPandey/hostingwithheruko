const uniqid = require("uniqid");
const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
  taskId: {
    type: String,
    default: uniqid(),
  },
  taskName: {
    type: String,
    required: [true, "Please enter task details"],
    validate: {
      validator: function (taskName) {
        console.log("this is task validator", this);
        return this.taskName.trim().length;
        return true;
      },
      message: "task name should not be empty",
    },
  },
  status: {
    type: String,
    default: "Not Started",
    enum: ["Not Started", "In Process", "Completed"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  startedAt: {
    type: Date,
  },
  completedAt: {
    type: Date,
  },
  // sharedWith:{
  //   type: [{mongoose.ObjectId}],
  // },
});
// taskSchema.virtual("timeTaken").get((function)=>{
// }
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
