const { MessageEmbed } = require('discord.js');

module.exports = {
    description: 'Ohhh this funi',
    category: 'Fun',
    cooldown: '3s',
    callback: async (message) => {
        const somethingRandom = require('some-random-cat').Random
        somethingRandom.getJoke().then(res => {
            const embed = new MessageEmbed()
            .setTitle(res.title)
            .setURL(res.url)
            .setDescription(res.body)
            .setColor('RANDOM')
            message.channel.send(embed)
        }).catch(e => message.channel.send('API Error.'))
    }
};