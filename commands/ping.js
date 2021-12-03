module.exports = {
    name: 'ping',
    description: "Ping pong",

    execute(client, message, args){
        message.channel.send('Pong!')
    }
}