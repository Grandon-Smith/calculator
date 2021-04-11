const numbers = document.querySelectorAll('[data-num]');
const operands = document.querySelectorAll('[data-operand]');
const equals = document.querySelectorAll('[data-eq]');
const del = document.querySelectorAll('[data-del]');
const allClear = document.querySelectorAll('[data-ac]');
const display = document.querySelector('[data-display]');
const squared = document.querySelectorAll('[data-squared]')

clear = () => {
    display.innerHTML = '0';
}

clickNum = (data) => {
    display.innerHTML === '0'
        ? display.innerHTML = data
        : display.innerHTML += data;
}

clickOperand = (op) => {
    display.innerHTML += op;
}

deleteBtn = () => {
    display.innerHTML = display.innerHTML.slice(0, -1);
}

squareVal = () => {
    let opsArr = ["+", "/", "-", "*"];
    let result = opsArr.some(op => display.innerHTML.includes(op));
    result 
        ? alert("You can't mix operators and square values in the same calculation.") 
        : display.innerHTML = display.innerHTML * display.innerHTML;
}

evaluate = (string) => {
    let total = eval(string);
    display.innerHTML = total;
}

// Below assigns te on click functions to the buttons based on their data attribute.

allClear.forEach(btn => {
    btn.addEventListener('click', () => {
        clear();
    });
});

numbers.forEach(btn => {
    btn.addEventListener('click', (event) => {
        clickNum(event.target.innerHTML)
    });
});

operands.forEach(btn => {
    btn.addEventListener('click', (event) => {
        clickOperand(event.target.innerHTML)
    });
});

del.forEach(btn => {
    btn.addEventListener('click', () => {
        deleteBtn()
    });
});

equals.forEach(btn => {
    btn.addEventListener('click', () => {
        evaluate(display.innerHTML)
    });
});

squared.forEach(btn => {
    btn.addEventListener('click', () => {
        squareVal(display.innerHTML)
    });
});