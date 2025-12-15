// 비동기 -> block 현상 해결


setTimeout(() => {
    console.log('작업 2');
}, 3000);

console.log('작업 1');

// js는 싱글 스레드이지만 web api 라는 엔진이 따로 존재 해서 비동기 처리 가능