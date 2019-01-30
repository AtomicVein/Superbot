// const Discord = require("discord.js")

// module.exports.run = async (Client, message, args) => {
//     message.delete()
//     const m = await message.channel.send("Ping?");
//     m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(Client.ping)}ms`);
//     console.log(`Superbot Log >> The ping command was used by ${message.author.tag} Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(Client.ping)}ms`);
   
// }

// module.exports.help = {
//     name: "ping"
// }
//------------------------------------------Advanced ping----------------------
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    const m = await message.channel.send("Ping?");

    let msgping1 = new Date();

    let botping = new Date() - message.createdAt;

    let msgping2 = new Date() - msgping1;

    let pingembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField('API Ping : ', Math.floor(bot.ping) + 'ms')
        .addField('Bot Ping : ', `${m.createdTimestamp - message.createdTimestamp}ms`)
        .addField('Message Ping : ', '~' + Math.round(msgping2) + 'ms')
        .setTimestamp(new Date())
        .setFooter(`Requested by ${message.author.tag}`);

        
    return message.channel.send(pingembed);
        

};

module.exports.help = {
    name: "ping"
};
