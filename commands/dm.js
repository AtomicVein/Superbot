const Discord = require("discord.js")

module.exports.run = async (Client, message, args) => {
    if(!message.member.roles.some(r=>["#"].includes(r.name)) )
       return message.reply("Sorry, you don't have permissions to use this!");
    // var args = message.content.split(" ").slice(0)
    
    var Rargs = message.content.split(" ").slice(2).join(" ")
    var userID = args[0]
    if(!userID || !Client.users.get(userID)) return message.reply("This is not an ID!") //if args is Not A Number!
    // if (isNaN(args[1])) return message.reply("This is not an ID!") //if args is Not A Number!
    var embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setColor('#ff0000')
        .setThumbnail(message.author.avatarURL)
        .setTitle("The staff answered you!")
        .addField("Message:", Rargs)
        .setFooter("This message was sent to you by: " + message.author.username + " !")
    Client.users.get(userID).send(embed)
    message.channel.send("Sent!").catch(console.error)

}

module.exports.help = {
    name: "dm"
}