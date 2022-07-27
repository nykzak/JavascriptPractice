document.addEventListener('DOMContentLoaded', () => {
let startBtn = document.getElementById("start"),  //Находим элемент по айди
	budgetValue = document.getElementsByClassName('budget-value')[0], // находим 1 элемент класса
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],


	expensesItem = document.getElementsByClassName('expenses-item'),
	expensesBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1], //находим 2 элемент тэга баттом
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time; // задаем переменные деньги и время

expensesBtn.disabled = true; //выключаем кнопки
optionalExpensesBtn.disabled = true; // выключаем кнопки
countBtn.disabled = true; //выключаем кнопки

startBtn.addEventListener('click', () => {
    time = prompt('Введите дату в формате YYYY-MM-DD', ''); //вводим в time нашу дату
    money = +prompt("Ваш бюджет на месяц?", ''); //Вводим в money нашу сумму

    while (isNaN(money) || money == '' || money == null) {  // проверка , введены ли были наши данные
        money = +prompt("Ваш бюджет?", "");    
    }
    appData.budget = money; // записываем данные в объект
    appData.timeData = time; // записываем данные в объект
    budgetValue.textContent = money.toFixed(); //выводим округленное значение 
    yearValue.value = new Date(Date.parse(time)).getFullYear();  // выводим год значения input
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1; // выводим месяц
    dayValue.value = new Date(Date.parse(time)).getDate(); //выводим день

    expensesBtn.disabled = false; // выключаем блокировку кнопок
    optionalExpensesBtn.disabled = false; // выключаем блокировку кнопок
    countBtn.disabled = false; // выключаем блокировку кнопок
});

expensesBtn.addEventListener('click', () => {  // кнопка по расходам
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) { //количество элементов в псевдомассиве
        let a = expensesItem[i].value, // запись ввиде свойства(наименование)
            b = expensesItem[++i].value; // запись ввиде свойства(цена)

        if ((typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b; //записываем ключ а и значение b в appData.expenses a : b
           
            sum += +b; // прибавление суммы к b и в b передается число
        } else {
            i = i - 1; //возращение к вопросу обратно 
        }
        expensesValue.textContent = sum; //вывод суммы
    }
});

optionalExpensesBtn.addEventListener('click', () => {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
		let opt = optionalExpensesItem[i].value;// получать те данные которые вводит пользователь из количество элементов
        appData.optionalExpenses[i] = opt; //записываем ключ i и значение opt в appData.optionalExpenses
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
	}
});

countBtn.addEventListener('click', () => {
    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = 'Минимальный уровень достатка';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = 'Средний уровень достатка';
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = 'Высокий уровень достатка';
        } else {
            levelValue.textContent = 'Произошла ошибка';
        }
    } else {
        dayBudgetValue.textContent = 'Произошла ошибка';
    }
});

incomeItem.addEventListener('input', () => {
    let items = incomeItem.value;
    console.log(1);
    if (isNaN(items) || items != '') {
        appData.income = items.split(',');
        incomeValue.textContent = appData.income;
    } 
});

checkSavings.addEventListener("click", () => {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', () => {
    if (appData.savings == true) {
        let sum = +sumValue.value;
        let percent = +percentValue.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', () => {
    if (appData.savings == true) {
        let sum = +sumValue.value;
        let percent = +percentValue.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

const appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
    income: [],
	timeData: time,
    savings: false
};
	

});