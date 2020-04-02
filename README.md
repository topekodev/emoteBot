# emoteBot
Discord.js bot for twitch emotes

[Add to your server](https://discordapp.com/oauth2/authorize?client_id=628258149291261962&scope=bot)

![Screenshot](example.png)

# Instructions

- Install [nodejs](https://nodejs.org) 12 or newer
- Clone this repository
- Run ``npm install`` inside the directory
- Create new Discord application and bot from [here](https://discordapp.com/developers/applications)
- Create a new file named ``.env`` and add this line: ``DC_KEY=token`` where token is your bot's token
- The bot can be started with: ``node emoteBot.js`` or if you are on Linux and have screen installed: ``./startBot.sh``

# Contributing
- Add your emote as a .png or .gif file inside the "emotes" folder (Image height preferably 30px-64px)
- Add your emote into the "emotes.json" file (``"emotename": "filename.xxx"``)
