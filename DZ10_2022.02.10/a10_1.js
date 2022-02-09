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

    object.albums.sort((a, b) => 
    {   a = a.title;
        b = b.title;
        if (a > b) return 1;
        if (a < b) return -1;
        else return 0;
    });
    object.albums = object.albums.filter(elem => elem.images.length > 5);

    let count = 0;
    object.images.forEach(element => {
        if(parseInt(element.width)>800  && parseInt(element.height)>800){
            count ++;
        } 
        
    });
    console.log(`count= ${count}`);
    console.log(object); // Выводим результат по необходимости
   object.user = [];
};

// Этот код сработает если мы не получим ответ от сервера
xhr.onerror = function() {
  console.error("Запрос не удался");
};


//+Отсортируйте все альбомы по заголовку
//+Найдите количество картинок ширина и высота которых больше 800px
//Преобразуйте альбом
//Добавьте свойство user куда поместите объект соответствующего автора (id автора == id пользователя)
//Замените в массиве images (внутри альбома) цифры на картинки (объекты image) с соответсвующим id
//+Удалите альбомы в которых меньше 5 картинок