const Discord = require("discord.js")



    exports.run = (Client, message, args) => {
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("Sorry, you don't have permissions to use this!");
        if(!args || args.size < 1) return message.reply("Must provide a command name to reload.");
        const commandName = args[0];
        // Check if the command exists and is valid
        if(!Client.commands.has(commandName)) {
          return message.reply("That command does not exist");
        }
        // the path is relative to the *current folder*, so just ./filename.js
        delete require.cache[require.resolve(`./${commandName}.js`)];
        // We also need to delete and reload the command from the client.commands Enmap
        Client.commands.delete(commandName);
        const props = require(`./${commandName}.js`);
        Client.commands.set(commandName, props);
        message.reply(`The command ${commandName} has been reloaded`);
      };

  module.exports.help = {
    name: "reload"
}