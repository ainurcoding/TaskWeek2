multiplicationTable = () => {

    // number = document.getElementById("getValue");
    number =  document.getElementById("getValue").value;
    let temp = [];

    const numberMultiplication = 1;

    for (let i = numberMultiplication; i <= 10; i++) {
        generateMultiplication = number * [i];
        total = number +" * "+ [i]+ " = "+ generateMultiplication;
        temp.push(total);
    }

    document.getElementById("getOutput").innerHTML = temp.join("<br>");

}