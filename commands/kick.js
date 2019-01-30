const Discord = require("discord.js")

module.exports.run = async (Client, message, args) => {
    message.delete()
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("Sorry, you don't have permissions to use this!");
      console.log(`Superbot Log >> The kick command but was used improperly by [user:${message.author.tag}]`);
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);
    console.log(`Superbot Log >> The kick command was used on ${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);
    
   
}

module.exports.help = {
    name: "kick"
}









