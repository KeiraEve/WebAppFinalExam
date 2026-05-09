let id = 1;
let users = [];

const express = require("express");
const app = express();

// Attempt 1 below
document.getElementById("form42").addEventListener("submit", function (e) {
    // Prevent default form submission
    e.preventDefault();

    const name = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const newUser = [{ "name": name }, { "email": email }, { "message": message }];

    const response = fetch("/users", {
        method: "POST",
        "Content-Type": "application/json",
        body: JSON.stringify(newUser)
    });
});

// Attempt 2 below
app.get("/users", (req, res) => {
    res.json(users);
});

app.post("/users", (req, res) => {
    res = fetch("/users", {
        method: "POST",
        "Content-Type": "application/json",
        body: JSON.stringify(req)
    });
});