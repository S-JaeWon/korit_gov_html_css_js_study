// promise는 기본적으로 자바스크립트의 비동기처리에 사용되는 객체

// promise 객체는 state와 result 속성을 가지고 있다.
/**
 * state
 * 1) 대기(pending): 초기 상태로 비동기 작업이 아직 완료되지 않은 상태
 * result: undefined
 *
 * 2) 이행(fulfilled): 비동기 작업이 성공적으로 완료된 상태
 * result: 성고적으로 완료된 결과값
 *
 * 3) 거부 (reject): 비동기 작업이 실패한 상태
 * result: 실패한 이유(에러객체)
 */

// promise의 인자로 함수를 전달 => excutor를 전달
// 객체 생성과 동시에 즉시 실행
// resolve => 비동기 작업이 성공했을때 호출하는 함수
// reject => 비동기 작업이 실패했을때 호출하는 함수

function getData() {
    const promise = new Promise((resolve, reject) => {
        /** excutor 함수 */
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

promise
    .then((data) => {
        console.log('작업 성공 후 이행 상태', data);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('마무리 작업');
    });
