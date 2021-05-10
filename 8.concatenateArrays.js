// function arrayUnique(array) {
//     var a = array.concat();
//     for(var i=0; i<a.length; ++i) {
//         for(var j=i+1; j<a.length; ++j) {
//             if(a[i] === a[j])
//                 a.splice(j--, 1);
//         }
//     }

//     return a;
// }

// var array1 = [1,2,3,4];
// var array2 = [1,2,3,5];
//     // Merges both arrays and gets unique items
// var array3 = arrayUnique(array1.concat(array2));

// console.log(array3);

function arrayUnique() {
    let firstInputValue = document.getElementById("getValue").value;
    let secondaryInputValue = document.getElementById("getValue2").value;
    let firstInputToArray = firstInputValue.split(" ");
    let secondaryInputToArray = secondaryInputValue.split(" ");
    
    var a = firstInputToArray.concat(secondaryInputToArray);
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    document.getElementById("getOutput").innerHTML = (a.sort());

    
}

arrayUnique();