const inputButton = document.querySelector('.input_button');
const tbody = document.querySelector('.student_table > tbody');
const students = [];

inputButton.onclick = () => {
    const inputName = document.querySelector('.name');
    const inputAge = document.querySelector('.age');
    const inputAddress = document.querySelector('.address');

    if (
        inputName.value === '' ||
        inputAge.value === '' ||
        inputAddress.value === ''
    ) {
        alert('칸을 채워주세요.');
        return;
    }

    /**
     * tbody.innerHTML += `
     *     <tr>
     *         <td>${count++}</td>
     *         <td>${inputName.value}</td>
     *         <td>${inputAge.value}</td>
     *         <td>${inputAddress.value}</td>
     *     </tr>
     * `
     */

    students.push({
        name: inputName.value,
        age: inputAge.value,
        address: inputAddress.value,
    });

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

    tbody.innerHTML = trs.join('');

    inputName.value = '';
    inputAge.value = '';
    inputAddress.value = '';
};

document.querySelector('.name').placeholder = '이름';
document.querySelector('.age').placeholder = '나이';
document.querySelector('.address').placeholder = '주소';
