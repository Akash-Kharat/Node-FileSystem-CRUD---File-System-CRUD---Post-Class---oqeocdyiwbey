const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// fs.writeFile(fileName,fileContent,function(err,fileContent){
	// 	if(err){
	// 		console.error("Could not write the file");
	// 	}
	// 	else{
	// 		console.log("Content writen successfully");
	// 	}
	// })

	try {
		fs.writeFileSync(fileName, fileContent);
		// file written successfully
	  } catch (err) {
		console.error(err);
	  }
	// dont chnage function name
}
const data={
	name:"Akash",
	city:"Satara"
}
 myFileWriter("Akash.txt","hello akash");

const myFileReader = async (fileName) => {
	try {
		const data = fs.readFileSync(fileName, 'utf8');
		console.log(data);
	  } catch (err) {
		console.error(err);
	  }
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
myFileReader("Akash.txt");
module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }