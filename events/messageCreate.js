const PREFIX = '?'

module.exports = {
    name: 'messageCreate',

    execute(message, client){
        if(message.author.bot) return;
        if(!message.content.startsWith(PREFIX)) return;

        const args = message.content.slice(PREFIX.length).trim().split(/ +/)
        const command = args.shift().toLowerCase()

       if(!client.commands.has(command)) return;

     try {
       client.commands.get(command).execute(client, message, args)
     } catch(e) {
         message.channel.send('Something went wrong on our side')
        console.log(e)
    }
    }
}