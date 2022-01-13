//Пользователь вводит три числа. 
//           Если все числа больше 10 и первые два числа делятся на 3, 
//            то вывести yes, иначе no
result = confirm('Для продолжения нажите ОК');
if (result) {
    console.clear();
} 
num1 = prompt('Введите первое число');
num2 = prompt('Введите второе число');
let num3 = prompt('Введите третье число');
(num1 && num2 && num3) > 10 && (num1 % 3 == 0 && num2 % 3 == 0 )? console.log("yes") : console.log('no');