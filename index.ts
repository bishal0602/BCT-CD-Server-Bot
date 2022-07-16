import DiscordJS, { Intents } from "discord.js";
import WOKCommands from "wokcommands";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

const client = new DiscordJS.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_VOICE_STATES,
  ],
});

client.on("ready", async () => {
  client.user?.setActivity("BCT at pulchowk", {
    type: "PLAYING",
  });
  new WOKCommands(client, {
    commandsDir: path.join(__dirname, "commands"),
    // featuresDir: path.join(__dirname, "features"),

    testServers: process.env.TEST_SERVERS,
    botOwners: process.env.BOT_OWNERS,

    typeScript: false, // apparently since this project gets transpiled to js, setting ts true will cause the app to break in heroku

    // mongoUri: process.env.DB_CONNECT,

    disabledDefaultCommands: [
      "help",
      "channelonly",
      "command",
      "language",
      "prefix",
      "requiredrole",
      "slash",
    ],
  }).setDefaultPrefix("$");
});

client.login(process.env.BOT_TOKEN);
