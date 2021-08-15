module.exports = {
  name: 'avatar',
  async execute(client, message, Discord, MessageAttachment, fs, ms, probot, moment, welcome, registerFont, Canvas, setwlc, log, args, prefix, guildcreate) {
    if (args[0]) {
      let user = message.mentions.users.first();
      if (message.mentions.users.size < 1) return message.channel.send("**I can't find this member**")
      const avatar = new MessageAttachment(user.avatarURL({ dynamic: true }))
      message.channel.send(avatar)
    } else {
      const avatar = new MessageAttachment(message.author.avatarURL({ dynamic: true }))
      message.channel.send(avatar)
    }
  }
}