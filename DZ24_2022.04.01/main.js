const spinner = document.getElementById('loading');
spinner.style.display = 'block';
const tbody = document.body.querySelector('tbody');
document.getElementById('alert').style.display = 'none';
const ul = document.body.querySelector('.pagination');
const table = document.querySelector('table');

//  ФУНКЦИЯ ДЛЯ СОЗДАНИЯ ПАГИНАТОРА //
function addPage(pageNumbers) {
    //КАВЫЧКИ <<//
    let li = document.createElement('li');
    li.className = 'page-item';
    let a = document.createElement('a');
    a.href = '#';
    a.className = 'page-link';
    a.textContent = '<<';
    ul.append(li);
    li.append(a);

    //......НОМЕРА СТРАНИЦ.....//
    for (let i = 1; i <= pageNumbers; i++) {
        li = document.createElement('li');
        li.className = 'page-item';
        a = document.createElement('a');
        a.href = '#';
        a.className = 'page-link';
        a.textContent = i;
        ul.append(li);
        li.append(a);
        if (i === pageNumbers) {
            // КАВЫЧКИ >>//
            li = document.createElement('li');
            li.className = 'page-item';
            a = document.createElement('a');
            a.href = '#';
            a.className = 'page-link';
            a.textContent = '>>';
            ul.append(li);
            li.append(a);
        }
    }
}

//ФУНКЦИЯ ОТРИСОВКИ ЧАСТИ ТАБЛИЦЫ НА СТРАНИЦЕ //
function drowTable(arr, valueA, rowsNumbers) {
    
    const tableOnCurrentPageArray = [];
    for (let j = (valueA - 1) * rowsNumbers; j < (valueA - 1) * rowsNumbers + rowsNumbers; j++) {
        tableOnCurrentPageArray.push(arr[j]);
    }
    counter = 1;
    for (let item of tableOnCurrentPageArray) {
        const tr = document.createElement('tr');
        tbody.append(tr);
        const th = document.createElement('th');
        th.textContent = (valueA - 1) * rowsNumbers + counter;
        tr.append(th);
        // let keys = Object.keys(item);
        // const arrProperties = ["id", "name", "country", "logo", "slogan", "head_quaters", "website", "established"];
        /*
                keys.forEach(key => {
                    if (arrProperties.includes(key)) {
                        const td = document.createElement('td');
                        td.textContent = item[key];
                        tr.append(td);
                    }
                });*/

        for (let element in item) {
            const td = document.createElement('td');
            td.textContent = item[element];
            tr.append(td);
        }
        counter++;
    }
};

fetch('https://api.instantwebtools.net/v1/airlines')
    .then(res => {
        console.log(res.status)
        return res.json();
    })
    .then(json => {

        let rowsInTable = json.length; //ОПРЕДЕЛЯЕМ КОЛИЧЕСТВО СТРОК == ДЛИНА МАССИВА == КОЛИЧЕСТВО ОБЪЕКТОВ В НЕМ
        console.log(`rowsInTable = ${rowsInTable}`);

        //ЗАДАЕМ КОЛИЧЕСТВО СТРОК НА СТРАНИЧКЕ ТАБЛИЦЫ//
        let rowsNumbers = prompt(`Всего ${rowsInTable} строк. Сколько строк выводить на одной странице?`, 1000);
        let pageNumbers = Math.ceil(rowsInTable / rowsNumbers);
        console.log(`pageNumbers= ${pageNumbers}`);
        console.log(typeof (pageNumbers));

        const input = document.createElement('input');
        input.type = 'text';
        const p = document.createElement('p');
        document.body.prepend(p);
        p.textContent = 'Введите номeр строки';        
        document.body.prepend(input);
        addPage(pageNumbers); //СОЗДАЕМ ПАГИНАТОР //       

        // ОТРИСОВЫВАЕМ 1-Ю СТРАНИЦУ //
        let valueA = 1;
        drowTable(json, valueA, rowsNumbers);

       


        // КАКУЮ СТРАНИЦУ НАЖАЛ ПОЛЬЗОВАТЕЛЬ  - ЕСЛИ НАЖАЛ //
        const itemsA = document.querySelectorAll('a');
        document.body.addEventListener('click', event => {
            if (event.target.nodeName === 'A') {
                tbody.innerHTML = " "; //ОЧИЩАЕМ ТАБЛИЦУ //
                valueA = Number.parseInt(event.target.textContent); // ОПРЕДЕЛЯЕМ НОМЕР СТРАНИЦЫ КОТРУЮ НАЖАЛ ПОЛЬЗОВАТЕЛЬ //
                console.log(valueA);
                console.log(typeof (valueA));
                
                drowTable(json, valueA, rowsNumbers); //ЗАПУСКАЕМ ОТРИСОВКУ НОВОЙ СТРАНИЦЫ
            }
        })
    })
    .catch(error => {
        document.getElementById('alert').style.display = 'block';
    })
    .finally(() => {
        spinner.style.display = 'none';
    })
