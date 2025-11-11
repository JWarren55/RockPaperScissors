function getComputerChoice() {
    number = Math.random();
    if (.6 < number) {
        return "Rock"
    } else if (.3 < number) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function getHumanChoice() {
    valid = false
    let hand = ""
    while(!valid) {
        hand = prompt("Play \"Rock\" \"Paper\" or \"Scissors\"")
        if(hand == "Rock" || hand == "Paper" || hand == "Scissors") {
            valid = true
            return hand
        }
    }
}

let humanScore = 0
let computerScore = 0