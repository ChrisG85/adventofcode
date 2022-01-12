function myFunction() {
    let value = document.getElementById("value").value
    let arr1 = Array.from(value)
    document.getElementById("result").innerHTML = checkFloor(arr1)
    document.getElementById("entersbasement").innerHTML = checkBasement(arr1)
}

// Function to loop through each element in the array to calculate which floor Santa is on
function checkFloor(arr) {
    let floor = 0
    arr.forEach(element => {
        if (element == '(') {
            floor = floor + 1
        } else if (element == ')') {
            floor = floor - 1
        }
    })
    return floor
}

// Function to check at which position Santa enters the basement
function checkBasement(arr) {
    let arr2 = []
    let floor = 0
    let basement = (element) => element < 0;
    arr.forEach(element => {
        if (element == '(') {
            floor = floor + 1
            arr2.push(floor)
        } else if (element == ')') {
            floor = floor - 1
            arr2.push(floor)
        }
    })
    let result = arr2.findIndex(basement) + 1
    return result;
}

module.exports = checkFloor
module.exports = checkBasement