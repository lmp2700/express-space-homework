// DEPENDENCIES
// * Your mission is to complete the app
// * The app will need routes for and show.ejs
// * The app will need views for and show.ejs
const port = 3000;
const express = require('express');
const app = express();
const Missions = require('./models/marsMissions.js')

app.get('/missions', (req, res) => {
  res.send(Missions);
})

// app.get('/missions/:id', (req, res) => {
//   res.send(Missions[req.params.id])
// })

// INDEX Route - no working with ID
app.get('/missions/index', (req, res) => {
  res.render('index.ejs');
});
// * Make it so you can click on a mission’s name on the index page, and be taken to that mission’s show page

// SHOW Route
// send data to 'missions/show.ejs' view
app.get('/missions/index/:curiosity', (req, res) => {
  res.render('show.ejs', {
    mission = Missions(get.params[0])
  });
});
// the view should display all the data for a single mission


// LISTENER
app.listen(port, function() {
  console.log('Missions to Mars running on port: ', port);
})

module.exports = app;

// * Bonus: add images to the data and have them display
// * Bonus: add static css to style the pages