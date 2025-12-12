// 자바 스크립트 함수

// 일반 함수 정의

function 함수명(매개변수1, 매개변수2) {
    console.log('함수 호출됨');
    let data = '리턴 값';
    console.log(매개변수1);
    console.log(매개변수2);
    return data;
}

const 리턴값 = 함수명(10, 20);
console.log(리턴값);

/**
 * 매개변수가 하나면 () 생략 가능
 * 실행문이 한 줄이면 {} 생략 가능
 * {} 생략시 값만 입력하면 return 값
 * {} 생략 x ->  return 값 명시
 */

const fx1 = () => console.log('fx1 호출');
const fx2 = (n) => console.log(n);
const fx3 = (n) => n + 1;
const fx4 = (n) => {
    console.log(n);
    return n + 1;
};

console.log(fx2(2));
const result = fx3(4);

const a = fx3;

console.log(a);

const aa = () => {
    console.log('aa함수');
    return 'aa함수 리턴값';
};

const bb = (fxx) => {
    console.log('bb함수 호출');
    return fxx;
};

const aaa = (fxx, fxx2) => {
    console.log('aaa함수 호출');
    console.log(fxx());
    console.log(fxx2());
    return 'aaa함수 리턴 값';
};

console.log(aaa(bb(aa), bb(aa)));
