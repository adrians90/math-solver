

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
    if (equation.match(MULTIPLY_DIVIDE_REGEX)) {
      const result = handleMath(equation.match(MULTIPLY_DIVIDE_REGEX).groups)
      const newEquation = equation.replace(MULTIPLY_DIVIDE_REGEX, result)
      console.log(newEquation)
    }
    return equation
}

function handleMath({ operand1, operand2, operation }) {
    console.log(operand1, operand2, operation)
    const number1 = parseFloat(operand1)
    const number2 = parseFloat(operand2)

    switch (operation) {
        case "*":
            return number1 * number2
            case "/":
                return number1 / number2
    }

}

