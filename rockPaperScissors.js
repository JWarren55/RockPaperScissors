// Generates a random choice for the computer
function getComputerChoice() {
    number = Math.random();
    if (.6 < number) {
        return "rock"
    } else if (.3 < number) {
        return "paper"
    } else {
        return "scissors"
    }
}

// Prompts the user for their choice and validates it
function getHumanChoice() {
    valid = false
    let hand = ""
    while(!valid) {
        hand = prompt("Play \"Rock\" \"Paper\" or \"Scissors\"").toLowerCase()
        if(hand == "rock" || hand == "paper" || hand == "scissors") {
            valid = true
            return hand
        }
    }
}

// Initializes scores
let humanScore = 0
let computerScore = 0

// Plays a single round of the game
function playRound(humanChoice, computerChoice) {
    
    // Determines the outcome of the round
    let result = "You "
    if(humanChoice == "rock") {
        if(computerChoice == "paper") {
            computerScore++
            result += "lose! "
        } else if(computerChoice == "scissors") {
            humanScore++
            result += "win! "
        }
    } else if (humanChoice == "paper") {
        if(computerChoice == "scissors") {
            computerScore++
            result += "lose! "
        } else if(computerChoice == "rock") {
            humanScore++
            result += "win! "
        }
    } else if (humanChoice == "scissors") {
        if(computerChoice == "rock") {
            computerScore++
            result += "lose! "
        } else if(computerChoice == "paper") {
            humanScore++
            result += "win! "
        }
    }

    // Appends the result details
    if(result == "You ") {
        result += "Draw " + humanChoice + " is " + computerChoice
    } else if (result.includes("lose")) {
        result += computerChoice + " beats " + humanChoice
    } else {
        result += humanChoice + " beats " + computerChoice
    }

    return result
}

// Plays a full game of 5 rounds
function playGame() {
    for (let index = 0; index < 5; index++) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        alert(playRound(humanSelection, computerSelection) + "\nYour score " + humanScore + ". Computer score " + computerScore)

    }
    alert("Your score " + humanScore + ". Computer score " + computerScore)
}

playGame();