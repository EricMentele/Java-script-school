/*var library = {

};
	 
var shelfarian = {
	name: "input",
	contents: function (genre, status) {
		genre = genre 
		status = status

		return book.name
	}

};

function Shelf (contents){
this.contents = contents;
};*/

var bookarian = {
	name: 'bookname',
	genre: "shelfname",
	
//enshelf will change the status key to "in" and add the object to the shelves contents. 
	enshelf: function (status) {
	status = "in"; 
},

//unshelf will change the status key to "out" and add the object to the librarys contents.
	unshelf: function (status) {
	status = "out";
	},
	status: "inorout",
};



function Book (name, genre, status){
this.name = name;
this.genre = genre;
this.status = status;

};
	
Book.prototype = bookarian;

ruby = new Book("Ruby", "Programming", "inorout");
	




//Shelf.prototype = shelfarian
