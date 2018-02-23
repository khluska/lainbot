var Discord = require("discord.js");
var config = require('./config.json');
var client = new Discord.Client();

         


function getRandomImage(a) {
    var num = Math.floor(Math.random() * a.length);
    var img = a[num];
    return img;
}

client.on("message", msg => {
    
    if (msg.content.startsWith(config.prefix + "sonic")) {
        msg.channel.sendMessage("Gotta go fast");
    }
    if (msg.content.startsWith(config.prefix + "f")) {
        msg.channel.sendMessage("Paying Respects");
    }
    if (msg.content.startsWith(config.prefix + "shit")) {
        msg.channel.sendMessage("Your Waifu");
    }
    if (msg.content.startsWith(config.prefix + "akko")) {
        msg.channel.sendMessage(getRandomImage(config.imgArrayA));
    }
    
});


client.on('ready', () => {
    console.log('Ready! v0.0.3');
});
client.login(config.token);