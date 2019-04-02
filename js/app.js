$(document).ready(function() {

  function loadLocalStorage() {
    let todoList = Object.keys(localStorage), todoListHTML = ``, editButton = `<a href="#" class ="edit button">+</a>`;
    for (let todo of todoList) {
      todoListHTML +=`<li class="${todo} todo">${todo} ${editButton}`;
      todoListHTML +=`<li class="${todo} description">${localStorage[todo]} ${editButton}`;
    }
    // todoListHTML += `<li id="newTodo">new todo</li>`
    $('div > #todo-list').children('ul').children('li:first-child').html(todoListHTML);
  };

  loadLocalStorage();
  $('.description, .edit.button').toggle()

  function loadTodo() {
    let todoList = Object.keys(localStorage), todoListHTML = ``;
    for (let todo of todoList) todoListHTML +=`<li class="todo">${todo}</li>`;
    $('div #todo-list').children('ul').children('li:first-child').html(todoListHTML);
  };

/*
  function updateStatusLabel(message){
    $('#statusLabel').text(`Status: ${message}`);
  }


  function saveEntry(key, value){
    return localStorage.setItem(key, value);
  }
   
  function deleteEntry(key){
    return localStorage.removeItem(key);
  }
*/

  $('#newTodo').click(function(event) {
    var key = event.target.innerHTML, todoListHTML = `<li id="key">`;
    console.log("you clicked", this);
    $('div #todo-list').children('ul').children('li:first-child').html(todoListHTML);
  });
/*
  $('#btn-create').on('click', function(e) {
    let key = $('#key').val(), value = $('#value').val(), keyExists = localStorage.getItem(key) !== null;
    if (keyExists) updateStatusLabel(`key already exists, please use update button instead! :D`);
    else if (key === '') updateStatusLabel(`invalid input!`) ;
    else saveEntry(key, value), updateStatusLabel(`key updated - ${key}`);

    loadLocalStorage();
  });
  $('#btn-update').on('click', function(e) {
    let key = $('#key').val(), value = $('#value').val(), existingValue = localStorage.getItem(key), keyExists = existingValue !== null;

    if (value === existingValue) updateStatusLabel(`key not updated - that value already exists silly! xD`) ;
    else if (keyExists) saveEntry(key, value), updateStatusLabel(`key updated - ${key}`);
    else if (key === '') updateStatusLabel(`invalid input!`);
    else updateStatusLabel(`The key, "${key}," doesn't exist, please use create button instead! :D`);

    loadLocalStorage();
  });

  $('#btn-delete').on('click', function(e) {
    let key = $('#key').val(), value = $('#value').val(), keyExists = localStorage.getItem(key) !== null;

    if (keyExists) deleteEntry(key), updateStatusLabel(`key removed - ${key}`);
    else if (key === '') updateStatusLabel(`invalid input!`);
    else updateStatusLabel(`key doesn't exist, nothing removed. :|`);

    loadLocalStorage();
  });

*/
  $('li.todo').click(function() {
    console.log($('li.todo').val())
    // var key = event.target.innerHTML;
    // var value = localStorage[key];
    //console.log("you clicked", key);
    $(this).siblings('.todo').toggle(750);
    $(this).next('.description').toggle(850);
    $(this).children(' .edit.button').toggle(3000);
    $(this).next('.description').children('.edit.button').toggle(3000)
    //$('.edit.button').toggle(750);
  });

  $('li.todo > .edit.button').click(function() {
    console.log('fuck yeah');
  })

});
