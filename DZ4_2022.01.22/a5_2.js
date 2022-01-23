let str = 'Lorem Ipsum is simply du5mmy text of the printing and typesetting industry. Lorem Ips1um has been the industry\'s standard du2mmy text ever since the 1s, when an unknown printer took a galley of type and scram4bled it to make a type spe6cimen book. It has survived not only five cen8turies, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 9s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum';
/*
-Посчитайте количество пробелов в строке
-Посчитайте количество слов длина которых больше 5
-Найдите сумму всех чисел из текста
-Сделайте все слова строчными (с маленькой буквы)
-Удалите в словах среднюю букву (если она есть)*/
sum_gap = 0;
let arr_str = str.split('');
let mass = [];
let number_count = 0;
arr_str.map((item) => {
    if (item === ' '){
        sum_gap +=1;
        mass.push(item);
    }
    if (isFinite(item)){
        number_count +=1;
    }
})
console.log(`Количество пробелов - ${sum_gap}`);
console.log(mass.length);
console.log(`Сумма цифр - ${number_count}`);
count = 0;
word_count = 0;
arr_str = str.split(' ');
arr_str.forEach ((item) =>{
    count +=1;
    if (item.length > 5){        
        word_count +=1;
    }
})
console.log(`Количество слов длиной более 5ти символов - ${word_count}`);
console.log(`Количество слов - ${count}`);

arr_upper = [];
arr_str.forEach((item) => {
    arr_upper.push(item.toLowerCase());
    
})
//console.log(arr_upper.join(' '));

arr_without_medium = [];
arr_str = str.split(' ');
arr_str.forEach ((item) =>{    
    if (item.length%2 != 0){
        console.log(item);        
        arr_without_medium.push((item.slice(0, item.length/2) + (item.slice(item.length/2 + 1))));
        console.log (item.slice((item.slice(0, item.length/2) + (item.slice(item.length/2 + 1)))));
    } else{
        arr_without_medium.push(item);
    }
})
console.log(arr_without_medium.join(' '));

