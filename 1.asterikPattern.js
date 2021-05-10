

asterikPattern = () => {
    let valueInput = document.getElementById("getValue").value;

    for (let index = 0; index <= valueInput; index++) {
        for (let j = 1; j <= index; j++) {
            document.write("* ")
        }
        document.write("<br>")
        
    }
}

