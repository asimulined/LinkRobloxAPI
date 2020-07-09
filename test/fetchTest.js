const fetch = require("node-fetch");

fetch("http://api.roblox.com/users/get-by-username?username=ROBLOX")
    .then(res => res.json())
    .then(res => {
        console.log(res.Id);
    });