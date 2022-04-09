//+Создать класс машина, имеющий марку , число цилиндров, мощность. 
//+Определить конструктор и функцию печати. 
//+Создать производный класс – грузовики, имеющий грузоподъемность кузова. 
//+Определить конструктор, функцию печати. 
//+Определить функции переназначения марки и грузоподъемности.

class Car {
    constructor(mark, numberCilinder, power) {
        this._mark = mark;
        this.numberCilinder = numberCilinder;
        this._power = power;
    }
    print() {
        console.log(`Марка: ${this._mark}; Число цилиндров -${this.numberCilinder}; Мощность -${this._power} лс`);
    }
    setMP(mark_value, power_value) {
        this._mark = mark_value;
        this._power = power_value;
        
    }
    getMP() {
        return console.log(`Марка ${this._mark} Грузоподъемноcть ${this._power}`)
    }
}

class Track extends Car {
    constructor(mark, numberCilinder, power, bodyPower) {
        super(mark, numberCilinder, power);
        this.bodyPower = bodyPower;
    }
    print() {
        console.log(`Марка: ${this._mark}; Число цилиндров${this.numberCilinder}; Мощность ${this._power};Грузоподъемность кузова ${this.bodyPower}тн`);
    }
}

let audi = new Car('Audi', 16, 120);
audi.print();
audi.setMP('AudyA7', 140)
audi.print();

let maz = new Track('MAZ', 18, 360, 20);
maz.print();
maz.setMP('KAMAZ', 460);
maz.print();
