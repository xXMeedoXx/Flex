module.exports = (client) => {
  const Canvas = require("canvas");
  const { registerFont } = require("canvas")
  const { MessageAttachment } = require("discord.js");
  const fs = require('fs')

  client.on("guildMemberAdd", async user => {

    const welcome = JSON.parse(fs.readFileSync("./json-files/welcomer.json", "utf8"));///ملف معلومات رومات الويلكم
    if (!welcome) return console.log("i can't find the welcomer.json file")
    const channel = user.guild['channels'].cache['find'](ch => ch['name'] === `${welcome[user['guild'].id].channel}`);
    if (!channel) return
    
    registerFont('./fonts/Roboto-Light.ttf', { family: `Roboto` });///خط الانقليش
    registerFont('./fonts/Cairo-Light.ttf', { family: `Cairo` });///خط العربي

    const canvas = Canvas['createCanvas'](500, 281);
    const ctx = canvas['getContext']('2d');

    const WelcomeImage = await Canvas['loadImage']('https://cdn.discordapp.com/attachments/813339067785019423/834462218585112586/welcome-1-1.png'); /// background
    ctx.drawImage(WelcomeImage, 0, 0, canvas.width, canvas.height);/// احدثيات الخلفية

    ctx.font = '32px Roboto';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(user.displayName, 209, 110);

    ctx.font = '28px Cairo';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`اهلا بك في سيرفر`, 240, 145);

    ctx.font = '28px Roboto';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`${user.guild.name}`, 300, 180);

    ctx.beginPath();
    ctx.arc(100, 140, 94, 0, Math.PI * 2, true);///احدثيات الدائرة
    ctx.closePath();
    ctx.clip();

    const avatarUser = await Canvas.loadImage(user.user.displayAvatarURL({ format: 'jpg' }));
    ctx.drawImage(avatarUser, 7, 47, 187, 187);/// احدثيات الافاتار

    const attachment = new MessageAttachment(canvas.toBuffer(), `${user.id}///welcome.jpg`);
    channel.send(attachment);
});
}