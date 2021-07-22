import { ICmd } from "../interfaces/cmd.interface";
import Discord from "discord.js";

class TTSJoin implements ICmd {
    name = "ttsjoin"
    description = "Join user channel"
    execute = async (message: Discord.Message, args: string[]) => {
        if(message.member?.voice?.channel && !message?.client?.state?.connectedToVoice) {
            try {
                const connection = await message.member.voice.channel.join();
                message.client.state.connectedToVoice = true;
                message.client.state.connection = connection;
            } catch (e) {
                console.error(e);
            }
        }
    }
}

module.exports = new TTSJoin();