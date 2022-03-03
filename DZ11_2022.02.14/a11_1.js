/*Задача 1
Получите текущую дату и время

Выведите текущий день.
Выведите текущий месяц.
Выведите текущий год.
Выведите номер текущего дня недели*/

let date = new Date();10
console.log(date);
console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getFullYear());
console.log(date.toDateString());
console.log(date.getDay());

//Узнайте, каким днем недели былл 10-го марта 2005 года
date = new Date(2005, 2, 10);
let days =["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
console.log('10-го марта 2005 года - был ', days[date.getDay()] );

//Выведите количество дней с 1-го января 1970 года до настоящего момента времени. Результат округлите
date = new Date();
date1970 = new Date(1970,0,1);
let delta = date - date1970;
let delta_ = date.getTime();
console.log((delta),' ',Math.floor(delta/(24*60*60*1000)));
console.log((delta_),' ',Math.floor(delta_/(24*60*60*1000)));

//Выведите количество часов, прошедшее между 1 марта 1988 года и 8 марта 2015 года
date = new Date(2015, 2, 8);
date1988 = new Date(1988,2, 1);
delta = date - date1988;
console.log(delta,'ms','=',Math.floor(delta/(60*60*1000)), 'hours');

//Выведите на экран количество секунд, которое осталось до конца дня.
date = new Date();
date_next = new Date(2022,1,16)
console.log('Количество секунд ',Math.round((date_next - date)/1000));

//Преобразуйте массив таким образом, 
//что бы в нем все элементы были уникальными (встречаются лишь один раз)

const arr = [1, 2, 3, 1, 2, 5, 6, 3];
let arr_set = [];
arr.forEach(element => {
    if (!arr_set.includes(element)){
        arr_set.push(element);
    }
    
});
console.log(arr_set);

//Удалить из второго массива только те элементы, которые встречаеются в первом массиве

const arr1 = [1, 3, 5];
const arr2 = [1, 2, 3, 4, 5, 6];
const res = arr2.filter(el => {
    if(!arr1.includes(el)){
        return el;
    }
});
console.log(res)

/*Строка состоит из слов, разделенных одним или несколькими пробелами и знаками препинания.
const str = 'Объектно-ориентированное   программирование (ООП) —   
методология программирования, основанная на   представлении программы в виде 
совокупности    объектов, каждый из которых является   экземпляром определённого класса, 
а классы    образуют иерархию наследования'

Во всех подзадачах маленькие и больше буквы считать одинаковыми

-Найдите слово наибольшей длины.
-Определить какая буква в строке встречается чаще всего
Вывести в алфавитном порядке все слова, содержащие наибольшее количество гласных букв
-Найти все слова, в которые буква «а» входит не менее двух раз
Вывести текст, составленный из первых букв всех слов содержащих букву «и».
Вывести слова, в которых нет повторяющихся букв
*//*
const str = 'Объектно-ориентированное                      программирование (ООП) —   методология программирования, основанная на   представлении программы в виде совокупности    объектов, каждый из которых является   экземпляром определённого класса, а классы    образуют иерархию наследования';
let str1 = str.split('');
console.log(str1);
for (i = 0; i < str1.length; i++){
    if(str1[i] === ' ' && str1[i+1] === ' '){
        str1[i] = '';
        i = 0;
    }
}
let str2 = str1.join('');
console.log(str2);
let words = str2.split(' ');
console.log(words);
let word_max_lenth = 0;
let index = 0;

let counter = 0;
words.forEach((word, i) => {
        if (word.length > word_max_lenth){
        word_max_lenth = word.length;
        index = i;
    }
})
console.log('Слово максимальной длины - ', words[index]);
words = words.sort((a,b) => {
    if (a.length <b.length) return 1;
    if (a.length > b.length) return -1;
    return 0;
})
console.log(words);
console.log(words[0]);*/
