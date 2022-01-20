
//Дан email в строке. Определить, является ли он корректным
//наличие символа '@' и точки
//наличие не менее двух символов после последней точки
let email = 'admin@email.com';
email.includes('@') &&  email.includes('.') ? console.log('содержит символ @'): console.log('не содержит символ @'); 
let ind_dot = email.lastIndexOf('.');
console.log(ind_dot);
let last_str = email.slice(ind_dot + 1);
console.log('Последние символы', last_str);
last_str.length > 2 ? console.log('Символов больше двух'): console.log('Символов меньше двух');
