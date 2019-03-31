

# hrext08-my-cruddy-app
Create Read Update and Delete framework using JS
## Tasks
### Basic Reqs
- [x] Where to store data? *(localStorage)*
- [x] How to caputure data? *(web form)*
- [x] How to modify data? *(update action, delete action)*
- [x] How to view data? *(style?)*
- [x] UI/UX considerations *(how are we going to use this)*
### Advanced Reqs
- [ ] ~~State changing styling (hover/etc)~~
- [ ] ~~corgi gif~~
- [ ] ~~cowbell sound~~
#### Not entirely what I'm going to do yet... but  here's some ideas.
 - **Functionality.**
	 - Just show a list of Keys**
		 - Keys are clickable and go to a new page.
			 - new page has:
				 - title *(key)*
				 -  description *(value)*
				 - edit button *(update)*
				 - delete button
				 - a back button
         - a clear-all button with warning
				 - an icon selector *(advanced)*
				 - an ability to start a new list inside of the list *(advanced)*
				 - button sounds *(reference to advanced reqs.)*
				 - ~~corgi gifs *(reference to advanced reqs.)*~~
- **Educational**
	-  JQuery
	- JavaScript
	- React *(New!)*
	- Redom *(New!)*
	- Event animations *(New!)*
	- One example of recursion! *(Why?!)*

#### Home page:
  - the front page is too busy. We're going to separate everything like we did with
  twiddler. The front page will be a single table with the only button being an empty cell.

 Rather than having some crap that looks like this:

| key  | value |
|------|-------|
| groceries | broccoli, chicken, rice |
| motorcycle | oil, brake fluid, clutch fluid|

We're going to make the key clickable so the front page is simply:

| key |
| --- |
|groceries|
| motorcycle |
| new key|

 - *new key* will be a cell on the bottom of the table that'll just be blank.

And when the key is clicked it goes to another page

| key: | *groceries* | save |
| ---- | ------------| ---- |
| **description:** | *broccoli, chicken, rice* | **delete**

And from there? *Who knows....*
