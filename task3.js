document.addEventListener("DOMContentLoaded", function () {
    const btnOpen = document.querySelector(".btn_open");
    const btnClose = document.querySelector(".btn_close");
    const formPopup = document.querySelector(".pop_wrap");
    const signInButton = document.querySelector(".sign_in");
    const errorMessagesDiv = document.createElement("div");

    errorMessagesDiv.classList.add("error-messages");
    const form = document.querySelector("form");
    form.insertBefore(errorMessagesDiv, document.querySelector(".sign_in"));

    btnOpen.addEventListener("click", function (event) {
        event.preventDefault();
        formPopup.style.display = "block";
    });

    btnClose.addEventListener("click", function () {
        formPopup.style.display = "none";
    });

    function validateForm() {
        errorMessagesDiv.innerHTML = "";
        const errors = [];
        const userId = document.querySelector("input[name='user_id']");
        const userPw = document.querySelector("input[name='user_pw']");
        const userEmail = document.querySelector("input[name='user_email']");
        const userDob = document.querySelector("input[name='user_dob']");
        const userPhone = document.querySelector("input[name='user_phone']");

        if (userId.value.trim().length < 3) {
            errors.push("아이디는 3글자 이상입니다.");
        }
        if (userPw.value.trim().length < 6) {
            errors.push("비밀번호는 6글자 이상입니다.");
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(userEmail.value.trim())) {
            errors.push("이메일 형식을 지켜야합니다.");
        }
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateRegex.test(userDob.value.trim())) {
            errors.push("생년월일은 YYYY-MM-DD와 같은 형식입니다.");
        }
        const phoneRegex = /^\d{11}$/;
        if (!phoneRegex.test(userPhone.value.trim())) {
            errors.push("전화번호는 - 없이 11자리 숫자입니다.");
        }
        if (!userId.value.trim() || !userPw.value.trim() || !userEmail.value.trim() || !userDob.value.trim() || !userPhone.value.trim()) {
            errors.push("위 입력항목 모두 공백일 수 없습니다.");
        }

        errors.forEach(error => {
            const errorP = document.createElement("p");
            errorP.textContent = error;
            errorMessagesDiv.appendChild(errorP);
        });

        return errors.length === 0;
    }

    signInButton.addEventListener("click", function (event) {
        event.preventDefault();
        if (validateForm()) {
            window.location.href = "success.html";
        }
    });
});