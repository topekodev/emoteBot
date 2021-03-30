const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
const fs = require('fs');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("!emotebot");
});

const emotes = JSON.parse(fs.readFileSync('emotes.json'));

console.log(emotes);

client.on('message', msg => {
  if (emotes.hasOwnProperty(msg.content)) {
    msg.delete().catch(console.error);
    msg.channel.send(new Discord.MessageEmbed()
      .setColor('#FFFFFF')
      .setAuthor(msg.author.username, msg.author.avatarURL())
      .setImage(emotes[msg.content])
    ).catch(console.error);
  } else {
    if (msg.content === '!emotebot') {
      msg.channel.send(new Discord.MessageEmbed()
        .setColor('#FFFFFF')
        .setAuthor(client.user.username, client.user.avatarURL())
        .setDescription('Discord bot for Twitch emotes. Type any available emote in the chat and the bot will replace your message with the emote.')
        .addField('Emotes','[List of emotes](https://github.com/TopekoDev/emoteBot/blob/master/emotes.json)')
        .addField('Contribute','[GitHub](https://github.com/TopekoDev/emoteBot)')
        .setFooter('Made by Topeko', 'https://avatars.githubusercontent.com/u/45265669')
      ).catch(console.error);
    }
  }
});

client.login(process.env.DC_KEY);
