 //crystal and score to reach numbers to choose from
 var jewelNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
 //numbers to choose from to create score goal (need to put more numbers or find abbreviation)
 var randomNumbers = Math.floor(Math.random() * (120 - 17)) + 17 + 1;
 console.log(randomNumbers)
 //jewl one
 var jewelPointsOne = null;
 //creates value for jewel-2
 var jewelPointsTwo = null;
 //creates value for jewel-3
 var jewelPointsThree = null;
 //creates value for jewel-4
 var jewelPointsFour = null;
 //var for winning number set to null
 var winningNumber = null;
 //global var for score. need to add 
 var score = 0;
 //wins and losses
 var wins = 0;
 var losses = 0;

 //update jewel points functions
 var updateJewelPointsOne = function () {
     jewelPointsOne = jewelNumbers[Math.floor(Math.random() * jewelNumbers.length)];
 };
 var updateJewelPointsTwo = function () {
     jewelPointsTwo = jewelNumbers[Math.floor(Math.random() * jewelNumbers.length)];
 };
 var updateJewelPointsThree = function () {
     jewelPointsThree = jewelPointsThree = jewelNumbers[Math.floor(Math.random() * jewelNumbers.length)];
 };
 var updateJewelPointsFour = function () {
     jewelPointsFour = jewelNumbers[Math.floor(Math.random() * jewelNumbers.length)];
 };

 //function for winning number
 var updateWinningNumber = function () {
 //    winningNumber = randomNumbers[Math.floor(Math.random() * randomNumbers.length)];
     $(".winning-number").text(randomNumbers);
     console.log(randomNumbers);
 };
 //calls updateWinningNumber and Update jewelPoint functions when page loads
 window.onload = function () {
     updateWinningNumber();
     updateJewelPointsOne();
     updateJewelPointsTwo();
     updateJewelPointsThree();
     updateJewelPointsFour();
 };
 //reset
 var reset = function () {
     updateWinningNumber();
     updateJewelPointsOne();
     updateJewelPointsTwo();
     score = 0;
     $(".your-score").html(0);
 };

 //function for clicking jewel-one
 $(".jewel-one").on("click", function () {
     //pulls score above and adds to var score
     score = (score + jewelPointsOne);
     //prints score to html (.html replaces each time)
     $(".your-score").html(score);
     console.log(score);
     //win function
     if (score === winningNumber) {
         wins++;
         $(".wins").html(wins);
         //reset
         reset();
     }
     //loss function
     else if (score >= winningNumber) {
         losses++;
         $(".losses").html(losses);
         reset();
     }
 });
 //function for clicking jewel-two
 $(".jewel-two").on("click", function () {
     score = (score + jewelPointsTwo);
     $(".your-score").html(score);
     console.log(score);
     //win function
     if (score === winningNumber) {
         wins++;
         $(".wins").html(wins);
         //reset
         reset();
     }
     //loss function
     else if (score >= winningNumber) {
         losses++;
         $(".losses").html(losses);
         reset();
     }
 });
 //same as above for jewel-three
 $(".jewel-three").on("click", function () {
     score = (score + jewelPointsThree);
     $(".your-score").html(score);
     console.log(score);
     //win function
     if (score === winningNumber) {
         wins++;
         $(".wins").html(wins);
         //reset
         reset();
     }
     //loss function
     else if (score >= winningNumber) {
         losses++;
         $(".losses").html(losses);
         reset();
     }
 });
 //same for jewel-four
 $(".jewel-four").on("click", function () {
     score = (score + jewelPointsFour);
     $(".your-score").html(score);
     console.log(score);
     //win function
     if (score === winningNumber) {
         wins++;
         $(".wins").html(wins);
         //reset
         reset();
     }
     //loss function
     else if (score >= winningNumber) {
         losses++;
         $(".losses").html(losses);
         reset();
     }
 });