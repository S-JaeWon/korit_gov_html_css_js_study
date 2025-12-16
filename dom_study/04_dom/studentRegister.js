let studentInputValue = {
    id: 0,
    name: '',
    age: '',
    address: '',
};

function handleRegisterOnkeyUp(e) {
    // console.log('name:', e.target.name);
    // console.log('value:', e.target.value);
    studentInputValue = {
        ...studentInputValue,
        [e.target.name]: e.target.value,
    };

    console.log(studentInputValue);
}

const handleRegisterOnclick = () => {
    const newStudent = {
        ...studentInputValue,
        id: studentList.length + 1,
    };

    studentList = [...studentList, newStudent];

    loadStudentList();
};

function studentRegister() {
    return `
        <div>
            ${studentRegisterInput({
                type: 'text',
                name: 'name',
                onkeyup: 'handleRegisterOnkeyUp',
            })}
            ${studentRegisterInput({
                type: 'text',
                name: 'age',
                onkeyup: 'handleRegisterOnkeyUp',
            })}
            ${studentRegisterInput({
                type: 'text',
                name: 'address',
                onkeyup: 'handleRegisterOnkeyUp',
            })}
            <div>
                <button onclick="handleRegisterOnclick()">등록</button>
            </div>
        </div>
    `;
}
