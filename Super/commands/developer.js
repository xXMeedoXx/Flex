module.exports = {
  name: 'developers',
  async execute(client, message, Discord, MessageAttachment, fs, ms, probot, moment, welcome, registerFont, Canvas, setwlc, log, args, prefix, guildcreate) {


    const { MessageEmbed } = require("discord.js")
    let msg = new Discord.MessageEmbed()
      .setColor('#6800FF')
      .setTitle('Bot Developer')
      .setAuthor(client.user.tag, client.user.avatarURL({ dynamic: true }))
      .setDescription("@Meedo#2322")
      .setTimestamp()
      .setImage(`https://cdn.discordapp.com/attachments/843738691981148162/875367724539318272/7_DD33E64.png`)
      .setFooter(client.user.tag, client.user.avatarURL({ dynamic: true }));

    message.channel.send(msg)
  }
}