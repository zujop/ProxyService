const { Client, Intents } = require('discord.js');
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, ]});
const {readdirSync} = require('fs')
client.commands = new Map()


const commands = readdirSync('./Commands').filter((file) => 
    file.endsWith('.js')
)


for (command of commands) {
    const file = require(`./Commands/${command}`)
    client.commands.set(file.name.toLowerCase(), file)
}


client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`)
})

client.on("message", (message) => {
  if (message.author.bot) return
    if (!message.guild) return
    const prefix = '-'
    const args = message.content.slice(prefix.length).split(/ +/g)
    const command = args.shift()

    if (!client.commands.has(command)) return
    client.commands.get(command).execute(client,message,args)
})
console.log('yea')
client.login(process.env.TOKEN)
