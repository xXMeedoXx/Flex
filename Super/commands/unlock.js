module.exports = {
  name: 'unlock',
  description: "unlock channel",
  async execute(client, message, Discord, MessageAttachment, fs, ms, probot, moment, welcome, registerFont, Canvas, setwlc, log, args, prefix, guildcreate) {
    if (!message.guild.me.hasPermission('MANAGE_CHANNELS')) return
    if (!message.member.hasPermission('MANAGE_CHANNELS')) return

    message.channel.overwritePermissions([{
      id: message.guild.id,
      allow: ['SEND_MESSAGES'],
    }]).then(p => {
      message.channel.send(`**:unlock: <#${message.channel.id}> has been unlocked.**`)
    })

  }
}