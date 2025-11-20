// Generates a random choice for the computer
function getComputerChoice() {
    number = Math.random();
    if (.8 < number) {
        return "rock"
    } else if (.6 < number) {
        return "paper"
    } else if (.4 < number) {
        return "scissors"
    } else if (.2 < number) {
        return "lizard"
    } else {
        return "spock"
    }
}

// Prompts the user for their choice and validates it
function getHumanChoice() {
    valid = false
    let hand = ""
    while(!valid) {
        hand = prompt("Play \"Rock\" \"Paper\" \"Scissors\" \"Lizard\" or \"Spock\"").toLowerCase()
        if(hand == "rock" || hand == "paper" || hand == "scissors" || hand == "lizard" || hand == "spock") {
            valid = true
            return hand
        } else {
            alert("Invalid choice, please try again.")
        }
    }
}

// Initializes scores
let humanScore = 0
let computerScore = 0
let playerLevel = 1
let playerEXP = 0

// Outcome functions
function computerWin(humanChoice, computerChoice) {
    computerScore++
    playerEXP += 5
    return "lose! " + computerChoice + " beats " + humanChoice
}

function humanWin(humanChoice, computerChoice) {
    humanScore++
    playerEXP += 20
    return "win! " + humanChoice + " beats " + computerChoice
}

function draw(humanChoice, computerChoice) {
    playerEXP += 10
    return "draw! " + humanChoice + " is " + computerChoice
}

// Plays a single round of the game
function playRound(humanChoice, computerChoice) {
    
    // Determines the outcome of the round
    let result = "You "
    if(humanChoice == "rock") {
        if(computerChoice == "paper") {
            result += computerWin(humanChoice, computerChoice)
        } else if(computerChoice == "scissors") {
            result += humanWin(humanChoice, computerChoice)
        } else if(computerChoice == "lizard") {
            result += humanWin(humanChoice, computerChoice)
        } else if(computerChoice == "spock") {
            result += computerWin(humanChoice, computerChoice)
        }
    } else if (humanChoice == "paper") {
        if(computerChoice == "scissors") {
            result += computerWin(humanChoice, computerChoice)
        } else if(computerChoice == "rock") {
            result += humanWin(humanChoice, computerChoice)
        } else if(computerChoice == "lizard") {
            result += computerWin(humanChoice, computerChoice)
        } else if(computerChoice == "spock") {
            result += humanWin(humanChoice, computerChoice)
        }
    } else if (humanChoice == "scissors") {
        if(computerChoice == "rock") {
            result += computerWin(humanChoice, computerChoice)
        } else if(computerChoice == "paper") {
            result += humanWin(humanChoice, computerChoice)
        } else if(computerChoice == "lizard") {
            result += humanWin(humanChoice, computerChoice)
        } else if(computerChoice == "spock") {
            result += computerWin(humanChoice, computerChoice)
        }
    } else if (humanChoice == "lizard") {
        if(computerChoice == "rock") {
            result += computerWin(humanChoice, computerChoice)
        } else if(computerChoice == "paper") {
            result += humanWin(humanChoice, computerChoice)
        } else if(computerChoice == "scissors") {
            result += computerWin(humanChoice, computerChoice)
        } else if(computerChoice == "spock") {
            result += humanWin(humanChoice, computerChoice)
        }
    } else if (humanChoice == "spock") {
        if(computerChoice == "rock") {
            result += humanWin(humanChoice, computerChoice)
        } else if(computerChoice == "paper") {
            result += computerWin(humanChoice, computerChoice)
        } else if(computerChoice == "scissors") {
            result += humanWin(humanChoice, computerChoice)
        } else if(computerChoice == "lizard") {
            result += computerWin(humanChoice, computerChoice)
        }
    } 
    if(humanChoice == computerChoice) {
        result += draw(humanChoice, computerChoice)
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
    // Level up check
    if(playerEXP >= 100) {
        playerLevel++
        playerEXP = playerEXP - 100
        alert("Congratulations! You've leveled up to level " + playerLevel + "!")
    }
    alert("Your level is " + playerLevel + " with " + playerEXP + " EXP! get 100 EXP to level up.")
}

playGame();