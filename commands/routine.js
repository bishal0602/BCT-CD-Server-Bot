const routineData = require("../routineData");
const { sunday, monday, tuesday, wednesday, thursday, friday } = routineData;

module.exports = {
  category: "Routine",
  description: "Sends routine of the next day or the specified day",

  slash: false,
  testOnly: false,

  callback: ({ message, text }) => {
    // console.log(text);
    // console.log(message);
    // console.log(routineData);
    let date, dayOfTheWeek, hour;
    if (text == 0) {
      date = new Date(message.createdTimestamp - 20000);
      dayOfTheWeek = date.getDay();
      hour = date.getHours();
    }

    if (
      text.toLowerCase() === "sun" ||
      text.toLowerCase() === "sun" ||
      (dayOfTheWeek === 0 && hour < 10) ||
      (dayOfTheWeek === 6 && hour >= 10)
    ) {
      let routineArr = [];
      sunday.forEach((sub) => {
        routineArr.push({
          name: sub.subject
            ? `**${sub.period}: ${sub.subject}**`
            : `**${sub.period}**`,
          value: sub.teacher
            ? `Teacher: ${sub.teacher}\nTime: ${sub.time}`
            : `Time: ${sub.time}`,
        });
      });
      const embedExample = {
        color: "#5D3FD3",
        title: "Sunday Routine",
        fields: [routineArr],
      };
      message.reply({
        embeds: [embedExample],
      });
    } else if (
      text.toLowerCase() === "mon" ||
      text.toLowerCase() === "monday" ||
      (dayOfTheWeek === 1 && hour < 10) ||
      (dayOfTheWeek === 0 && hour >= 10)
    ) {
      let routineArr = [];
      monday.forEach((sub) => {
        routineArr.push({
          name: sub.subject
            ? `**${sub.period}: ${sub.subject}**`
            : `**${sub.period}**`,
          value: sub.teacher
            ? `Teacher: ${sub.teacher}\nTime: ${sub.time}`
            : `Time: ${sub.time}`,
        });
      });
      const embedExample = {
        color: "#5D3FD3",
        title: "Monday Routine",
        fields: [routineArr],
      };
      message.reply({
        embeds: [embedExample],
      });
    } else if (
      text.toLowerCase() === "tue" ||
      text.toLowerCase() === "tuesday" ||
      (dayOfTheWeek === 2 && hour < 10) ||
      (dayOfTheWeek === 1 && hour >= 10)
    ) {
      let routineArr = [];
      tuesday.forEach((sub) => {
        routineArr.push({
          name: sub.subject
            ? `**${sub.period}: ${sub.subject}**`
            : `**${sub.period}**`,
          value: sub.teacher
            ? `Teacher: ${sub.teacher}\nTime: ${sub.time}`
            : `Time: ${sub.time}`,
        });
      });
      const embedExample = {
        color: "#5D3FD3",
        title: "Tuesday Routine",
        fields: [routineArr],
      };
      message.reply({
        embeds: [embedExample],
      });
    } else if (
      text.toLowerCase() === "wed" ||
      text.toLowerCase() === "wednesday" ||
      (dayOfTheWeek === 3 && hour < 10) ||
      (dayOfTheWeek === 2 && hour >= 10)
    ) {
      let routineArr = [];
      wednesday.forEach((sub) => {
        routineArr.push({
          name: sub.subject
            ? `**${sub.period}: ${sub.subject}**`
            : `**${sub.period}**`,
          value: sub.teacher
            ? `Teacher: ${sub.teacher}\nTime: ${sub.time}`
            : `Time: ${sub.time}`,
        });
      });
      const embedExample = {
        color: "#5D3FD3",
        title: "Wednesday Routine",
        fields: [routineArr],
      };
      message.reply({
        embeds: [embedExample],
      });
    } else if (
      text.toLowerCase() === "thu" ||
      text.toLowerCase() === "thursday" ||
      (dayOfTheWeek === 4 && hour < 10) ||
      (dayOfTheWeek === 3 && hour >= 10)
    ) {
      let routineArr = [];
      thursday.forEach((sub) => {
        routineArr.push({
          name: sub.subject
            ? `**${sub.period}: ${sub.subject}**`
            : `**${sub.period}**`,
          value: sub.teacher
            ? `Teacher: ${sub.teacher}\nTime: ${sub.time}`
            : `Time: ${sub.time}`,
        });
      });
      const embedExample = {
        color: "#5D3FD3",
        title: "Thursday Routine",
        fields: [routineArr],
      };
      message.reply({
        embeds: [embedExample],
      });
    } else if (
      text.toLowerCase() === "fri" ||
      text.toLowerCase() === "friday" ||
      (dayOfTheWeek === 5 && hour < 10) ||
      (dayOfTheWeek === 4 && hour >= 10)
    ) {
      let routineArr = [];
      friday.forEach((sub) => {
        routineArr.push({
          name: sub.subject
            ? `**${sub.period}: ${sub.subject}**`
            : `**${sub.period}**`,
          value: sub.teacher
            ? `Teacher: ${sub.teacher}\nTime: ${sub.time}`
            : `Time: ${sub.time}`,
        });
      });
      const embedExample = {
        color: "#5D3FD3",
        title: "Friday Routine",
        fields: [routineArr],
      };
      message.reply({
        embeds: [embedExample],
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
};
