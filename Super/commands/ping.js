module.exports = {
  name: 'ping',
  async execute(client, message, Discord, MessageAttachment, fs, ms, probot, moment, welcome, registerFont, Canvas, setwlc, log, args, prefix, guildcreate) {
    message.channel.send('Calculating ping...').then((resultMessage) => {
      const ping = resultMessage.createdTimestamp - message.createdTimestamp

      resultMessage.edit(`\`\`\`js\nYour Ping: ${Date.now() - message.createdTimestamp} ms\nBot Ping: ${client.ws.ping} ms\n\`\`\``)
    })
  },
}