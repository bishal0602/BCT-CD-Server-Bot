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
const tuesday: Period[] = [
  {
    period: "1st Period",
    subject: "Basic Electrical [L]",
    teacher: "GB [Ganesh Bhandari]",
    time: "10:15-11:05",
  },
  {
    period: "2nd Period",
    subject: "Physics [T]",
    teacher: "GS [Ganesh Shrestha]",
    time: "11:05-11:55",
  },
  {
    period: "3rd Period",
    subject: "Math-I [L]",
    teacher: "AKB [Arun Kumar Bhandari]",
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
    time: "1:35-2:25",
  },
  {
    period: "5th Period",
    subject: "Basic Electrical (Alternate Week) [P]",
    teacher: "GB [Ganesh Bhandari]",
    time: "2:25-4:55",
  },
];
const wednesday: Period[] = [
  {
    period: "1st Period",
    subject: "Math-I [L]",
    teacher: " PA [Purnima Adhikari]",
    time: "10:15-11:05",
  },
  {
    period: "2nd Period",
    subject: "Applied Mechanics [T]",
    teacher: "GSB [Gopal Singh Bhandari]",
    time: "11:05-11:55",
  },
  {
    period: "3rd Period",
    subject: "Physics [T]",
    teacher: "GS [Ganesh Shrestha]",
    time: "11:55-12:45",
  },
  {
    period: "Break",
    time: "12-45-1:35",
  },
  {
    period: "4th Period",
    subject: "Drawing-I (Group B) [L+P]",
    teacher: "RC,SN [Ramesh Chaudhary] [Sanjaya Neupane]",
    time: "1:35-4:55",
  },
];
const thursday: Period[] = [
  {
    period: "1st Period",
    subject: "Computer Programming I (Group A) [P]",
    teacher: "GG [Ganesh Gautam]",
    time: "10:15-12:45",
  },
  {
    period: "Break",
    time: "12-45-1:35",
  },
  {
    period: "2nd Period",
    subject: "Applied Mechanics [T]",
    teacher: "GSB [Gopal Singh Bhandari]",
    time: "1:35-3:15",
  },
  {
    period: "4th Period",
    subject: "Physics(Group A) [P]",
    teacher: "BP,CG,GS",
    time: "3:15-4:55",
  },
];
const friday: Period[] = [
  {
    period: "1st Period",
    subject: "Drawing-I [L+P] (Group A) | Computer Programming I [P] (Group B)",
    teacher: "BP+AP (Group A) | GG [Ganesh Gautam] (Group B)",
    time: "10:15-12:45",
  },
  {
    period: "Break",
    time: "12-45-1:35",
  },
  {
    period: "2nd Period",
    subject: "Basic Electrical [L]",
    teacher: "GB [Ganesh Bhandari]",
    time: "1:35-2:25",
  },
  {
    period: "4th Period",
    subject: "Physics(Group B) [P]",
    teacher: "BKB,CG,KP",
    time: "3:15-4:55",
  },
];

const BCT078ABRoutine = [sunday, monday, tuesday, wednesday, thursday, friday];

export default BCT078ABRoutine;
