const Discord = require("discord.js")

const request = require('request');

module.exports.run = async (Client, message, args) => {
    // message.channel.send('```diff\n- SHS bot : Command List -``` \n~**__Bot Owner__**~\n`Reload` | `Update` | `Leave`\n~**__Images__**~\n`Emotions (coming soon)`  | `Meme` | `dog`\n ~**__Search__**~\n`Google` | `Advice`\n~**__Fun__**~\n`Playdough` | `Say` | `Slots`\n~**__Moderation__**~\n`Ban` | `Kick` | `Dm` | `announce` | `Purge`\n~**__Util__**~\n`Userinfo` | `Avatar` | `Serverinfo` | `Emojis`\n~**__Disabled__**~\n`Ship` | `AllMusicCommands`\n```diff\n+ Use +info for detailed stats and information on me\n% For more info on a specific command, use +help [command]``` ')
    const embed = new  Discord.RichEmbed()
     .setTitle("----------------------------")
     .setColor("#ff0000")
     .setThumbnail("https://images-ext-2.discordapp.net/external/KUlB8gVCyuh5AcX3nKQu5c4FLUSVe51GIz0GWTr0SKg/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/537039367340818434/65db70d3c8fa8249f9cc6a835ecf817f.png")
     .setTimestamp()
     .setDescription('```diff\n- SHS bot : Command List -``` \n~**__Bot Owner__**~\n`Reload` | `Update` | `Leave`\n~**__Images__**~\n`Emotions (coming soon)`  | `Meme` | `dog`\n ~**__Search__**~\n`Google` | `Advice`\n~**__Fun__**~\n`Playdough` | `Say` | `Slots` |`Smoke~ |\n~**__Moderation__**~\n`Ban` | `Kick` | `Dm` | `announce` | `Purge` | `lockdown`\n~**__Util__**~\n`Userinfo` | `Avatar` | `Serverinfo` | `Emojis`\n~**__Disabled__**~\n`Ship` | `AllMusicCommands`\n```diff\n+ Use +info for detailed stats and information on me\n% For more info on a specific command, use +help [command]```\n  ')
     .setFooter("This was requested by: " + message.author.username + " ! | ")

     message.channel.send({embed})
}

module.exports.help = {
    name: "help"
}




