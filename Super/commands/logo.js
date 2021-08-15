module.exports = {
  name: 'logo',
  async execute(client, message, Discord, MessageAttachment, fs, ms, probot, moment, welcome, registerFont, Canvas, setwlc, log, args, prefix, guildcreate) {


    const { MessageEmbed } = require("discord.js")
    let msg = new Discord.MessageEmbed()
      .setColor('#6800FF')
      .setDescription(`https://cdn.discordapp.com/attachments/876198839764262912/876215480162074654/9dc05c200047af62ad5ff663f7fdc267.webp`)
      .setTitle('Bot Logo')
      .setAuthor(client.user.tag, client.user.avatarURL({ dynamic: true }))
      
      .setTimestamp()
      
      .setFooter(client.user.tag, client.user.avatarURL({ dynamic: true }));

    message.channel.send(msg)
  }
}