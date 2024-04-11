type User = {
    name: string,
    age: number,
}

const obj: User = {
    name: "Victor",
    age: 22,
}

let arr: number[] = [1, 2, 3, 2];

let arrMatrix: number[][] = [[1, 2], [3, 4]];

let collectionObj: User[] = [{name: "Vitor", age: 42}, {name: "Felix", age: 16}];

{name: 'Leo'};

enum Role {
    admin,
    user,
}

const person = {
    role: Role.user,
}

enum Sizes {
    small = 'small',
    large = 'large',
}

const cup = Sizes.large;

const enum HttpStatus {
    OK = 200,
    BadRequest = 400,
}

const status = HttpStatus.OK;

type User1 = {
    id: number,
    name: string,
}

const users = [
    {id: 1, name: 'Felix'},
    {id: 2, name: 'Seb'},
    {id: 3, name: 'Ominis'},
    {id: 4, name: 'Anne'},
]

// return type
function listOfUsers(users: User1[]): string[] {
    return users.map(user => user.name);
}

console.log(listOfUsers(users));

// void type
function listOfUsers1(users: User1[]): void {
    console.log(users.map(user => user.name));
}

listOfUsers1(users);

// Опис колбеку як типу
type CallbackType = (...nums: number[]) => number;

// 
function calc(param1: number, param2: number, callback: CallbackType):void {
    console.log('Result: ', callback(param1, param2));
}

export { calc };


// =================

/* Оголошення функції combine: Функція combine приймає два параметри a і b, обидва з яких мають тип ComplexType. 
У тілі функції перевіряється, чи хоча б один з параметрів є рядком (використовуючи оператор typeof). 
Якщо хоча б один з параметрів є рядком, обидва параметри конвертуються в рядки за допомогою методу toString() 
і повертається результат їх конкатенації. Якщо ж обидва параметри є числами, вони просто сумуються. */

type IntersectionType = string | number;
const d = (a: IntersectionType, b: IntersectionType) => {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }

  return a + b;
}

export { d };

// =================

// in ===

type Admin = {
    name: string,
    privileges: string[],
}

type Employee = {
    name: string,
    startDate: Date,
}

type mxdType = Admin | Employee;

const s = (obj: mxdType):void => {
    console.log(`Hello, ${obj.name}!`);
    if ('privileges' in obj) {
        console.log(`You have some privileges: ${obj.privileges.join(', ')}`);
    }
    if ('startDate' in obj) {
        console.log(`You started to work on ${obj.startDate}`);
    }
}

export { s };

type Dog = {
    bark: () => void;
}

type Cat = {
    meow: () => void;
}

function isDog(animal: Dog | Cat): animal is Dog {
    return 'bark' in animal;
}

function letAnimalTalk(animal: Dog | Cat) {
    if (isDog(animal)) {
        animal.bark();
    } else {
        animal.meow();
    }
}

export { letAnimalTalk };

// function overloads (example 1)
function combine(input1: number, input2: number): number;
function combine(input1: string, input2: number): string;
function combine(input1: number, input2: string): string;
function combine(input1: string, input2: string): string;
function combine(input1: string | number, input2: string | number) {
 if (typeof input1 === 'string' || typeof input2 === 'string') {
        return `${input1.toString()} ${input2.toString()}`;
    } else if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }
}

export { combine };

// function overloads (example 2)
type AdminType = {
    type: string;
    name: string;
    privileges: string[];
}

type UserType = {
    type: string;
    name: string;
    registrationDate: Date;
}

function checkUser(name: string, type: 'user'): UserType;
function checkUser(name: string, type: 'admin', privileges: string[]): AdminType;
function checkUser(name: string, type: 'admin' | 'user', prevOrReg?: string[]): AdminType | UserType {
    if (type === 'admin') {
        return {
            name, 
            type, 
            privileges: prevOrReg as string[],
        }
    }
    
    return {
        name,
        type,
        registrationDate: new Date(),
    }
}

export { checkUser };

//
function firstElement<T>(arr: T[]): T {
    return arr[0];
  }
  
  export {firstElement};

  //
 type Person = {
  name: string;
};

type AdditionFields = {
  age: number;
};

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const merged = merge<Person, AdditionFields>({ name: 'Alisa' }, { age: 28 });

export {merged } 

/////////
// extends
export function arrayLogger<T extends Array<string>>(str: T) {
    str.forEach(i => console.log(i.length))
}
// or 
function arrayLogger1(str: string[]):void {
    str.forEach(i => console.log(i.length))
}
/////////

// keyof
type Person1 = {
    name: string;
    age: number;
    location: string;
  };

type KeysOfPerson1 = keyof Person1;

export function keys(person: Person1, key: KeysOfPerson1) {
    return person[key]
};


