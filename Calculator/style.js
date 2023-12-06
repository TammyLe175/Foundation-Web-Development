// function calculate() {
//     let x = document.getElementById()
// }
const displayScreen = document.querySelector('.screen')
const buttons = document.querySelectorAll('button')

let lstCalc =[]
let calculation 
function calculate(button) {
    const answer = button.textContent
    if (answer === "clear") {
        lstCalc =[]
        displayScreen.textContent = "."
    }
    else if (answer === "=") {
        displayScreen.textContent = eval(lstCalc)

    }
    lstCalc.push(answer)
    calculation = lstCalc.join('')
    displayScreen.textContent = calculation


}
calculate(button)
