
/**
 * 
weather = ["sun", "clouds", "rain", "hail", "snow"]
deleteArray = "hail"

for(var i = 0; i < weather.length; i++)
{
    if(weather[i].indexOf(deleteArray) != -1)
    {
        delete weather[i];
        console.log(weather);
    }
}

 */

removeArray = () => {
    
    let valueInput =  document.getElementById("getValue").value;
    let convertToArray = valueInput.split(" ");
    // console.log(convertToArray);
    // valueInput = ["a","b","c","d"];
    deleteInput = document.getElementById("getValue2").value;

    for (var i = 0; i < convertToArray.length; i++) {
        if (convertToArray[i].indexOf(deleteInput) != -1) {
            delete convertToArray[i];
            document.getElementById("getOutput").innerHTML = 
            ("the input is "+ valueInput +"<br>Array deleted is : "+ deleteInput + "<br>and result : "+convertToArray);
        }
        
    }

}

