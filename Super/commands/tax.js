module.exports = {
  name: 'tax',
  description: "probot tax credits",
  async execute(client, message, Discord, MessageAttachment, fs, ms, probot, moment, welcome, registerFont, Canvas, setwlc, log, args, prefix, guildcreate) {

    let args1 = message.content.split(" ").slice(1).join(" ");
    if (!args1[0]) return message.channel.send(`${prefix}tax [number]`)
    let embed = new Discord.MessageEmbed()
      .setColor('#6800FF')
      .addFields(
        {
          name: "`المبلغ المراد دفعه : `", value: `**${args1}**`

        },
        {
          name: "`المبلغ شامل الضريبة :  `", value: `**${probot.taxs(args1)}**`

        },
        {
          name: "`الضريبة :  `", value: `**${probot.taxs(args1) - args1}**`

        },


      )
      .setFooter(`By  : ${message.author.username}`, `${message.author.displayAvatarURL()}`)
      .setThumbnail(message.author.displayAvatarURL())
      .setTimestamp()

    message.channel.send(embed)
  }



}
