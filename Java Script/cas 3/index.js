// function nameOfFunction(){   //bez argumenti
// 	alert("zdravo");
// }
// nameOfFunction();

// var x =5;        // opcija 2
// var y =10;

//function proizvod(x,y){       // so argumenti
	//x =10; // vo funkcijaa ako go stais x da e 10 ke ispecati x 10
//	return x*y;
//}
//console.log (proizvod(5,10));

// console.log (proizvod(a,u));      // Opcija 2 , moze so bilo koj vrednosti vo zagradata pak istiot rezultat ke go dade


//------------------------------------------------------------------

// function jas(name,age){

// return "Jas sum " + name + " imam " + age;
// }
// console.log(jas("Nikolaj", 23));

//------------------------------------------------------------------

//console.log(Math.pow(3,2));   // presmetuvanje na stepen - gotov metod

// function power(base,exponent){
// 	var result =1;

// 	for (var i = 0; i < exponent; i++) {
// 		result*= base;

// 	}
// 	// return result;
// 	console.log(result);
// }

// // console.log(power(3,2));
// power(3,2);

//------------------------------------------------------------------------
  // Gi proveruva site elementi vo nizata
// var items =[1,2,3];

// items.forEach(function(element){   // element moze da se napise bilo kako
// 	console.log(element);           	// forEach e isto ko i vo for opcijata na niza items[i]
// });

//------------------------------------------------------------------------------

var object= {a:1,b:2,c:3};

for(var i in object){
	console.log(i);             // ova gi pecati bukvite key-ot, toa dole brojkite
	console.log(object[i]);    // za sekoj key(a,b,c) od objektot ispecati mi ja vrednosta

}