import { ICmd } from "../interfaces/cmd.interface";
import Discord from "discord.js";
import * as googleTTS from 'google-tts-api'

class TTS implements ICmd {
    name = "tts"
    description = "Say something"
    execute = (message: Discord.Message, args: string[]) => {
        const text = args.join(" ");

        if(message.client?.state?.connection && message.client?.state?.connectedToVoice) {
            message.client.state.connection.play(googleTTS.getAudioUrl(text, {
                lang: message.client.state.lang,
                slow: false,
            }), { bitrate: "auto" });
        }
    }
}

module.exports = new TTS();