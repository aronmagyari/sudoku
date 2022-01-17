// hello world test
app = document.getElementById('app');

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

// display main table
var mainTableElement = document.createElement('div');
mainTableElement.setAttribute('id', 'main-table');

for (var x = 0; x < 9; x++){
    var row = document.createElement('div');
        row.setAttribute('class', 'row');

    for (var y = 0; y < 9; y++){
        var cell = document.createElement('div');
        cell.setAttribute('class', 'cell');
        cell.innerHTML = mainTable[x][y];
        row.appendChild(cell);
    }

    mainTableElement.appendChild(row);
}

app.appendChild(mainTableElement);
