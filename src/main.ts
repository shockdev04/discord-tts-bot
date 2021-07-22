import * as fs from "fs";
import dotenv from "dotenv";
import { client } from "./discord";
import { ICmd } from "./interfaces/cmd.interface";

const prefix = ".";

(async () => {
    console.log("Discord TTS Bot Started");

    dotenv.config();

    try {
        await client.login(process.env.TOKEN);

        const cmdFiles = fs.readdirSync(`${__dirname}/commands`).filter(file => file.endsWith(".js"));

        for (const cmdFile of cmdFiles) {
            const cmd: ICmd = await import(`./commands/${cmdFile}`);

            client.commands.set(cmd.name, cmd);
        }
    } catch (e) {
        throw e;
    }

    client.user?.setPresence({ activity: {
        type: "LISTENING",
            name: "Type .tts [text]"
    }});

    client.on("message", message => {
        if (!message.content.startsWith(prefix)) {
            return;
        }

        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift()?.toLowerCase();

        if (!client.commands.has(command)) {
            return;
        }

        try {
            client.commands.get(command).execute(message, args);
        } catch (error) {
            console.error(error);
            message.reply('There was an error trying to execute that command.');
        }
    });
})();

