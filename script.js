function swapTiles(cell1,cell2) {

    var temp = document.getElementById(cell1).className;
    document.getElementById(cell1).className = document.getElementById(cell2).className;
    document.getElementById(cell2).className = temp;
  }
  //checks and returns which cell the white tile is in
  function getTile(row,column) {
    if (column<3) {
        if ( document.getElementById("cell"+row+(column+1)).className=="tile9") {
          return "cell"+row+(column+1);
        }
      }
      //Checking if white tile on the left
      if (column>1) {
        if ( document.getElementById("cell"+row+(column-1)).className=="tile9") {
          return "cell"+row+(column-1);
        }
      }
        //Checking if white tile is above
      if (row>1) {
        if ( document.getElementById("cell"+(row-1)+column).className=="tile9") {
          return "cell"+(row-1)+column;
        }
      }
      //Checking if white tile is below
      if (row<3) {
        if ( document.getElementById("cell"+(row+1)+column).className=="tile9") {
          return"cell"+(row+1)+column;
        }
      }
    } 

  function tileClicked(row,column) {
    var tile = document.getElementById("cell"+row+column).className;

    if (tile!="tile9") { 
        
        swapTiles("cell"+row+column, getTile(row,column))
         
    }
    
  }
