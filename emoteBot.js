const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
const fs = require('fs');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("Type twitch emote");
});

const emotes = JSON.parse(fs.readFileSync('emotes.json'));

console.log(emotes);

client.on('message', msg => {
    if(emotes.hasOwnProperty(msg.content)) {
      try {
        msg.delete();
      } catch(e) {}
      const emoteAttachment = new Discord.MessageAttachment('./emotes/' + emotes[msg.content], emotes[msg.content]);
      const msgEmbed = new Discord.MessageEmbed()
        .setColor('#FFFFFF')
        .setAuthor(msg.author.username, msg.author.avatarURL())
        .attachFiles(emoteAttachment)
        .setImage('attachment://' + emotes[msg.content])
      try {
        msg.channel.send(msgEmbed);
      } catch(e) {}
    }
});

client.login(process.env.DC_KEY);
