// export const mainColor = rgb(13, 28, 70);

import PageFourR from "../Components/Report/PageFourR";
import PageoneR from "../Components/Report/PageoneR";
import PageThreeR from "../Components/Report/PageThreeR";
import PageTwoR from "../Components/Report/PageTwoR";
import EstRoundTwoBusiness from "../Images/EstRoundTwoBusiness";
import RoundTwoAnalytics from "../Images/RoundTwoAnalytics";
import RoundTwoDesignIcon from "../Images/RoundTwoDesignIcon";
import RoundTwoPeople from "../Images/RoundTwoPeople";

export const secondColor = "#Fdd300";
export const heading = "42px";
export const subHeading = "18px";
export const subHeadingOne = "12px";
export const headingWeight = "bold";
export const subHeadingWeight = 500;
export const subHeadingOneWeight = 300;

export const fontFamily = "'Poppins', sans-serif";

export const staticOneData = [
  {
    head: "Explore",
    subHeading:
      " What do you enjoy? What are your strengths? Begin to identify your competencies, transferable skills, interests, values and personality preferences. Gaining awareness of these core elements of self will help you ....",
  },
  {
    head: "Build",
    subHeading:
      "Strengthen your resume and cover letter writing skills. Refine your career goals and strategy. Test career paths through career conversations, shadowing, involvement in clubs, volunteering, internships, and part-time ....",
  },
  {
    head: "Launch",
    subHeading:
      "Make informed and meaningful career decisions. Remember that the choices you make today will not define your entire career path. Instead, focus on the experiences you would like to gain over the next couple of years. ",
  },
  {
    head: "Launch",
    subHeading:
      "Make informed and meaningful career decisions. Remember that the choices you make today will not define your entire career path. Instead, focus on the experiences you would like to gain over the next couple of years. ",
  },
];

export const selectData = [
  "Cricket",
  "Bollywood",
  "India",
  "Finance & Business",
  "Gaming",
  "Advice",
  "Animals & Awws",
  "Anime",
  "Art & Design",
  "Beauty",
  "Timpass",
  "Hobbies",
  "Cricket",
  "Bollywood",
  "India",
  "Finance & Business",
  "Gaming",
  "Advice",
  "Animals & Awws",
  "Anime",
  "Art & Design",
  "Beauty",
  "Timpass",
  "Hobbies",
  "Cricket",
  "Bollywood",
  "India",
  "Finance & Business",
  "Gaming",
  "Advice",
  "Animals & Awws",
  "Anime",
  "Art & Design",
  "Beauty",
  "Timpass",
  "Hobbies",
];

export const Colors = [
  "#fca503",
  "#fc6b03",
  "#fc4503",
  "#ad03fc",
  "#fc03df",
  "#fc037b",
  "#ffb3b3",
  "#ffb3d1",
  "#99b3ff",
  "#ff8c66",
];

export const communityLinkItems = [
  {
    colorLight: "#fff5f0",
    color: "red",
    tex: "community",
    navigate: "community",
  },
  {
    colorLight: "#f2ffed",
    color: "lightgreen",
    tex: "p2p community",
    navigate: "",
  },
];
export const peopleServerLinkItems = [
  {
    colorLight: "#fff5f0",
    color: "red",
    tex: "UnderGraduate",
    navigate: "peopleserve",
  },
  {
    colorLight: "#f2ffed",
    color: "lightgreen",
    tex: "Graduate",
    navigate: "",
  },
  { colorLight: "#c3f7f6", color: "#1ff2c5", tex: "+2 school", navigate: "" },
  {
    colorLight: "#ebd4fa",
    color: "#c77ef7",
    tex: "Higher School",
    navigate: "",
  },
];

export const carrerCommunity = [
  {
    colorLight: "#fff5f0",
    color: "red",
    tex: "What is carrer community?",
    navigate: "",
  },
  {
    colorLight: "#f2ffed",
    color: "lightgreen",
    tex: "Reflect & Discover",
    navigate: "",
  },
  {
    colorLight: "#c3f7f6",
    color: "#1ff2c5",
    tex: "Arts & Media",
    navigate: "",
  },
  {
    colorLight: "#ebd4fa",
    color: "#c77ef7",
    tex: "Finance & Consulting",
    navigate: "",
  },
  {
    colorLight: "#f7c3d3",
    color: "#f74a7e",
    tex: "HealthCare & Life Sciences ",
    navigate: "",
  },
];

export const roundTwoData = [
  {
    icon: <RoundTwoDesignIcon />,
    head: "VSAT: Round 2 - Design",
    subHeader: "See how you performed in this track",
    appeared: false,
  },
  {
    icon: <EstRoundTwoBusiness />,
    head: "VSAT: Round 2 - Business Operations",
    subHeader: "See how you performed in this track",
    appeared: true,
  },
  {
    icon: <RoundTwoPeople />,
    head: "VSAT: Round 2 - People Operations",
    subHeader: "See how you performed in this track",
    appeared: true,
  },
  {
    icon: <RoundTwoAnalytics />,
    head: "VSAT: Round 2 - Analytics",
    subHeader: "See how you performed in this track",
    appeared: true,
  },
];
export const roundOneData = [
  {
    icon: <RoundTwoDesignIcon />,
    head: "VSAT Strength Report",
    subHeader:
      "You will see detailed breakdown of your performance during round 1",
    appeared: true,
  },
];

export const PagesR = [
  <PageoneR key={0} />,
  <PageTwoR key={1} />,
  <PageThreeR key={2} />,
  <PageFourR key={3} />,
];

export const pageThreeTopData = [
  {
    tex: "Correct",
    color: "#42BD7D",
  },
  {
    tex: "Partially Correct",
    color: "#FFA50B",
  },
  {
    tex: "Incorrect",
    color: "#D65C6A",
  },
  {
    tex: "Skipped / Unattempted",
    color: "#DEDEDE",
  },
];
export const pageThreeBottomData = [
  {
    head: "Your overall performance",
    subHead: "72 Questions",

    data: [24, 3, 33, 12],
  },
  {
    head: "Performance of top 1%ile",
    subHead: "72 Questions",

    data: [47, 3, 17, 5],
  },
];

export const eventsData = [
  {
    name: "Hack In the North 5.0",
    time: "March 06, 2022",
    happening: "Happening Virtual",
  },
  {
    name: "Hackanova",
    time: "April 03, 2022",
    happening: "Happening Virtual",
  },
  {
    name: "Codeshastra 8.0",
    time: "March 22, 2022",
    happening: "Happening Virtual",
  },
  {
    name: "Design Development Days'22",
    time: "April 11, 2022",
    happening: "Happening Virtual",
  },
  {
    name: "Ideathon2022",
    time: "June 31, 2022",
    happening: "Happening Virtual",
  },
  {
    name: "Innerve 6.0",
    time: "August 29, 2022",
    happening: "Happening Virtual",
  },
];
