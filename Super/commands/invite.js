module.exports = {
  name: 'invite',
  async execute(client, message, Discord, MessageAttachment, fs, ms, probot, moment, welcome, registerFont, Canvas, setwlc, log, args, prefix, guildcreate) {


    const { MessageEmbed } = require("discord.js")
    let msg = new Discord.MessageEmbed()
      .setColor('#6800FF')
      .setTitle('Invite')
      .setImage(`https://cdn.discordapp.com/attachments/843738691981148162/875369974963777566/12_5B07E16.png`)
      .setAuthor(client.user.tag, client.user.avatarURL({ dynamic: true }))
      .setDescription("[Support Server](https://discord.gg/SsECTjWEhr) \n [Invite Bot](https://discord.com/api/oauth2/authorize?client_id=846712234553638935&permissions=8&scope=bot) \n [Top.gg](https://top.gg/bot/846712234553638935)")
      .setTimestamp()
      
      .setFooter(client.user.tag, client.user.avatarURL({ dynamic: true }));

    message.channel.send(msg)
  }
}