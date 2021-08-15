module.exports = (client, Discord, MessageAttachment, fs, ms, probot, welcome, log, setwlc, moment, registerFont, Canvas, prefix, guildcreate) => {
  const load_dir = (dirs) => {
    const event_files = fs.readdirSync(`./events/${dirs}`).filter(file => file.endsWith('.js'));
    for (const file of event_files) {
      const event = require(`../events/${dirs}/${file}`)
      const event_name = file.split('.')[0]
      client.on(event_name, event.bind(null, Discord, client, MessageAttachment, fs, ms, probot, moment, welcome, registerFont, Canvas, setwlc, log, prefix, guildcreate))
    }
  }
  
  ['client', 'guild'].forEach(e => load_dir(e))
}