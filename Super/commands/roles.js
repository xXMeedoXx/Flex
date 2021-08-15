module.exports = {
  name: 'roles',
  description: "display roles",
  async execute(client, message, Discord, MessageAttachment, fs, ms, probot, moment, welcome, registerFont, Canvas, setwlc, log, args, prefix, guildcreate) {
    
    let Roles = message.guild.roles.cache.map(role => `${role.name} - ${role.members.array().length}`).join("\n");
    message.channel.send("```" + Roles + "```", { split: { char: "\n" } });
  
  }
}