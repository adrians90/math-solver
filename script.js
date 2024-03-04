

// function parse(equation) {
//     const step = getNextStep()
//     const result = solve(step)
//     replaceNextStep(equation, step, result)

// }

const inputElement = document.getElementById("equation")
const outputElement = document.getElementById("results")
const form = document.getElementById("equation-form")

const MULTIPLY_DIVIDE_REGEX = /(?<operand1>\d+)\s*(?<operation>[\/\*])\s*(?<operand2>\d+)/

form.addEventListener("submit", e => {
    e.preventDefault()

    const result = parse(inputElement.value)
    outputElement.textContent = result
})

function parse(equation) {
    return equation
}

function handleMath({ operand1, operand2, operation }) {

}

const equation = "2+3*4234/723"
console.log(equation.match(MULTIPLY_DIVIDE_REGEX))