


const Discord = require('discord.js');
const { MessageAttachment } = require('discord.js')
const client = new Discord.Client();
const fs = require('fs');
const ms = require("ms");
const probot = require("probot-tax");
const moment = require('moment');
const welcome = require('./events/guild tools/welcome');
const guildcreate = require('./events/guild tools/guildCreate')
const { registerFont, Canvas } = require("canvas");

/// JSON files /// JSON files /// JSON files

const setwlc = JSON.parse(fs.readFileSync("./json-files/welcomer.json", "utf8"));
const log = JSON.parse(fs.readFileSync("./json-files/log.json", "utf8"));

/// tools /// tools /// tools /// tools /// tools

client.login(process.env.token);
const prefix = process.env.prefix;

/// client system /// client system /// client system

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

/// command & event handlers /// command & event handlers

['command_handler', 'event_handler'].forEach(handler => {
  require(`./handlers/${handler}`)(client, Discord, MessageAttachment, fs, ms, probot, welcome, log, setwlc, moment, registerFont, Canvas, prefix, guildcreate)
})





 
 