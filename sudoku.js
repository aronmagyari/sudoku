//hello world test
document.getElementById("app").innerHTML = "hello, sudoku";

// generate main table 
var mainTable = [];

// create 9 rows with 9 cells in each
for (var x  = 0; x < 9; x++){
    var row = [];

    for (var y = 0; y < 9; y++){
        row[y] = (x * 9) + (y + 1);
    }

    mainTable[x] = row;
}
