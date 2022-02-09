// 1. Создаём новый XMLHttpRequest-объект
let xhr = new XMLHttpRequest();

// 2. Настраиваем его
xhr.open('GET', 'https://msheiko.github.io/js/dz/F1021/json/1.json'); 

// 3. Отсылаем запрос
xhr.send();

// 4. Этот код сработает после того, как мы получим ответ сервера
xhr.onload = function() {
    console.log('Onload');
    const result = xhr.response; //  Получаем ответ, это JSON строка
    const object = JSON.parse(result); // Преобразуем строку в JS объект
    // Пишем код домашки ТУТ!!!
    console.log(object);  // Выводим результат по необходимости
};

// Этот код сработает если мы не получим ответ от сервера
xhr.onerror = function() {
  console.error("Запрос не удался");
};