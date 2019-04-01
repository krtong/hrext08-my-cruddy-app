$(document).ready(function() {
// well crud...

//I. when the users first open the webpage they'll see a list of their previously made todos:
  const loadLocalStorage = () => {
    let todoHTML = ``, todoList = Object.keys(localStorage);
    todoList.forEach((todo) => todoHTML +=`<li class="todo">${todo}</li>`);
    $('div #todo-list').children('ul').children('li:first-child').html(todoHTML);
  };
  loadLocalStorage();

//II. Refactoring The following
//--A.Berry's baby functions
//----1. update status label (not implemented atm)
  const updateStatusLabel = (message) => {
    $('#statusLabel').text(`Status: ${message}`);
  }
//----2. Save key in localStorage =>
const saveEntry = (key, value) => {
  return localStorage.setItem(key, value);
}
//////3. Delete key from localStorage =>
const deleteEntry = (key) => {
  return localStorage.removeItem(key);
}


//III. If they haven't made any todos they'll click 'new todo' and make one.
  $('#newTodo').click((event) => {
    var key = event.target.innerHTML;
    console.log("you clicked", key);
  });
//--A. They'll fill out title(key) and description(value).
//----1. under construction.
//--B. They'll either click save to make a new todo, or to overwrite their old one, then be brought back to the homepage.
//----1. Create button and update need to be merged...
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
//--C. Or they'll click cancel
//----under construction...
//--D. Or they'll click delete
  $('#btn-delete').on('click', function(e) {
    let key = $('#key').val(), value = $('#value').val(), keyExists = localStorage.getItem(key) !== null;

    if (keyExists) deleteEntry(key), updateStatusLabel(`key removed - ${key}`);
    else if (key === '') updateStatusLabel(`invalid input!`);
    else updateStatusLabel(`key doesn't exist, nothing removed. :|`);

    loadLocalStorage();
  });

//IV. Back on the homepage they can now click their todo to see description.
  $('.todo').click((event) => {
    var key = event.target.innerHTML;
    console.log("you clicked", key);
  });

//end
});
/* Berry's Notes:
When an input element is given a name, that name becomes a property of the owning form
element's  HTMLFormElement.elements property. That means if you have an input whose name
is set to guest and  another whose name is hat-size, the following code can be used:

let form = document.querySelector("form");
let guestName = form.elements.guest;
let hatSize = form.elements["hat-size"];

PAGE CONTENT STUFF

something to update the table every time localStorage changes
localStorage stuff
https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

create new entry
localStorage.setItem(key, value)
*/
