function nextQuestion(currentQuestion) {
    document.getElementById(`question${currentQuestion}`).classList.add("hidden");
    document.getElementById(`question${currentQuestion + 1}`).classList.remove("hidden");
}

function showResult() {
    document.querySelector(".question.hidden").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");

    const pizzaOptions = ["Margherita Pizza", "Pepperoni Pizza", "BBQ Chicken Pizza", "Veggie Pizza"];
    const randomPizza = pizzaOptions[Math.floor(Math.random() * pizzaOptions.length)];
    document.getElementById("pizza-match").innerText = randomPizza;
}

function restartQuiz() {
    document.getElementById("result").classList.add("hidden");
    document.getElementById("question1").classList.remove("hidden");
}