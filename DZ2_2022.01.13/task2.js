//Дано два числа. Если хотя бы одно из них больше 30, то вывести yes, иначе no.
result = confirm('Для продолжения нажите ОК');
if (result) {
    console.clear();
} 
let num1 = prompt('Введите первое число');
let num2 = prompt('Введите второе число');
num1 || num2 > 30 ? console.log("yes") : console.log('no');