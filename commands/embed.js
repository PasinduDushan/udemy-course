const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "embed",
    description: "Sends a embed",

    execute(client, message, args){
        const embed = new MessageEmbed()
          .setAuthor('CrazyBotBoy')
          .setTitle('New Embed')
          .setColor('BLUE')
          .setThumbnail('https://sm.pcmag.com/t/pcmag_ap/review/d/discord/discord_3n8v.1920.jpg')
          .setDescription('This is a test embed send by Pasindu Dushan\n\n\n')
          .addField('Field 1', 'This is 1st field', true)
          .addField('Field 2', 'This is the 2nd field', true)
          .addField('Field 3', 'This is the 3rd field', true)
          .addField('Field 4', 'This is the 4th field')
          .setImage('https://sm.pcmag.com/t/pcmag_ap/review/d/discord/discord_3n8v.1920.jpg')
          .setTimestamp()

        message.channel.send({ embeds: [embed] })
    }
}