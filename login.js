import { searchData } from "./firestore.js"

const loginForm = document.getElementById("login");

loginForm.addEventListener("submit", async e => {
    e.preventDefault();
    const account = await searchData(loginForm["username"].value);
    if (account.size > 0 && account.docs[0].data().password == loginForm["password"].value)
        window.location.replace("index3.html");
    else
        alert("Woops! Username or Password is Wrong.");
})