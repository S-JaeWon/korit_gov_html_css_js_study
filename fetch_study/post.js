const postIdDiv = document.querySelector('#post_id_div');
const userIdDiv = document.querySelector('#user_id_div');
const postTitle = document.querySelector('#post_title');
const contentBox = document.querySelector('#content_box');
const backBtn = document.querySelector('#back_btn');

window.onload = async () => {
    const url = new URL(window.location.href);

    const urlParams = url.searchParams;
    const postId = urlParams.get('postId');
    const API_URL = `https://jsonplaceholder.typicode.com/posts/${postId}`;

    const response = await fetch(API_URL);

    if (!response.ok) {
        alert('데이터 가져오는 중 오류 발생');
        return;
    }

    const data = await response.json();

    console.log(data);

    postIdDiv.innerText = `게시물ID:${data.id}`;
    userIdDiv.innerText = `유저ID:${data.userId}`;
    postTitle.innerText = `제목: ${data.title}`;
    contentBox.innerText = data.body;
};

backBtn.onclick = () => {
    window.location.replace('http://127.0.0.1:5500/fetch_study/list.html');
};
