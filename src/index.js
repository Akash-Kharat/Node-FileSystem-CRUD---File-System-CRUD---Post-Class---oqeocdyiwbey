const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {

	try {
		const content = 'Some content!';
		await fs.writeFile(fileName, fileContent);
	  } catch (err) {
		console.log(err);
	  }
}

const myFileReader = async (fileName) => {
	try {
		const data = await fs.readFile(fileName, { encoding: 'utf8' });
		console.log(data);
	  } catch (err) {
		console.log(err);
	  }
}

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