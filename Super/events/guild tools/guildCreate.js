module.exports = (client) => {
  client.on('guildCreate', guild => {

    let botrole = guild.roles.cache.find(role => role.name === "bot sys")
    guild.systemChannel.send(`**:innocent: - Thanks for inviting me on your server --- Please make my role ${botrole} high so i can make changes**`)

    guild.roles.create({
      data: {
        name: 'Muted role',
        permissions: ['CREATE_INSTANT_INVITE', 'ADD_REACTIONS', 'VIEW_CHANNEL', 'EMBED_LINKS', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'CONNECT', 'SPEAK', 'USE_VAD']
      }
    });
  });
}