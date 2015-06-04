
//SYNCHRONOUS
	var fs = require("fs");
	var newline = 0;
	var contents = fs.readFileSync(process.argv[2], 'utf-8')
	 for (var i = 0; i < contents.length; i++){
			if(contents[i].indexOf("\n")!=-1){
	 		newline++;
	 	}
	 };
	 	console.log("SYNC: " + newline);
	

//ASYNCHRONOUS
	fs.readFile(process.argv[2], 'utf-8', function(err, data){
		if(err){
			console.log("UH-OH");
		}
		else{
			var newline = 0;
			for (var i = 0; i < data.length; i++){
				if(data[i].indexOf("\n")!=-1){
				newline++;
				}
			}
			console.log("ASYNC: " + newline);
		}
	})
	
	