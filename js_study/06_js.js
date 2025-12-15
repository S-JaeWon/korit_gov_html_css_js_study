// 단축 평가 논리 연산, && ||

const name = '철수';
console.log(!!name && !!'철수');

console.log(true && 10);
// [boolean] && [boolean] -> and
// [boolean] && [data] -> 앞의 값이 true 일 때 뒤의 값 retrun, false 일 때 false를 return

console.log(false || 10);
// [boolean] || [boolean] -> or
// [boolean] || [data] -> 앞의 값이 false 일 때 뒤의 값 retrun, true 일 때 false를 return

console.log(null ?? 10);
console.log(100 ?? 10);
// 앞의 값이 null 또는 undefined라면 뒤의 값 return. 아니라면 앞의 값 return
