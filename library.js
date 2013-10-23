//"(1) Use object-oriented JavaScript to model a public library (w/ three classes: Library, Shelf, & Book). 
//The library should be aware of a number of shelves."

//library.contents() will display all books and shelves it contains. Also all books that are currently checked out. 
//library.out will display a list of all books currently out(.unshelf).

//"Each shelf should know what books it contains."

//shelf1.contents(), shelf2.contents(), and so on, will list books currently enshelved. shelf1-3.name will 
//display what type of books a shelf is for.

//"Make the book object have "enshelf" and "unshelf" methods that control what shelf the book is sitting on."

//book1.name through book9.name will give the names of each. Each books name has a b1-9(ex.b3) in parenthesis which designates book number.
//book1-9.enshelf() and .unshelf() change the objects location which can be found with .status.
//.author and .genre are also keys.   

//"The library should have a method to report all books it contains."

//library.contents() used for this specification.


alert("Console key: library.contents() .out(), \nshelf(1-3).name .contents(),\n book(1-9).name .author\n .genre .status .enshelf() .unshelf()");
var library = {
	contents: function(){
		return shelf1.name + shelf1.contents() +  
		shelf2.name + shelf2.contents() +
		shelf3.name + shelf3.contents() +
		library.out()
		},
	out: function(a,b,c,d,e,f,g,h,i){

				return "Checked out: " + [b11(a)] + ", " + [b22(b)] + ", " + [b33(c)] + ", " + [b44(d)] + ", " + [b55(e)] + ", " + [b66(f)] + ", " +
				[b77(g)] + ", " + [b88(h)] + ", " + [b99(i)] + ", ";

			function b11(a){
				if (book1.status === "out"){
				var a = book1.name
			} return a };

			function b22(b){
				if (book2.status === "out"){
				var b = book2.name
			} return b }

			function b33(c){
				if (book3.status === "out"){
				var c = book3.name
			} return c }

			function b44(d){
				if (book4.status === "out"){
				var d = book4.name
			} return d }

			function b55(e){
				if (book5.status === "out"){
				var e = book5.name
			} return e }

			function b66(f){
				if (book6.status === "out"){
				var f = book6.name
			} return f }

			function b77(g){
				if (book7.status === "out"){
				var g = book7.name
			} return g }

			function b88(h){
				if (book8.status === "out"){
				var h = book8.name
			} return h }

			function b99(i){
				if (book9.status === "out"){
				var i = book9.name
			} return i }
			
		}
		

};



//The library lists all books, on and off, shelves including keys.
//Books that have been enshelved appear in their matching Shelf.contents().
//Books that have been unshelved appear in the library with the status of out.
//Shelves 3
var shelf1 = {
	name: "Programming(shelf1): ",
	contents: function(a,b,c) {
		return [b1(a)] + ', ' + [b2(b)] + ', ' + [b3(c)] + ', ';
		function b1(a){
		 
			if (book1.status === "in"){
			 
			 var a = book1.name
			  
			} return a }	
		
		function b2(b){
	
			if (book2.status === "in"){
			 
			 var b = book2.name
			  
			} return b }	

		function b3(c){
			
			if (book3.status === "in"){
			 
			 var c = book3.name
			  
			} return c }

	}
};

var shelf2 = {
	name: "Philosophy(shelf2): ",
	contents: function(a,b,c) {
		return [b4(a)] + ', ' + [b5(b)] + ', ' + [b6(c)] + ', ';
		function b4(a){
		 
			if (book4.status === "in"){
			 
			 var a = book4.name
			  
			} return a }	
		
		function b5(b){
	
			if (book5.status === "in"){
			 
			 var b = book5.name
			  
			} return b }	

		function b6(c){
			
			if (book6.status === "in"){
			 
			 var c = book6.name
			  
			} return c }

	}
};

var shelf3 = {
	name: "Health(shelf3): ",
	contents: function(a,b,c) {
		return [b7(a)] + ', ' + [b8(b)] + ', ' + [b9(c)] + ', ';
		function b7(a){
		 
			if (book7.status === "in"){
			 
			 var a = book7.name
			  
			} return a }	
		
		function b8(b){
	
			if (book8.status === "in"){
			 
			 var b = book8.name
			  
			} return b }	

		function b9(c){
			
			if (book9.status === "in"){
			 
			 var c = book9.name
			  
			} return c }

	}
};



//Books 9
var book1 = {
	name: "Bulletproof Web Design(b1)",
	author: "Dan Cederholm",
	status: "in",
	genre: "Programming",
	enshelf: function () {
	book1.status = "in"
	},
	
	unshelf: function () {
	book1.status = "out"
	}
};

var book2 = {
	name: "Effective JavaScript(b2)",
	author: "David Herman",
	status: "in",
	genre: "Programming",
	enshelf: function () {
	book2.status = "in"
	},
	
	unshelf: function () {
	book2.status = "out"
	}
};

var book3 = {
	name: "Program Or Be Programmed(b3)",
	author: "Douglas Rushkoff",
	status: "in",
	genre: "Programming",
	enshelf: function () {
	book3.status = "in"
	},
	
	unshelf: function () {
	book3.status = "out"
	}
};

var book4 = {
	name: "The Law(b4)",
	author: "Fredric Bastiat",
	status: "in",
	genre: "Philosophy",
	enshelf: function () {
	book4.status = "in"
	},
	
	unshelf: function () {
	book4.status = "out"
	}
};

var book5 = {
	name: "The Republic(b5)",
	author: "Plato",
	status: "in",
	genre: "Philosophy",
	enshelf: function () {
	book5.status = "in"
	},
	
	unshelf: function (out) {
	book5.status = "out"
	}
};

var book6 = {
	name: "Tao Of Jeet Kun Do(b6)",
	author: "Bruce Lee",
	status: "in",
	genre: "Philosophy",
	enshelf: function () {
	book6.status = "in"
	},
	
	unshelf: function () {
	book6.status = "out"
	}
};

var book7 = {
	name: "The Better Baby Book(b7)",
	author: "Dave Asprey",
	status: "in",
	genre: "Health",
	enshelf: function () {
	book7.status = "in"
	},
	
	unshelf: function () {
	book7.status = "out"
	}
};

var book8 = {
	name: "How To Eat Move And Be Healthy(b8)",
	author: "Paul Chek",
	status: "in",
	genre: "Health",
	enshelf: function () {
	book8.status = "in"
	},
	
	unshelf: function () {
	book8.status = "out"
	}
};

var book9 = {
	name: "How To Be A Supple Leopard(b9)",
	author: "Kelly Starret",
	status: "in",
	genre: "Health",
	enshelf: function () {
	book9.status = "in"
	},
	
	unshelf: function () {
	book9.status = "out"
	}

};





