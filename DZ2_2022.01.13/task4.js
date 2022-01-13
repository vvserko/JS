//Для данного n найти сумму 1+2+3+...+n. Например, для n=10 ответ равен 55.
result = confirm('Для продолжения нажите ОК');
if (result) {
    console.clear();
} 
let n = prompt('Введите число n');
let sum = 0;
for (let i = 1; i <= n; i++){
    sum += i;
}
console.log(sum);