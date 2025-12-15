// promise chaining

function getData() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: '철수' };

            if (data) {
                console.log('비동기 작업 성공');
                resolve(data);
            } else {
                reject(new Error('에러 발생'));
            }
        }, 2000);
    });
    return promise;
}

const promise = getData();

// promise
//     .then((data) => {
//         console.log('첫번째 비동기 완료', data);
//         return getData();
//     })
//     .then((data) => {
//         console.log('두번째 비동기 완료', data);
//     });

promise
    .then(() => getData(1))
    .then(() => getData(2))
    .then(() => getData(2))
    .then((data) => console.log(data))
    .catch((error) => console.log(error.message));

promise
    .then((data) => {
        console.log(data);
        return 'hi';
        // 값을 retrun 하면 primise의 resolve에 해당 값 전달
    })
    .then((data) => {
        console.log(data);
    });
