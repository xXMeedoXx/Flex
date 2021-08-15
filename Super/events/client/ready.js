module.exports = (Discord, client, MessageAttachment, fs, ms, probot, moment, welcome, registerFont, Canvas, setwlc, log, prefix, guildcreate) => {
  client.user.setActivity(`${prefix}help`, { type: "PLAYING" })
  console.log(`bot is online`);
  guildcreate(client)
  welcome(client)
}
