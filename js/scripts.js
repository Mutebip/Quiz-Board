function check() {
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var correct = 0;

  if (question1 == "ECMAscript"){
    correct+=20;
  }
  if (question2 == "A student"){
    correct+=20;
  }
  if (question3 == "The gas pedal"){
    correct+=20;
  }
  if (question4 == "Detailed"){
    correct+=20;
  }

  var messages = ["EXCELLENT!","BEST!", "BETTER!", "GOOD!","MORE EFFORT NEEDED!"];
  var pictures = ["img/excellent.gif", "img/best.gif", "img/better.gif", "img/good.gif", "img/moreEffort.gif"];

  var range;
  if (correct < 20){
    range = 4;
  }
  if (correct > 0 && correct < 40){
    range = 3;
  }
  if (correct > 20 && correct < 60){
    range = 2;
  }
  if (correct > 40 && correct < 80){
    range = 1;
  }
  if (correct > 60){
    range = 0;
  }


  document.getElementById("after_submit").style.visibility = "visible";

  document.getElementById("message").innerHTML = messages[range];
  document.getElementById("number_correct").innerHTML = "You got " + correct;
  document.getElementById("picture").src = pictures[range]
}
