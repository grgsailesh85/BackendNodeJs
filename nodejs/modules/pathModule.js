import path from "path";
import url from "url"

const filePath = "folder1/folder2/folder3/file.txt";

// baseName()
console.log(path.basename(filePath)) //output => file.txt

// dirName()
console.log(path.dirname(filePath)) // output => folder1/folder2/folder3

//extName()
console.log(path.extname(filePath)) //output => .txt


//parse -> display whole details of path
console.log(path.parse(filePath)) 

const _filename = url.fileURLToPath(import.meta.url)
const _dirname = path.dirname(_filename)
console.log(_filename)