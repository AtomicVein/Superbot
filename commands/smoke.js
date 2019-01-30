const Discord = require("discord.js")
const colors = require("../colors.json");
const superagent = require("superagent")


exports.run = async (client, message, level) => {
    

    message.channel.send('**BISSSSHES IM SMOKING**').then(async msg => {
        setTimeout(() => {
            msg.edit('🚬');
        }, 500);
        setTimeout(() => {
            msg.edit('🚬 ☁ ');
        }, 1000);
        setTimeout(() => {
            msg.edit('🚬 ☁☁ ');
        }, 1500);
        setTimeout(() => {
            msg.edit('🚬 ☁☁☁ ');
        }, 2000);
        setTimeout(() => {
            msg.edit('🚬 ☁☁');
        }, 1500);
        setTimeout(() => {
            msg.edit('🚬 ☁');
        }, 1000);
        setTimeout(() => {
            msg.edit('🚬 ');
        }, 500);
        setTimeout(() => {
            msg.edit(`Finished smoking`);
        }, 4000);
    });
};
exports.help = {
    name: 'smoke',
    
}