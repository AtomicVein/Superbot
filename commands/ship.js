const discord = require ('discord.js');
const Jimp = require(`jimp`)

    module.exports.run = async (Client, message, args) => {
                            message.reply("Disabled commmand sorry")}
    //     message.channel.startTyping(); // TELLS YOUR HANDICAPPED BOT TO START TYPING! ;)


    // let msg = await message.channel.send('``Calculating the chances...Please wait..``') //UNNECESSARY BUT COOL.
    //     let replies = [`Will Never Work`, `Will work❤`]
    //     let result = Math.floor(Math.random() * replies.length);
    //     let mUser = message.mentions.users.first()
    //     let mUser2 = message.mentions.users.last()
    //     if(!mUser) return message.channel.send(`Please specifify two users next time!`)
    //     if(!mUser) returnmessage.channel.stopTyping(true); // TELLS YOUR HANDICAPPED BOT TO STOP TYPING! ;)
    //     const mUserA = mUser.avatarURL
    //     var imagetobase = `https://cdn.discordapp.com/attachments/519347142003785750/538880580595613705/image0.jpg`;
    //     Jimp.read(mUser.avatarURL, function (err, imagetouse) {
    //         if (err) throw err;
    //         imagetouse.quality(60)
    //                   .resize(866, 866)
    //                   .write("imagetouse.jpg");
    //         Jimp.read(mUser2.avatarURL, function (err, imagetouse2) {
    //         if (err) throw err;
    //         imagetouse2.quality(60)
    //                   .resize(866, 866)
    //                   .write("imagetouse2.jpg");
    //         Jimp.read(imagetobase, function (err, mydude) {
    //             if (err) throw err;
    //             Jimp.loadFont(Jimp.FONT_SANS_64_WHITE).then(function (font) {
    //                 mydude.quality(60)
                    
    //                 mydude.composite( imagetouse, 784, 797 )
    //                 mydude.composite( imagetouse2, 2191, 797)
    //                 mydude.write("saveme.jpg")
    //                 mydude.getBuffer(`image/jpeg`, (err, buf) => {
    //                     if (err) return err;
    //                     message.channel.send({files: [{attachment: buf, name: `saveme.jpg`}] })
    //                     message.channel.send(replies[result])

    //                     message.channel.stopTyping(true); // TELLS YOUR HANDICAPPED BOT TO STOP TYPING! ;)
    //                     msg.delete(); // THIS WILL DELETE (Generating that sexy avatar...) AFTER SENDING THE EMBED! This will be quick so watch out for the small details :P
    //                 })

    //             })
    //         })}
    //     )})
    // }


    module.exports.help = {
        name: "ship"
    }
    



