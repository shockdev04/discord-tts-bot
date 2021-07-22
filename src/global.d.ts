import Discord from "discord.js";

declare module "discord.js" {
    export interface Client {
        commands: Collection<unknown, any>
        state: {
            connectedToVoice: boolean,
            connection?: Discord.VoiceConnection,
            lang: string
        }
    }
}