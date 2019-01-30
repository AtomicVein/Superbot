const Discord = require("discord.js");
const moment = require("moment");
 
const status = {
  online: "Online",
  idle: "Idle",
  dnd: "Do Not Disturb",
  offline: "Offline / Invisible"
};
 
module.exports.run = (Client, message, args) => {
  let member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member
  if (!member) return message.reply("Please provide a vaild Mention or USER ID");
 
let embed = new Discord.RichEmbed()
  .setColor("#ffffff")
  .setThumbnail(`${member.user.displayAvatarURL}`)
  .setAuthor(`${member.user.tag}`, `${member.user.avatarURL}`)
  .addField("Username", `${member.user.tag}`, true)
  .addField("Nickname", `${member.nickname !== null ? `${member.nickname}` : "N/A"}`, true)  
  .addField("User ID", `${member.user.id}`, true)
  .addField("Status", `${status[member.user.presence.status]}`, true)
  .addField("Currently Playing", `${member.user.presence.game ? `${member.user.presence.game.name}` : "Nothing"}`, true)
  .addField("Assigned Roles", `${member.roles.filter(r => r.id !== message.guild.id).map(r => r).join(" **|** ") || "No Roles"}`)
  .addField("Joined At", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`)
  .addField("Created At", `${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
  .setTimestamp()
  .setFooter('© Bot made by Inspireen.')
 
  return message.channel.send(embed);
};
 

 
module.exports.help = {
    name: "userinfo"
}
