import { saveData, searchData } from "./firestore.js"

const registerForm = document.getElementById("register");

registerForm.addEventListener("submit", async e => {
    e.preventDefault();
    if (registerForm["username"].value != "" && registerForm["email"].value != "" && registerForm["password"].value != "" && registerForm["cpassword"].value != "") {
        if (registerForm["password"].value == registerForm["cpassword"].value) {
            const username = registerForm["username"];
            const email = registerForm["email"];
            const password = registerForm["password"];
            const account = await searchData(registerForm["username"].value);
            if (account.size == 0) {
                saveData(username.value, email.value, password.value);
                registerForm.reset();
                alert("Register success.");
            } else
                alert('Woops! Username Already Exists.');
        } else
            alert('Password Not Matched.');
    } else
        alert('Missing Input.');

})