const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const PORT = process.env.PORT || 3002;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(process.env.DB_URI || "mongodb://localhost/agendaDB", { useNewUrlParser: true });

require('./routes/api-routes')(app);

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"), function(err){
      if(err){
        res.status(500).send(err);
      }
    });
  });
}

app.listen(PORT, function () {
  console.log(`App running on port ${PORT}`);
});