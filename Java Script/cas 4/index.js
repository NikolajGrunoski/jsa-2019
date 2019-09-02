//console.log(document.getElementById('title'));

//console.dir(document.getElementById('title')); //pecati kako celo drvo so se

// document.getElementById("title").innerHTML = "Hello World"; 



// document.getElementById("title").innerHTML ='<a href = "https://www.google.com">Link</a>'; 

// var p = document.createElement("p");
// p.innerText= "semos";
// title.append(p);


// console.dir(document.getElementsByClassName("blok"));
// document.getElementsByClassName("blok")[0].innerHTML="Hello World"; // go menja samo prvoto poso e prva pozicija vo nizata odnosno [0]
// document.getElementsByTagName("a")[0].innerText="Link";
// document.getElementsByTagName("a")[0].attributes[0].value="https://www.google.com"; // ova go faka prviot link od nizata odnosno prvoto a[0]



// document.write("Zdravoo");
// document.title="semos"; // gore na tabot naslovot
// //document.getElementById("title").setAttribute("class","some_class") // ja fakja klasata samo_class od styles
// document.getElementById("title").classList.add("some_class"); // istoto od linija 25


document.getElementById("button").addEventListener("click",function(){
	document.getElementById("result").innerHTML= new Date();
});

document.getElementById("light_on").addEventListener("click",function(){
	document.getElementsByTagName("img")[0].attributes[0].value = "https://www.w3schools.com/js/pic_bulbon.gif";

});

document.getElementById("light_off").addEventListener("click",function(){
	document.getElementsByTagName("img")[0].attributes[0].value = "https://www.w3schools.com/js/pic_bulboff.gif";

});