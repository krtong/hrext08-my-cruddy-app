var loadLocalStorage = function () {
  var todoList = Object.keys(localStorage)
  var htmlString = '';
  for (let todo of todoList) htmlString += `<tr class="line"><td>${todo}</td><td>${localStorage[todo]}</td></tr>`;
  htmlString += `<tr  id="create-new"><td colspan="2">Create new key</td><td></td></tr>`;
  $('tbody').html(htmlString);
  $('form').hide();
};

var updateStatusLabel = function(message) {
	$('#statusLabel').text('Status: ' + message);
}

 //jQuery document ready initialization stuff
 ////button and form event handlers
 // logic for determining action probably needs to go in the event handler
$(document).ready(function () {
	loadLocalStorage();

//What to hide on the start.
  $('#btn-update, #btn-delete, #btn-save, form' ).hide()
  $('#create-new').click(function(){
    $('form').show();
    $('#btn-update').hide();
    $('#btn-create').show();
  })
	$('#btn-create').click(function(e) {
		var key = $('#key').val(), value = $('#value').val();
		var keyExists = localStorage.getItem(key) !== null;

		if (keyExists) {
			updateStatusLabel('key already exists, please use update button instead! :D');
		} else if (key === '') {
			updateStatusLabel('invalid input!')
		}else {
			createEntry(key, value);
			updateStatusLabel('key created - ' + key);
		}
		loadLocalStorage();
	});

	$('#btn-update').click(function(e) {
		var key = $('#key').val(), value = $('#value').val();
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
    $('form, #btn-update').hide();
    $('#btn-create').show();
    $('input#key').val('');
    $('input#value').val('');
		loadLocalStorage();
	});

	$('#btn-delete').click(function(e) {
		var key = $('#key').val(), value = $('#value').val();
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

  $('.line').click(function(event) {
    var key;
    var value;
    if (event.target.nextSibling !== null) {
      key = event.target.innerText;
      value = event.target.nextSibling.innerText;
    } else {
      key = event.target.previousSibling.innerText;
      value = event.target.innerText;
    };
    $('form').show();
    $('input#key').attr('value', key);
    $('input#value').attr('value', value);
    $('#btn-update, #btn-delete').show();
    $('#btn-create').hide();

  });



});
/*
When an input element is given a name, that name becomes a property of the owning form element's HTMLFormElement.elements property. That means if you have an input whose name is set to guest and another whose name is hat-size, the following code can be used:
let form = document.querySelector("form");
let guestName = form.elements.guest;
let hatSize = form.elements["hat-size"];
*/

/*
PAGE CONTENT STUFF
*/
//something to update the table every time localStorage changes

//localStorage stuff
//https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
////create new entry
//localStorage.setItem(key, value)
var createEntry = function(key, value) {
	return localStorage.setItem(key, value);
}

////Update existing entry
//localStorage.setItem(key, value)
var updateEntry = function(key, value) {
	return localStorage.setItem(key, value);
}

////delete existing entry
//localStorage.removeItem(key)
var removeEntry = function(key) {
	return localStorage.removeItem(key);
}
