document.querySelector('.button').addEventListener('click', function(event) {
    event.preventDefault();

    const userId = document.querySelector('input[name="u_id"]');
    const userPw = document.querySelector('input[name="u_pw"]');

    if (!userId.value.trim()) {
        alert("아이디를 입력해주세요.");
        return;
    }
    if (!userPw.value.trim()) {
        alert("비밀번호를 입력해 주세요.");
        return;
    }

    window.location.href = "success.html";
});