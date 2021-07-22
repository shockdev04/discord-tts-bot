import Discord from "discord.js";

interface ICmd {
    name: string
    description: string
    execute: (message: Discord.Message, args: string[]) => void
}

export { ICmd };