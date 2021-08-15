module.exports = {
  name: 'setlog',
  permissions: ['MANAGE_GUILD'],
  async execute(client, message, Discord, MessageAttachment, fs, ms, probot, moment, welcome, registerFont, Canvas, setwlc, log, args, prefix, guildcreate) {
    let room = message.content.split(" ").slice(1);
    let findroom2 = message.mentions.channels.first()
    let findroom = message.guild.channels.cache.find(r => r.name == room);
    let embedsetlog = new Discord.MessageEmbed()
      .setTitle("**Command: setlog**")
      .setDescription("choose a log channel")
      .addField(`**Usage:**`, `\n${prefix}setlog (channel)`)
      .addField(`**Examples:**`, `\n${prefix}setlog pro-logs\n${prefix}setlog #pro-logs`)
    if (!args[0]) return message.channel.send(embedsetlog)
    if (findroom) { } else if (!findroom2) return message.channel.send("**:rolling_eyes: - I can't find this channel**");

    message.channel.send("**:white_check_mark: The logs channel was set successfully**");
    log[message.guild.id] = {
      channel: room,
      onoff: "On"
    };
    fs.writeFile("./json-files/log.json", JSON.stringify(log), err => {
      if (err) console.error(err);
    });
  }
}