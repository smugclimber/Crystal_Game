$(document).ready(function()
{
    //// Variable Section  ====================================================
    var crystal1 = {value: 1};
    var crystal2 = {value: 2};
    var crystal3 = {value: 3};
    var crystal4 = {value: 4};
    var wins = 0;
    var losses = 0;
    var score = 0;
    var target = 0;

    //// End of Var Section  ====================================================

    //// Function Declarations  ====================================================
    function newCrystValues()
    {
      var newValue = Math.floor((Math.random() * 12) + 1);
      return newValue;
    };

    function genTarget()
    {
      var newValue = Math.floor((Math.random() * 120) + 18);
      target = newValue;
      $("#targetText").text(target);
    };

    function updateGame()
    {
      ++winCount;
      // win to winText
      ++loseCount
      //write to loseText
      score = 0;
      genTarget();
      newCrystValues();
    };

    $("#button1").on("click", function() {
      score +=crystal1["value"];
      //broke:scope not reaching global score
      console.log(score);
      $("#scoreText").text(score);
    });
    //// End of Funct Declarations  ====================================================

    //// Game Start  ====================================================
    genTarget();
    console.log("Score: "+score)
    console.log("target: "+target)
    if(score === target)
    {
      $("#scoreText").text("You Won!!");
      alert("You're a Crystal God!");
      //updateGame();
    };



    //// End of Function Calls  ====================================================
});
