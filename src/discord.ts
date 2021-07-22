import Discord from "discord.js";

const client = new Discord.Client();

client.commands = new Discord.Collection();
client.state = {
    connectedToVoice: false,
    lang: "it"
}

export { client };