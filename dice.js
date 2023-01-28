var randomnumber = Math.floor(Math.random()*6 + 1);
var newHref = "images/dice"+randomnumber+".png";

document.querySelector(".img1").setAttribute("src", newHref);

var randomnumber2 = Math.floor(Math.random()*6 + 1);
var newHref2 = "images/dice"+randomnumber2+".png";

document.querySelector(".img2").setAttribute("src", newHref2);

if (randomnumber > randomnumber2){
  document.querySelector("h1").textContent="🚩Player 1 Wins";
}
else if (randomnumber < randomnumber2){
  document.querySelector("h1").textContent="Player 2 Wins🚩";
}
else{
  document.querySelector("h1").textContent="Draw";
}
