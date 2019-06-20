varNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",]
console.log(Numbers);

varResults = [];
console.log(Results);
varWins = 0;
console.log(Wins);
varLosses = 0;
console.log(Losses);
varTimer = 60000;
console.log(Timer);

var reset = function(){
    document.getElementById("Wins:").innerHTML = Wins;
    console.log(reset);

    document.getElementById("Losses:").innerHTML = Losses;
    console.log(reset);

    document.getElementById("Results:").innerHTML = Numbers;
    console.log(reset);

    document.getElementById("Clock").innerHTML = Timer;
    console.log(reset);
}
var add = function(Array, Wins) {
    console.log(add);
}


var displayResults = function() {
    document.getElementById('Wins:').innerHTML = 'Wins: ' + Wins;
    console.log(displayResults);
    document.getElementById('Losses:').innerHTML = 'Losses: ' + Losses;
    console.log(displayResults);
    document.getElementById('Results:').innerHTML = 'Results: ' + Array;
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
    document.getElementById("NotLoris").innerHTML = "<img src = 'bottom3.jpg'/>"
 });

 $("#KandyZyanide").on("click", function (){
    document.getElementById("KandyZyanide").innerHTML = "<img src = 'hahahah.jpg'/>"
 });

 $("#NotKandy").on("click", function (){
    document.getElementById("NotKandy").innerHTML = "<img src = 'broken-hearted.jpg'/>"
 });

 $("#AKeriaCDavenport").on("click", function (){
    document.getElementById("AKeriaCDavenport").innerHTML = "<img src = 'body.jpg'/>"
 });

 $("#NotAKeria").on("click", function (){
    document.getElementById("NotAKeria").innerHTML = "<img src = 'what is going on.jpg'/>"
 });

 $("#PincheQueen").on("click", function (){
    document.getElementById("PincheQueen").innerHTML = "<img src = 'queen.jpg'/>"
 });

 $("#NotPinche").on("click", function (){
    document.getElementById("NotPinche").innerHTML = "<img src = 'balenciaga.jpg'/>"
 }); 

 $("#MochaDiva").on("click", function (){
    document.getElementById("MochaDiva").innerHTML = "<img src = 'diva.jpg'/>"
 }); 

 $("#NotMocha").on("click", function (){
    document.getElementById("NotMocha").innerHTML = "<img src = 'what.jpg'/>"
 }); 

 $("#FoxieAdjuia").on("click", function (){
    document.getElementById("FoxieAdjuia").innerHTML = "<img src = 'pretty monster.jpg'/>"
 });

 $("#NotFoxie").on("click", function (){
    document.getElementById("NotFoxie").innerHTML = "<img src = 'do not mess with me.jpg'/>"
 });
 


if ("MonétXChange") {
    Wins++
    console.log(Wins++);
}

else {
    Losses++
    console.log(Losses++);
}


if ("ErikaKlash") {
    Wins++
    console.log(Wins++);
}

else {
    Losses++
    console.log(Losses++);
}

if ("Amadiva") {
    Wins++
    console.log(Wins++);
}

else {
    Losses++
    console.log(Losses++);
}

if ("ManilaLuzon") {
    Wins++
    console.log(Wins++);
}

else {
    Losses++
    console.log(Losses++);
}

if ("Loris") {
    Wins++
    console.log(Wins++);
}

else {
    Losses++
    console.log(Losses++);
}

if ("KandyZyanide") {
    Wins++
    console.log(Wins++);
}

else {
    Losses++
    console.log(Losses++);
}

if ("AKeriaCDavenport") {
    Wins++
    console.log(Wins++);
}

else {
    Losses++
    console.log(Losses++);
}

if ("PincheQueen") {
    Wins++
    console.log(Wins++);
}

else {
    Losses++
    console.log(Losses++);
}

if ("MochaDiva") {
    Wins++
    console.log(Wins++);
}

else {
    Losses++
    console.log(Losses++);
}

if ("FoxieAduia") {
    Wins++
    console.log(Wins++);
}

else {
    Losses++
    console.log(Losses++);

}

if (Result >= 8) { 
    alert("You are one fierce drag !");
    resetStart();

}

else if (Result === 7||6) {
    alert("So close, sis!");
    resetStart();
 }

else if (Result === 5) {
 alert("Halfway there, Mary!");
 resetStart();
}

else if (Result === 4||3) {
    alert("Oh honey, you need some work to do, honey!");
    resetStart();
}

else if (Result <= 2) {
    alert("Girl. No. No. This. Is. Messed. Up.");
    resetStart();
}

if (Win++) { 
    Results++
}

  else  { 
    alert("Ooooh, girl!")  
  }