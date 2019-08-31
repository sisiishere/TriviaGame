var array = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",]
console.log(array);

var wins = 0;
console.log(wins);
var losses = 0;
console.log(losses);
var counter = 52000;
console.log(counter);


var reset = function(){
    document.getElementById("Wins:").innerHTML = wins;
    console.log(reset);

    document.getElementById("Losses:").innerHTML = losses;
    console.log(reset);

    document.getElementById("Clock").innerHTML = counter;
    console.log(reset);
}


var displayResults = function() {
    document.getElementById('Wins:').innerHTML = 'Wins: ' + wins;
    document.getElementById('Losses:').innerHTML = 'Losses: ' + losses;
    document.getElementById('Clock').innerHTML = 'Clock ' + counter;
  };

var counter = 52;
var intervalID;
console.log(counter);

function start() {
    console.log("Starting ....");
    intervalID = setInterval(countDown, 1000);
}
 
function countDown() {
    // console.log("in countDown function");
    if(counter <= 0){
        done();
        console.log("Times Up");
    } else {
        counter--;
        console.log("Counter: " + counter);
    }
}

function done() {
    clearInterval(intervalID);
    console.log("Interval Cleared");
}
$("#Clock").html(counter);

start();

    
 $("#MonétXChange").on("click", function (){
     console.log("CLicked");
    document.getElementById("MonétXChange").innerHTML = "<img src = 'soak it up.jpg'/>"
    wins++;
    displayResults();
 });

 $(".NotMonét").on("click", function (){
     console.log("CLicked");
    document.getElementsByClassName("NotMonét").innerHTML = "<img src = 'you are not turning it out.jpg'/>"
    losses++;
    displayResults();
 });

 $("#ErikaKlash").on("click", function (){
     console.log("CLicked");
    document.getElementById("ErikaKlash").innerHTML = "<img src = 'thank you.jpg'/>"
    wins++;
    displayResults();
 });

 $(".NotErika").on("click", function (){
     console.log("CLicked");
    document.getElementsByClassName("NotErika").innerHTML = "<img src = 'nooooo.jpg'/>"
    losses++;
    displayResults();
 });
  
 $("#Amadiva").on("click", function (){
     console.log("CLicked");
    document.getElementById("Amadiva").innerHTML = "<img src = 'do not underestimate.jpg'/>"
    wins++;
    displayResults();
 });

 $(".NotAmadiva").on("click", function (){
     console.log("CLicked");
    document.getElementsByClassName("NotAmadiva").innerHTML = "<img src = 'shade.jpg'/>"
    losses++;
    displayResults();
 });

 $("#ManilaLuzon").on("click", function (){
     console.log("CLicked");
    document.getElementById("ManilaLuzon").innerHTML = "<img src = 'no longer robbed.jpg'/>"
    wins++;
    displayResults();
 });

 $(".NotManila").on("click", function (){
     console.log("CLicked");
    document.getElementsByClassName("NotManila").innerHTML = "<img src = 'foiled again.jpg'/>"
    losses++;
    displayResults();
 });
  
 $("#Loris").on("click", function (){
     console.log("CLicked");
    document.getElementById("Loris").innerHTML = "<img src = 'win!.jpg'/>"
    wins++;
    displayResults();
 });

 $(".NotLoris").on("click", function (){
     console.log("CLicked");
    document.getElementsByClassName("NotLoris").innerHTML = "<img src = 'bottom3.jpg'/>"
    losses++;
    displayResults();
 });

 $("#KandyZyanide").on("click", function (){
    console.log("CLicked");
    document.getElementById("KandyZyanide").innerHTML = "<img src = 'hahahah.jpg'/>"
    wins++;
    displayResults();
 });

 $(".NotKandy").on("click", function (){
     console.log("CLicked");
    document.getElementsByClassName("NotKandy").innerHTML = "<img src = 'broken-hearted.jpg'/>"
    losses++;
    displayResults();
 });

 $("#AKeriaCDavenport").on("click", function (){
     console.log("CLicked");
    document.getElementById("AKeriaCDavenport").innerHTML = "<img src = 'body.jpg'/>"
    wins++;
    displayResults();
 });

 $(".NotAKeria").on("click", function (){
     console.log("CLicked");
    document.getElementsByClassName("NotAKeria").innerHTML = "<img src = 'what is going on.jpg'/>"
    losses++;
    displayResults();
 });

 $("#PincheQueen").on("click", function (){
     console.log("CLicked");
    document.getElementById("PincheQueen").innerHTML = "<img src = 'queen.jpg'/>"
    wins++;
    displayResults();
 });

 $(".NotPinche").on("click", function (){
     console.log("CLicked");
    document.getElementsByClassName("NotPinche").innerHTML = "<img src = 'balenciaga.jpg'/>"
    losses++;
    displayResults();
 }); 

 $("#MochaDiva").on("click", function (){
     console.log("CLicked");
    document.getElementById("MochaDiva").innerHTML = "<img src = 'diva.jpg'/>"
    wins++;
    displayResults();
 }); 

 $(".NotMocha").on("click", function (){
     console.log("CLicked");
    document.getElementsByClassName("NotMocha").innerHTML = "<img src = 'what.jpg'/>"
    losses++;
    displayResults();
 }); 

 $("#FoxieAdjuia").on("click", function (){
     console.log("CLicked");
    document.getElementById("FoxieAdjuia").innerHTML = "<img src = 'pretty monster.jpg'/>"
    results++;
    displayResults();
 });

 $(".NotFoxie").on("click", function (){
     console.log("CLicked");
    document.getElementsByClassName("NotFoxie").innerHTML = "<img src = 'do not mess with me.jpg'/>"
    losses++;
    displayResults();
 });
 




