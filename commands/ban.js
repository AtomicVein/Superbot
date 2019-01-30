const Discord = require("discord.js")

module.exports.run = async (Client, message, args) => {
    
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("Sorry, you don't have permissions to use this!");
      console.log(`Superbot Log >> The ban command was used by a user without perms [user:${message.author.tag}]`);
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");
 
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
     
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
    console.log(`Superbot Log >> The ban command was used on ${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);message.delete()
 
   
}

module.exports.help = {
    name: "ban"
}