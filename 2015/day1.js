function myFunction() {
    let value = document.getElementById("value").value
    let arr1 = Array.from(value)
    let arr2 = []
    let floor = 0;
    // Setting up basement value for findIndex function
    let basement = (element) => element < 0;

    // Looping through each element in the array to calculate which floor Santa is on
    arr1.forEach(element => {
        if (element == "("){
            floor = floor + 1
            arr2.push(floor)
        } else if (element == ")") {
            floor = floor - 1
            arr2.push(floor)
        }
    })
    document.getElementById("result").innerHTML = floor
    // Displaying position of value in array. 
    // Adding 1 to display correct position e.g. position 0 in array would be first element in array so displaying 1 instead of 0
    document.getElementById("entersbasement").innerHTML = arr2.findIndex(basement) + 1
}