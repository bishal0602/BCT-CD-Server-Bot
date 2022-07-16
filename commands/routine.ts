import { ICommand } from "wokcommands";
import { MessageEmbed } from "discord.js";
import BCT078CDRoutine from "../routines/BCT078CD";
import BCT078ABRoutine from "../routines/BCT078AB";

type Period = {
  period: string;
  subject?: string;
  teacher?: string;
  time: string;
};

type Routine = {
  name: string;
  value: string;
};

//Server IDS

const TestServerId = process.env.TEST_SERVERS;
const BCT078CDGuildId = "968674820038459432";
const BCT078ABGuildId = "968674913642770462";

// Get routine of a day by passing day as argument
function getRoutine(Periods: Period[], day: string): MessageEmbed {
  let routineArr: Routine[] = [];
  Periods.forEach((period: Period) => {
    routineArr.push({
      name: period.subject
        ? `**${period.period}: ${period.subject}**`
        : `**${period.period}**`,
      value: period.teacher
        ? `Teacher: ${period.teacher}\nTime: ${period.time}`
        : `Time: ${period.time}`,
    });
  });
  const embedExample = new MessageEmbed()
    .setColor("#5D3FD3")
    .setTitle(`${day} Routine`)
    .setFields(routineArr);
  return embedExample;
}

export default {
  category: "Routine",
  description: "Sends routine of the next day or the specified day",

  slash: false,
  testOnly: false,

  callback: ({ message, text }) => {
    // Checks the server from where the message was sent and assigns the specific routine
    let routine: Period[][] = [];
    switch (message.guildId) {
      case BCT078CDGuildId:
        routine = BCT078CDRoutine;
        break;
      case BCT078ABGuildId:
        routine = BCT078ABRoutine;
        break;
      default:
        message.reply("Server not registered!");
        return;
    }
    const [sunday, monday, tuesday, wednesday, thursday, friday] = routine;

    // Getting the day when user doesn't specify a particular day
    let date: Date,
      dayOfTheWeek = -1,
      hour = -1; // -1 so it is never undefined yet never passes any condition unless provided a genuine value
    if (!text) {
      date = new Date(message.createdTimestamp);
      dayOfTheWeek = date.getDay();
      hour = date.getHours();
    }

    if (
      text.toLowerCase() === "sun" ||
      text.toLowerCase() === "sunday" ||
      (dayOfTheWeek === 0 && hour < 10) ||
      (dayOfTheWeek === 6 && hour >= 10)
    ) {
      message.reply({
        embeds: [getRoutine(sunday, "Sunday")],
      });
    } else if (
      text.toLowerCase() === "mon" ||
      text.toLowerCase() === "monday" ||
      (dayOfTheWeek === 1 && hour < 10) ||
      (dayOfTheWeek === 0 && hour >= 10)
    ) {
      message.reply({
        embeds: [getRoutine(monday, "Monday")],
      });
    } else if (
      text.toLowerCase() === "tue" ||
      text.toLowerCase() === "tuesday" ||
      (dayOfTheWeek === 2 && hour < 10) ||
      (dayOfTheWeek === 1 && hour >= 10)
    ) {
      message.reply({
        embeds: [getRoutine(tuesday, "Tuesday")],
      });
    } else if (
      text.toLowerCase() === "wed" ||
      text.toLowerCase() === "wednesday" ||
      (dayOfTheWeek === 3 && hour < 10) ||
      (dayOfTheWeek === 2 && hour >= 10)
    ) {
      message.reply({
        embeds: [getRoutine(wednesday, "Wednesday")],
      });
    } else if (
      text.toLowerCase() === "thu" ||
      text.toLowerCase() === "thursday" ||
      (dayOfTheWeek === 4 && hour < 10) ||
      (dayOfTheWeek === 3 && hour >= 10)
    ) {
      message.reply({
        embeds: [getRoutine(thursday, "Thursday")],
      });
    } else if (
      text.toLowerCase() === "fri" ||
      text.toLowerCase() === "friday" ||
      (dayOfTheWeek === 5 && hour < 10) ||
      (dayOfTheWeek === 4 && hour >= 10)
    ) {
      message.reply({
        embeds: [getRoutine(friday, "Friday")],
      });
    } else if (
      text.toLowerCase() === "sat" ||
      text.toLowerCase() === "saturday" ||
      (dayOfTheWeek === 6 && hour < 10) ||
      (dayOfTheWeek === 5 && hour >= 10)
    ) {
      message.reply("Bruh! Sanibar ni k routine herira?");
    } else {
      message.reply(
        "Invalid Argument: \nPlease type: `sun, mon, tue, wed, thu` or `fri` to get the routine of the respective day."
      );
    }
  },
} as ICommand;
