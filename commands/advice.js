const Discord = require("discord.js")

const request = require('request');

module.exports.run = async (Client, message, args) => {
    // message.reply("Disabled commmand sorry")
        let cn = request("http://api.adviceslip.com/advice", function(err, res, body) {
        try {
            let cnj = JSON.parse(body)
            message.channel.send(cnj.slip.advice)
        } catch (e) {
            return message.channel.send("**Advice machine :b:roke**")
        }
    });
}

module.exports.help = {
    name: "advice"
}
