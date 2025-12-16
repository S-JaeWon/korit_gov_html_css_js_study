/**
 * async -> 비동기 함수 정의 키워드
 * await -> 비동기 함수 동기 호출 키워드, async 함수 내부에서만 사용 가능
 */

// const promise = new Promise((resolve) => resolve('철수'));

// async function getData() { //! async를 함수 앞에 붙이면 return 값은 promise로 반환 -> resolve에 값 담음
//     return '철수';
// }

// const user = getData();
// user.then((name) => console.log(name));

function getUserReq() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('사용자 데이터 받아옴');
            resolve({ name: '철수', age: 14 });
        }, 2000);
    });
}

function getTodoReq() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Todo 데이터 받아옴');
            resolve({ todoId: 1, title: '잠자기' });
        }, 3000);
    });
}

// async function getData() {
//     await getUserReq();
//     return '서버2';
// }

// const data = getData();
// data.then((data) => {
//     console.log(data);
// });

async function getUser() {
    const response = await getUserReq();
    return response;
}

async function getTodo() {
    const response = await getTodoReq();
    return response;
}

async function getData() {
    const user = await getUser();
    const todo = await getTodo();
    console.log(`${user.name}의 할일 ${todo.title}입니다.`);
}

getData();
