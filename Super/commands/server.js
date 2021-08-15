module.exports = {
  name: 'server',
  description: "server info",
  async execute(client, message, Discord, MessageAttachment, fs, ms, probot, moment, welcome, registerFont, Canvas, setwlc, log, args, prefix, guildcreate) {
    const guild = message.guild
    const memberCount = guild.members.cache.filter(member => !member.user.bot).size;
    const botCount = guild.members.cache.filter(member => member.user.bot).size;

    const embed = new Discord.MessageEmbed()
      .setTitle(`**${message.guild.name}**`)
      .setColor("#000000")
      .addFields(
        { name: '**🌐|Server Name:**', value: `${guild.name}\n[${guild.id}]`, inline: true },
        { name: ':date: | Date created:', value: `${moment(guild.createdTimestamp).format("YYYY-MM-DD")} | ${moment(guild.createdTimestamp).format("hh:mm:ss a")}\n${moment(guild.createdTimestamp).fromNow()}`, inline: true },
        { name: '**:crown: | Owner:**', value: `${guild.owner}`, inline: true },
        { name: '**:busts_in_silhouette: | users:**', value: `Members: [ **${memberCount}** ]\nBot: [ **${botCount}** ]`, inline: true },
        { name: `**:speech_balloon: Channels [ ${guild.channels.cache.size} ]**`, value: `**${guild.channels.cache.filter((ch) => ch.type === "text").size}** Text | **${guild.channels.cache.filter((ch) => ch.type === "voice").size}** Voice | **${guild.channels.cache.filter((ch) => ch.type === "category").size}** Category`, inline: true },
        { name: "**:sparkles: Boosts:**", value: `Boost Tier: ${guild.premiumTier ? `Tier ${guild.premiumTier}` : "**None**"}\nBoost Count: **${guild.premiumSubscriptionCount || "0"}**`, inline: true },
        { name: `:closed_lock_with_key: Roles [ ${guild.roles.cache.size} ]`, value: `To see a list with all roles use ${prefix}roles`, inline: true},
        { name: `:innocent: Emojis [ ${guild.emojis.cache.size} ]`, value: `Regular: **${guild.emojis.cache.filter((e) => !e.animated).size}**\nAnimated: **${guild.emojis.cache.filter((e) => e.animated).size}**`, inline: true},
        { name: `:earth_africa: Others:`, value: `Region:** ${guild.region}**\nVerificationLevel:** ${message.guild.verificationLevel}**`, inline: true}
      )


    message.channel.send(embed)

  }
}