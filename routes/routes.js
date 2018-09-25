
// Data
// ===========================================================
const tasklist = [];
    //     {
    //     todoItem: 'clean garage'
    // }, {
    //     todoItem: 'wash car'
    // }


  
// Routes
// ===========================================================
module.exports = function(app) {

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });

// Displays all task
app.get('/api/taskList', function(req, res) {
  res.json(tasklist);
});

// Adds a new task

app.post('/api/taskList', function(req, res) {
  tasklist.push(req.body);
  res.json(req.body);
});

// Displays a single task, or shows 'false
app.get('/api/taskList/:task', function(req, res) {

  // Grab the selected parameter
  const chosen = req.params.task;
  console.log(chosen);

  // Filter to show only the selected task
  
  
  //  const filterTask = function() {
     
  //   taskList.find(e => e.todoItem.toUpperCase() === chosen.toUpperCase());
    
  //  return res.json(todoItem);
  //  }

  for (let i = 0; i < tasklist.length; i++) {
    if (chosen === tasklist[i].todoItem) {
      return res.json(tasklist[i]);
    }
  }

  // Otherwise respond with false
  res.json(false);
});

// Finds the requested task and replaces it one provided in the request body
app.put('/api/taskList/:task', function(req, res) {

  // Grab the selected parameter
  const chosen = req.params.task;
  let found = false;

  // Find the specified taxk and replace the object with the one provided
  
  for (let i = 0; i < tasklist.length; i++) {
    if (chosen === tasklist[i].todoItem) {
      tasklist.splice(i, 1, req.body);
      found = true;
    }
  }

  if(found){

    // If our requested task was found, respond with the updated object
    return res.json(req.body)
  } 

  // Otherwise, respond with false
  return res.json(false)
});

// Finds the requested task and deletes it from the collection
app.delete('/api/taskList/:task', function(req, res) {
  // Grab the selected parameter
  const chosen = req.params.task;
  let success = false;

  // Find the specified task and remove it from the collection
  for (let i = 0; i < tasklist.length; i++) {
    if (chosen === tasklist[i].todoItem) {
      tasklist.splice(i, 1);
      success = true;
    }
  }

  // Respond with success of the delete operation (true or false)
  return res.json({ success: success })
});


}