const Discord = require("discord.js")

module.exports.run = async (Client, message, args) => {
     message.delete()
     if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("Sorry, you don't have permissions to use this!");
     const text = args.join(" ");
     const embed = new  Discord.RichEmbed()
     .setTitle("📣Announcement📣")
     .setDescription(args.join(" "))
     message.channel.send("@everyone")
     message.channel.send({embed})
    console.log(`Superbot Log >> The announce command was used by ${message.author.tag} they said [Message: ${text} ]`);
    }

module.exports.help = {
    name: "announce"
}
