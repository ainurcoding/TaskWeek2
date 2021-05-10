fibonacci = () => {
    valueInput = document.getElementById("getValue").value;
    let fibonacci = "";
    let firstValue = 0;
    let secondaryValue = 1;

    if (valueInput < 0) {
        //hentikan program
        return fibonacci;
    }

    for (let i = 0; i < valueInput; i++) {
        if ([i] < 1) {
            valueSet = [i];
        }else {
            valueSet = firstValue + secondaryValue;

            //update variabel untuk bilangan sebelumnya
            secondaryValue = firstValue;
            firstValue = valueSet;
        }
        //tambahkan bilangan ke dalam string

        fibonacci += valueSet+",";
        document.getElementById("getOutput").innerHTML = (fibonacci);
        
    }
    return fibonacci;
    
}

