const List = require("../models/List");
const Task = require("../models/Task");

module.exports = function (app) {
  // Routes for Lists
  app.get("/api/lists", function (req, res) {
    List.find()
      .then(function (lists) {
        res.json(lists);
      })
      .catch(function (err) {
        res.json({ error: err });
      });
  });

  app.get("/api/lists/:id", function (req, res) {
    List.findById(req.params.id)
      .populate("tasks")
      .then(function (list) {
        res.json(list);
      })
      .catch(function (err) {
        res.json({ error: err });
      });
  });

  app.post("/api/lists", function (req, res) {
    const { date } = req.body;
    const newList = { date };
    List.create(newList)
      .then(function (list) {
        res.json(list);
      })
      .catch(function (err) {
        res.json({ error: err });
      });
  });

  app.put("/api/lists/:id", function (req, res) {
    List.findByIdAndUpdate(
      req.params.id,
      { $push: { tasks: req.body.task } },
      { new: true }
    )
      .then(function (updatedList) {
        res.json(updatedList);
      })
      .catch(function (err) {
        res.json({ error: err });
      });
  });

  app.delete("/api/lists/:id", function (req, res) {
    List.findById(req.params.id).then(function (list) {
      for (let i = 0; i < list.tasks.length; i++) {
        Task.findByIdAndDelete(list.tasks[i]._id);
      }
      List.findByIdAndDelete(list._id)
        .then(function (deletedList) {
          res.json(deletedList);
        })
        .catch(function (err) {
          res.json({ error: err });
        });
    });
  });

  // Routes for Tasks
  app.get("/api/tasks", function (req, res) {
    Task.find()
      .then(function (tasks) {
        res.json(tasks);
      })
      .catch(function (err) {
        res.json({ error: err });
      });
  });

  app.get("/api/tasks/:id", function (req, res) {
    Task.findById(req.params.id)
      .populate("list")
      .then(function (task) {
        res.json(task);
      })
      .catch(function (err) {
        res.json({ error: err });
      });
  });

  app.post("/api/tasks", function (req, res) {
    const { name, completed, category, list } = req.body;
    const newTask = { name, completed, category, list };
    Task.create(newTask)
      .then(function (task) {
        res.json(task);
      })
      .catch(function (err) {
        res.json({ error: err });
      });
  });

  app.put("/api/tasks/:id", function (req, res) {
    Task.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(function (updatedTask) {
        res.json(updatedTask);
      })
      .catch(function (err) {
        res.json({ error: err });
      });
  });

  app.delete("/api/tasks/:id", function (req, res) {
    Task.findByIdAndDelete(req.params.id)
      .then(function (deletedTask) {
        List.findById(deletedTask.list).then(function(list){
            const updatedTaskIDs
            for(let i = 0; i < list.tasks.length; i++){
                if(list.tasks[i]._id !== deletedTask._id){
                    updatedTaskIDs.push(list.tasks[i]._id);
                }
            }
            List.findByIdAndUpdate(deletedTask.list, updatedTaskIDs);
        })
        res.json(deletedTask);
      })
      .catch(function (err) {
        res.json({ error: err });
      });
  });
};
