// 비구조할당
// 배열이나 객체의 속성을 대체하여 개별 변수에 할당하는 문법

const animal = {
    name: '고양이',
    age: 4,
    color: 'brown',
};

// const { name: animalName, age: animalAge, color: animalColor } = animal;

// console.log(animalName);
// console.log(animalAge);
// console.log(animalColor);

// const { name, age, color } = animal;
// console.log(name, age, color);

function printInfo1(animalObj) {
    console.log(animalObj.name);
    console.log(animalObj.age);
    console.log(animalObj.color);
}

printInfo1(animal);

function printInfo2({ name: animalName, age: animalAge, color: animalColor }) {
    console.log(animalName);
    console.log(animalAge);
    console.log(animalColor);
}

printInfo2(animal);

function printInfo3({ name, age, color }) {
    console.log(name);
    console.log(age);
    console.log(color);
}

printInfo3(animal);

const a1 = {
    name: 'apple',
    price: 4,
};

const { name: n1, price: p1 } = a1;
const { name: n2, price: p2 } = a1;
// 변수명이 같으면 비구조 할당 x, 각각 다르게 해줘야 됨

const numbers = [1, 2, 3, 4, 5];
const [num1, num2, num3, num4, num5] = numbers;
console.log(num1);
console.log(num2);
console.log(num3);
