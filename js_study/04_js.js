// 배열
const arr1 = []; // 빈 배열
const arr2 = new Array();

arr1.push(10);
arr1.push(20);
arr1.push(30);
console.log(arr1);

arr2.push(10);
arr2.push(20);
arr2.push(30);
console.log(arr2);

console.log(arr1 === arr2);

const json1 = JSON.stringify(arr1);
const json2 = JSON.stringify(arr2);
console.log(json1 === json2);
const arr3 = JSON.parse(json1);
console.log(arr3);

const names = ['철수', '영희', '민수', '길동'];
names.push('희지');

console.log(names);

// 요소제거 , pop -> 배열의 요소 중 마지막 요소 제거, 이후 제거된 요소 반환

console.log(names.pop());

// 요소 수정|삽입|제거 -> splice(삽입될 인덱스, 제거할 개수, 추가할 요소)
names.splice(1, 0, '철민');
console.log(names);

names[0] = '문일';
console.log(names);

// 요소 찾기
const findFx = (str) => str === '길동';
const foundName = names.find(findFx);
console.log(foundName);

console.log(names.find((name) => name === '길동'));

const fruits = [
    { fruit: '사과', color: 'red' },
    { fruit: '바나나', color: 'yellow' },
    { fruit: '포도', color: 'pueple' },
    { fruit: '오렌지', color: 'orange' },
];

console.log(
    fruits.find((fruit) => fruit.fruit === '사과' && fruit.color === 'red')
);
