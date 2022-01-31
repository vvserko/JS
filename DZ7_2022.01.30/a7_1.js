/*
Задача 1
Описать объект, представляющий треугольник. Предусмотреть методы для создания объектов, вычисления площади и периметра

Задача 2
Создайте структуру с именем train, содержащую поля: название пункта назначения, номер поезда, время отправления.
Ввести данные в массив из пяти элементов типа train
Упорядочить элементы по номерам поездов.
Добавить возможность вывода информации о поезде, номер которого введен пользователем.
Добавить возможность сортировки массив по пункту назначения, 
(* причем поезда с одинаковыми пунктами назначения должны быть упорядочены по времени отправления)*/
function Triangle(a, b, c){
    this.a = a;
    this.b = b;
    this.c = c;
    this.area = function(){
        let pper = (this.a + this.b + this.c)/2;        
        let ar = Math.pow(pper * (pper - this.a) * (pper - this.b) * (pper - this.c), 0.5);   
        console.log(`Площадь треугольника равна - ${ar}`)        
    };
    this.perimetr = function(){
        let per = this.a + this.b + this.c;
        console.log(`Периметр треугольника равен - ${per}`);
    };
} 

let triangle_1 =new Triangle(5, 6, 7);
triangle_1.area();
triangle_1.perimetr();
let triangle_2 =new Triangle(3, 4, 5);
triangle_2.area();
triangle_2.perimetr();



/*
function User(name) {
    this.name = name;
  
    this.sayHi = function() {
      alert( "Меня зовут: " + this.name );
    };
  }
  
  let vasya = new User("Вася");
  
  vasya.sayHi(); // Меня зовут: Вася
*/

