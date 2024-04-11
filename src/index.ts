// import { start } from "repl";
// import { concatenation } from "./concatenation";
// import { calc, d, s, letAnimalTalk, combine, checkUser, firstElement, merged, arrayLogger, keys } from './test';
// import { log } from "console";

import { log } from "console";

// const button = document.querySelector('button')!;
// const input = document.querySelector('input')!;

// if (button && input) {
//     button.addEventListener("click", () => {
//         concatenation(input.value, 'hello!');
//     });
// }

// // calc
// calc(1, 5, (num1, num2) => num1 + num2);
// calc(20, 5, (num1, num2) => num1 - num2);

// // d
// console.log(d(1, 4));
// console.log(d('hello', 'world'));
// console.log(d('hello', 5));

// // s
// s({name: "Victor", privileges: ["a", "b", "c"]});
// s({name: 'Fiona', startDate: new Date()});

// // letAnimalTalk
// const corgi = {
//     bark: () => {
//         console.log('Bark');  
//     }
// }

// const orientalCat = {
//     meow: () => {
//         console.log('Meow');
//     }
// }

// letAnimalTalk(corgi);
// letAnimalTalk(orientalCat);

// // function overloads
// console.log(combine('hello', 'world'));
// console.log(typeof combine('hello', 'world'));
// console.log(combine('dog', 1));
// console.log(typeof combine('dog', 1));
// console.log(combine(1, 2));
// console.log(typeof combine(1, 2));
// console.log(combine(3, 'cat'));
// console.log(typeof combine(3, 'cat'));

// // function overloads (example 2)
// console.log(checkUser('Felix', 'user'));
// console.log(checkUser('Victoria', 'admin', ['f', 'd', 'h']));

// //
// let numbers = [1, 2, 3, 4, 5];
// let firstNum = firstElement(numbers);

// let strings = ['a', 'b', 'c', 'd'];
// let firstStr = firstElement(strings);

// console.log(firstNum);
// console.log(firstStr);

// //
// console.log(merged);

// // extends
// arrayLogger(['Hello']);
// arrayLogger(['Black', 'Oran', 'Fi']);

// //keyof
// console.log(keys({name: "Victor", age: 32, location: 'UK, England'}, "location"));
// console.log(keys({name: "Felix", age: 16, location: 'UK, Scotland'}, "name"));
// console.log(keys({name: "Leopold", age: 16, location: 'UK, England'}, "name"));
// console.log(keys({name: "Sebastian", age: 16, location: 'UK, Scotland, Feldcraft'}, "location"));

// // задача #1 (generics)
// function reversed<T>(arr: T[]): T[] {
//     return arr.reverse();
    
// }

// let number = reversed<number>([1, 2, 3, 4, 5]);
// console.log(number);

// let string = reversed<string>(["one", "two", "three", "four", "five"]);
// console.log(string);

// // задача #2 (extends)
// type BookType = {
//     name: string,
//     pages: number,
// }

// function aboutBook<T extends BookType>(book: T): string {
//     return `Name the book: "${book.name}", pages: ${book.pages}`;
// }

// console.log(aboutBook({name: "Glory", pages: 426, user: 'f'}));
// console.log(aboutBook({name: "Scarlett", pages: 265}));
// console.log(aboutBook({name: "Warcraft. Chronics. Chapter 1", pages: 105}));

// // задача #3 (keyof)
// type StudentType = {
//     name: string,
//     age: number,
// }

// type KeyType = keyof StudentType;

// const student = {
//     name: "Angel",
//     age: 16,
// }

// function getProperty<T extends StudentType, K extends KeyType>(obj: T, key: K) {
//     return obj[key];
// }

// let studentName = getProperty(student, 'name'); // Angel
// console.log(studentName);

// let studentAddress = getProperty(student, 'address'); // undefined
// console.log(studentAddress);

// // задача #3 (Partials<>)
// type Todo = {
//     task: string,
//     description: string,
//     complete: boolean,
// }

// type WithoutDescr = Omit<Todo, 'description'| 'complete'>;
// const schoolTodo: WithoutDescr = {
//     task: 'do homework',
// }

// console.log(schoolTodo);


// const todo1: Todo = {
//     task: 'learn TypeScript',
//     description: 'I will achieve my aim',
//     complete: false,
// }

// const fieldToChange = {
//     description: 'I achieved my aim!',
//     complete: true,
// }

// function updateTodo(obj: Todo, field: Partial<Todo>): Todo {
//     return {...obj, ...field};
// }
// console.log(updateTodo(todo1, fieldToChange));

// // ООП
// interface IPerson {
//     name: string;
//     age: number;
//     greet(phrase: string): void;
// }

// interface IPilot {
//     flyMessage(): void;
// }

// class Pilot implements IPerson, IPilot {
//     constructor(public name: string, public age: number) {
//         if (this.age < 25) {
//             throw new Error('Pilot too young!')
//         }
//     }

//     greet(phrase: string): void {
//         console.log(`${phrase}, I'm ${this.name}!`);
//     }

//     flyMessage(): void {
//         console.log("I'm flying now!");
//     }
// }

// const pilot = new Pilot("Anton", 32);
// console.log(pilot);
// pilot.greet('Hello everyone')
// pilot.flyMessage();

// //classes
// class House {
//     street: string;
//     constructor(n: string) {
//         this.street = n;
//     }

//     showArddess() {
//         console.log(`Adress: ${this.street}.`);
//     }
// }

// const house = new House('Gongadze Avenue 30');
// console.log(house);
// house.showArddess();

// //
// class Employee {
//     constructor(public name: string, private department: string, protected salary: number) {}
  
//     getEmployeeDetails() {
//       return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
//     }
//   }
  
//   class Manager extends Employee {
//     constructor(name: string, department: string, salary: number) {
//       super(name, department, salary);
//       this.salary = salary + 10000;
//     }
//   }
  
//   const mark = new Manager('Mark', 'advertising department', 10000);
//   console.log(mark);
//   console.log(  mark.getEmployeeDetails());
  
// //

// interface ICharacter {
//     name: string;
//     level: number;
//     introduce(phrase: string): void;
//     levelUp(): void;
//   }
  
//   interface ISpellCaster {
//     castSpell(): void;
//   }
  
//   // реалізація класу Wizard
//   class Wizard implements ICharacter, ISpellCaster {
//     constructor(public name: string, public level: number) {
//       if (this.level < 1) {
//         throw new Error('Level too low');
//       }
//     }
  
//     introduce(phrase: string): void {
//       console.log(phrase + ', ' + this.name);
//     }
  
//     castSpell(): void {
//       console.log('Casting a spell, behold my power!');
//     }
  
//     levelUp(): void {
//       this.level++;
//       console.log(`Level up! New level is ${this.level}`);
//     }
//   }
  
//   // тестування класу
//   const wizard = new Wizard('Merlin', 15);
  
//   wizard.introduce('I am the mighty wizard');
//   wizard.castSpell();
//   wizard.levelUp();  // Level up! New level is 16

  // 4
  class Key {
    private signature: number

    constructor() {
        this.signature = Math.random();
    }

    public getSignature() {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key) {}

    public getKey(): Key {
        return this.key;
    }
}

abstract class House {
    public door: boolean;
    public tenants: Person[] = [];
    constructor(public key: Key) {}

    public comeIn(person: Person) {
        if(this.door) {
            this.tenants.push(person)
        }
    }

    public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
    public openDoor(key: Key): void {
        if (this.key.getSignature() === key.getSignature()) {
            this.door = true; 
        } else {
            this.door = false;
        }
    }
}

const key = new Key();


const house = new MyHouse(key);
const person = new Person(key);


house.openDoor(person.getKey());

house.comeIn(person);

console.log(house);
