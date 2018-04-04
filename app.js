// Nicely done, Shawn.  Your application
// looks great and runs well.  You've got all the requirements
// lined up, named correctly, and working well here too.
// 20/20

// global variables to store computer choice, user choice and array
var gamePieces = [];
var userChoice = "";
var computerPiece;

// function to populate the gamePieces array and to call the other functions
function populateGameArray() {

    gamePieces = ["rock", "paper", "scissors", "dynamite"];
    // assigns the userChoice global variable with the input of the user
    userChoice = prompt("Please enter one of the following 4 options: rock, paper, scissors, dynamite  eg. rock").toLowerCase();

    computerPiece = gamePieces[getRandomGamePiece(gamePieces.length)];

    validate();

}

function validate() {
    if(userChoice!='rock' && userChoice!='paper' && userChoice!='scissors'&& userChoice!='dynamite') {
        alert('please enter a valid choice');
        populateGameArray();
        return;
    } else {
        document.getElementById('computerChoice').innerHTML = "Computer has chosen: " + computerPiece;
        document.getElementById('userChoice').innerHTML = "You have chosen: " + userChoice;
        insertUserImage();
        insertComputerImage();
        document.getElementById('versus').innerHTML = 'V.S';
        whoWins();
    }
}

// function to get a random index for the gamePieces array
function getRandomGamePiece(arrayLength) {

    var rnd = Math.floor((Math.random() * arrayLength) + 0);
        // return our random index
    return rnd;

}

// function to insert the user image
function insertUserImage() {

    if(userChoice=='rock'){
        document.getElementById('userImage').src = 'rock.png';
    }
    else if(userChoice=='paper'){
      document.getElementById('userImage').src = 'paper.jpg';
    }
    else if(userChoice=='scissors'){
      document.getElementById('userImage').src = 'scissors.jpg';
    }
    else if(userChoice=='dynamite'){
      document.getElementById('userImage').src = 'dynamite.jpg';
    }
}
// function to insert the computer image
function insertComputerImage() {

    if(computerPiece=='rock'){
        document.getElementById('computerImage').src = 'rock.png';
    }
    else if(computerPiece=='paper'){
      document.getElementById('computerImage').src = 'paper.jpg';
    }
    else if(computerPiece=='scissors'){
      document.getElementById('computerImage').src = 'scissors.jpg';
    }
    else if(computerPiece=='dynamite'){
      document.getElementById('computerImage').src = 'dynamite.jpg';
    }
}
// function to compare who wins, and to display results back to user
function whoWins() {
    // comparing userChoice to Rock
    if(computerPiece=="rock" && userChoice=="rock"){
        $(document).ready(function(){
            $("#results").text("TIE!!");
        });
    }
    else if(computerPiece=="rock" && userChoice=="paper"){
        $(document).ready(function(){
            $("#results").text("Paper covers rock. You Win!!!");
        });
    }
    else if(computerPiece=="rock" && userChoice=="scissors"){
        $(document).ready(function(){
            $("#results").text("Rock smashes scissors. Computer Wins!!!");
        });
    }
    else if(computerPiece=="rock" && userChoice=="dynamite"){
        $(document).ready(function(){
            $("#results").text("Dynamite blows up rock.  You Win!!!");
        });
    }
    // comparing userChoice to paper
    else if(computerPiece=="paper" && userChoice=="rock"){
        $(document).ready(function(){
            $("#results").text("Paper covers rock.  Computer Wins!!!");
        });
    }
    else if(computerPiece=="paper" && userChoice=="paper"){
        $(document).ready(function(){
            $("#results").text("TIE!!");
        });
    }
    else if(computerPiece=="paper" && userChoice=="scissors"){
        $(document).ready(function(){
            $("#results").text("Scissors cuts paper.  You Win!!!");
        });
    }
    else if(computerPiece=="paper" && userChoice=="dynamite"){
        $(document).ready(function(){
            $("#results").text("Dynamite blows up paper.  You Win!!!");
        });
    }
    // comparing userChoice to scissors
    else if(computerPiece=="scissors" && userChoice=="rock"){
        $(document).ready(function(){
            $("#results").text("Rock smashes scissors. You Win!!!");
        });
    }
    else if(computerPiece=="scissors" && userChoice=="paper"){
        $(document).ready(function(){
            $("#results").text("Scissors cuts paper.  Computer wins!!!");
        });
    }
    else if(computerPiece=="scissors" && userChoice=="scissors"){
        $(document).ready(function(){
            $("#results").text("TIE!!");
        });
    }
    else if(computerPiece=="scissors" && userChoice=="dynamite"){
        $(document).ready(function(){
            $("#results").text("Scissors disarms dynamite. Computer wins!!!");
        });
    }
    // comparison for userChoice against computer's dynamite
    else if(computerPiece=="dynamite" && userChoice=="rock"){
        $(document).ready(function(){
            $("#results").text("Dynamite blows up rock. Computer wins!!!");
        });
    }
    else if(computerPiece=="dynamite" && userChoice=="paper"){
        $(document).ready(function(){
            $("#results").text("Dynamite blows up paper. Computer wins!!!");
        });
    }
    else if(computerPiece=="dynamite" && userChoice=="scissors"){
        $(document).ready(function(){
            $("#results").text("Scissors disarms dynamite. You Win!!!");
        });
    }
    else if(computerPiece=="dynamite" && userChoice=="dynamite"){
        $(document).ready(function(){
            $("#results").text("Tie!!!");
        });
    }

}
