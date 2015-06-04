Admittedly, I gave up on callback of http.get
var http = require("http");
var arr = [];
urlArr = ["http://omdbapi.com/?i=tt0241527", "http://omdbapi.com/?i=tt0295297"];
for(var i = 0; i<urlArr.length; i++){
	http.get(urlArr[i], function(data){
		arr.push(data);
		console.log(arr);
	})
};


/*The disaster that was my http.get callback (also tried defining a function for it):
var http = require("http");
var arr = [];
	http.get("http://omdbapi.com/?i=tt0241527", function(data){
		arr.push(data);
	}).on('end', function(){
			http.get("http://omdbapi.com/?i=tt0295297", function(data2){
				arr.push(data2);
				})
	console.log(arr);
	});

*/