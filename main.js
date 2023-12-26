   score = document.getElementById("score").innerHTML;
   score = 0;
   var music = new Audio('music.mp3');
music.play();
const human = document.getElementById("human");
const landmine = document.getElementById("landmine");
const tiger = document.getElementById("tiger");
function jump() {
  if (human.classList != "jump") {
    human.classList.add("jump");

    setTimeout(function () {
      human.classList.remove("jump");
    }, 300);
    if (tiger.classList != "jump") {
        tiger.classList.add("jump");
    
        setTimeout(function () {
          tiger.classList.remove("jump");
        }, 300);
      }
  }
}

let isAlive = setInterval(function () {
  // get current human Y position
  let humanTop = parseInt(window.getComputedStyle(human).getPropertyValue("top"));

  // get current landmine X position
  let landmineLeft = parseInt(
    window.getComputedStyle(landmine).getPropertyValue("left")
  );

  // detect collision
  if (landmineLeft < 140 && landmineLeft > 90 && humanTop >= 200) {
    // collision
    var explode = new Audio('explode.mp3');
    explode.play();
    alert("Game Over!");
    score = 0;
    score = document.getElementsById("score").innerHTML = 0;
  }
  else{
     score = score + 1;
     score = document.getElementById("score").innerHTML = score;
  }
}, 10);
if(score == 999999999){
  alert("Great job champ ! you made it ")
}

document.addEventListener("keydown", function (event) {
  jump();
});