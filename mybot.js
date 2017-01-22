var Discord = require("discord.js");
var client = new Discord.Client();

let prefix = "!";

client.on("message", msg => {
    if (msg.content.startsWith(prefix + "jaraxxus") || msg.content.startsWith(prefix + "hearthstone")) {
        msg.channel.sendMessage("https://www.youtube.com/watch?v=MkeC9WVVsQ4");
    }
});

client.on('ready', () => {
  console.log('I am ready!');
});

client.name = "Super Smash Bros Melee";

client.login("MjcyNTgxMDQzNzAwMjM2Mjg5.C2XIFQ.P238B_wQA2aCX3D3VtaD8mCHdAw");
