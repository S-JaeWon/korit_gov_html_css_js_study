const title1 = document.getElementById('title');
console.log(title1);
console.log({ title1 });

const titles = document.getElementsByClassName('title');
console.log(titles);

const h3 = document.getElementsByTagName('h3');
console.log(h3);

const d1 = document.getElementById('d1');
const d2 = document.getElementById('d2');
console.log({ d1 });

const title2 = document.querySelector('#title');
const titles2 = document.querySelectorAll('.title');

const div2 = document.querySelector('#d1 > #d2');
console.log(div2);

div2.innerHTML = '<p>innerHtml입니다.<p>';

const students = [
    { name: '철수', age: 14, address: '부산' },
    { name: '영희', age: 12, address: '서울' },
    { name: '진영', age: 16, address: '울산' },
];

const tbody = document.querySelector('.student_table > tbody');
const trs = students.map((student, index) => {
    return `
    <tr>
        <td>${index + 1}</td>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.address}</td>
    </tr>
    `;
});

console.log(trs);

tbody.innerHTML = trs.join('');

const tdList = document.querySelectorAll('td');
tdList.forEach((td) => (td.style = 'border: 1px solid black'));

const studentTable = document.querySelector('.student_table');
studentTable.id = 'table_id';
studentTable.classList.remove('student');
studentTable.classList.add('student_class');
