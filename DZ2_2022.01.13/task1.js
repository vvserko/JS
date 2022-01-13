// -Выведите на экран числа 1, 2, 3, 4, ..., 20
// -Выведите на экран числа -1, -2, -3, -4, ..., -20
// -Вывести на экран числа 100, 96, 92, ... 
//  до последнего положительного включительно.


let i = 1;
while (i <= 20){
    console.log(i);
    i++;
}
let result = confirm('Для продолжения нажите ОК');
if (result) {
    console.clear();
} 


i = -1;
while (i >= -20){
    console.log(i);
    i--;
}
result = confirm('Для продолжения нажите ОК');
if (result) {
    console.clear();
} 

i = 100;
while (i >= 1){
    console.log(i);
    i -= 4;
}
