const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});
const username = document.getElementById('username');
const password = document.getElementById('password');


function run() {
    const value_id = username.value.trim();
    const value_pass = password.value.trim();
    run2(value_id);
}

function run2(x) {
    window.location = x + ".html";
}