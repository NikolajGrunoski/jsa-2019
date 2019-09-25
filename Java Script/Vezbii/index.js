

// function sobiranje (){
//     let r1 = parseInt(document.getElementById("value1").value);
//     let r2 = parseInt(document.getElementById("value2").value);
//     let rezultat = parseInt(r1) + parseInt(r2);
//     document.getElementById("rezultat").innerText = rezultat;
// }

// function odzemanje(){
//     let r1 = parseInt(document.getElementById("value1").value);
//     let r2 = parseInt(document.getElementById("value2").value);
//     let rezultat = parseInt(r1) - parseInt(r2);
//     document.getElementById("rezultat").innerText = rezultat
// }

// document.getElementById("sobiranje").addEventListener("click", function(){
//     sobiranje();

// })

// document.getElementById("odzemanje").addEventListener('click', function(){
//     odzemanje();
// })

var random = Math.floor((Math.random() * 10) + 1);
console.log(random);

var prasanje = parseInt(prompt("Gues the number"));

while (prasanje !== random) {

    if (prasanje < random) {
        prasanje = parseInt(prompt('The number is too low. Try again!'));
    } else if (prasanje > random) {
       prasanje = parseInt(prompt('The number is too big. Try again!'));
    }
}

if (prasanje === random) {
    alert("Congradulations");
}