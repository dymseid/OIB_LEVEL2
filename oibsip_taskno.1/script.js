const display = document.getElementById('display');
let expression = '';
let lastAnswer = '';

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'ENTER') {
            try {
                lastAnswer = eval(expression.replace(/x/g, '*').replace(/÷/g, '/').replace(/√/g, 'Math.sqrt'));
                display.value = lastAnswer;
                expression = lastAnswer.toString();
            } catch {
                display.value = 'Error';
                expression = '';
            }
        } else if (value === 'clear') {
            expression = '';
            display.value = '';
        } else if (value === 'del') {
            expression = expression.slice(0, -1);
            display.value = expression;
        } else if (value === 'ans') {
            expression += lastAnswer;
            display.value = expression;
        } else if (value === '±') {
            if (expression) {
                expression = expression[0] === '-' ? expression.slice(1) : '-' + expression;
                display.value = expression;
            }
        } else {
            expression += value === 'x' ? '*' : value === '÷' ? '/' : value;
            display.value = expression;
        }
    });
});
