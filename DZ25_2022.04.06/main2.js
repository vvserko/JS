/*
Реализуйте функции конструктор для Student и Aspirant, аспирант отличается от студента наличием некой научной работы.

Student содержит свойства:
firstName
lastName
group
averageMark (содержащую среднюю оценку).

Aspirant имеет дополнительное свойство work

Создать метод getScholarship() для Student, который возвращает сумму стипендии. 
Если средняя оценка студента больше или равна 5, то сумма 100, иначе 80.

Переопределить этот метод в Aspirant. Если средняя оценка аспиранта равна 5, то сумма 200, иначе 180.

Создать несколько объектов типа Student и Aspirant. Создать массив содержащий объекты Student и Aspirant.
Вызвать метод getScholarship() для каждого элемента массива.*/
class Student {
    constructor(firstName, lastName, group, averageMark) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.group = group;
        this.averageMark = averageMark;

    }
    getScholarship() {
        if (this.averageMark > 5) {
            this._stip = 100;
            return console.log(`Студент ${this.lastName} Средняя оценка: ${this.averageMark} Сумма стипендии ${this._stip}`)
        }
        else {
            this._stip = 80;
            return console.log(`Студент ${this.lastName} Средняя оценка: ${this.averageMark} Сумма стипендии ${this._stip}`);
        }
    }

}
class Aspirant extends Student {
    constructor(firstName, lastName, group, averageMark, work) {
        super(firstName, lastName, group, averageMark);
        this.work = work;
    }
    getScholarship() {
        if (this.averageMark > 5) {
            this._stip = 200;
            return console.log(`Аспирант ${this.lastName} Средняя оценка: ${this.averageMark} Сумма стипендии ${this._stip}`)
        }
        else {
            this._stip = 180;
            return console.log(`Аспирант ${this.lastName} Средняя оценка: ${this.averageMark} Сумма стипендии ${this._stip}`);
        }
    }
}


let student1 = new Student('Ivan', 'Ivanov', 252, 3)
let student2 = new Student('Petr2', 'Petrov2', 253, 6)
let student3 = new Student('Petr3', 'Petrov3', 253, 1)
let aspit1 = new Aspirant('VVS', 'HHH', '2A', 8, 'homework');
let aspit2 = new Aspirant('VVS2', 'HHH2', '2A', 2, 'homework');
let aspit3 = new Aspirant('VVS3', 'HHH3', '2A', 1, 'homework');
let students = [student1,  aspit2, student3, aspit1, student2, aspit3];
students.forEach(element => {
    element.getScholarship();
});
