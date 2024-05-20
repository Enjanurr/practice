/*const character = "#"
const count = 8
const rows = []

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount-rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount-rowNumber);
  }

for (i = 0; i < count; i = i + 1){
    rows.push(padRow(i + 1 , count))
}
let result = ""
for (const row of rows){
    result = result + "\n" + row;
}
console.log (result)*//*
function createPyramid(height) {
    for (let i = 1; i <= height; i++) {
        let row = '';

        // Add spaces before the first asterisk
        for (let j = height - i; j > 0; j--) {
            row += ' ';
        }

        // Add asterisks for this row
        for (let k = 1; k <= 2 * i - 1; k++) {
            row += '*';
        }

        console.log(row);
    }
}

// Example usage:
createPyramid(10); // Adjust the height as needed*/
x = [1,2]
y = ["1", "2", "3"];
x.push(y);
if(x.length==y.length){
    console.log("equal");
}
else{
    console.log("not equal")
}
document.write(msg)
