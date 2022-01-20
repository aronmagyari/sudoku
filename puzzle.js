var puzzle = (function() {

    // get random integer
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    

    // remove number from an array
    function removeNumberFromArray(num, arr) {
        const index = arr.indexOf(num);
            if (index > -1) {
            arr.splice(index, 1);
            }
    }


    // calculate cell block 
    function calculateBlock(row, col) {
        
        function classifyThirds(num) {
            if (num <= 3) {
                num = 1
            } else if (num <= 6) {
                num = 2
            } else {
                num = 3
            }
            return num;
        }

        var x = classifyThirds(col);
        var y = classifyThirds(row);
        var block = ((y * 3) - 3) + x;
        return block;

    }



    // create a blank solution
    function generateBlank() {
        var blank = [];
        var rowCounter = 1;
        var columnCounter = 1;

        for (var x = 0; x < 81; x++) {
            var cell = {};
            cell.index = x;

            // set row and column numbers for cells
            cell.row = rowCounter;
            cell.column = columnCounter;
            if (columnCounter > 9)  {
                columnCounter = 1;
                rowCounter++;
            }

            // set array of valid numbers that can still go in cell
            cell.options = [1,2,3,4,5,6,7,8,9];

            // create placeholder for other cell properties
            cell.block = calculateBlock(rowCounter, columnCounter);
            cell.solution = 0;
            cell.entry = 0;

            columnCounter++;

            blank.push(cell);
        }

        return blank;
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



    // enter number into puzzle
    function enterNumberIntoSolution(num, sol) {
        var availableColumns = [0,1,2,3,4,5,6,7,8];
        for (var row of sol) {

            var index = availableColumns[getRandomInt(availableColumns.length)];
            row[index] = num;
            removeNumberFromArray(index, availableColumns);

        }

    }



    // return
    return {
        generateSolution: generateSolution,
        generateBlank: generateBlank
    }

})();
