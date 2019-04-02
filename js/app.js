$(document).ready(function() {

  function loadLocalStorage() {
    let todoList = Object.keys(localStorage), todoListHTML = ``, editButton = `<a href="#" class ="edit button">+</a>`;
    for (let todo of todoList) {
      todoListHTML +=`<li class="${todo} todo">${todo} ${editButton}`;
      todoListHTML +=`<li class="${todo} description">${localStorage[todo]} ${editButton}`;
    }
    $('div > #todo-list').children('ul').children('li:first-child').html(todoListHTML);
  };
  loadLocalStorage();
  $('.description, .edit.button').toggle()
  function loadTodo() {
    let todoList = Object.keys(localStorage), todoListHTML = ``;
    for (let todo of todoList) todoListHTML +=`<li class="todo">${todo}</li>`;
    $('div #todo-list').children('ul').children('li:first-child').html(todoListHTML);
  };
  $('#newTodo').click(function(event) {
    var key = event.target.innerHTML, todoListHTML = `<li id="key">`;
    console.log("you clicked", this);
    $('div #todo-list').children('ul').children('li:first-child').html(todoListHTML);
  });
  $('li.todo').click(function() {
    console.log($('li.todo').val())
    $(this).siblings('.todo').toggle(750);
    $(this).next('.description').toggle(850);
    $(this).children(' .edit.button').toggle(3000);
    $(this).next('.description').children('.edit.button').toggle(3000)
  });
  $('li.todo > .edit.button').click(function() {
    console.log('fuck yeah');
  })
});
