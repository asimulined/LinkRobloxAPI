const RobloxApi = require("../lib/index.js");
const RobloxClient = new RobloxApi.RobloxClient();

let user = RobloxClient.getIdFromUsername("ROBLOX");
user.then((value) => {
    console.log(value);
});

let name = RobloxClient.getUsernameFromId(1);
name.then((value) => {
    console.log(value);
});

let status = RobloxClient.getStatusFromId(1)
status.then((value) => {
    console.log(value);
});