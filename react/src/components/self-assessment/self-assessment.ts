export const history = [
  {
    id: 1,
    label:
      "มีประวัติเดินทาง มาจากต่างประเทศที่เกิดโรค COVID-19 (ภายในระยะเวลา 1 เดือนที่ผ่านมา)",
  },
  {
    id: 2,
    label:
      "อยู่ใกล้ชิดกับผู้ป่วยยืนยัน COVID-19 (ใกล้กว่า 1 เมตร นานเกิน 5 นาที)",
  },
  {
    id: 3,
    label:
      "มีประวัติไปสถานที่ชุมนุมชน หรือสถานที่ที่มีการรวมกลุ่มกิจกรรมเป็นจำนวนมาก เช่น ตลาดนัด ห้างสรรพสินค้า สถานพยาบาล ขนส่งสาธารณะ งานเลี้ยง คอนเสิร์ต หรือชุมนุมทางการเมือง",
  },
  {
    id: 4,
    label:
      "ประกอบอาชีพที่สัมผัสใกล้ชิดกับแรงงานต่างชาติ สถานที่แออัด หรือติดต่อคนจำนวนมาก",
  },
];

const defaultSurveyJSON = {
  title: "COVID Screening",
  description: "This survey is to check the potential of spreading COVID-19.",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "checkbox",
          name: "Symptoms",
          title: "Do you have any of the following new or worsening symptoms?",
          isRequired: true,
          choices: [
            {
              value: "item1",
              text: "Fever or chills",
            },
            {
              value: "item2",
              text: "Cough",
            },
            {
              value: "item3",
              text: "Difficulty breathing",
            },
            {
              value: "item4",
              text: "Sore throat",
            },
            {
              value: "item5",
              text: "Runny or stuffy nose",
            },
            {
              value: "item6",
              text: "Decrease or lose of taste or smell",
            },
            {
              value: "item7",
              text: "Nausea, vomiting or diarrhea",
            },
            {
              value: "item8",
              text: "Not feeling well, extreme tiredness or sore muscles",
            },
            {
              value: "item9",
              text: "Pink eye or headache",
            },
            {
              value: "item10",
              text: "None of the above",
            },
          ],
        },
      ],
    },
  ],
};

const defaultSurveyCSS = {
  header: "bg-primary text-white p-3",
  body: "bg-light",
  completedPage: "p-3",
};

const defaultSurveyDATA = {
  Symptoms: [],
};

const defaultSurveyConfig = {
  defaultSurveyCSS,
  defaultSurveyDATA,
  defaultSurveyJSON,
};

export default defaultSurveyConfig;
