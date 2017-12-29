
//Restart game
var restart=document.querySelector("#b");
//Grabs all the squares
var squares=document.querySelectorAll("td");
//Clears all the squares
function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
squares[i].textContent="";
  }
}
restart.addEventListener("click",clearBoard);

//Check the square marker
var idone=document.querySelector("#one");
idone.addEventListener("click",function () {
  if (idone.textContent==="") {
    idone.textContent="X";
  }
  else if (idone.textContent==="X") {
    idone.textContent="O";
  }
  else {
    idone.textContent="";
  }
})


var idtwo=document.querySelector("#two")
idtwo.addEventListener("click",function () {
  if (idtwo.textContent==="") {
    idtwo.textContent="X"
  }
  else if (idtwo.textContent==="X") {
    idtwo.textContent="O"
  }
  else {
    idtwo.textContent=""
  }
})


var idthree=document.querySelector("#three")
idthree.addEventListener("click",function () {
  if (idthree.textContent==="") {
    idthree.textContent="X"
  }
  else if (idthree.textContent==="X") {
    idthree.textContent="O"
  }
  else {
    idthree.textContent=""
  }
})


var idfour=document.querySelector("#four")
idfour.addEventListener("click",function () {
  if (idfour.textContent==="") {
    idfour.textContent="X"
  }
  else if (idfour.textContent==="X") {
    idfour.textContent="O"
  }
  else {
    idfour.textContent=""
  }
})


var idfive=document.querySelector("#five")
idfive.addEventListener("click",function () {
  if (idfive.textContent==="") {
    idfive.textContent="X"
  }
  else if (idfive.textContent==="X") {
    idfive.textContent="O"
  }
  else {
    idfive.textContent=""
  }
})


var idsix=document.querySelector("#six")
idsix.addEventListener("click",function () {
  if (idsix.textContent==="") {
    idsix.textContent="X"
  }
  else if (idsix.textContent==="X") {
    idsix.textContent="O"
  }
  else {
    idsix.textContent=""
  }
})


var idseven=document.querySelector("#seven")
idseven.addEventListener("click",function () {
  if (idseven.textContent==="") {
    idseven.textContent="X"
  }
  else if (idseven.textContent==="X") {
    idseven.textContent="O"
  }
  else {
    idseven.textContent=""
  }
})


var ideight=document.querySelector("#eight")
ideight.addEventListener("click",function () {
  if (ideight.textContent==="") {
    ideight.textContent="X"
  }
  else if (ideight.textContent==="X") {
    ideight.textContent="O"
  }
  else {
    ideight.textContent=""
  }
})


var idnine=document.querySelector("#nine")
idnine.addEventListener("click",function () {
  if (idnine.textContent==="") {
    idnine.textContent="X"
  }
  else if (idnine.textContent==="X") {
    idnine.textContent="O"
  }
  else {
    idnine.textContent=""
  }
})
