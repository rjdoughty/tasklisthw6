$( function(){

   
const renderTask = function (taskList) {   
    taskList.forEach(e => render(`<p id="todos"><label class="container"><input type="checkbox"><span class="checkmark"></span></label>${e.todoItem} <span id="remove">x</span></p>`));
    $('#remove').on('click', removeTask);
     };

const render = function (taskList) {
    $('#todoItems').append(taskList);
      };


    $('#submit').on('click', function(event) {
        event.preventDefault();
      
        $('#todoItems').empty();
        const newTask = {
            todoItem: $('#task').val().trim()
        };

        for(let key in newTask){
            if(newTask[key] === ''){
              alert('Enter a chore');
              return;
            }
          }

        $.ajax({ url: '/api/taskList', method: 'POST', data: newTask}).then(function(data) {
            console.log(todoItem);
            $('#task').val('');
        });

        const runTaskQuery = function () {

            // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
            $.ajax({ url: "/api/taskList", method: "GET" })
              .then(function(taskList) {
                  renderTask(taskList);
               // taskList.forEach(e => render(`<p><label class="container"><input type="checkbox"><span class="checkmark"></span></label>${e.todoItem} <span id="remove">x</span></p>`));
                console.log(taskList);
              });
          }
          $('#task').val('');
          runTaskQuery();
    });

    


//$('#remove').on('click', removeTask);


const removeTask = function(event) {
    event.preventDefault();
    $.ajax({ url: "/api/taskList", method: "DELETE", data: newTask })
    .then(function(taskList) {
        renderTask(taskList);
});
};

});