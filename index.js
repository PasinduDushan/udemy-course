require('dotenv').config()
const { Client, Intents, Collection } = require('discord.js');
const fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9')
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGE_TYPING
    ]
})

const slashCommands = [
    new SlashCommandBuilder().setName('ping').setDescription('Edited Ping pong!')
]
.map(command => command.toJSON());

const rest = new REST({ version: 9 }).setToken(process.env.TOKEN);

rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: slashCommands })
  .then(() => console.log('Slash Commands created successfully'))
  .catch(console.error)

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for(const file of commandFiles) {
    const command = require(`./commands/${file}`)

    client.commands.set(command.name, command)
}

for(const file of eventFiles){
    const event = require(`./events/${file}`);

    if(event.once){
        client.once(event.name, (...args) => event.execute(...args, client));
    } else {
        client.on(event.name, (...args) => event.execute(...args, client));
    }
}

client.login(process.env.TOKEN)