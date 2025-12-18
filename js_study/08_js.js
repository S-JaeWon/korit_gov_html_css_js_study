const student = {
    name: '철수',
    age: 14,
    address: '부산',
    phone: '010-1234-1234',
};

const { name, address } = student;
console.log(name, address);

// REST 문법
const { age, phone, ...other } = student;
console.log(age);
console.log(phone);
console.log(other);

const numbers = [1, 2, 3, 4];
const [n1, n2, ...ns] = numbers;
console.log(n1, n2, ns);

// spread 문법
// 기존 객체의 모든 속성을 새로운 객체에 복사하거나, 새로운 속성을 추가 할 때 사용
const newStd = {
    ...student,
    gender: 'M',
};
console.log(newStd);

const newNumbers = [...numbers, 5, 6];
console.log(newNumbers);

let names = [];

function addName(name) {
    names = [...names, name];
}

addName('영희');
addName('용재');
addName('길동');

console.log(names);

let obj = {
    data1: 'data1',
    data2: 'data2',
};

// function addData(obj) {
//     const newObj = {
//         ...obj,
//         data3: 'data3',
//         data4: 'data4',
//     };

//     return newObj;
// }

// obj = addData(obj);
// console.log(obj);

function addProps(prosp) {
    obj = {
        ...obj,
        ...prosp,
    };
}

addProps({ data3: 'data3', data4: 'data4' });

const book = {
    name: '해리포터',
    author: 'J.K 롤링',
    publishYear: '1997',
};

console.log(book.name);
console.log(book.author);

// function getAge(book) {
//     return new Date().getFullYear() - Number(book.publishYear);
// }

book.getAge = () => {
    const age = new Date().getFullYear();
    return age - book.publishYear;
};

console.log(book.getAge());

// function addGenre(props) {
//     book.genre = props.genre;
// }
// addGenre({ genre: '판타지' });
book.genre = '판타지';

book.publishYear = '2000';

console.log(book);

const products = [
    { id: 1, name: '노트북', price: 120000, category: '전자제품' },
    { id: 2, name: '티셔츠', price: 25000, category: '의류' },
    { id: 3, name: '모니터', price: 300000, category: '전자제품' },
    { id: 4, name: '청바지', price: 50000, category: '의류' },
    { id: 5, name: '마우스', price: 15000, category: '전자제품' },
];

const expensiveProducts = products.filter((product) => product.price >= 50000);
console.log(expensiveProducts);

const productNamesAndPrices = products.map((product) => ({
    name: product.name,
    price: product.price,
}));

console.log(productNamesAndPrices);

const discountProducts = products
    .filter((product) => product.category === '전자제품')
    .map((product) => ({
        name: product.name,
        price: product.price * 0.9,
    }));

console.log(discountProducts);

const userState = (data) => {
    const dataState = {
        data: data,
        setData: (d) => {
            console.log(d, '데이터 set');
        },
    };

    return [dataState.data, dataState.setData];
};

const [value, setValue] = userState(10);
console.log(value);
setValue(20);
console.log(value);
