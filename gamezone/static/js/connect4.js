var player1 = prompt("Player One: Enter Your Name , you will be Blue");
var player1Color = 'rgb(86, 151, 255)';

var player2 = prompt("Player Two: Enter Your Name, you will be Red");
var player2Color = 'rgb(237, 45, 73)';

var game_on = true;
var table = $('table tr');

function reportWin(rowNum,colNum) {
  console.log("You won starting at this row,col");
  console.log(rowNum);
  console.log(colNum);
}

function changecolor(row,col,color){
  return table.eq(row).find('td').eq(col).find('button').css('background-color',color);
}

function retcolor(row,col){
  return table.eq(row).find('td').eq(col).find('button').css('background-color');
}

function chkbot(col){
  var report=retcolor(5,col);
  for (var row=5;row>-1;row--){
    report=retcolor(row,col);
    if (report === 'rgb(128, 128, 128)'){
      return row;
    }
  }
}

function colormatch(one,two,three,four){
  return(one===two && one==three && one==four && one !== 'rgb(128, 128, 128)' && one !== undefined)
}


function horizchk(){
  for (var row = 0; row < 6; row++) {
    for (var col = 0; col < 4;col++) {
      if (colormatch(retcolor(row,col),retcolor(row,col+1),retcolor(row,col+2),retcolor(row,col+3))){
        console.log("horiz");
        reportWin(row,col);
        return true;
      }else{
        continue;
      }
    }
  }
}


function vertichk(){
  for (var col=0;col<6;col++){
    for(var row=0;row<3;row++){
      if (colormatch(retcolor(row,col),retcolor(row+1,col),retcolor(row+2,col),retcolor(row+3,col))){
        console.log("verti");
        reportWin(row,col);
        return true;
      }else{
        continue;
      }
    }
  }
}

function diagchk(){
  for (var col = 0; col < 5; col++) {
  for (var row = 0; row < 7; row++) {
    if (colormatch(retcolor(row,col), retcolor(row+1,col+1) ,retcolor(row+2,col+2), retcolor(row+3,col+3))) {
      console.log('diag');
      reportWin(row,col);
      return true;
    }else if (colormatch(retcolor(row,col), retcolor(row-1,col+1) ,retcolor(row-2,col+2), retcolor(row-3,col+3))) {
      console.log('diag');
      reportWin(row,col);
      return true;
    }else {
      continue;
    }
  }
 }
}

function gameEnd(winningPlayer) {
  for (var col = 0; col < 7; col++) {
    for (var row = 0; row < 7; row++) {
      $('h3').fadeOut('fast');
      $('table').fadeOut('fast');
      $('h1').text(winningPlayer+" has won! Refresh your browser to play again!").css("fontSize", "50px")
    }
  }
}

var currentPlayer = 1;
var currentName = player1;
var currentColor = player1Color;

// Start with Player One
$('h3').text(player1+": it is your turn, please pick a column to drop your blue chip.");

$('.board button').on('click',function() {
  var col = $(this).closest("td").index();
  var bottomAvail = chkbot(col);
  changecolor(bottomAvail,col,currentColor);
  if (horizchk() || vertichk() || diagchk()) {
    gameEnd(currentName);
  }

  currentPlayer = currentPlayer * -1 ;

  if (currentPlayer === 1) {
    currentName = player1;
    $('h3').text(currentName+": it is your turn, please pick a column to drop your blue chip.");
    currentColor = player1Color;
  }else {
    currentName = player2
    $('h3').text(currentName+": it is your turn, please pick a column to drop your red chip.");
    currentColor = player2Color;
  }

})
