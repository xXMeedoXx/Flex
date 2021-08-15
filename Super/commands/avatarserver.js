module.exports = {
  name: 'avatarserver',
  async execute(client, message, Discord, MessageAttachment, fs, ms, probot, moment, welcome, registerFont, Canvas, setwlc, log, args, prefix, guildcreate) {
    const avatarserver = new MessageAttachment(message.guild.iconURL({ dynamic: true }))
    message.channel.send(avatarserver)
  }
}