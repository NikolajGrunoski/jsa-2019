// function sayHi(){
// 	alert("Hi");
// }

// setTimeout(function(){
// 	alert('Hello World');
// },5000); // 5000 = 5000 mili sekundi time out kolku da imas delay samo ednas

// setInterval(function(){
// 	alert('Ova e Interval')
// },2000);       // intervalot celo vreme se povtoruva

// function sayHi(phrase,who){
// 	alert(phrase + '  '+who);
// }

// setTimeout(sayHi,3000,"Hi",'Niki');

// var bomb = setInterval(function(){
// 	console.log('boom');
// },10000);

// setTimeout(function(){
// 	clearInterval(bomb);
// 	alert('Bomb defused');
// },9000);


// var a = function(param){
// 	return param *2;
// }
// console.log(a(2)); // tuka se zadava vrednosta na param i posle ja mnozi so toa u returnot


// var double=(a)=>{return a*2} // ova ti e fat arrow function odnosno ja skratuvas sintaksata da ne napises function
// console.log(double(5));

// var double=a=> a*2;  // uste poskrateno od toa nad ova
// console.log(double(8));

// var s = ()=>{console.log('Zdravo')};  // Uste poskraten nacin za funkcija bez argumenti
// s();


// var animal = (type,name)=>({type:type,name:name});  // ova e ustvari funkcija, se prai so fat arrow =>
// console.log(animal('Dog','Ghost'));


// document.getElementById('light_on').addEventListener('click',()=>{});


// var array1 = [1,2,3,6,7];

// var map1 = array1.map(x=>x*2);

// console.log(map1);


// function greeting(name){
// 	alert('Hello ' + name);
// }

// function processInput(callback){
// 	var name = prompt('Please enter name');
// 	callback(name);
// }

// processInput(greeting);


// var p = new Promise((resolve,reject)=>{
// 	var a = 2;
// 	if (a==2) {
// 		resolve('Success');
// 	}else{
// 		reject('Fail');
// 	}
// });

// p.then((message)=>{        // then e sekogas za ispolnetiot uslov
// 	console.log('This is in the then ' + message);
// }).catch((message)=>{      // catch e sekogas za ne ispolnetiot uslov
// 	console.log('This is in the catch ' + message);
// })

//---------------------------------------------------------------------

// http://dummy.restapiexample.com/api/v1/employees


// var getPosts=()=>{
// 	fetch('http://dummy.restapiexample.com/api/v1/employees')
// 	.then(response=>response.json())
// 	.then(json=>console.log(json))
	
// }
// getPosts();


// var getPosts=()=>{
// 	fetch('http://dummy.restapiexample.com/api/v1/employees')
// 	.then(response=>{
// 		response.json().then(json=>{
// 			var a = json;
// 			console.log(a)
// 		})
// 	})
// };
// getPosts();


var getPosts=()=>{
	fetch('http://dummy.restapiexample.com/api/v1/employees')
	.then(response=>{
		console.log(response.status);
		response.json().then(json=>{
			var a = json;
			console.log(a)
		})
	})
};
getPosts();

