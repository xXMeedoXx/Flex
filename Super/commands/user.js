module.exports = {
  name: 'user',
  description: "user info",
  async execute(client, message, Discord, MessageAttachment, fs, ms, probot, moment, welcome, registerFont, Canvas, setwlc, log, args, prefix, guildcreate) {
    const { guild, channel } = message
    const user = message.mentions.users.first() || message.member.user
    const member = guild.members.cache.get(user.id)


    const embed = new Discord.MessageEmbed()
      .setThumbnail(user.avatarURL())
      .setAuthor(`User info for ${user.username}`, user.displayAvatarURL())
      .addFields(
        {
          name: 'Name:',
          value: user.tag,
          inline: true,
        },
        {
          name: 'Nickname:',
          value: member.nickname || 'None',
          inline: true,
        },
        { name: '\u200B', value: '\u200B', inline: true},
        {
          name: 'Joined Server:',
          value: `\`${moment(member.joinedTimestamp).format("YYYY-DD-MM || hh:mm:ss a")} \n${moment(member.joinedTimestamp).fromNow()}\``,
          inline: true,
        },
        {
          name: 'Joined Discord',
          value: `\`${moment(user.createdTimestamp).format("YYYY-DD-MM || hh:mm:ss a")} \n${moment(user.createdTimestamp).fromNow()}\``,
          inline: true,
        },
        { name: '\u200B', value: '\u200B', inline: true},
        {
          name: 'Status:',
          value: user.presence.status,
          inline: true,
        },
        {
          name: 'Roles',
          value: member.roles.cache.size - 1,
          inline: true,
        }
      )

    channel.send(embed)





  }
}