import { ICmd } from "../interfaces/cmd.interface";
import Discord from "discord.js";

class TTSLeave implements ICmd {
    name = "ttsleave"
    description = "Leave user channel"
    execute = async (message: Discord.Message, args: string[]) => {
        if(message.member?.voice?.channel && message.client.state.connectedToVoice) {
            try {
                await message.member.voice.channel.leave();
                message.client.state.connectedToVoice = false;
                message.client.state.connection = undefined;
            } catch (e) {
                console.error(e);
            }
        }
    }
}

module.exports = new TTSLeave();