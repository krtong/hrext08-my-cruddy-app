
// crud..

//load local storage
var loadLocalStorage = () => {
  var htmlString = '<ul>';
  var keys = Object.keys(localStorage);
  for (var i = 0; i < keys.length; i++) {
    htmlString  += `<li>${keys[i]}</li>`;
  }
  htmlString += `<li>new todo</li></ul>`;
  $('#todo-list').html(htmlString)
};
// key: Object.keys(localStorage)[i]
// value: localStorage[Object.keys(localStorage)[i]]

//Berry's baby functions:
var updateStatusLabel = function(message) {
  $('#statusLabel').text('Status: ' + message);
}
///Create key in localStorage =>
var createEntry = function(key, value) {
  return localStorage.setItem(key, value);
}
///Update key in localStorage =>
var updateEntry = function(key, value) {
  return localStorage.setItem(key, value);
}

///Delete key from localStorage =>
var removeEntry = function(key) {
  return localStorage.removeItem(key);
}


// jQuery
$(document).ready(function() {


/// create button
  loadLocalStorage();
  $('#btn-create').on('click', function(e) {
    var key = $('#key').val();
    var value = $('#value').val();
    var keyExists = localStorage.getItem(key) !== null;

    if (keyExists) {
      updateStatusLabel('key already exists, please use update button instead! :D');
    } else if (key === '') {
      updateStatusLabel('invalid input!')
    } else {
      createEntry(key, value);
      updateStatusLabel('key created - ' + key);
    }
    loadLocalStorage();
  });

///update button
  $('#btn-update').on('click', function(e) {
    var key = $('#key').val();
    var value = $('#value').val();
    var existingValue = localStorage.getItem(key)
    var keyExists = existingValue !== null;

    if (value === existingValue) {
      updateStatusLabel('key not updated - that value already exists silly! xD')
    } else if (keyExists) {
      updateEntry(key, value);
      updateStatusLabel('key updated - ' + key);
    } else if (key === '') {
      updateStatusLabel('invalid input!')
    } else {
      updateStatusLabel('key doesn\'t exist, please use create button instead! :D');
    }
    loadLocalStorage();
  });

///delete button.
  $('#btn-delete').on('click', function(e) {
    var key = $('#key').val();
    var value = $('#value').val();
    var keyExists = localStorage.getItem(key) !== null;

    if (keyExists) {
      removeEntry(key);
      updateStatusLabel('key removed - ' + key);
    } else if (key === '') {
      updateStatusLabel('invalid input!')
    } else {
      updateStatusLabel('key doesn\'t exist, nothing removed. :|');
    }
    loadLocalStorage();
  });
//end
});


/* Dave's Notes:

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
