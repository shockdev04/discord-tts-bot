import { ICmd } from "../interfaces/cmd.interface";
import Discord from "discord.js";

class TTSJoin implements ICmd {
    name = "ttslang"
    description = "Join user channel"
    execute = async (message: Discord.Message, args: string[]) => {
        const lang = args[0];

        if(lang) {
            message.client.state.lang = lang;

            try {
                await message.channel.send(`Language has been set to ${lang}.`);
            } catch (e) {
                console.error(e);
            }
        }
    }
}

module.exports = new TTSJoin();