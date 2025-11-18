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
let playerLevel = 1
let playerEXP = 0

// Outcome functions
function computerWin() {
    computerScore++
    playerEXP += 5
    return "lose! "
}

function humanWin() {
    humanScore++
    playerEXP += 20
    return "win! "
}

function draw() {
    playerEXP += 10
    return "draw! "
}

// Plays a single round of the game
function playRound(humanChoice, computerChoice) {
    
    // Determines the outcome of the round
    let result = "You "
    if(humanChoice == "rock") {
        if(computerChoice == "paper") {
            result += computerWin()
        } else if(computerChoice == "scissors") {
            result += humanWin()
        }
    } else if (humanChoice == "paper") {
        if(computerChoice == "scissors") {
            result += computerWin()
        } else if(computerChoice == "rock") {
            result += humanWin()
        }
    } else if (humanChoice == "scissors") {
        if(computerChoice == "rock") {
            result += computerWin()
        } else if(computerChoice == "paper") {
            result += humanWin()
        }
    }

    // Appends the result details
    if(result == "You ") {
        result += draw() + humanChoice + " is " + computerChoice
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
    // Level up check
    if(playerEXP >= 100) {
        playerLevel++
        playerEXP = playerEXP - 100
        alert("Congratulations! You've leveled up to level " + playerLevel + "!")
    }
    alert("Your level is " + playerLevel + " with " + playerEXP + " EXP! get 100 EXP to level up.")
}

playGame();