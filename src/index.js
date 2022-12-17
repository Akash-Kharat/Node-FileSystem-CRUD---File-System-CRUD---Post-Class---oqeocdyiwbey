const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {

	try {
		
		await fs.writeFile(fileName, fileContent);
	  } catch (err) {
		console.log(err);
	  }
}

const myFileReader = async (fileName) => {
	try {
		await fs.readFile(fileName,{ encoding: 'utf-8'}).then(a => console.log(a))

	  }
	catch (err) {
		console.log(err);
	  }  
}

// myFileReader("akash.txt");
const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	fs.appendFile(fileName,fileContent,function(err){
		if(err){
		console.error("Could not write the file");
		}
	})
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
