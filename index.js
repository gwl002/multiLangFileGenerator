var xlsx = require('node-xlsx');
var fs = require('fs');

var obj = xlsx.parse(__dirname+'/temp.xlsx');



var excelObj=obj[0].data;

let row1 = excelObj[0];

let fileName1 = row1[1];
let fileName2 = row1[2];
let fileName3 = row1[3];

let json1 = {};
let json2 = {};
let json3 = {};


function createFiles(){
	for(let i=1;i<excelObj.length;i++){
		let row = excelObj[i];
		let name = row[0];
		json1[name] = row[1];
		json2[name] = row[2];
		json3[name] = row[3];
	}
	fs.writeFileSync(__dirname + "/" + fileName1 + ".json",JSON.stringify(json1,null,4),{});
	fs.writeFileSync(__dirname + "/" + fileName2 + ".json",JSON.stringify(json2,null,4),{});
	fs.writeFileSync(__dirname + "/" + fileName3 + ".json",JSON.stringify(json3,null,4),{});
}


createFiles();