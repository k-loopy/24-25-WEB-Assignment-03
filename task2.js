document.addEventListener("DOMContentLoaded", function() {
    const checkbox1 = document.getElementById("checkbox1");
    const checkbox2 = document.getElementById("checkbox2");
    const loginButton = document.querySelector("button[type='submit']");

    loginButton.disabled = true;

    function updateButtonState() {
        loginButton.disabled = !(checkbox1.checked && checkbox2.checked);
    }

    checkbox1.addEventListener("change", updateButtonState);
    checkbox2.addEventListener("change", updateButtonState);

    loginButton.addEventListener("click", function(event) {
        if (!loginButton.disabled) {
            event.preventDefault();
            window.location.href = "success.html";
        }
    });
});