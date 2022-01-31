/*
Задача 2
+Создайте структуру с именем train, содержащую поля: название пункта назначения, номер поезда, время отправления.
+Ввести данные в массив из пяти элементов типа train
+Упорядочить элементы по номерам поездов.
+Добавить возможность вывода информации о поезде, номер которого введен пользователем.
+Добавить возможность сортировки массив по пункту назначения, 
(* причем поезда с одинаковыми пунктами назначения должны быть упорядочены по времени отправления)*/
function Train(station, trainNumber, time){
    this.station = station;
    this.trainNumber = trainNumber;
    this.time = time;   
    this.printUserTrain = function() {
        if (trainNumber == userTrain){
            console.log( `Станция-  ${this.station} Номер поезда- ${this.trainNumber} Время отправления- ${this.time}`);
        }        
      };
} 

let train_1 =new Train('Brest', 1026, 1600);
let train_2 =new Train('Minsk', 78, 1200);
let train_3 =new Train('Grodno', 56, 0900);
let train_4 =new Train('Kyiv', 966, 0200);
let train_5 =new Train('Grodno', 1025, 1800);
let trains = [train_1, train_2, train_3, train_4, train_5];

const sortedTrainsByNumber = trains.sort( (s1, s2) => s1.trainNumber - s2.trainNumber);
console.log('Сортировка по номерам поездов ');
console.log(sortedTrainsByNumber);

const sortedTrainsByStations = trains.sort(function(a, b){
    let stationA=a.station.toLowerCase(), stationB=b.station.toLowerCase()
    if (stationA < stationB) //сортируем строки по возрастанию
      return -1
    if (stationA > stationB)
      return 1
    if ((stationA == stationB)){
        timeA=a.time, timeB=b.time
            if (timeA < timeB) //сортируем строки по возрастанию
                return -1
            if (timeA > timeB)
                return 1  
        } 
    });


console.log('Сортировка по станциям');
console.log(sortedTrainsByStations);
let userTrain = 56;
trains.forEach( item => {
    if (item.trainNumber == userTrain){
        item.printUserTrain(); 
    }   
});








