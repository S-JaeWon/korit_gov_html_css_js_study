const API_URL = 'https://jsonplaceholder.typicode.com/posts';
const tbody = document.querySelector('tbody');
const listContainer = document.querySelector('#body_container');
const postCount = document.querySelector('#count_span');

window.onload = async () => {
    listContainer.innerHTML = '<div>게시글 불러오는 중...</div>';
    const response = await fetch(API_URL);
    if (!response.ok) {
        alert('데이터 요청 중 오류 발생');
        return;
    }

    const data = await response.json();
    postCount.innerText = data.length;
    listContainer.innerHTML = `
        <table>
            <tbody>
                ${data
                    .map((post) => {
                        return `
                        <tr>
                            <td>${post.id}</td>
                            <td><a href="post.html?postId=${post.id}">${post.title}</a></td>
                            <td>${post.userId}</td>
                        </tr>
                    `;
                    })
                    .join('')}
            </tbody>
        </table>
    `;
};
