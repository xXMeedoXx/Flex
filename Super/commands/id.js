module.exports = {
  name: 'id',
  async execute(client, message, Discord, MessageAttachment, fs, ms, probot, moment, welcome, registerFont, Canvas, setwlc, log, args, prefix, guildcreate) {
    var user = message.guild.member(message.mentions.members.first() || message.author);
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .addField(`ID USER : [ ${user.id} ]`, `${user.user}`)
      .setThumbnail(user.user.avatarURL())
      .setFooter(`- Requested By: ${message.author.tag}`)
    message.channel.send({ embed });
  }
}