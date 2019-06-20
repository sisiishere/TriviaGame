var array = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",]
console.log(array);

var results = [];
console.log(results);
var wins = 0;
console.log(wins);
var losses = 0;
console.log(losses);
var timer = 60000;
console.log(timer);

var reset = function(){
    document.getElementById("Wins:").innerHTML = wins;
    console.log(reset);

    document.getElementById("Losses:").innerHTML = losses;
    console.log(reset);

    document.getElementById("Results:").innerHTML = results;
    console.log(reset);

    document.getElementById("Clock").innerHTML = timer;
    console.log(reset);
}


var displayResults = function() {
    document.getElementById('Wins:').innerHTML = 'Wins: ' + wins;
    console.log(displayResults);
    document.getElementById('Losses:').innerHTML = 'Losses: ' + losses;
    console.log(displayResults);
    document.getElementById('Results:').innerHTML = 'Results: ' + array;
    console.log(displayResults);
  };

  var Timer = setTimeout( "setTimeFunction( )", -1000 ); 
  console.log(Timer);


 $("#MonétXChange").on("click", function (){
     console.log("CLicked");
    document.getElementById("MonétXChange").innerHTML = "<img src = 'soak it up.jpg'/>"
 });

 $("#NotMonét").on("click", function (){
     console.log("CLicked");
    document.getElementById("NotMonét").innerHTML = "<img src = 'you are not turning it out.jpg'/>"
 });

 $("#ErikaKlash").on("click", function (){
     console.log("CLicked");
    document.getElementById("ErikaKlash").innerHTML = "<img src = 'thank you.jpg'/>"
 });

 $("#NotErika").on("click", function (){
     console.log("CLicked");
    document.getElementById("NotErika").innerHTML = "<img src = 'nooooo.jpg'/>"
 });
  
 $("#Amadiva").on("click", function (){
     console.log("CLicked");
    document.getElementById("Amadiva").innerHTML = "<img src = 'do not underestimate.jpg'/>"
 });

 $("#NotAmadiva").on("click", function (){
     console.log("CLicked");
    document.getElementById("NotAmadiva").innerHTML = "<img src = 'shade.jpg'/>"
 });

 $("#ManilaLuzon").on("click", function (){
     console.log("CLicked");
    document.getElementById("ManilaLuzon").innerHTML = "<img src = 'no longer robbed.jpg'/>"
 });

 $("#NotManila").on("click", function (){
     console.log("CLicked");
    document.getElementById("NotManila").innerHTML = "<img src = 'foiled again.jpg'/>"
 });
  
 $("#Loris").on("click", function (){
     console.log("CLicked");
    document.getElementById("Loris").innerHTML = "<img src = 'win!.jpg'/>"
 });

 $("#NotLoris").on("click", function (){
     console.log("CLicked");
    document.getElementById("NotLoris").innerHTML = "<img src = 'bottom3.jpg'/>"
 });

 $("#KandyZyanide").on("click", function (){
    console.log("CLicked");
    document.getElementById("KandyZyanide").innerHTML = "<img src = 'hahahah.jpg'/>"
 });

 $("#NotKandy").on("click", function (){
     console.log("CLicked");
    document.getElementById("NotKandy").innerHTML = "<img src = 'broken-hearted.jpg'/>"
 });

 $("#AKeriaCDavenport").on("click", function (){
     console.log("CLicked");
    document.getElementById("AKeriaCDavenport").innerHTML = "<img src = 'body.jpg'/>"
 });

 $("#NotAKeria").on("click", function (){
     console.log("CLicked");
    document.getElementById("NotAKeria").innerHTML = "<img src = 'what is going on.jpg'/>"
 });

 $("#PincheQueen").on("click", function (){
     console.log("CLicked");
    document.getElementById("PincheQueen").innerHTML = "<img src = 'queen.jpg'/>"
 });

 $("#NotPinche").on("click", function (){
     console.log("CLicked");
    document.getElementById("NotPinche").innerHTML = "<img src = 'balenciaga.jpg'/>"
 }); 

 $("#MochaDiva").on("click", function (){
     console.log("CLicked");
    document.getElementById("MochaDiva").innerHTML = "<img src = 'diva.jpg'/>"
 }); 

 $("#NotMocha").on("click", function (){
     console.log("CLicked");
    document.getElementById("NotMocha").innerHTML = "<img src = 'what.jpg'/>"
 }); 

 $("#FoxieAdjuia").on("click", function (){
     console.log("CLicked");
    document.getElementById("FoxieAdjuia").innerHTML = "<img src = 'pretty monster.jpg'/>"
 });

 $("#NotFoxie").on("click", function (){
     console.log("CLicked");
    document.getElementById("NotFoxie").innerHTML = "<img src = 'do not mess with me.jpg'/>"
 });
 


if ("MonétXChange") {
    wins++
    console.log(wins++);
}

else {
    losses++
    console.log(losses++);
}


if ("ErikaKlash") {
    wins++
    console.log(wins++);
}

else {
    losses++
    console.log(losses++);
}

if ("Amadiva") {
    wins++
    console.log(wins++);
}

else {
    losses++
    console.log(losses++);
}

if ("ManilaLuzon") {
    wins++
    console.log(wins++);
}

else {
    losses++
    console.log(losses++);
}

if ("Loris") {
    wins++
    console.log(wins++);
}

else {
    losses++
    console.log(losses++);
}

if ("KandyZyanide") {
    wins++
    console.log(wins++);
}

else {
    losses++
    console.log(losses++);
}

if ("AKeriaCDavenport") {
    wins++
    console.log(wins++);
}

else {
    losses++
    console.log(losses++);
}

if ("PincheQueen") {
    wins++
    console.log(wins++);
}

else {
    losses++
    console.log(losses++);
}

if ("MochaDiva") {
    wins++
    console.log(wins++);
}

else {
    losses++
    console.log(losses++);
}

if ("FoxieAduia") {
    wins++
    console.log(wins++);
}

else {
    losses++
    console.log(losses++);

}

if (results >= 8) { 
    alert("You are one fierce drag !");
    reset();

}

else if (results === 7||6) {
    alert("So close, sis!");
    reset();
 }

else if (results === 5) {
 alert("Halfway there, Mary!");
 reset();
}

else if (results === 4||3) {
    alert("Oh honey, you need some work to do, honey!");
    reset();
}

else if (results <= 2) {
    alert("Girl. No. No. This. Is. Messed. Up.");
    reset();
}

if (win++) { 
    results++
}

  else  { 
    alert("Ooooh, girl!")  
  }