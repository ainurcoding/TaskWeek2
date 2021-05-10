var generate = function(){
    let inputNumber = document.getElementById("getValue").value;
    let pascalTriangle = new Array(inputNumber);

    for (let i = 0; i < inputNumber; i++) {
        let row = new Array(i+1);
        row[0] = 1;
        row[row.length - 1] = 1;
        
        for (let j = 1; j < row.length - 1; j++) {
            let rowAbove = pascalTriangle[i-1];
            row[j] = rowAbove[j] + rowAbove[j-1];
        }
        pascalTriangle[i] = row;
    }
    
    for (let i = 0; i < pascalTriangle.length; i++) {
        document.write(pascalTriangle[i] + "<br>");
    }
    
};





















// var generate = function(inputNumber){
//     let pascalTriangle = new Array(inputNumber);

//     for (let i = 0; i < inputNumber; i++) {
//         let row = new Array(i+1);
//         row[0] = 1;
//         row[row.length - 1] = 1;
        
//         for (let j = 1; j < row.length - 1; j++) {
//             let rowAbove = pascalTriangle[i-1];
//             row[j] = rowAbove[j] + rowAbove[j-1];
//         }
//         pascalTriangle[i] = row;
//     }
//     return pascalTriangle;
// };

