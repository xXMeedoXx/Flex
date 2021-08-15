module.exports = {
  name: 'clear',
  async execute(client, message, Discord, MessageAttachment, fs, ms, probot, moment, welcome, registerFont, Canvas, setwlc, log, args, prefix, guildcreate) {

    const input = args;

    if (!message.member.hasPermission('MANAGE_MESSAGES')) return

    let validnumber = message.content
      .split(" ")
      .slice(1)
      .join(" ");

    const amount = Number(input) > 100
      ? 101
      : Number(input) + 1;

    if (isNaN(validnumber)) return message.channel.send("**:rolling_eyes: - Please enter a valid number**")

    if (!args[0]) return await message.channel.messages.fetch({ limit: 100 }).then(messages => {
      message.channel.bulkDelete(messages, true);
      message.channel
        .send(`\`\`\`js\n${(messages, true).size - 2} messages have been deleted.\n\`\`\``)
        .then((sent) => {
          setTimeout(() => {
            sent.delete();
          }, 2500);
        });
    });

    if (input > 100) return message.channel.send('**:rolling_eyes: - You cannot delete more than 100 messages**')

    if (input > 99) return await message.channel.messages.fetch({ limit: 100 }).then(messages => {
      message.channel.bulkDelete(messages, true)
      message.channel
        .send(`\`\`\`js\n${input} messages have been deleted.\n\`\`\``)
        .then((sent) => {
          setTimeout(() => {
            sent.delete();
          }, 2500);
        });
    });

    if (Number(input) < 1) return await message.channel.messages.fetch({ limit: 1 }).then(messages => {
      message.channel.bulkDelete(messages, true)
      message.channel
        .send(`\`\`\`js\n${input} messages have been deleted.\n\`\`\``)
        .then((sent) => {
          setTimeout(() => {
            sent.delete();
          }, 2500);
        });
    });


    message.channel.bulkDelete(amount, true)
      .then((_message) => {
        message.channel
          .send(`\`\`\`js\n${input} messages have been deleted.\n\`\`\``)
          .then((sent) => {
            setTimeout(() => {
              sent.delete();
            }, 2500);
          });
      });
  }
}

