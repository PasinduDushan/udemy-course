module.exports = {
    name: 'youtube',
    description: "Sends the youtube official link",

    execute(client, message, args){
        message.channel.send('Pong!')
    }
}