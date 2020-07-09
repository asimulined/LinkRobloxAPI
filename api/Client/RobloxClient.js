const fetch = require("node-fetch");

module.exports = class RobloxClient {
    /**
        @description Creates a new RobloxClient 
    */

    constructor(){
        this.ready = "yes";
        this.endpoint = "http://api.roblox.com/";
    }

    /**
        @description Gets the ID from a supplied username
        @param {String} username
        @returns {Number} ID
    */

    async getIdFromUsername(username){
        if(this.ready !== "yes") throw new Error("RobloxClient is not ready");
        if(!username) throw new TypeError("Username was not supplied");
        var result = await fetch(this.endpoint + "users/get-by-username?username=" + username).then(res => res.json());
        return result.Id;
    }

    /**
        @description Gets the status from a supplied ID
        @param {Number} Id
        @returns {String} Status
    */

    async getStatusFromId(id){
        if(this.ready !== "yes") throw new Error("RobloxClient is not ready");
        if(!id) throw new TypeError("Id was not supplied");
        var result = await fetch("https://www.roblox.com/users/profile/profileheader-json?userid=" + id).then(res => res.json());
        return result.UserStatus;
    }

    /**
        @description Gets the username from a supplied ID
        @param {Number} Id
        @returns {String} Username
    */

    async getUsernameFromId(id){
        if(this.ready !== "yes") throw new Error("RobloxClient is not ready");
        if(!id) throw new TypeError("Id was not supplied");
        var result = await fetch(this.endpoint + "/users/" + id).then(res => res.json());
        return result.Username;
    }
}