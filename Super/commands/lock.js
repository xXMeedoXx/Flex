module.exports = {
  name: 'lock',
  permissions: ['MANAGE_CHANNELS'],
  async execute(client, message, Discord, MessageAttachment, fs, ms, probot, moment, welcome, registerFont, Canvas, setwlc, log, args, prefix, guildcreate) {
    
    message.channel.overwritePermissions([{
      id: message.guild.id,
      deny: ['SEND_MESSAGES'],
    }]).then(() => {
      var professor = (`**:lock: <#${message.channel.id}> has been locked.**`)
      message.channel.send(professor);
    })
  }
}