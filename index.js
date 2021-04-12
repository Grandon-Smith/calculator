const numbers = document.querySelectorAll('[data-num]');
const operands = document.querySelectorAll('[data-operand]');
const equals = document.querySelectorAll('[data-eq]');
const del = document.querySelectorAll('[data-del]');
const allClear = document.querySelectorAll('[data-ac]');
const display = document.querySelector('[data-display]');
const squared = document.querySelectorAll('[data-squared]');

// all button / math functionality
clear = () => {
    display.innerHTML = '0';
}

clickNum = (data) => {
    if (data == "." && display.innerHTML.includes(".")) {
        return;
    } else {
        display.innerHTML === '0'
        ? display.innerHTML = data
        : display.innerHTML += data;
    }
};

clickOperand = (op) => {
    // Does not allow back-to-back operators unless separated by parenthesis
    let opsArr = ["+", "/", "-", "*"];
    let end = display.innerHTML.slice(-1);
    let result = opsArr.some(op => end.includes(op));
    result
        ? alert('check equation syntax or include parenthesis for negative values')
        : display.innerHTML += op;
};

deleteBtn = () => {
    display.innerHTML === '0' ? ""
        : display.innerHTML.length === 1 ? display.innerHTML = '0'
        : display.innerHTML = display.innerHTML.slice(0, -1);
};

squareVal = () => {
    //stops eval mixing operator and squaring
    let opsArr = ["+", "/", "-", "*"];
    let result = opsArr.some(op => display.innerHTML.includes(op));
    result 
        ? alert("You can't mix operators and square values in the same calculation.") 
        : display.innerHTML = display.innerHTML * display.innerHTML;
};

evaluate = (string) => {
    // checks for math syntax of ending in operator
    let opsArr = ["+", "/", "-", "*", "."];
    let end = string.slice(-1);
    let result = opsArr.some(op => end.includes(op));
    result
        ? alert('error with calculating, please check input.')
        : display.innerHTML = eval(display.innerHTML);
};

//------ Below assigns functions to buttons based on their data attribute.

allClear.forEach(btn => {
    btn.addEventListener('click', () => {
        clear()
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