const Discord = require("discord.js");
const Client = new Discord.Client();
const config = require("./config.json");
const superagent = require("superagent")
const colors = require("./colors.json");
const fs = require("fs");
Client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) =>{

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Could not find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} Loaded!`);
   Client.commands.set(props.help.name, props);


  });
  

  

});

Client.on("ready", () => {
  console.log(` `);
  console.log(` `);
  console.log(`Bot has started, with ${Client.users.size} users, in ${Client.channels.size} channels of ${Client.guilds.size} guilds.`);
  console.log(`|       this bot         |`);
  console.log(`|      was made by       |`);
  console.log(`|     Love is a mind     |`);
  console.log(`|         #6378          |`);
  console.log(`|        []  []          |`);
  console.log(`|       [------]         |`);
  console.log(`---------Bot log----------`);
});
Client.on('ready', async () => {
  console.log(`Superbot Log >> The bot has been launched to all SHS servers!`);

  let statuses = ['SHS', 'Use s!Help', 'With ' + Client.users.size + ' users'];

  setInterval(function() {
      
      let result = Math.floor((Math.random() * statuses.length));

      Client.user.setActivity(statuses[result], { type: 'PLAYING'});
      Client.user.setStatus('online');

  }, 5000) //Interval changes every 10 seconds
});
 
Client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  Client.user.setActivity(`Serving all servers`);
});
 
Client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  Client.user.setActivity(`Serving all servers`);
});

Client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'Chatroom');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});


Client.on("message", async message => {
  if(message.author.bot) return;
  const channel = Client.channels.get("538519845633785866");
  if(message.channel.type === "dm"){
    if (message.content.toUpperCase() !== 'BOT' && message.content.toUpperCase() !== 'SERVER') message.channel.send('Okay, is this a suggestiong for the Discord Server or the Bot? *Please type \`Bot\` or \`Server\`')
    const filter = m => m.author === message.author
    const collector = message.channel.createMessageCollector(filter)
    collector.once('collect', function(m) {
        if (m.content.trim().toUpperCase() === 'BOT') {
            
            message.channel.send('Okay, sending [Bot] suggestions!')
            let dmEmbed = new Discord.RichEmbed()
  .setColor(colors.blue)
  .setAuthor('DM',)
  .setThumbnail(message.author.avatarURL)
  .addField("User Name", `${message.author.username}`)
  .addField("User ID", `${message.author.id}`)
  .addField("Message:", `${message.content}`)
  .addField("For:", "Bot")
  .setTimestamp()
  .setFooter('© Bot made by Inspireen.')
  channel.send(dmEmbed)
  channel.send("@259875874046738432")
        }
        if (m.content.trim().toUpperCase() === 'SERVER') {
            
            message.channel.send('Okay, sending [Server] suggestions!')
            let dmEmbed = new Discord.RichEmbed()
  .setColor(colors.blue)
  .setAuthor('DM',)
  .setThumbnail(message.author.avatarURL)
  .addField("User Name", `${message.author.username}`)
  .addField("User ID", `${message.author.id}`)
  .addField("Message:", `${message.content}`)
  .addField("For:", "Server")
  .setTimestamp()
  .setFooter('© Bot made by Inspireen.')
  channel.send(dmEmbed)
  
        }
     
    })

}
  if (!message.content.startsWith(config.prefix)) return;
  
  
  
  
  let prefix = config.prefix
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
 

  let commandfile = Client.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(Client,message,args);
  
  
//   const channel = Client.channels.get("538519845633785866");
//   if(message.channel.type === "dm"){
//     if (message.content.toUpperCase() !== 'BOT' && message.content.toUpperCase() !== 'SERVER') message.channel.send('Okay, is this a suggestiong for the Discord Server or the Bot? *Please type \`Bot\` or \`Server\`')
//     const filter = m => m.author === message.author
//     const collector = message.channel.createMessageCollector(filter)
//     collector.once('collect', function(m) {
//         if (m.content.trim().toUpperCase() === 'BOT') {
            
//             message.channel.send('Okay, sending [Bot] suggestions!')
//             let dmEmbed = new Discord.RichEmbed()
//   .setColor(colors.blue)
//   .setAuthor('DM',)
//   .setThumbnail(message.author.avatarURL)
//   .addField("User Name", `${message.author.username}`)
//   .addField("User ID", `${message.author.id}`)
//   .addField("Message:", `${message.content}`)
//   .addField("For:", "Bot")
//   .setTimestamp()
//   .setFooter('© Bot made by Inspireen.')
//   channel.send(dmEmbed)
//         }
//         if (m.content.trim().toUpperCase() === 'SERVER') {
            
//             message.channel.send('Okay, sending [Server] suggestions!')
//             let dmEmbed = new Discord.RichEmbed()
//   .setColor(colors.blue)
//   .setAuthor('DM',)
//   .setThumbnail(message.author.avatarURL)
//   .addField("User Name", `${message.author.username}`)
//   .addField("User ID", `${message.author.id}`)
//   .addField("Message:", `${message.content}`)
//   .addField("For:", "Discord")
//   .setTimestamp()
//   .setFooter('© Bot made by Inspireen.')
//   channel.send(dmEmbed)
  
//         }
     
//     })

// }

 
  
  
      
    

  
});
 Client.login("");
