type Period = {
  period: string;
  subject?: string;
  teacher?: string;
  time: string;
};

const sunday: Period[] = [
  {
    period: "1st Period",
    subject: "Applied Mechanics [L]",
    teacher: "AK [Akarsha Khawas]",
    time: "10:15-11:55",
  },
  {
    period: "2nd Period",
    subject: "Physics [L]",
    teacher: "BT[Baburam Tiwari]",
    time: "11:55-12:45",
  },
  {
    period: "Break",
    time: "12-45-1:35",
  },
  {
    period: "3rd Period",
    subject: "Basic Electrical [L]",
    teacher: "GB [Ganesh Bhandari]",
    time: "1:35-2:25",
  },
  {
    period: "4th Period",
    subject: "Math-I [L]",
    teacher: "GG [Gyanendra Gurung]",
    time: "2:25-3:15",
  },
  {
    period: "5th Period",
    subject: "Math-I [L]",
    teacher: "AKB [Arun Kumar Bhandari]",
    time: "3:15-4:05",
  },
];
const monday: Period[] = [
  {
    period: "1st Period",
    subject: "Physics [L]",
    teacher: "BT [Baburam Tiwari]",
    time: "10:15-11:05",
  },
  {
    period: "2nd Period",
    subject: "Math-I [L]",
    teacher: "AKB [Arun Kumar Bhandari]",
    time: "11:05-11:55",
  },
  {
    period: "3rd Period",
    subject: "Physics [T]",
    teacher: "BT [Baburam Tiwari] GS [Ganesh Shrestha]",
    time: "11:55-12:45",
  },
  {
    period: "Break",
    time: "12-45-1:35",
  },
  {
    period: "4th Period",
    subject: "Computer Programming [L]",
    teacher: "GG [Ganesh Gautam]",
    time: "1:35-3:15",
  },
  {
    period: "5th Period",
    subject: "Basic Electrical [L]",
    teacher: "GB [Ganesh Bhandari]",
    time: "4:05-4:55",
  },
];
const tuesday: Period[] = [];
const wednesday: Period[] = [];
const thursday: Period[] = [];
const friday: Period[] = [];

const BCT078ABRoutine = [sunday, monday, tuesday, wednesday, thursday, friday];

export default BCT078ABRoutine;
