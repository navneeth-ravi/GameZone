var restart=document.querySelector('#b');
var squares=document.querySelectorAll("td");
var n=0;
function clear(){
  alert("Game Over")
  for (var i=0;i<squares.length;i++){
    squares[i].textContent='';
    n=0;
  }
}

restart.addEventListener('click',clear)
function change(){
  if (n==0){
    n=1;
    this.textContent='X';

  }else if (n==1){
    n=0;
    this.textContent='O';
  }
  winchk();

}
function winchk() {
  for(var i=0;i<9;i=i+3){
  if (squares[i].textContent==squares[i+1].textContent && squares[i].textContent==squares[i+2].textContent&&squares[i].textContent!=""){
    setTimeout(clear,500);
  }
}
for(var i=0;i<3;i++){
  if (squares[i].textContent==squares[i+3].textContent && squares[i].textContent==squares[i+6].textContent&&squares[i].textContent!=""){
    clear();
  }
}
if (squares[2].textContent==squares[4].textContent && squares[6].textContent==squares[2].textContent&&squares[2].textContent!=""){
  clear();
}
if (squares[0].textContent==squares[4].textContent && squares[8].textContent==squares[0].textContent&&squares[0].textContent!=""){
  clear();
}
}


for (var i=0; i<squares.length;i++){
  squares[i].addEventListener('click',change);
}
