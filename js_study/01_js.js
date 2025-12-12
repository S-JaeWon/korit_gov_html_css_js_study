// 변수 선언 -> let, const
let name = '철수';
console.log(name);

const age = 13;
console.log(age);

// 연산자
let data1 = 10;
let data2 = '10';
let result = data1 == data2;
console.log(result);
let result1 = data1 === data2;
console.log(result1);

console.log(typeof data1, typeof data2);

console.log('1' + '2');
console.log(1, 2);
// not 연산자
console.log(!1);
console.log(!0);
console.log(!'a');
console.log(!'');
console.log(!null);
console.log(!!null); //! !! -> 값을 명시적으로 boolean 타입으로 변환 하는 명시적인 방법

console.log('abc'.length > 0);
console.log(!!null === false);

// 객체
let data = {
    name: '철수',
    age: 27,
};

if (!data) {
    console.log("사용자 정보 없음")
} else if (data.name ===  "영희") {
    console.log("사용자 이름 일치")
} else if (data.age === 27) {
    console.log("나이 일치")
} else {
    console.log("사용자 일치 x")
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
