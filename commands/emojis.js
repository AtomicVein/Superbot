const A = require('discord.js');
exports.run = async (Client, message, args) => {


if (message.content.toUpperCase() !== 'SERVER' && message.content.toUpperCase() !== 'ALL') message.channel.send('Do you want this servers emojis or all servers? *Please type \`Server\` or \`All\`')
    const filter = m => m.author === message.author
    const collector = message.channel.createMessageCollector(filter)
    collector.once('collect', function(m) {
        if (m.content.trim().toUpperCase() === 'SERVER') {
            
            message.channel.send('Okay, sending [Server] emojis!')
            let emojis;
    if (message.guild.emojis.size === 0) emojis = 'There are no emojis on this server.';
    else emojis = `**Emojis for ${message.guild.name}**\n${message.guild.emojis.map(e => `\n | **Usage:  **<${e}${e.id}> 
     `).join(' ')}`;
    
        message.channel.send(emojis);
        }
        if (m.content.trim().toUpperCase() === 'ALL') {
            
            let emojis;
    if (message.guild.emojis.size === 0) emojis = 'There are no emojis on this server.';
    else emojis = `**Emojis for All DIscord Servers**\n${Client.emojis.map(e => `\n |  **Usage:  **<${e}${e.id}> 
     `).join(' ')}`;
    
        message.channel.send(emojis);


        
        }

    })
}

            module.exports.help = {
                name: "emojis"
            }
            