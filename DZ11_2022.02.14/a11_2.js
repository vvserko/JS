
const str = 'Объектно-ориентированное                      программирование (ООП) —   методология программирования, основанная на   представлении программы в виде совокупности    объектов, каждый из которых является   экземпляром определённого класса, а классы    образуют иерархию наследования';
console.log(str);
let str1 = str.split('');
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

const vovuls = ['a', 'e', 'i', 'o', 'u', 'y']; 
let count = 0;
let words_with_vovuls =[];
words_with_vovuls = words.map(word => {
    vovuls.forEach(el => {
        if(word.split('').includes(el)){
            return word.join('')
        }        
    })
})
console.log(words_with_vovuls);

