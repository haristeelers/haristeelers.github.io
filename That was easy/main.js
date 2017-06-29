function sayThatWasEasy() {
var ThatWasEasy = new Audio("that_was_easy(1).mp3");
ThatWasEasy.play();
}

$("#easy").on("click", sayThatWasEasy);

$(document).keypress(delegateKeypress);

function delegateKeypress(event) {
  if (event.charCode == 32) {
    var ThatWasEasy = new Audio("that_was_easy(1).mp3");
ThatWasEasy.play();
  }
}