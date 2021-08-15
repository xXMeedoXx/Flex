module.exports = {
  name: 'log',
  permissions: ['MANAGE_GUILD'],
  async execute(client, message, Discord, MessageAttachment, fs, ms, probot, moment, welcome, registerFont, Canvas, setwlc, log, args, prefix, guildcreate) {

    if (!log[message.guild.id])
      log[message.guild.id] = {
        onoff: "Off"
      };
    if (log[message.guild.id].onoff === "Off")
      return [
        message.channel.send(`**:lock: The log Is __𝐎𝐍__ !**`),
        log[message.guild.id].onoff = "On",
        fs.writeFile("./json-files/log.json", JSON.stringify(log), err => {
          if (err)
            console.error(err).catch(err => {
              console.error(err)
            })
        })
      ];
    if (log[message.guild.id].onoff === "On")
      return [
        message.channel.send(`**:unlock: The log Is __𝐎𝐅𝐅__ !**`),
        log[message.guild.id].onoff = "Off",
        fs.writeFile("./json-files/log.json", JSON.stringify(log), err => {
          if (err)
            console.error(err).catch(err => {
              console.error(err)
            })
        })
      ]
  }
}
