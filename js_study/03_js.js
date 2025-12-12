// 객체
const student = {
    name: '철수',
    age: 13,
};

console.log(student.name);
console.log(student['name']);
console.log(student.age);
console.log(student['age']);
console.log(student);

student['name'] = '영희';
student['age'] = '15';

student.name = '길동';
student.age = '10';
student.address = '부산'; //! 추가

student.printName = () => console.log('이름 :', student.name);
student.printName();

const loginButton = {
    text: '로그인',
    value: '로그인 됨',
    onClick: () => {
        console.log(loginButton.value);
    },
};

loginButton.onClick();

const loginButtonKeys = Object.keys(loginButton);
console.log(loginButtonKeys);
const loginButtonValues = Object.values(loginButton);
console.log(loginButtonValues);
const loginButtonEntries = Object.entries(loginButton);
console.log(loginButtonEntries);

for (let entry of loginButtonEntries) {
    const key = entry[0];
    const value = entry[1];
    console.log(entry, key, value);
}
