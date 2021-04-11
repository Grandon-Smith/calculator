const numbers = document.querySelectorAll('[data-num]');
const operands = document.querySelectorAll('[data-operand]');
const equals = document.querySelectorAll('[data-eq]');
const del = document.querySelectorAll('[data-del]');
const allClear = document.querySelectorAll('[data-ac]');
const display = document.querySelector('[data-display]');

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

evaluate = (string) => {
    let total = eval(string);
    display.innerHTML = total;
}

deleteBtn = () => {
    display.innerHTML = display.innerHTML.slice(0, -1);
}


allClear.forEach(btn => {
    btn.addEventListener('click', () => {
        clear()
    })
})

numbers.forEach(btn => {
    btn.addEventListener('click', (event) => {
        clickNum(event.target.innerHTML)
    })
})

operands.forEach(btn => {
    btn.addEventListener('click', (event) => {
        clickOperand(event.target.innerHTML)
    })
})

del.forEach(btn => {
    btn.addEventListener('click', (event) => {
        deleteBtn()
    })
})

equals.forEach(btn => {
    btn.addEventListener('click', () => {
        evaluate(display.innerHTML)
    })
})



