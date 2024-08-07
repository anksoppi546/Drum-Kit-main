var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keydown", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {

    case "..A":
      var a = new Audio("sounds/a.mp3");
      a.play();
      break;

    case "..N":
      var n = new Audio('sounds/n.mp3');
      n.play();
      break;

    case "..K":
      var k = new Audio('sounds/k.mp3');
      k.play();
      break;

    case "..I":
      var i = new Audio('sounds/i.mp3');
      i.play();
      break;

    case "..T":
      var t = new Audio('sounds/t.mp3');
      t.play();
      break;

    case "a":
      var a = new Audio("sounds/a.mp3");
      a.play();
      break;

    case "n":
      var n = new Audio('sounds/n.mp3');
      n.play();
      break;

    case "k":
      var k = new Audio('sounds/k.mp3');
      k.play();
      break;

    case "i":
      var i = new Audio('sounds/i.mp3');
      i.play();
      break;

    case "t":
      var t = new Audio('sounds/t.mp3');
      t.play();
      break;

    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
