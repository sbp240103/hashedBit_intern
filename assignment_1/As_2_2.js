function operation(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                throw new Error("Division by zero is not allowed.");
            }
            return a / b;
        default:
            throw new Error("Invalid operator. Use +, -, *, or /.");
    }
}


const a = parseFloat(process.argv[2]);
const b = parseFloat(process.argv[3]);
const operator = process.argv[4];


console.log(operation(a, b, operator));