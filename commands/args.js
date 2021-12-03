module.exports = {
    name: 'args',
    description: "Example Arguments",

    execute(client, message, args){
        message.channel.send({ content: `${args[2]}` })
    }
}