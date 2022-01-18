// hello world test
puzzle = document.getElementById('puzzle');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// enter number into puzzle
function enterNumberIntoSolution(num, sol) {

    for (var row of sol) {
        var index = getRandomInt(9);

        row[index] = num;
        
    }

}

// generate a 2D array of Valid sudoku solution
function generateSolution() { 
    var solution = [];

    // create 9 rows with 9 cells in each
    for (var x  = 0; x < 9; x++){
        var row = [];
        for (var y = 0; y < 9; y++){
            row[y] = 0;
        }
        solution[x] = row;
    }

    enterNumberIntoSolution(1,solution);

    return solution;
}

// generate BOM table for solution
function generateBomTable(solution) {
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

    return table;
}

var newSolution = generateSolution();
puzzle.appendChild(generateBomTable(newSolution));
