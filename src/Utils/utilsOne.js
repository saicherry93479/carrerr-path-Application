export const technologies = [
  {
    value: "Ethical Hacking",
    selected: false,
    color: null,
    depart: "ENGINEERING-CSE-CYBERSECURITY",
    id: 0,
  },

  {
    value: "Big Data Analytics",
    selected: false,
    color: null,
    depart: "ENGINEERING-CSE-COLUDCOMPUTING",
    id: 1,
  },

  {
    value: "Cloud security",
    selected: false,
    color: null,
    depart: "ENGINEERING-CSE-COLUDCOMPUTING",
    id: 2,
  },

  {
    value: "Bug Bounty Hunting",
    selected: false,
    color: null,
    depart: "ENGINEERING-CSE-CYBERSECURITY",
    id: 3,
  },
  {
    value: "Revit",
    selected: false,
    color: null,
    depart: "ENGINEERING-CIVIL-STRUCTRUAL ENGINEERING",
    id: 4,
  },
  {
    value: "DevOps",
    selected: false,
    color: null,
    depart: "ENGINEERING-CSE-COLUDCOMPUTING",
    id: 5,
  },
  {
    value: "Auto Cad",
    selected: false,
    color: null,
    depart: "ENGINEERING-MECHANICAL-ADVANCED MANFACTURING",
    id: 6,
  },
  {
    value: "Machine Learning",
    selected: false,
    color: null,
    depart: "ENGINEERING-CSE-COLUDCOMPUTING",
    id: 7,
  },
  {
    value: "Artificial Intelligence",
    selected: false,
    color: null,
    depart: "ENGINEERING-CSE-COLUDCOMPUTING",
    id: 8,
  },
  {
    value: "Gynacologist",
    selected: false,
    color: null,
    depart: "MEDICAL-MBBS-GYNCOLOGY",
    id: 9,
  },

  {
    value: "Matlab",
    selected: false,
    color: null,
    depart: "ENGINEERING-MECHANICAL-3D MODELLING",
    id: 10,
  },

  {
    value: "8trato",
    selected: false,
    color: null,
    depart: "ENGINEERING-CIVIL-STRUCTRUAL ENGINEERING",
    id: 11,
  },

  {
    value: "Accounting",
    selected: false,
    color: null,
    depart: "FINANCE-APPLIED ECONOMICS-INTERNATIONAL FINANCE",
    id: 12,
  },
  {
    value: "Finance",
    selected: false,
    color: null,
    depart: "FINANCE-BANKING & FINANCE-BUSINESS ADMINSTRATION",
    id: 13,
  },
  {
    value: "Cardiac Studies",
    selected: false,
    color: null,
    depart: "MEDICAL-PHARM D-PHARMNOGICAL CHEMISTRY",
    id: 14,
  },
  {
    value: "AutoCad Common",
    selected: false,
    color: null,
    depart: "ENGINEERING-CIVIL-GEO ENGINEERING",
    id: 15,
  },
  {
    value: "Economics",
    selected: false,
    color: null,
    depart: "FINANCE-MODELLING-COMPAN SECRET",
    id: 16,
  },

  {
    value: "Neurology",
    selected: false,
    color: null,
    depart: "MEDICAL-AG BSc-DAIRY SCIENCE",
    id: 17,
  },
];

export const engDepart = [
  { value: "CSE", colored: false, color: null },
  { value: "CIVIL", colored: false, color: null },
  { value: "MECHANICAL", colored: false, color: null },
];
export const medicalDepart = [
  { value: "MBBS", colored: false, color: null },
  { value: "PHARM D", colored: false, color: null },
  { value: "AG BSc", colored: false, color: null },
];
export const finnanceDepart = [
  { value: "APPLIED ECONOMICS", colored: false, color: null },
  { value: "MECTRONICS", colored: false, color: null },
  { value: "MODELLING", colored: false, color: null },
];
export const allBranches = [engDepart, finnanceDepart, medicalDepart];

export const allCourse = ["Engineering", "Finance", "Medical"];

export const cse = [
  { value: "COLUDCOMPUTING", colored: false, color: null },
  { value: "CYBERSECURITY", colored: false, color: null },
];
export const civil = [
  { value: "STRUCTRUAL ENGINEERING", colored: false, color: null },
  { value: "GEO ENGINEERING", colored: false, color: null },
];
export const mechanical = [
  { value: "MECTRONICS", colored: false, color: null },
  { value: "ADVANCED MANFACTURING", colored: false, color: null },
];
export const finananceOne = [
  { value: "INTERNATIONAL FINANCE", colored: false, color: null },
  { value: "TAXATION ", colored: false, color: null },
];
export const financeTwo = [
  { value: "BUSINESS ADMINSTRATION", colored: false, color: null },
  { value: "CWM", colored: false, color: null },
];
export const financeThree = [
  { value: "COMPAN SECRET", colored: false, color: null },
  { value: "STATSTICS", colored: false, color: null },
];
export const medicalOne = [
  { value: "GYNCOLOGY", colored: false, color: null },
  { value: "OBSTETRICS", colored: false, color: null },
];
export const medicalTwo = [
  { value: "PHARMNOGICAL CHEMISTRY", colored: false, color: null },
  { value: "PEDODONTICS", colored: false, color: null },
];
export const medicalThree = [
  { value: "DAIRY SCIENCE", colored: false, color: null },
  { value: "FISHERIES", colored: false, color: null },
];
export const eng = [cse, civil, mechanical];
export const finance = [finananceOne, financeTwo, financeThree];
export const medical = [medicalOne, medicalTwo, medicalThree];

export const allTechos = [eng, finance, medical];
