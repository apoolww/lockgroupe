const { Client } = require('discord.js-selfbot-v13'),
    request = require('request'),
    client = new Client(),
    user = 'votre_id'

client.on('messageCreate', async message => {
    if (message.content === '!lock') {
        message.edit('...')
        setInterval(async () => {
            request(`https://discord.com/api/v9/channels/${message.channel.id}/recipients/${user}`, {
                "headers": {
                    "accept": "*/*",
                    "authorization": `${client.token}`,
                },
                "method": "PUT",
            }, (err, response, body) => {
            });
        }, 350);
    }
})

client.on('ready', async () => {
    console.log(`${client.user.tag}`)
})

client.login("ton token")
