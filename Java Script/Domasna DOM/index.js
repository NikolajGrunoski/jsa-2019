var students=[{name:"Niki",surname:"Grunoski",age:23},{name:"Kiki",surname:"Grunoski",age:24}];
var table= document.getElementById('table');
console.log(table);

for(var i=0;i<students.length;i++){
	var tr = document.createElement("tr");


for (var j in students[i]) {
	var obj = students[i];
	console.log(obj[j]);
	var td = document.createElement("td");
	td.innerText=obj[j]
	tr.append(td);
}
	table.append(tr);


}
	