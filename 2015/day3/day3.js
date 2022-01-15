function myFunction() {
    let moves = document.getElementById('moves').value
    moves = Array.from(moves)

    document.getElementById('houses').innerHTML = santaTrip(moves)

}

function santaTrip(directions) {
    let visit = []
    let santaLocation = [0,0]
    let roboLocation = [0,0]
    visit.push([0,0])
    let alternate = false
    for (let i = 0; i < directions.length; i++) {
        if (!alternate) {
            santaMove(directions[i], santaLocation)
            if (!santaVisit(santaLocation, visit)) {
                visit.push([santaLocation[0], santaLocation[1]])
            }
        } else {
            santaMove(directions[i], roboLocation)
            if (!santaVisit(roboLocation, visit)) {
                visit.push([roboLocation[0], roboLocation[1]])
            }
        }
        if (alternate) {
            alternate = false
        } else {
            alternate = true
        }
    }
    console.log(visit)
    return visit.length;
}

// function santaTrip(directions) {
//     let visit = []
//     let robovisit= []
//     let santaLocation = [0,0]
//     let roboLocation = [0,0]
//     visit.push([0,0])
//     for (let i = 0; i < directions.length; i+=2) {
//         santaMove(directions[i], santaLocation)
//         santaMove(directions[i+1], roboLocation)
//         if (!santaVisit(santaLocation, visit) && !santaVisit(roboLocation, robovisit)) {
//             visit.push([santaLocation[0], santaLocation[1]])
//             robovisit.push([roboLocation[0], roboLocation[1]])
//         }
//     }
//     console.log(visit)
//     console.log(robovisit)
//     return visit.length + robovisit.length;
// }


function santaMove(direction, currentLocation) {
    if (direction == '^') {
        currentLocation[1]++
    }
    if (direction == '>') {
        currentLocation[0]++
    }
    if (direction == 'v') {
        currentLocation[1]--
    }
    if (direction == '<') {
        currentLocation[0]--
    }
}

function santaVisit(location, visit) {
    for (let i = 0; i < visit.length; i++) {
        if (visit[i][0] == location[0] && visit[i][1] == location[1]) {
            return true;
        }
    }
    return false;
}