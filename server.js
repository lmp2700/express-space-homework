// DEPENDENCIES
// * Your mission is to complete the app
// * The app will need views for and show.ejs
const port = 3000;
const express = require('express');
const app = express();
const Missions = require('./models/marsMissions')

// app.get('/missions', (req, res) => {
//   res.send(Missions);
// })

// app.get('/missions/:id', (req, res) => {
//   res.send(Missions[req.params.id])
// })

// INDEX Route 
app.get('/missions', (req, res) => {
  res.render('index.ejs', {
    mission: Missions
  });
});

// SHOW Route
app.get('/missions/:show', (req, res) => {
  res.render('missions/show.ejs', {
    mission: Missions[req.params.show]
  });
});

// LISTENER
app.listen(port, function() {
  console.log('Missions to Mars running on port: ', port);
})



module.exports = app;

// * Bonus: add images to the data and have them display
// * Bonus: add static css to style the pages