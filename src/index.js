const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {

	try {
		const content = 'Some content!';
		await fs.writeFile(fileName, fileContent);
	  } catch (err) {
		console.log(err);
	  }
}

// myFileWriter("akash.txt","Hello")
const myFileReader = async (fileName) => {
	try {
		const data = await fs.readFile(fileName, { encoding: 'utf8' });
		console.log(data);
	  } catch (err) {
		console.log(err);
	  }
}

// myFileReader("akash.txt")     
const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	fs.appendFile(fileName,fileContent,function(err){
		if(err){
		console.error("Could not write the file");
		}
	})
}


// myFileUpdater("akash.txt"," World")
const myFileDeleter = async (fileName) => {
	// write code here
	fs.unlink(fileName,function(err){
	if(err){
	console.error("Could not delete the file");
	}
	// dont chnage function name
})
}
// myFileDeleter("akash.txt")
module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }