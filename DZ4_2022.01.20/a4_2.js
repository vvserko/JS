//Дана случайная строка, преобразуйте строку
//удалите лишние пробелы’
//каждое слово с большой буквы
//замените все буквы 'e' на 'и'
//удалите последнюю букву каждого слова
//выведите все слова, которые начинаются на 'р'//
let s ="Срееднее арифметическое —      разновидность среднего значения. Определяется как число, равное     сумме всех чисел множества, делённой на     их количество. Является    одной из наиболее распространённых мер центральной тенденции";

while (s.includes('  ')) { 
    s = s.split('  ');
    s.join(' ')
};
console.log(s.join(''));