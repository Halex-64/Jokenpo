const resultado = document.getElementById("resultado");

function userPlay(userChoice){
    const computerChoice = getComputerChoice();
    const gameResult = getGameResult(userChoice, computerChoice);
    resultado.innerHTML = `Você escolheu: ${userChoice}.<br> Computador escolheu: ${computerChoice}.<br>${gameResult}`;
}

function getComputerChoice(){
    const choices = ['pedra', 'papel', 'tesoura'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getGameResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "Empate! 🤝";
    }
    if((userChoice == "tesoura" && computerChoice == "papel") ||
    (userChoice == "papel" && computerChoice == "pedra") ||
    (userChoice == "pedra" && computerChoice == "tesoura")) {
        return "Você ganhou! 😄";
    }

    if((userChoice == "pedra" && computerChoice == "papel")||
    (userChoice == "papel" && computerChoice == "tesoura")||
    (userChoice == "tesoura" && computerChoice == "pedra")){
        return "Você perdeu! 😭";
    }
    
}