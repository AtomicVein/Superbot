const Discord = require("discord.js"); //YOU WILL NEED TO DEFINE DISCORD SINCE WE ARE USING THE EMBED!

exports.run = async (Client, message, args) => { //OH BTW BOT IS YOUR CLIENT SO IF YOU USED CLIENT THEN CHNAGE ALL THE "BOT" TO "CLIENT" cool!

    var footertext = [`${Client.user.username}: oof sexy`, `${Client.user.username}: nice`, `${Client.user.username}: 🔥`, `${Client.user.username}: Someone's looking sharp today!`, `${Client.user.username}: oof if i wasn't a bot...`, `${Client.user.username}: looking sexier than a mug`];
    var rand = Math.floor(Math.random() * footertext.length);
    var randomfooter = footertext[rand]; //THIS AND THE TWO LINES ABOVE IS TOTALLY UNNECESSARY. But you want to make your bot more interactive so keep it.Just an array of some random shit, you can add more if you would like just read the code and change it at your will! 


    message.channel.startTyping(); // TELLS YOUR HANDICAPPED BOT TO START TYPING! ;)


    let msg = await message.channel.send('``Generating that sexy avatar...``') //UNNECESSARY BUT COOL.

    let user = message.mentions.users.first() || message.author; //THIS IS IMPORTANT BECAUSE YOU WANT YOUR BOT TO SHOW OTHER PEOPLE'S AVATAR AS WELL BY MENTIONING THEM!

    // AVATAR EMBED

    let embed = new Discord.RichEmbed() //HERE WE DEFINE THE EMBED
        .setAuthor(`${user.username}'s Avatar`) //HERE WE SHOW THE USER'S NAME!
        .setImage(user.displayAvatarURL) // USER'S AVATAR
        .setColor(msg.guild.me.highestRole.color) //SET THE EMBED COLOR TO THE HIGHEST ROLE COLOR THE BOT HAS! cool right :D
        .setFooter(`${randomfooter}`) //FOOTER AND ICON
        .setTimestamp(); //SHOWS THAT COOL TIME ON THE FOOTER!

    await message.channel.send(embed) //NOW WE GIVE IT SOMETIME TO DO ALL THE CRAZY STUFF ON TOP AND THEN SEND THE EMBED!

    message.channel.stopTyping(true); // TELLS YOUR HANDICAPPED BOT TO STOP TYPING! ;)

    msg.delete(); // THIS WILL DELETE (Generating that sexy avatar...) AFTER SENDING THE EMBED! This will be quick so watch out for the small details :P
}

module.exports.help = {
    name: "avatar"
}


//PS: I suck at coding and explaining shit. So i do apologise. If you have any questions you can contact me on discord.("Please Don\'t!") ;)