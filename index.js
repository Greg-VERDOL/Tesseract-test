// #Import module
let fs = require('fs');
let Tesseract = require('tesseract.js')
let filename = process.argv[2];		// #get args

let stream = fs.createWriteStream(process.argv[3]+".txt"); // #Create File
console.log('Params : ' + process.argv[2]);

// #Use Tesseract
Tesseract.recognize(filename, {
	lang:'fra'
})
  .progress(function  (p) { console.log('progress', p)  })
  .catch(err => console.error(err))
  .then(function (result) {
	  //console.log(result.text)
		stream.write(result.text)		// #Write in file
		console.log('File saved')
		process.exit(0)
  })
