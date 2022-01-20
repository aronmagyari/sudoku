
app = document.getElementById('app');
var newSolution = puzzle.generateBlank();
app.appendChild(view.displayTable(newSolution));

console.log(puzzle.generateBlank());
