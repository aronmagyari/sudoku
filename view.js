var view = (function(solution){
    
    // generate BOM table for solution
    function displayTable(solution) {
        var table = document.createElement('div');
        table.setAttribute('id', 'main-table');

        for (var x = 0; x < solution.length; x++){
            var p = document.createElement('p');
            p.innerHTML = solution[x].entry || '';
            var cellDiv = document.createElement('div');
            cellDiv.setAttribute('class', 'cell');
            if (solution[x].row % 3 == 0 && solution[x].index < 55) {
                cellDiv.setAttribute('class', 'cell guide-below');
            } else if (solution[x].row % 3 == 1 && solution[x].index < 63) {
                cellDiv.setAttribute('class', 'cell guide-above');
            }
            cellDiv.appendChild(p);
            table.appendChild(cellDiv);

        }

        return table;
    }


    // return
    return {
        displayTable: displayTable
    }

})();