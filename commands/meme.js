const Discord = require("discord.js")
const colors = require("../colors.json");
const superagent = require("superagent")
module.exports.run = async (Client, message, args) => {
    
             
             let msg = await message.channel.send("Making you a meme...")
        
             let {body} = await superagent
             .get('https://api-to.get-a.life/meme')
             console.log(`Superbot Log >> The meme command was used by ${message.author.tag} and found this meme... `);
             console.log(body.url)
             if(!{body}) return message.channel.send ("I broke try again")
             let cEmbed = new Discord.RichEmbed()
               .setColor(colors.blue)
              .setAuthor('SHS MEMES', message.guild.iconURL)
               .setImage(body.url)
               .setTimestamp()
               .setFooter('© Bot made by Love is a mindset.')
               message.channel.send({embed: cEmbed})
        
              msg.delete();
   
}

module.exports.help = {
    name: "meme"
}
