
//empty array to push values randomly genorated 
var userArray = [];
var compArray = [];
var userSum = [];
var gemValue = [0, 0, 0, 0];

var compNum = 0
var usrNum = 0

//the computers random number
function start() {
    userSum = []
    usrNum = 0
    gemValue = gemValue.map(() => Math.floor((Math.random() * 8) + 1))
    compNum = Math.floor((Math.random() * 99) + 1)
    $("#computerGuess").text(compNum)
    
}

function sum(arr) {
    function add(a, b) {
        return a + b;
    }
    const gemAndTheHologramssum = arr.reduce(add, 0);
    return gemAndTheHologramssum
}

function myFunction() {
    var index = $(this).attr("value")

    userSum.push(gemValue[index])
    usrNum = sum(userSum)
   

    if (compNum == usrNum) {
        alert("You win!!!")
        start()
    }
    if (compNum < usrNum) {
        alert("You Lose :(")
        start()
    }
 document.getElementById("userGuess").innerHTML = usrNum;
};

document.getElementById("blue").addEventListener("click", myFunction);
//function for the blue image


document.getElementById("green").addEventListener("click", myFunction);
//function for the green image

document.getElementById("red").addEventListener("click", myFunction);
//function for the red image


document.getElementById("yellow").addEventListener("click", myFunction);

//function for the yellow image 



console.log(sum(userSum));
//console.log(userArray.push('xYellow', 'xBlue', 'xRed'));



// Store alert components in object
//let alertDiv = {
//loose: '<div class="alert alert-danger" role="alert"><strong>Loser!</strong> HaHaHa you looseee!</div>',
//win: '<div class="alert alert-success" role="alert"><strong>Wahoo you win!</strong> Lets play again!</div>',
//draw: '<div class="alert alert-info" role="alert"><strong>Close!</strong> it was a draw, please reset and try again.</div>'

start()
// Track player score
//let yourScore = 0;
//let myScore = 0;

//restart game 
//$(document).click(function(){
    //$(":reset");
  //});