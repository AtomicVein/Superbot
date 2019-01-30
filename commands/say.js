const Discord = require("discord.js")

module.exports.run = async (Client, message, args) => {
    const sayMessage = args.join(" ");
     await message.delete()
    message.channel.send(sayMessage);
    console.log(`Superbot Log >> The say command was used by ${message.author.tag} they said [Message: ${sayMessage} ]`);
    }

module.exports.help = {
    name: "say"
}
