// 콜백함수
// 다른 함수의 인자로 전달 되는 함수

// 비동기 콜백
// 비동기 작업이 완료된 후에 호출 되는 콜백 함수

// function getData(callback) {
//     setTimeout(() => {
//         console.log('서버에서 데이터 받아옴');
//         callback({ name: '철수' });
//     }, 2000);
// }

// getData((data) => {
//     console.log(data);
// });

function login(username, callback) {
    setTimeout(() => {
        callback(username);
    }, 1000);
}

function addToCart(product, callback) {
    setTimeout(() => {
        callback(product);
    }, 1000);
}

function checkout(cardNumb, product, callback) {
    setTimeout(() => {
        callback(cardNumb, product);
    }, 1000);
}

login('user', (username) => {
    console.log(`${username}님이 로그인 했습니다.`);
    addToCart('스위치', (product) => {
        console.log(`${product}가 장바구니에 추가 되었습니다.`);
        checkout('123-12-512-43123', product, (cardNumb, product) => {
            console.log(
                `${product}에 대한 결제가 완료 되었습니다. 카드번호: ${cardNumb}`
            );
        });
    });
});
// 콜백함수가 계속 중첩되면서 callback hell 발생
