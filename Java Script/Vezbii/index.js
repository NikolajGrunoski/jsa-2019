

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

// var random = Math.floor((Math.random() * 10) + 1);
// console.log(random);

// var prasanje = parseInt(prompt("Gues the number"));

// while (prasanje !== random) {

//     if (prasanje < random) {
//         prasanje = parseInt(prompt('The number is too low. Try again!'));
//     } else if (prasanje > random) {
//        prasanje = parseInt(prompt('The number is too big. Try again!'));
//     }
// }

// if (prasanje === random) {
//     alert("Congradulations");
// }


// Zadaca 1
// fja so 2 parametri sto ke kazuva koja od tie dva e pogolema
// Zadaca 2
// Preku prompt da se vnesat 2 broja i so alert da se prikaze koj od 2ta broja e pogolem, ili dali se isti
// Zadaca 3
// Promt sto ke ve prasa kolkav budzet imate si pored toa ke vi kaze koj od slednive laptopi moze da gi kupite
// var laptop = {
//     Macbook: 500,
//     MacbookAir: 600,
//     MacbookPro: 900
// }
// Zadaca 4
// Preku prompt da se vnese broj i da se soberat site parni broevi pomali od toj broj
// Zadaca 5
// Da kreirate spil karti
// Zadaca 6
// Od sledniov Array
// var random = {
//     k1: "value1",
//     k2: "value2",
//     k3: ["value3.0", "value3.1", "value3.2", "value3.3"],
//     k4: "value4",
//     k5: "value5",
//     k6: "value6",
//     k7: ["value7.0", "value7.1", "value7.2", "value7.3", "value7.4", "value7.5", "value7.6"]
// }
// Da gi prikazete prvite i poslednite vrednosti na k3 i k7
// Zadaca 7
// Od sledniot array da gi isprintate iminjata so povekje od 5 bukvi
// var names = ["Slackbot", "Meto", "Aleksandar", "Dimitar", "Hristijan", "Kocho", "Kristina", "Orce", "Petar", "Riste", "Sanja"];
// Zadaca 8
// Sledniov prazen array
// // var niza = [];
// preku prompt ke mu dadete length i posle toa preku prompt ke gi popunite site prazni vrednosti na arrayot
// na kraj ispecati ja nizata
// Zadaca 9
// Od slendiot array
// var movies = [
//     {
//         title: "In Bruges",
//         rating: "5 stars",
//         hasWatched: false
//     },
//     {
//         title: "Frozen",
//         rating: "4.5 stars",
//         hasWatched: true
//     },
//     {
//         title: "Mad Max Fury Road",
//         rating: "5 stars",
//         hasWatched: true
//     },
//     {
//         title: "Les Miserables",
//         rating: "3.5 stars",
//         hasWatched: false
//     }
// ]
// Ispecatete koj film go imate gledano i negoviot rejting, istoto za tie sto ne se gledani, moze da dodadete povekje filmovi

// Zadaca 1

// function zadaca(pr1, pr2) {
//     if (pr1 > pr2) {
//         console.log('Brojot ' + pr1 + " e pogolem")
//     } else if (pr2 > pr1) {
//         console.log('Brojot ' + pr2 + " e pogolem")
//     } else {
//         console.log('broevite se isti')
//     }
// }

// zadaca(5, 10)

// // Zadaca 2

// let prasanje1 = prompt("Vnesi broj !")
// let prasanje2 = prompt("Vnesi uste eden broj !")

// if (prasanje1 > prasanje2) {
//     alert("Brojot " + prasanje1 + " e poglem od " + prasanje2)
// } else if (prasanje2 > prasanje1) {
//     alert("Brojot " + prasanje2 + " e poglem od " + prasanje1)
// } else {
//     alert("Broevite se isti")
// }


// Zadaca 3

// let budzet = prompt('Koj e vasiot budzet?')
// var laptop = {
//     Macbook: 500,
//     MacbookAir: 600,
//     MacbookPro: 900
// }

// if (budzet >= 500 && budzet < 600){
//     alert("Imate pari za Macbook !")
// }else if(budzet >=600 && budzet < 900){
//     alert("Imate pari za Macbook ili za MacbookAir !")
// }else if( budzet >= 900){
//     alert("Imate pari za Macbook , MacbookAir ili MacbookPro !")
// }else{
//     alert("Nemate dovolno pari ! Siromav si !")
// }


// Zadaca 4

let broevi= prompt("Enter a number")
let result = 0;
 

    for(let i= 0;i < Number(broevi); i++){
        if( i % 2 === 0){
            result += i;
        }
    }


console.log(result)


// Zadaca 5

