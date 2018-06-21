function add(a,b){
	if (a + b != Math.round(a + b))
		return +(a + b).toFixed(10);
	else
		return (a + b)
}
function subtract(a,b){
	if (a - b != Math.round(a - b))
		return +(a - b).toFixed(10);
	else
		return (a - b);
}
function multiply(a,b){
	if (a * b != Math.round(a * b))
		return +(a * b).toFixed(10);
	else
		return (a * b)
}
function divide(a,b){
	if (a/b != Math.round(a/b))
		return +(a / b).toFixed(10);
	else
		return (a/b)
}

function operate(func, a, b){
	return func(a,b);
}
function updateDisplay(number){
	const display = document.querySelector('.dispNumbers');
	display.textContent = number;
}
function clearDisplay(){
	const display = document.querySelector('.dispNumbers');
	display.textContent = "0";
	return ""
}

let display = "";
let	total = 0
let operation = "add"

const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const equals = document.querySelector('#equals')
const clear = document.querySelector('#clear')
const del = document.querySelector('#del')


numbers.forEach(btn =>{
	btn.addEventListener('click',(e) =>{
		display += e.target.textContent
		updateDisplay(display)
	})
})

operators.forEach(btn =>{
	btn.addEventListener('click', () =>{
		total = operate(window[operation], total, Number(display))
		operation = btn.id;
		display = "";
		updateDisplay(total)
	})
})

equals.addEventListener('click', () =>{
	total = operate(window[operation], Number(total), Number(display))
	updateDisplay(total);
	display = ""
	total = 0;
	operation = 'add'
})

clear.addEventListener('click', () =>{
	display = clearDisplay()
	total = 0
	operation = 'add'
})

del.addEventListener('click', () =>{
	display = display.slice(0, display.length -1)
	if(display == ""){
		display = clearDisplay();
	}else{
	updateDisplay(display);
	}
})
