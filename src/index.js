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
		await fs.readFile(fileName, { encoding: 'utf8' }).then(a => console.log(a))
	console.log("Ok")
	
// 	  try {
		
// 		await fs.readFile(fileName, "utf-8", (_err, data) => {
// 		console.log(data);
// 		return data;
// 	  })
// // >>>>>>> c9cb79e5063f742bce505e54115c616a48076c63
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