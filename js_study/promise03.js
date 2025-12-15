function login(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username) {
                resolve(username);
            } else {
                reject(new Error('사용자 이름 없음'));
            }
        }, 1000);
    });
}

function addToCart(product) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (product) {
                resolve(product);
            } else {
                reject(new Error('상품이 없음'));
            }
        }, 1000);
    });
}

function checkout(cardNumber, product) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (cardNumber && product) {
                resolve({ cardNumber, product });
            } else {
                reject(new Error('카드 번호 또는 제품 없음'));
            }
        }, 1000);
    });
}

login('user')
    .then((username) => {
        console.log(`${username}님이 로그인 했습니다.`);
        return addToCart('스위치');
    })
    .then((product) => {
        console.log(`${product}가 장바구니에 추가 되었습니다.`);
        return checkout('123-12-512-43123', product);
    })
    .then(({ cardNumber, product }) => {
        console.log(`${product} 결제 완료. 카드번호: ${cardNumber}`);
    })
    .catch((err) => {
        console.log(err.message);
    })
    .finally(() => {
        console.log('로그아웃');
    });
