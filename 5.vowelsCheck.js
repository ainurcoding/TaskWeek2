vowelsCheck = () => {
    var input = document.getElementById("getValue").value;
    if (input == 'a' || input == 'A' || input == 'e' || input == 'E' || input == 'i' || input == 'I' || input == 'o' || input == 'O' || input == 'u' || input == 'U') {
    document.getElementById("getOutput").innerHTML = (input +" adalah huruf vokal");
    }  else {
        document.getElementById("getOutput").innerHTML = (input +" adalah bukan huruf vokal");
    }
}



