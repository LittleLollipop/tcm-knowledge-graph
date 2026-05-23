const RELATIONSHIPS = [
  {
    "source": "F001",
    "target": "H001",
    "role": "君",
    "dosage": "9g"
  },
  {
    "source": "F001",
    "target": "H002",
    "role": "臣",
    "dosage": "6g"
  },
  {
    "source": "F001",
    "target": "H067",
    "role": "佐",
    "dosage": "6g"
  },
  {
    "source": "F001",
    "target": "H077",
    "role": "使",
    "dosage": "3g"
  },
  {
    "source": "F002",
    "target": "H002",
    "role": "君",
    "dosage": "9g"
  },
  {
    "source": "F002",
    "target": "H080",
    "role": "臣",
    "dosage": "9g"
  },
  {
    "source": "F002",
    "target": "H004",
    "role": "佐",
    "dosage": "9g"
  },
  {
    "source": "F002",
    "target": "H077",
    "role": "使",
    "dosage": "6g"
  },
  {
    "source": "F003",
    "target": "H021",
    "role": "君",
    "dosage": "30g"
  },
  {
    "source": "F003",
    "target": "H022",
    "role": "君",
    "dosage": "30g"
  },
  {
    "source": "F003",
    "target": "H008",
    "role": "臣",
    "dosage": "18g"
  },
  {
    "source": "F003",
    "target": "H009",
    "role": "佐",
    "dosage": "18g"
  },
  {
    "source": "F003",
    "target": "H077",
    "role": "使",
    "dosage": "15g"
  },
  {
    "source": "F004",
    "target": "H010",
    "role": "君",
    "dosage": "7.5g"
  },
  {
    "source": "F004",
    "target": "H011",
    "role": "君",
    "dosage": "3g"
  },
  {
    "source": "F004",
    "target": "H067",
    "role": "臣",
    "dosage": "6g"
  },
  {
    "source": "F004",
    "target": "H022",
    "role": "佐",
    "dosage": "5g"
  },
  {
    "source": "F004",
    "target": "H008",
    "role": "佐",
    "dosage": "2.5g"
  },
  {
    "source": "F004",
    "target": "H077",
    "role": "佐使",
    "dosage": "2.5g"
  },
  {
    "source": "F005",
    "target": "H012",
    "role": "君",
    "dosage": "24g"
  },
  {
    "source": "F005",
    "target": "H018",
    "role": "臣",
    "dosage": "9g"
  },
  {
    "source": "F005",
    "target": "H074",
    "role": "佐",
    "dosage": "9g"
  },
  {
    "source": "F005",
    "target": "H077",
    "role": "佐使",
    "dosage": "9g"
  },
  {
    "source": "F005",
    "target": "H004",
    "role": "佐",
    "dosage": "9g"
  },
  {
    "source": "F005",
    "target": "H064",
    "role": "佐",
    "dosage": "9g"
  },
  {
    "source": "F006",
    "target": "H014",
    "role": "君",
    "dosage": "50g"
  },
  {
    "source": "F006",
    "target": "H015",
    "role": "臣",
    "dosage": "18g"
  },
  {
    "source": "F006",
    "target": "H077",
    "role": "佐",
    "dosage": "6g"
  },
  {
    "source": "F007",
    "target": "H019",
    "role": "君",
    "dosage": "9g"
  },
  {
    "source": "F007",
    "target": "H018",
    "role": "臣",
    "dosage": "6g"
  },
  {
    "source": "F007",
    "target": "H020",
    "role": "佐",
    "dosage": "6g"
  },
  {
    "source": "F007",
    "target": "H016",
    "role": "佐使",
    "dosage": "9g"
  },
  {
    "source": "F008",
    "target": "H018",
    "role": "臣",
    "dosage": "9g"
  },
  {
    "source": "F008",
    "target": "H016",
    "role": "臣",
    "dosage": "9g"
  },
  {
    "source": "F008",
    "target": "H040",
    "role": "佐",
    "dosage": "12g"
  },
  {
    "source": "F008",
    "target": "H041",
    "role": "佐",
    "dosage": "9g"
  },
  {
    "source": "F008",
    "target": "H078",
    "role": "佐",
    "dosage": "3g"
  },
  {
    "source": "F008",
    "target": "H025",
    "role": "佐",
    "dosage": "9g"
  },
  {
    "source": "F008",
    "target": "H012",
    "role": "佐使",
    "dosage": "6g"
  },
  {
    "source": "F008",
    "target": "H077",
    "role": "使",
    "dosage": "6g"
  },
  {
    "source": "F009",
    "target": "H030",
    "role": "君",
    "dosage": "12g"
  },
  {
    "source": "F009",
    "target": "H037",
    "role": "臣",
    "dosage": "24g"
  },
  {
    "source": "F009",
    "target": "H048",
    "role": "佐",
    "dosage": "12g"
  },
  {
    "source": "F009",
    "target": "H031",
    "role": "使",
    "dosage": "9g"
  },
  {
    "source": "F010",
    "target": "H012",
    "role": "君",
    "dosage": "9g"
  },
  {
    "source": "F010",
    "target": "H078",
    "role": "臣",
    "dosage": "9g"
  },
  {
    "source": "F010",
    "target": "H080",
    "role": "臣",
    "dosage": "9g"
  },
  {
    "source": "F010",
    "target": "H076",
    "role": "佐",
    "dosage": "9g"
  },
  {
    "source": "F010",
    "target": "H038",
    "role": "佐",
    "dosage": "9g"
  },
  {
    "source": "F010",
    "target": "H077",
    "role": "使",
    "dosage": "4.5g"
  },
  {
    "source": "F010",
    "target": "H004",
    "role": "佐",
    "dosage": "3g"
  },
  {
    "source": "F010",
    "target": "H008",
    "role": "佐使",
    "dosage": "3g"
  },
  {
    "source": "F011",
    "target": "H035",
    "role": "君",
    "dosage": "90g"
  },
  {
    "source": "F011",
    "target": "H003",
    "role": "臣",
    "dosage": "30g"
  },
  {
    "source": "F011",
    "target": "H006",
    "role": "臣",
    "dosage": "30g"
  },
  {
    "source": "F011",
    "target": "H076",
    "role": "佐",
    "dosage": "30g"
  },
  {
    "source": "F011",
    "target": "H047",
    "role": "佐",
    "dosage": "30g"
  },
  {
    "source": "F011",
    "target": "H037",
    "role": "佐",
    "dosage": "30g"
  },
  {
    "source": "F011",
    "target": "H064",
    "role": "佐",
    "dosage": "30g"
  },
  {
    "source": "F011",
    "target": "H038",
    "role": "佐",
    "dosage": "30g"
  },
  {
    "source": "F011",
    "target": "H077",
    "role": "使",
    "dosage": "30g"
  },
  {
    "source": "F012",
    "target": "H040",
    "role": "君",
    "dosage": "15g"
  },
  {
    "source": "F012",
    "target": "H076",
    "role": "臣",
    "dosage": "9g"
  },
  {
    "source": "F012",
    "target": "H038",
    "role": "臣",
    "dosage": "9g"
  },
  {
    "source": "F012",
    "target": "H002",
    "role": "佐",
    "dosage": "6g"
  },
  {
    "source": "F013",
    "target": "H042",
    "role": "君",
    "dosage": "18g"
  },
  {
    "source": "F013",
    "target": "H016",
    "role": "臣",
    "dosage": "12g"
  },
  {
    "source": "F013",
    "target": "H030",
    "role": "佐",
    "dosage": "6g"
  },
  {
    "source": "F014",
    "target": "H074",
    "role": "君",
    "dosage": "9g"
  },
  {
    "source": "F014",
    "target": "H044",
    "role": "臣",
    "dosage": "9g"
  },
  {
    "source": "F014",
    "target": "H076",
    "role": "佐",
    "dosage": "9g"
  },
  {
    "source": "F014",
    "target": "H077",
    "role": "使",
    "dosage": "9g"
  },
  {
    "source": "F015",
    "target": "H043",
    "role": "君",
    "dosage": "15g"
  },
  {
    "source": "F015",
    "target": "H044",
    "role": "臣",
    "dosage": "9g"
  },
  {
    "source": "F015",
    "target": "H077",
    "role": "佐使",
    "dosage": "6g"
  },
  {
    "source": "F016",
    "target": "H046",
    "role": "君",
    "dosage": "9g"
  },
  {
    "source": "F016",
    "target": "H074",
    "role": "臣",
    "dosage": "9g"
  },
  {
    "source": "F016",
    "target": "H004",
    "role": "佐",
    "dosage": "18g"
  },
  {
    "source": "F017",
    "target": "H012",
    "role": "君",
    "dosage": "6g"
  },
  {
    "source": "F017",
    "target": "H047",
    "role": "臣",
    "dosage": "6g"
  },
  {
    "source": "F017",
    "target": "H057",
    "role": "佐",
    "dosage": "4.5g"
  },
  {
    "source": "F017",
    "target": "H050",
    "role": "佐",
    "dosage": "4.5g"
  },
  {
    "source": "F017",
    "target": "H080",
    "role": "佐",
    "dosage": "4.5g"
  },
  {
    "source": "F017",
    "target": "H077",
    "role": "使",
    "dosage": "1.5g"
  },
  {
    "source": "F018",
    "target": "H064",
    "role": "君",
    "dosage": "12g"
  },
  {
    "source": "F018",
    "target": "H037",
    "role": "臣",
    "dosage": "9g"
  },
  {
    "source": "F018",
    "target": "H038",
    "role": "佐",
    "dosage": "12g"
  },
  {
    "source": "F018",
    "target": "H004",
    "role": "佐",
    "dosage": "9g"
  },
  {
    "source": "F018",
    "target": "H003",
    "role": "佐使",
    "dosage": "6g"
  },
  {
    "source": "F019",
    "target": "H051",
    "role": "君",
    "dosage": "18g"
  },
  {
    "source": "F019",
    "target": "H052",
    "role": "臣",
    "dosage": "6g"
  },
  {
    "source": "F019",
    "target": "H064",
    "role": "佐",
    "dosage": "9g"
  },
  {
    "source": "F019",
    "target": "H038",
    "role": "佐",
    "dosage": "9g"
  },
  {
    "source": "F019",
    "target": "H047",
    "role": "佐",
    "dosage": "3g"
  },
  {
    "source": "F019",
    "target": "H022",
    "role": "佐",
    "dosage": "3g"
  },
  {
    "source": "F020",
    "target": "H062",
    "role": "君",
    "dosage": "12g"
  },
  {
    "source": "F020",
    "target": "H061",
    "role": "君",
    "dosage": "9g"
  },
  {
    "source": "F020",
    "target": "H078",
    "role": "臣",
    "dosage": "9g"
  },
  {
    "source": "F020",
    "target": "H025",
    "role": "臣",
    "dosage": "9g"
  },
  {
    "source": "F020",
    "target": "H057",
    "role": "佐",
    "dosage": "4.5g"
  },
  {
    "source": "F020",
    "target": "H012",
    "role": "佐",
    "dosage": "3g"
  },
  {
    "source": "F020",
    "target": "H077",
    "role": "使",
    "dosage": "6g"
  },
  {
    "source": "F021",
    "target": "H064",
    "role": "君",
    "dosage": "15g"
  },
  {
    "source": "F021",
    "target": "H047",
    "role": "臣",
    "dosage": "15g"
  },
  {
    "source": "F021",
    "target": "H038",
    "role": "佐",
    "dosage": "9g"
  },
  {
    "source": "F021",
    "target": "H077",
    "role": "使",
    "dosage": "4.5g"
  },
  {
    "source": "F021",
    "target": "H004",
    "role": "佐",
    "dosage": "3g"
  },
  {
    "source": "F022",
    "target": "H018",
    "role": "君",
    "dosage": "6g"
  },
  {
    "source": "F022",
    "target": "H047",
    "role": "佐",
    "dosage": "6g"
  },
  {
    "source": "F022",
    "target": "H048",
    "role": "佐",
    "dosage": "6g"
  },
  {
    "source": "F022",
    "target": "H038",
    "role": "佐",
    "dosage": "6g"
  },
  {
    "source": "F022",
    "target": "H067",
    "role": "佐",
    "dosage": "6g"
  },
  {
    "source": "F022",
    "target": "H064",
    "role": "佐",
    "dosage": "6g"
  },
  {
    "source": "F023",
    "target": "H001",
    "role": "君",
    "dosage": "9g"
  },
  {
    "source": "F023",
    "target": "H002",
    "role": "君",
    "dosage": "9g"
  },
  {
    "source": "F023",
    "target": "H044",
    "role": "臣",
    "dosage": "6g"
  },
  {
    "source": "F023",
    "target": "H007",
    "role": "臣",
    "dosage": "3g"
  },
  {
    "source": "F023",
    "target": "H080",
    "role": "佐",
    "dosage": "9g"
  },
  {
    "source": "F023",
    "target": "H064",
    "role": "佐",
    "dosage": "9g"
  },
  {
    "source": "F023",
    "target": "H077",
    "role": "使",
    "dosage": "6g"
  },
  {
    "source": "F024",
    "target": "H069",
    "role": "君",
    "dosage": "15g"
  },
  {
    "source": "F024",
    "target": "H038",
    "role": "臣",
    "dosage": "6g"
  },
  {
    "source": "F024",
    "target": "H015",
    "role": "佐",
    "dosage": "6g"
  },
  {
    "source": "F024",
    "target": "H057",
    "role": "佐",
    "dosage": "6g"
  },
  {
    "source": "F024",
    "target": "H077",
    "role": "使",
    "dosage": "3g"
  },
  {
    "source": "F025",
    "target": "H072",
    "role": "君",
    "dosage": "9g"
  },
  {
    "source": "F025",
    "target": "H073",
    "role": "君",
    "dosage": "12g"
  },
  {
    "source": "F025",
    "target": "H071",
    "role": "臣",
    "dosage": "18g"
  },
  {
    "source": "F025",
    "target": "H016",
    "role": "佐",
    "dosage": "9g"
  },
  {
    "source": "F025",
    "target": "H018",
    "role": "佐",
    "dosage": "9g"
  },
  {
    "source": "F025",
    "target": "H063",
    "role": "佐",
    "dosage": "9g"
  },
  {
    "source": "F025",
    "target": "H034",
    "role": "佐",
    "dosage": "9g"
  },
  {
    "source": "F026",
    "target": "H074",
    "role": "君",
    "dosage": "9g"
  },
  {
    "source": "F026",
    "target": "H076",
    "role": "臣",
    "dosage": "9g"
  },
  {
    "source": "F026",
    "target": "H038",
    "role": "佐",
    "dosage": "9g"
  },
  {
    "source": "F026",
    "target": "H077",
    "role": "使",
    "dosage": "6g"
  },
  {
    "source": "F027",
    "target": "H075",
    "role": "君",
    "dosage": "18g"
  },
  {
    "source": "F027",
    "target": "H074",
    "role": "臣",
    "dosage": "9g"
  },
  {
    "source": "F027",
    "target": "H076",
    "role": "臣",
    "dosage": "9g"
  },
  {
    "source": "F027",
    "target": "H078",
    "role": "佐",
    "dosage": "3g"
  },
  {
    "source": "F027",
    "target": "H047",
    "role": "佐",
    "dosage": "6g"
  },
  {
    "source": "F027",
    "target": "H012",
    "role": "佐",
    "dosage": "6g"
  },
  {
    "source": "F027",
    "target": "H077",
    "role": "使",
    "dosage": "9g"
  },
  {
    "source": "F028",
    "target": "H074",
    "role": "君",
    "dosage": "9g"
  },
  {
    "source": "F029",
    "target": "H078",
    "role": "君",
    "dosage": "9g"
  },
  {
    "source": "F029",
    "target": "H057",
    "role": "臣",
    "dosage": "6g"
  },
  {
    "source": "F029",
    "target": "H080",
    "role": "佐",
    "dosage": "9g"
  },
  {
    "source": "F029",
    "target": "H079",
    "role": "佐",
    "dosage": "12g"
  },
  {
    "source": "F030",
    "target": "H075",
    "role": "君",
    "dosage": "30g"
  },
  {
    "source": "F030",
    "target": "H078",
    "role": "臣",
    "dosage": "6g"
  },
  {
    "source": "F031",
    "target": "H079",
    "role": "君",
    "dosage": "24g"
  },
  {
    "source": "F031",
    "target": "H040",
    "role": "佐",
    "dosage": "9g"
  },
  {
    "source": "F031",
    "target": "H038",
    "role": "佐",
    "dosage": "9g"
  },
  {
    "source": "F031",
    "target": "H027",
    "role": "佐",
    "dosage": "9g"
  },
  {
    "source": "F032",
    "target": "H079",
    "role": "君",
    "dosage": "18g"
  },
  {
    "source": "F032",
    "target": "H020",
    "role": "臣",
    "dosage": "12g"
  },
  {
    "source": "F032",
    "target": "H015",
    "role": "臣",
    "dosage": "12g"
  },
  {
    "source": "F033",
    "target": "H040",
    "role": "佐",
    "dosage": "9g"
  },
  {
    "source": "F033",
    "target": "H038",
    "role": "佐",
    "dosage": "9g"
  },
  {
    "source": "F033",
    "target": "H027",
    "role": "佐",
    "dosage": "9g"
  },
  {
    "source": "F033",
    "target": "H002",
    "role": "佐",
    "dosage": "3g"
  },
  {
    "source": "F033",
    "target": "H043",
    "role": "佐使",
    "dosage": "3g"
  },
  {
    "source": "F034",
    "target": "H075",
    "role": "君",
    "dosage": "15g"
  },
  {
    "source": "F035",
    "target": "H019",
    "role": "臣",
    "dosage": "30g"
  },
  {
    "source": "F035",
    "target": "H018",
    "role": "臣",
    "dosage": "30g"
  },
  {
    "source": "F035",
    "target": "H016",
    "role": "臣",
    "dosage": "30g"
  },
  {
    "source": "F035",
    "target": "H059",
    "role": "佐",
    "dosage": "30g"
  },
  {
    "source": "F036",
    "target": "H057",
    "role": "君",
    "dosage": "12g"
  },
  {
    "source": "F036",
    "target": "H005",
    "role": "臣",
    "dosage": "4.5g"
  },
  {
    "source": "F036",
    "target": "H006",
    "role": "佐",
    "dosage": "6g"
  },
  {
    "source": "F036",
    "target": "H007",
    "role": "佐",
    "dosage": "3g"
  },
  {
    "source": "F036",
    "target": "H077",
    "role": "使",
    "dosage": "6g"
  },
  {
    "source": "F036",
    "target": "H008",
    "role": "佐使",
    "dosage": "12g"
  },
  {
    "source": "F037",
    "target": "H003",
    "role": "君",
    "dosage": "9g"
  },
  {
    "source": "F037",
    "target": "H067",
    "role": "臣",
    "dosage": "9g"
  },
  {
    "source": "F037",
    "target": "H064",
    "role": "佐",
    "dosage": "9g"
  },
  {
    "source": "F037",
    "target": "H047",
    "role": "佐",
    "dosage": "6g"
  },
  {
    "source": "F037",
    "target": "H038",
    "role": "佐",
    "dosage": "9g"
  },
  {
    "source": "F037",
    "target": "H077",
    "role": "使",
    "dosage": "3g"
  },
  {
    "source": "F038",
    "target": "H025",
    "role": "君",
    "dosage": "120g"
  },
  {
    "source": "F038",
    "target": "H074",
    "role": "臣",
    "dosage": "15g"
  },
  {
    "source": "F038",
    "target": "H060",
    "role": "臣",
    "dosage": "15g"
  },
  {
    "source": "F038",
    "target": "H026",
    "role": "佐",
    "dosage": "15g"
  },
  {
    "source": "F038",
    "target": "H038",
    "role": "佐",
    "dosage": "15g"
  },
  {
    "source": "F038",
    "target": "H070",
    "role": "佐",
    "dosage": "15g"
  },
  {
    "source": "F038",
    "target": "H078",
    "role": "佐",
    "dosage": "30g"
  },
  {
    "source": "F038",
    "target": "H069",
    "role": "佐",
    "dosage": "30g"
  },
  {
    "source": "F039",
    "target": "H075",
    "role": "君",
    "dosage": "120g"
  },
  {
    "source": "F039",
    "target": "H078",
    "role": "臣",
    "dosage": "6g"
  },
  {
    "source": "F039",
    "target": "H057",
    "role": "佐",
    "dosage": "3g"
  },
  {
    "source": "F039",
    "target": "H062",
    "role": "佐",
    "dosage": "3g"
  },
  {
    "source": "F039",
    "target": "H061",
    "role": "佐",
    "dosage": "3g"
  },
  {
    "source": "F040",
    "target": "H079",
    "role": "君",
    "dosage": "30g"
  },
  {
    "source": "F040",
    "target": "H045",
    "role": "臣",
    "dosage": "3g"
  },
  {
    "source": "F040",
    "target": "H001",
    "role": "佐",
    "dosage": "2g"
  }
];