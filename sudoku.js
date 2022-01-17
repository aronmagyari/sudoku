// hello world test
app = document.getElementById('app');

// generate a 2D array of Valid sudoku solution
function generateSolution() { 
    var solution = [];

    // create 9 rows with 9 cells in each
    for (var x  = 0; x < 9; x++){
        var row = [];
        for (var y = 0; y < 9; y++){
            row[y] = (x * 9) + (y + 1);
        }
        solution[x] = row;
    }

    return solution;
}

// display solution to BOM
function displaySolution(solution, container) {
    var table = document.createElement('div');
    table.setAttribute('id', 'main-table');

    for (var x = 0; x < 9; x++){

        var row = document.createElement('div');
            row.setAttribute('class', 'row');

        for (var y = 0; y < 9; y++){
            var cell = document.createElement('div');
            cell.setAttribute('class', 'cell');
            cell.innerHTML = newSolution[x][y];
            row.appendChild(cell);
        }

        table.appendChild(row);

    }

    container.appendChild(table);
}

var newSolution = generateSolution();
displaySolution(newSolution, app);
