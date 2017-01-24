var Discord = require("discord.js");
//var parseString = require('xml2js').parseString;
var client = new Discord.Client();
var prefix = "!";
var akkoArray = ["http://pa1.narvii.com/6140/983b2c7fd40022458024a007b1359fb6dcd9d4b4_hq.gif", "http://vignette2.wikia.nocookie.net/young-animator-training-project/images/5/50/Akko.jpg/revision/latest?cb=20130421150105", "http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/akko-kagari-little-witch-academia-1.75.jpg", "https://www.anime-planet.com/images/characters/atsuko-kagari-50037.jpg", "http://static1.fjcdn.com/thumbnails/comments/Don+t+lie+babe+we+all+know+you+re+a+filthy+slut+_6e746044df3cf6e7c9f9087ce4582f53.jpg"];
         


function getRandomImage(a) {
    var num = Math.floor(Math.random() * a.length);
    var img = a[num];
    return img;
}

client.on("message", msg => {
    if (msg.content.startsWith(prefix + "jaraxxus") || msg.content.startsWith(prefix + "hearthstone")) {
        msg.channel.sendMessage("https://www.youtube.com/watch?v=MkeC9WVVsQ4");
    }
    if (msg.content.startsWith(prefix + "sonic")) {
        msg.channel.sendMessage("Gotta go fast");
    }
    if (msg.content.startsWith(prefix + "akko")) {
        msg.channel.sendMessage(getRandomImage(akkoArray));
        
    }
    
});


client.on('ready', () => {
    console.log('Ready! v0.0.2');
});
client.login("MjcyNTgxMDQzNzAwMjM2Mjg5.C2XIFQ.P238B_wQA2aCX3D3VtaD8mCHdAw");