$(document).ready(function()
{
    //// Variable Section  ====================================================
    var crystal1 = 1;
    var crystal2 = 2;
    var crystal3 = 3;
    var crystal4 = 4;
    var winCount = 0;
    var lossCount = 0;
    var score = 0;
    var target = 0;
    //// End of Var Section  ====================================================

    //// Function Declarations  ====================================================
    function newCrystValues()
    {
      var newValue = Math.floor((Math.random() * 12) + 1);
      crystal1 = newValue;
      newValue = Math.floor((Math.random() * 12) + 1);
      crystal2 = newValue;
      newValue = Math.floor((Math.random() * 12) + 1);
      crystal3 = newValue;
      newValue = Math.floor((Math.random() * 12) + 1);
      crystal4 = newValue;
      console.log(crystal1, crystal2, crystal3, crystal4);
    };

    function genTarget()
    {
      var newValue = Math.floor((Math.random() * 120) + 18);
      target = newValue;
      $("#targetText").text(target);
    };

    function resetGame()
    {
      console.log("Wins count: " + winCount);
      $("#winsText").text(winCount);
      $("#lossesText").text(lossCount);
      console.log("Losses count: " + lossCount);
      //write to loseText
      score = 0;
      genTarget();
      newCrystValues();
    };

    function proceed()
    {
      if(score === target)
      {
        $("#scoreText").text("You Won!!");
        alert("You're a Crystal God!");
        ++winCount;
        resetGame();
      }else if(score > target)
      {
        $("#scoreText").text("You Lose!!");
        alert("You've failed!! The cave has collapsed on you...try again?'");
        ++lossCount;
        resetGame();
      }
      console.log("New Score :"+score);
      $("#scoreText").text(score);
    };

    $(".button1").on("click", function() {
      score +=crystal1;
      proceed();
    });

    $(".button2").on("click", function() {
      score +=crystal2;
      proceed();
    });

    $(".button3").on("click", function() {
      score +=crystal3;
      proceed();
    });

    $(".button4").on("click", function() {
      score +=crystal4;
      proceed();
    });
    //// End of Funct Declarations  ====================================================

    //// Game Start  ====================================================
    genTarget();
    console.log("Score: "+score)
    console.log("target: "+target)
    newCrystValues();
    console.log(crystal1, crystal2, crystal3, crystal4);
    //// End of Function Calls  ====================================================
});
