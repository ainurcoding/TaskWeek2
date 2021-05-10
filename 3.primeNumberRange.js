function primeNumber() {
    

    let lowerNumber = document.getElementById("getValue").value;
    let higherNumber = document.getElementById("getValue2").value;
    let temp = [];

    for (let i = lowerNumber; i <= higherNumber; i++) {
        let flag = 0;

        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }

        if (i > 1 && flag == 0) {
            temp.push(i);
        }
        
    }
    
    document.getElementById("getOutput").innerHTML = temp;

}

