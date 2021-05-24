const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {

    const arrayOfStatus = [
        `MEASSGES1`,
        'MEASSGES2',
        'MEASSGES3'

    ];
    let index = 0;
    setInterval(() => {
        if(index === arrayOfStatus.length) index = 0;
        const status = arrayOfStatus[index];
        console.log(status)
        bot.user.setActivity(status, { type: "Please select a status" }).catch(console.error)// PLAYING, WATCHING, LISTENING, STREAMING,
    }, 5000) //in ms
});

bot.login('PASTE YOUR TOKEN');