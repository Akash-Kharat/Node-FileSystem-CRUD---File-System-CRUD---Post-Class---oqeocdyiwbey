const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	fs.writeFile(fileName,fileContent,function(err,fileContent){
		if(err){
			console.error("Could not write the file");
		}
		else{
			console.log("Content writen successfully");
		}
	})
	// dont chnage function name
}


const myFileReader = async (fileName) => {
	// write code here
	fs.readFile(fileName,"utf-8",function(err){
		if(err){
			    console.error("Could not read the file");
		}
	})
	// dont chnage function name
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	fs.appendFile(fileName,fileContent,function(err){
		if(err){
		console.error("Could not write the file");
		}
	})
	// dont chnage function name
}

const myFileDeleter = async (fileName) => {
	// write code here
	fs.unlink(fileName,function(err){
	if(err){
	console.error("Could not delete the file");
	}
	// dont chnage function name
})
}

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }