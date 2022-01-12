function myFunction() {
    let dimensions = document.getElementById('dimensions').value
    let numbers = dimensions.match(/\d+/g)
    let arr = splitArray(numbers, 3)
    let paper = 0
    let totalribbon = 0 
    for (let i = 0; i < arr.length; i++) {
        paper = paper + wrapping(arr[i][0], arr[i][1], arr[i][2])
        totalribbon = totalribbon + bow(arr[i][0], arr[i][1], arr[i][2]) + ribbon(arr[i][0], arr[i][1], arr[i][2])
    }
    document.getElementById('result').innerHTML = paper
    document.getElementById('ribbon').innerHTML = totalribbon
}

function wrapping(l, w, h) {
    let lw = l * w
    let wh = w * h
    let hl = h * l

    let side1 = 2 * lw
    let side2 = 2 * wh
    let side3 = 2 * hl

    let res = side1 + side2 + side3 + Math.min(lw, wh, hl)
    return res
}

function splitArray(arr, size) {
    const res = [];
    for (let i = 0; i < arr.length; i += size) {
        const chunk = arr.slice(i, i + size);
        res.push(chunk);
    }
    return res;
}

function ribbon(l, w, h) {
    let arr = [l, w, h]
    arr.sort(function (a, b) {
        return a - b;
    });
    let arr2 = [parseInt(arr[0]), parseInt(arr[1])]
    let res = arr2.reduce(function (previousValue, currentValue) {
        return previousValue + previousValue + currentValue + currentValue
      })
    return res
}

function bow(l, w, h) {
    let res = l * w * h
    return res
}