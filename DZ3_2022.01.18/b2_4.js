//Дана строка, содержащая полное имя файла 
//(например, 'c:\WebServers\home\testsite\www\myfile.txt'). 
//Выделите из этой строки имя файла без расширения.
let adress = 'c:\\WebServers\\home\\testsite\\www\\myfile.txt';

let ind_dot = adress.lastIndexOf('\\');
console.log(ind_dot);