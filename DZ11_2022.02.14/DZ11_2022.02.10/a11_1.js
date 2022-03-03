/*Строка состоит из слов, разделенных одним или несколькими пробелами и знаками препинания.

const str = 'Объектно-ориентированное   программирование (ООП) —   методология программирования, основанная на   представлении программы в виде совокупности    объектов, каждый из которых является   экземпляром определённого класса, а классы    образуют иерархию наследования'
Во всех подзадачах маленькие и больше буквы считать одинаковыми

-Найдите слово наибольшей длины.
-Определить какая буква в строке встречается чаще всего
-Вывести в алфавитном порядке все слова, содержащие наибольшее количество гласных букв
-Найти все слова, в которые буква «а» входит не менее двух раз
Вывести текст, составленный из первых букв всех слов содержащих букву «и».
Вывести слова, в которых нет повторяющихся букв*/

const str = 'Объектно-ориентированное   программирование (ООП) —   методология программирования, основанная на   представлении программы в виде совокупности    объектов, каждый из которых является   экземпляром определённого класса, а классы    образуют иерархию наследования';
let letters  = str.split('');
for (i = 0; i < letters.length; i++){
    if(letters[i] === ' ' && letters[i+1] === ' '){
        letters[i] = '';
    }
}
let words = letters.join('').split(' ');
console.log(words);


let vovuls = ['а', 'е', 'и', 'о', 'у', 'ы'];

    
let words_2 = words.map(word => {
       
    let massiv_letters = word.split('');        
    let massiv_letters_filter = massiv_letters.filter(number => {
            if (number == 'а')
            return number ;
        });
    count +=massiv_letters_filter.length;      
   
    if(count >2) {
        return word;
    }    

});
console.log(words_2);
/*
let words_3 = words_2.filter(word => {
    return word!=undefined;
});
console.log(words_3);


let obj = {
    
};

let words_vovul_max = words.map(word => {
    let count = 0;
    vovuls.forEach(elem => {
        let massiv_letters = word.split('');
        
       let massiv_letters_filter = massiv_letters.filter(number => {
            if (number == elem)
            return number ;
          });
        count +=massiv_letters_filter.length;      
    })
    if(count > 0) {
        return word;
    }    

});

let words_vovul_max_sort= words_vovul_max.sort((a, b) => {
    if(a>b) return 1;
    if(a<b) return -1;
    return 0;

})
console.log(words_vovul_max_sort);

*/