result = confirm('Для продолжения нажите ОК');
if (result) {
    console.clear();
} 
let monthes = +prompt('Введите количество месяцев');
let years = +prompt('Введите количество лет');
let dayInMonth = 30;
let allDays = monthes * dayInMonth + years * 12 * dayInMonth;
console.log(allDays);
console.log('Количество дней - ${allDays} ');