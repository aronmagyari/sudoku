
app = document.getElementById('app');
var newSolution = puzzle.generateSolution();
app.appendChild(view.displayTable(newSolution));
