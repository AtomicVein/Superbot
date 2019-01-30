const Discord = require("discord.js")

module.exports.run = async (Client, message, args) => {
    let start = Date.now()
        message.delete()
    if(!message.member.roles.some(r=>["#"].includes(r.name))) 
    return message.reply("Sorry, you don't have permissions to use this!");
   console.log(`Superbot Log >> The restart command was used by ${message.author.tag}`);
    const embed = new  Discord.RichEmbed()
    .setTitle("📣Pushing out update...📣")
    .setDescription(`SHS BOT | Update successful! (\`${Date.now() - start}\`ms)`)
    await message.channel.send({embed})
   console.log(`Superbot Log >> The restart command was used by ${message.author.tag}`);
    process.exit();
}


module.exports.help = {
    name: "update"
}



