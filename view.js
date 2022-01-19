var view = (function(solution){
    
    // generate BOM table for solution
    function displayTable(solution) {
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


    // return
    return {
        displayTable: displayTable
    }

})();