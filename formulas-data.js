const FORMULAS = [
  {
    "id": "F001",
    "name": "麻黄汤",
    "category": "解表剂-辛温解表",
    "composition": [
      {
        "herb": "麻黄",
        "role": "君",
        "dosage": "9g"
      },
      {
        "herb": "桂枝",
        "role": "臣",
        "dosage": "6g"
      },
      {
        "herb": "杏仁",
        "role": "佐",
        "dosage": "6g"
      },
      {
        "herb": "甘草",
        "role": "使",
        "dosage": "3g"
      }
    ],
    "effect": "发汗解表，宣肺平喘",
    "indication": "风寒表实证。恶寒发热，无汗而喘",
    "source": "伤寒论 第35条",
    "source_url": "https://zh.wikisource.org/wiki/%E5%82%B7%E5%AF%92%E8%AB%96"
  },
  {
    "id": "F002",
    "name": "桂枝汤",
    "category": "解表剂-辛温解表",
    "composition": [
      {
        "herb": "桂枝",
        "role": "君",
        "dosage": "9g"
      },
      {
        "herb": "白芍",
        "role": "臣",
        "dosage": "9g"
      },
      {
        "herb": "生姜",
        "role": "佐",
        "dosage": "9g"
      },
      {
        "herb": "甘草",
        "role": "使",
        "dosage": "6g"
      }
    ],
    "effect": "解肌发表，调和营卫",
    "indication": "风寒表虚证。发热头痛，汗出恶风",
    "source": "伤寒论 第12条",
    "source_url": "https://zh.wikisource.org/wiki/%E5%82%B7%E5%AF%92%E8%AB%96"
  },
  {
    "id": "F003",
    "name": "银翘散",
    "category": "解表剂-辛凉解表",
    "composition": [
      {
        "herb": "金银花",
        "role": "君",
        "dosage": "30g"
      },
      {
        "herb": "连翘",
        "role": "君",
        "dosage": "30g"
      },
      {
        "herb": "薄荷",
        "role": "臣",
        "dosage": "18g"
      },
      {
        "herb": "牛蒡子",
        "role": "佐",
        "dosage": "18g"
      },
      {
        "herb": "桔梗",
        "role": "佐",
        "dosage": "18g"
      },
      {
        "herb": "甘草",
        "role": "使",
        "dosage": "15g"
      }
    ],
    "effect": "辛凉透表，清热解毒",
    "indication": "温病初起。发热无汗，或有汗不畅",
    "source": "温病条辨 卷一",
    "source_url": "https://zh.wikisource.org/wiki/%E6%B8%A9%E7%97%85%E6%9D%A1%E8%BE%A8"
  },
  {
    "id": "F004",
    "name": "桑菊饮",
    "category": "解表剂-辛凉解表",
    "composition": [
      {
        "herb": "桑叶",
        "role": "君",
        "dosage": "7.5g"
      },
      {
        "herb": "菊花",
        "role": "君",
        "dosage": "3g"
      },
      {
        "herb": "杏仁",
        "role": "臣",
        "dosage": "6g"
      },
      {
        "herb": "连翘",
        "role": "佐",
        "dosage": "5g"
      },
      {
        "herb": "薄荷",
        "role": "佐",
        "dosage": "2.5g"
      },
      {
        "herb": "桔梗",
        "role": "佐",
        "dosage": "6g"
      },
      {
        "herb": "甘草",
        "role": "佐使",
        "dosage": "2.5g"
      }
    ],
    "effect": "疏风清热，宣肺止咳",
    "indication": "风温初起。咳嗽，身热不甚",
    "source": "温病条辨 卷一",
    "source_url": "https://zh.wikisource.org/wiki/%E6%B8%A9%E7%97%85%E6%9D%A1%E8%BE%A8"
  },
  {
    "id": "F005",
    "name": "小柴胡汤",
    "category": "解表剂-和解少阳",
    "composition": [
      {
        "herb": "柴胡",
        "role": "君",
        "dosage": "24g"
      },
      {
        "herb": "黄芩",
        "role": "臣",
        "dosage": "9g"
      },
      {
        "herb": "人参",
        "role": "佐",
        "dosage": "9g"
      },
      {
        "herb": "甘草",
        "role": "佐使",
        "dosage": "9g"
      },
      {
        "herb": "生姜",
        "role": "佐",
        "dosage": "9g"
      },
      {
        "herb": "半夏",
        "role": "佐",
        "dosage": "9g"
      }
    ],
    "effect": "和解少阳",
    "indication": "少阳病。寒热往来，胸胁苦满",
    "source": "伤寒论 第96条",
    "source_url": "https://zh.wikisource.org/wiki/%E5%82%B7%E5%AF%92%E8%AB%96"
  },
  {
    "id": "F006",
    "name": "白虎汤",
    "category": "清热剂-清气分热",
    "composition": [
      {
        "herb": "石膏",
        "role": "君",
        "dosage": "50g"
      },
      {
        "herb": "知母",
        "role": "臣",
        "dosage": "18g"
      },
      {
        "herb": "甘草",
        "role": "佐",
        "dosage": "6g"
      }
    ],
    "effect": "清热生津",
    "indication": "阳明气分热盛证。壮热面赤，烦渴引饮",
    "source": "伤寒论 第176条",
    "source_url": "https://zh.wikisource.org/wiki/%E5%82%B7%E5%AF%92%E8%AB%96"
  },
  {
    "id": "F007",
    "name": "黄连解毒汤",
    "category": "清热剂-清热解毒",
    "composition": [
      {
        "herb": "黄连",
        "role": "君",
        "dosage": "9g"
      },
      {
        "herb": "黄芩",
        "role": "臣",
        "dosage": "6g"
      },
      {
        "herb": "黄柏",
        "role": "佐",
        "dosage": "6g"
      },
      {
        "herb": "栀子",
        "role": "佐使",
        "dosage": "9g"
      }
    ],
    "effect": "泻火解毒",
    "indication": "三焦火毒证。大热烦躁，口燥咽干",
    "source": "外台秘要 引崔氏方",
    "source_url": "https://www.baidu.com/s?wd=黄连解毒汤+方剂+组成"
  },
  {
    "id": "F008",
    "name": "龙胆泻肝汤",
    "category": "清热剂-清脏腑热",
    "composition": [
      {
        "herb": "黄芩",
        "role": "臣",
        "dosage": "9g"
      },
      {
        "herb": "栀子",
        "role": "臣",
        "dosage": "9g"
      },
      {
        "herb": "泽泻",
        "role": "佐",
        "dosage": "12g"
      },
      {
        "herb": "车前子",
        "role": "佐",
        "dosage": "9g"
      },
      {
        "herb": "当归",
        "role": "佐",
        "dosage": "3g"
      },
      {
        "herb": "生地黄",
        "role": "佐",
        "dosage": "9g"
      },
      {
        "herb": "柴胡",
        "role": "佐使",
        "dosage": "6g"
      },
      {
        "herb": "甘草",
        "role": "使",
        "dosage": "6g"
      }
    ],
    "effect": "清肝胆实火，泻下焦湿热",
    "indication": "肝胆实火上炎证，肝经湿热下注证",
    "source": "医方集解",
    "source_url": "https://zh.wikisource.org/wiki/%E5%8C%BB%E6%96%B9%E9%9B%86%E8%A7%A3"
  },
  {
    "id": "F009",
    "name": "大承气汤",
    "category": "泻下剂-寒下",
    "composition": [
      {
        "herb": "大黄",
        "role": "君",
        "dosage": "12g"
      },
      {
        "herb": "厚朴",
        "role": "臣",
        "dosage": "24g"
      },
      {
        "herb": "枳实",
        "role": "佐",
        "dosage": "12g"
      },
      {
        "herb": "芒硝",
        "role": "使",
        "dosage": "9g"
      }
    ],
    "effect": "峻下热结",
    "indication": "阳明腑实证。痞满燥实，腹痛拒按",
    "source": "伤寒论 第208条",
    "source_url": "https://zh.wikisource.org/wiki/%E5%82%B7%E5%AF%92%E8%AB%96"
  },
  {
    "id": "F010",
    "name": "逍遥散",
    "category": "和解剂-调和肝脾",
    "composition": [
      {
        "herb": "柴胡",
        "role": "君",
        "dosage": "9g"
      },
      {
        "herb": "当归",
        "role": "臣",
        "dosage": "9g"
      },
      {
        "herb": "白芍",
        "role": "臣",
        "dosage": "9g"
      },
      {
        "herb": "白术",
        "role": "佐",
        "dosage": "9g"
      },
      {
        "herb": "茯苓",
        "role": "佐",
        "dosage": "9g"
      },
      {
        "herb": "甘草",
        "role": "使",
        "dosage": "4.5g"
      },
      {
        "herb": "生姜",
        "role": "佐",
        "dosage": "3g"
      },
      {
        "herb": "薄荷",
        "role": "佐使",
        "dosage": "3g"
      }
    ],
    "effect": "疏肝解郁，养血健脾",
    "indication": "肝郁血虚脾弱证。两胁作痛，头痛目眩",
    "source": "太平惠民和剂局方",
    "source_url": "https://zh.wikisource.org/wiki/%E5%A4%AA%E5%B9%B3%E6%83%A0%E6%B0%91%E5%92%8C%E5%8A%91%E5%B1%80%E6%96%B9"
  },
  {
    "id": "F011",
    "name": "藿香正气散",
    "category": "祛湿剂-化湿和胃",
    "composition": [
      {
        "herb": "藿香",
        "role": "君",
        "dosage": "90g"
      },
      {
        "herb": "紫苏叶",
        "role": "臣",
        "dosage": "30g"
      },
      {
        "herb": "白芷",
        "role": "臣",
        "dosage": "30g"
      },
      {
        "herb": "白术",
        "role": "佐",
        "dosage": "30g"
      },
      {
        "herb": "陈皮",
        "role": "佐",
        "dosage": "30g"
      },
      {
        "herb": "厚朴",
        "role": "佐",
        "dosage": "30g"
      },
      {
        "herb": "半夏",
        "role": "佐",
        "dosage": "30g"
      },
      {
        "herb": "茯苓",
        "role": "佐",
        "dosage": "30g"
      },
      {
        "herb": "桔梗",
        "role": "佐",
        "dosage": "30g"
      },
      {
        "herb": "甘草",
        "role": "使",
        "dosage": "30g"
      }
    ],
    "effect": "解表化湿，理气和中",
    "indication": "外感风寒，内伤湿滞证",
    "source": "太平惠民和剂局方",
    "source_url": "https://zh.wikisource.org/wiki/%E5%A4%AA%E5%B9%B3%E6%83%A0%E6%B0%91%E5%92%8C%E5%8A%91%E5%B1%80%E6%96%B9"
  },
  {
    "id": "F012",
    "name": "五苓散",
    "category": "祛湿剂-利水渗湿",
    "composition": [
      {
        "herb": "泽泻",
        "role": "君",
        "dosage": "15g"
      },
      {
        "herb": "白术",
        "role": "臣",
        "dosage": "9g"
      },
      {
        "herb": "茯苓",
        "role": "臣",
        "dosage": "9g"
      },
      {
        "herb": "桂枝",
        "role": "佐",
        "dosage": "6g"
      }
    ],
    "effect": "利水渗湿，温阳化气",
    "indication": "膀胱气化不利之蓄水证。小便不利",
    "source": "伤寒论 第71条",
    "source_url": "https://zh.wikisource.org/wiki/%E5%82%B7%E5%AF%92%E8%AB%96"
  },
  {
    "id": "F013",
    "name": "茵陈蒿汤",
    "category": "祛湿剂-利湿退黄",
    "composition": [
      {
        "herb": "茵陈",
        "role": "君",
        "dosage": "18g"
      },
      {
        "herb": "栀子",
        "role": "臣",
        "dosage": "12g"
      },
      {
        "herb": "大黄",
        "role": "佐",
        "dosage": "6g"
      }
    ],
    "effect": "清热利湿退黄",
    "indication": "湿热黄疸。身目发黄，小便短赤",
    "source": "伤寒论 第236条",
    "source_url": "https://zh.wikisource.org/wiki/%E5%82%B7%E5%AF%92%E8%AB%96"
  },
  {
    "id": "F014",
    "name": "理中丸",
    "category": "温里剂-温中祛寒",
    "composition": [
      {
        "herb": "人参",
        "role": "君",
        "dosage": "9g"
      },
      {
        "herb": "干姜",
        "role": "臣",
        "dosage": "9g"
      },
      {
        "herb": "白术",
        "role": "佐",
        "dosage": "9g"
      },
      {
        "herb": "甘草",
        "role": "使",
        "dosage": "9g"
      }
    ],
    "effect": "温中祛寒，补气健脾",
    "indication": "脾胃虚寒证。脘腹绵绵作痛，呕吐便溏",
    "source": "伤寒论 第386条",
    "source_url": "https://zh.wikisource.org/wiki/%E5%82%B7%E5%AF%92%E8%AB%96"
  },
  {
    "id": "F015",
    "name": "四逆汤",
    "category": "温里剂-回阳救逆",
    "composition": [
      {
        "herb": "附子",
        "role": "君",
        "dosage": "15g"
      },
      {
        "herb": "干姜",
        "role": "臣",
        "dosage": "9g"
      },
      {
        "herb": "甘草",
        "role": "佐使",
        "dosage": "6g"
      }
    ],
    "effect": "回阳救逆",
    "indication": "少阴病。四肢厥逆，恶寒蜷卧",
    "source": "伤寒论 第323条",
    "source_url": "https://zh.wikisource.org/wiki/%E5%82%B7%E5%AF%92%E8%AB%96"
  },
  {
    "id": "F016",
    "name": "吴茱萸汤",
    "category": "温里剂-温中祛寒",
    "composition": [
      {
        "herb": "吴茱萸",
        "role": "君",
        "dosage": "9g"
      },
      {
        "herb": "人参",
        "role": "臣",
        "dosage": "9g"
      },
      {
        "herb": "生姜",
        "role": "佐",
        "dosage": "18g"
      }
    ],
    "effect": "温中补虚，降逆止呕",
    "indication": "肝胃虚寒，浊阴上逆证",
    "source": "伤寒论 第243条",
    "source_url": "https://zh.wikisource.org/wiki/%E5%82%B7%E5%AF%92%E8%AB%96"
  },
  {
    "id": "F017",
    "name": "柴胡疏肝散",
    "category": "理气剂-行气",
    "composition": [
      {
        "herb": "柴胡",
        "role": "君",
        "dosage": "6g"
      },
      {
        "herb": "陈皮",
        "role": "臣",
        "dosage": "6g"
      },
      {
        "herb": "川芎",
        "role": "佐",
        "dosage": "4.5g"
      },
      {
        "herb": "香附",
        "role": "佐",
        "dosage": "4.5g"
      },
      {
        "herb": "枳壳",
        "role": "佐",
        "dosage": "4.5g"
      },
      {
        "herb": "白芍",
        "role": "佐",
        "dosage": "4.5g"
      },
      {
        "herb": "甘草",
        "role": "使",
        "dosage": "1.5g"
      }
    ],
    "effect": "疏肝理气，活血止痛",
    "indication": "肝气郁滞证。胁肋疼痛，嗳气太息",
    "source": "景岳全书",
    "source_url": "https://www.baidu.com/s?wd=柴胡疏肝散+方剂+组成"
  },
  {
    "id": "F018",
    "name": "半夏厚朴汤",
    "category": "理气剂-行气",
    "composition": [
      {
        "herb": "半夏",
        "role": "君",
        "dosage": "12g"
      },
      {
        "herb": "厚朴",
        "role": "臣",
        "dosage": "9g"
      },
      {
        "herb": "茯苓",
        "role": "佐",
        "dosage": "12g"
      },
      {
        "herb": "生姜",
        "role": "佐",
        "dosage": "9g"
      },
      {
        "herb": "紫苏叶",
        "role": "佐使",
        "dosage": "6g"
      }
    ],
    "effect": "行气散结，降逆化痰",
    "indication": "梅核气。咽中如有物阻，咯吐不出",
    "source": "金匮要略",
    "source_url": "https://zh.wikisource.org/wiki/%E9%87%91%E5%8C%AE%E8%A6%81%E7%95%A5"
  },
  {
    "id": "F019",
    "name": "保和丸",
    "category": "消食剂",
    "composition": [
      {
        "herb": "山楂",
        "role": "君",
        "dosage": "18g"
      },
      {
        "herb": "神曲",
        "role": "臣",
        "dosage": "6g"
      },
      {
        "herb": "半夏",
        "role": "佐",
        "dosage": "9g"
      },
      {
        "herb": "茯苓",
        "role": "佐",
        "dosage": "9g"
      },
      {
        "herb": "陈皮",
        "role": "佐",
        "dosage": "3g"
      },
      {
        "herb": "连翘",
        "role": "佐",
        "dosage": "3g"
      },
      {
        "herb": "莱菔子",
        "role": "佐使",
        "dosage": "6g"
      }
    ],
    "effect": "消食和胃",
    "indication": "食滞胃脘证。脘腹痞满胀痛，嗳腐吞酸",
    "source": "丹溪心法",
    "source_url": "https://zh.wikisource.org/wiki/%E4%B8%B9%E6%BA%AA%E5%BF%83%E6%B3%95"
  },
  {
    "id": "F020",
    "name": "血府逐瘀汤",
    "category": "活血化瘀剂",
    "composition": [
      {
        "herb": "桃仁",
        "role": "君",
        "dosage": "12g"
      },
      {
        "herb": "红花",
        "role": "君",
        "dosage": "9g"
      },
      {
        "herb": "当归",
        "role": "臣",
        "dosage": "9g"
      },
      {
        "herb": "生地黄",
        "role": "臣",
        "dosage": "9g"
      },
      {
        "herb": "川芎",
        "role": "佐",
        "dosage": "4.5g"
      },
      {
        "herb": "赤芍",
        "role": "佐",
        "dosage": "6g"
      },
      {
        "herb": "牛膝",
        "role": "佐",
        "dosage": "9g"
      },
      {
        "herb": "桔梗",
        "role": "佐",
        "dosage": "4.5g"
      },
      {
        "herb": "柴胡",
        "role": "佐",
        "dosage": "3g"
      },
      {
        "herb": "枳壳",
        "role": "佐",
        "dosage": "6g"
      },
      {
        "herb": "甘草",
        "role": "使",
        "dosage": "6g"
      }
    ],
    "effect": "活血化瘀，行气止痛",
    "indication": "胸中血瘀证。胸痛头痛，日久不愈",
    "source": "医林改错",
    "source_url": "https://zh.wikisource.org/wiki/%E5%8C%BB%E6%9E%97%E6%94%B9%E9%94%99"
  },
  {
    "id": "F021",
    "name": "二陈汤",
    "category": "化痰剂-燥湿化痰",
    "composition": [
      {
        "herb": "半夏",
        "role": "君",
        "dosage": "15g"
      },
      {
        "herb": "陈皮",
        "role": "臣",
        "dosage": "15g"
      },
      {
        "herb": "茯苓",
        "role": "佐",
        "dosage": "9g"
      },
      {
        "herb": "甘草",
        "role": "使",
        "dosage": "4.5g"
      },
      {
        "herb": "生姜",
        "role": "佐",
        "dosage": "3g"
      }
    ],
    "effect": "燥湿化痰，理气和中",
    "indication": "湿痰证。咳嗽痰多，色白易咯",
    "source": "太平惠民和剂局方",
    "source_url": "https://zh.wikisource.org/wiki/%E5%A4%AA%E5%B9%B3%E6%83%A0%E6%B0%91%E5%92%8C%E5%8A%91%E5%B1%80%E6%96%B9"
  },
  {
    "id": "F022",
    "name": "清气化痰丸",
    "category": "化痰剂-清热化痰",
    "composition": [
      {
        "herb": "黄芩",
        "role": "君",
        "dosage": "6g"
      },
      {
        "herb": "瓜蒌仁",
        "role": "臣",
        "dosage": "9g"
      },
      {
        "herb": "陈皮",
        "role": "佐",
        "dosage": "6g"
      },
      {
        "herb": "枳实",
        "role": "佐",
        "dosage": "6g"
      },
      {
        "herb": "茯苓",
        "role": "佐",
        "dosage": "6g"
      },
      {
        "herb": "杏仁",
        "role": "佐",
        "dosage": "6g"
      },
      {
        "herb": "半夏",
        "role": "佐",
        "dosage": "6g"
      }
    ],
    "effect": "清热化痰，理气止咳",
    "indication": "痰热咳嗽。痰稠色黄，咯之不爽",
    "source": "医方考",
    "source_url": "https://www.baidu.com/s?wd=清气化痰丸+方剂+组成"
  },
  {
    "id": "F023",
    "name": "小青龙汤",
    "category": "解表剂-辛温解表",
    "composition": [
      {
        "herb": "麻黄",
        "role": "君",
        "dosage": "9g"
      },
      {
        "herb": "桂枝",
        "role": "君",
        "dosage": "9g"
      },
      {
        "herb": "干姜",
        "role": "臣",
        "dosage": "6g"
      },
      {
        "herb": "细辛",
        "role": "臣",
        "dosage": "3g"
      },
      {
        "herb": "五味子",
        "role": "佐",
        "dosage": "6g"
      },
      {
        "herb": "白芍",
        "role": "佐",
        "dosage": "9g"
      },
      {
        "herb": "半夏",
        "role": "佐",
        "dosage": "9g"
      },
      {
        "herb": "甘草",
        "role": "使",
        "dosage": "6g"
      }
    ],
    "effect": "解表散寒，温肺化饮",
    "indication": "外寒内饮证。恶寒发热，无汗，喘咳",
    "source": "伤寒论 第40条",
    "source_url": "https://zh.wikisource.org/wiki/%E5%82%B7%E5%AF%92%E8%AB%96"
  },
  {
    "id": "F024",
    "name": "酸枣仁汤",
    "category": "安神剂-补养安神",
    "composition": [
      {
        "herb": "酸枣仁",
        "role": "君",
        "dosage": "15g"
      },
      {
        "herb": "茯苓",
        "role": "臣",
        "dosage": "6g"
      },
      {
        "herb": "知母",
        "role": "佐",
        "dosage": "6g"
      },
      {
        "herb": "川芎",
        "role": "佐",
        "dosage": "6g"
      },
      {
        "herb": "甘草",
        "role": "使",
        "dosage": "3g"
      }
    ],
    "effect": "养血安神，清热除烦",
    "indication": "肝血不足，虚热内扰证。虚烦失眠",
    "source": "金匮要略",
    "source_url": "https://zh.wikisource.org/wiki/%E9%87%91%E5%8C%AE%E8%A6%81%E7%95%A5"
  },
  {
    "id": "F025",
    "name": "天麻钩藤饮",
    "category": "平肝息风剂",
    "composition": [
      {
        "herb": "天麻",
        "role": "君",
        "dosage": "9g"
      },
      {
        "herb": "钩藤",
        "role": "君",
        "dosage": "12g"
      },
      {
        "herb": "石决明",
        "role": "臣",
        "dosage": "18g"
      },
      {
        "herb": "栀子",
        "role": "佐",
        "dosage": "9g"
      },
      {
        "herb": "黄芩",
        "role": "佐",
        "dosage": "9g"
      },
      {
        "herb": "益母草",
        "role": "佐",
        "dosage": "9g"
      },
      {
        "herb": "桑寄生",
        "role": "佐",
        "dosage": "9g"
      },
      {
        "herb": "朱茯神",
        "role": "佐使",
        "dosage": "9g"
      }
    ],
    "effect": "平肝息风，清热活血，补益肝肾",
    "indication": "肝阳偏亢，肝风上扰证。头痛眩晕",
    "source": "中医内科杂病证治新义",
    "source_url": "https://www.baidu.com/s?wd=天麻钩藤饮+方剂+组成"
  },
  {
    "id": "F026",
    "name": "四君子汤",
    "category": "补虚剂-补气",
    "composition": [
      {
        "herb": "人参",
        "role": "君",
        "dosage": "9g"
      },
      {
        "herb": "白术",
        "role": "臣",
        "dosage": "9g"
      },
      {
        "herb": "茯苓",
        "role": "佐",
        "dosage": "9g"
      },
      {
        "herb": "甘草",
        "role": "使",
        "dosage": "6g"
      }
    ],
    "effect": "益气健脾",
    "indication": "脾胃气虚证。面色萎白，语声低微",
    "source": "太平惠民和剂局方",
    "source_url": "https://zh.wikisource.org/wiki/%E5%A4%AA%E5%B9%B3%E6%83%A0%E6%B0%91%E5%92%8C%E5%8A%91%E5%B1%80%E6%96%B9"
  },
  {
    "id": "F027",
    "name": "补中益气汤",
    "category": "补虚剂-补气",
    "composition": [
      {
        "herb": "黄芪",
        "role": "君",
        "dosage": "18g"
      },
      {
        "herb": "人参",
        "role": "臣",
        "dosage": "9g"
      },
      {
        "herb": "白术",
        "role": "臣",
        "dosage": "9g"
      },
      {
        "herb": "当归",
        "role": "佐",
        "dosage": "3g"
      },
      {
        "herb": "陈皮",
        "role": "佐",
        "dosage": "6g"
      },
      {
        "herb": "升麻",
        "role": "佐",
        "dosage": "6g"
      },
      {
        "herb": "柴胡",
        "role": "佐",
        "dosage": "6g"
      },
      {
        "herb": "甘草",
        "role": "使",
        "dosage": "9g"
      }
    ],
    "effect": "补中益气，升阳举陷",
    "indication": "脾胃气虚证，气虚下陷证，气虚发热证",
    "source": "脾胃论",
    "source_url": "https://www.baidu.com/s?wd=补中益气汤+方剂+组成"
  },
  {
    "id": "F028",
    "name": "生脉散",
    "category": "补虚剂-补气",
    "composition": [
      {
        "herb": "人参",
        "role": "君",
        "dosage": "9g"
      },
      {
        "herb": "麦冬",
        "role": "臣",
        "dosage": "9g"
      },
      {
        "herb": "五味子",
        "role": "佐",
        "dosage": "6g"
      }
    ],
    "effect": "益气生津，敛阴止汗",
    "indication": "气阴两虚证。温热暑热，耗气伤阴",
    "source": "医学启源",
    "source_url": "https://www.baidu.com/s?wd=生脉散+方剂+组成"
  },
  {
    "id": "F029",
    "name": "四物汤",
    "category": "补虚剂-补血",
    "composition": [
      {
        "herb": "当归",
        "role": "君",
        "dosage": "9g"
      },
      {
        "herb": "川芎",
        "role": "臣",
        "dosage": "6g"
      },
      {
        "herb": "白芍",
        "role": "佐",
        "dosage": "9g"
      },
      {
        "herb": "熟地黄",
        "role": "佐",
        "dosage": "12g"
      }
    ],
    "effect": "补血调血",
    "indication": "营血虚滞证。头晕目眩，心悸失眠",
    "source": "仙授理伤续断秘方",
    "source_url": "https://www.baidu.com/s?wd=四物汤+方剂+组成"
  },
  {
    "id": "F030",
    "name": "当归补血汤",
    "category": "补虚剂-补血",
    "composition": [
      {
        "herb": "黄芪",
        "role": "君",
        "dosage": "30g"
      },
      {
        "herb": "当归",
        "role": "臣",
        "dosage": "6g"
      }
    ],
    "effect": "补气生血",
    "indication": "血虚发热证。肌热面红，烦渴欲饮",
    "source": "内外伤辨惑论",
    "source_url": "https://www.baidu.com/s?wd=当归补血汤+方剂+组成"
  },
  {
    "id": "F031",
    "name": "六味地黄丸",
    "category": "补虚剂-补阴",
    "composition": [
      {
        "herb": "熟地黄",
        "role": "君",
        "dosage": "24g"
      },
      {
        "herb": "山茱萸",
        "role": "臣",
        "dosage": "12g"
      },
      {
        "herb": "山药",
        "role": "臣",
        "dosage": "12g"
      },
      {
        "herb": "泽泻",
        "role": "佐",
        "dosage": "9g"
      },
      {
        "herb": "茯苓",
        "role": "佐",
        "dosage": "9g"
      },
      {
        "herb": "牡丹皮",
        "role": "佐",
        "dosage": "9g"
      }
    ],
    "effect": "滋阴补肾",
    "indication": "肾阴亏虚证。腰膝酸软，头晕目眩",
    "source": "小儿药证直诀",
    "source_url": "https://zh.wikisource.org/wiki/%E5%B0%8F%E5%84%BF%E8%8D%AF%E8%AF%81%E7%9B%B4%E5%86%B3"
  },
  {
    "id": "F032",
    "name": "大补阴丸",
    "category": "补虚剂-补阴",
    "composition": [
      {
        "herb": "熟地黄",
        "role": "君",
        "dosage": "18g"
      },
      {
        "herb": "黄柏",
        "role": "臣",
        "dosage": "12g"
      },
      {
        "herb": "知母",
        "role": "臣",
        "dosage": "12g"
      }
    ],
    "effect": "滋阴降火",
    "indication": "阴虚火旺证。骨蒸潮热，盗汗遗精",
    "source": "丹溪心法",
    "source_url": "https://zh.wikisource.org/wiki/%E4%B8%B9%E6%BA%AA%E5%BF%83%E6%B3%95"
  },
  {
    "id": "F033",
    "name": "肾气丸",
    "category": "补虚剂-补阳",
    "composition": [
      {
        "herb": "干地黄",
        "role": "君",
        "dosage": "24g"
      },
      {
        "herb": "山药",
        "role": "臣",
        "dosage": "12g"
      },
      {
        "herb": "山茱萸",
        "role": "臣",
        "dosage": "12g"
      },
      {
        "herb": "泽泻",
        "role": "佐",
        "dosage": "9g"
      },
      {
        "herb": "茯苓",
        "role": "佐",
        "dosage": "9g"
      },
      {
        "herb": "牡丹皮",
        "role": "佐",
        "dosage": "9g"
      },
      {
        "herb": "桂枝",
        "role": "佐",
        "dosage": "3g"
      },
      {
        "herb": "附子",
        "role": "佐使",
        "dosage": "3g"
      }
    ],
    "effect": "补肾助阳",
    "indication": "肾阳不足证。腰痛脚软，身半以下畏寒",
    "source": "金匮要略",
    "source_url": "https://zh.wikisource.org/wiki/%E9%87%91%E5%8C%AE%E8%A6%81%E7%95%A5"
  },
  {
    "id": "F034",
    "name": "牡蛎散",
    "category": "固涩剂-固表止汗",
    "composition": [
      {
        "herb": "黄芪",
        "role": "君",
        "dosage": "15g"
      },
      {
        "herb": "麻黄根",
        "role": "臣",
        "dosage": "15g"
      },
      {
        "herb": "牡蛎",
        "role": "佐",
        "dosage": "15g"
      }
    ],
    "effect": "敛阴止汗，益气固表",
    "indication": "自汗。身常汗出，夜卧尤甚",
    "source": "太平惠民和剂局方",
    "source_url": "https://zh.wikisource.org/wiki/%E5%A4%AA%E5%B9%B3%E6%83%A0%E6%B0%91%E5%92%8C%E5%8A%91%E5%B1%80%E6%96%B9"
  },
  {
    "id": "F035",
    "name": "安宫牛黄丸",
    "category": "开窍剂-凉开",
    "composition": [
      {
        "herb": "牛黄",
        "role": "君",
        "dosage": "30g"
      },
      {
        "herb": "黄连",
        "role": "臣",
        "dosage": "30g"
      },
      {
        "herb": "黄芩",
        "role": "臣",
        "dosage": "30g"
      },
      {
        "herb": "栀子",
        "role": "臣",
        "dosage": "30g"
      },
      {
        "herb": "郁金",
        "role": "佐",
        "dosage": "30g"
      },
      {
        "herb": "朱砂",
        "role": "佐",
        "dosage": "30g"
      }
    ],
    "effect": "清热解毒，开窍醒神",
    "indication": "邪热内陷心包证。高热烦躁，神昏谵语",
    "source": "温病条辨 卷一",
    "source_url": "https://zh.wikisource.org/wiki/%E6%B8%A9%E7%97%85%E6%9D%A1%E8%BE%A8"
  },
  {
    "id": "F036",
    "name": "川芎茶调散",
    "category": "治风剂-疏散外风",
    "composition": [
      {
        "herb": "川芎",
        "role": "君",
        "dosage": "12g"
      },
      {
        "herb": "防风",
        "role": "臣",
        "dosage": "4.5g"
      },
      {
        "herb": "白芷",
        "role": "佐",
        "dosage": "6g"
      },
      {
        "herb": "细辛",
        "role": "佐",
        "dosage": "3g"
      },
      {
        "herb": "甘草",
        "role": "使",
        "dosage": "6g"
      },
      {
        "herb": "薄荷",
        "role": "佐使",
        "dosage": "12g"
      }
    ],
    "effect": "疏风止痛",
    "indication": "外感风邪头痛。偏正头痛，巅顶作痛",
    "source": "太平惠民和剂局方",
    "source_url": "https://zh.wikisource.org/wiki/%E5%A4%AA%E5%B9%B3%E6%83%A0%E6%B0%91%E5%92%8C%E5%8A%91%E5%B1%80%E6%96%B9"
  },
  {
    "id": "F037",
    "name": "杏苏散",
    "category": "治燥剂-轻宣外燥",
    "composition": [
      {
        "herb": "紫苏叶",
        "role": "君",
        "dosage": "9g"
      },
      {
        "herb": "杏仁",
        "role": "臣",
        "dosage": "9g"
      },
      {
        "herb": "半夏",
        "role": "佐",
        "dosage": "9g"
      },
      {
        "herb": "陈皮",
        "role": "佐",
        "dosage": "6g"
      },
      {
        "herb": "茯苓",
        "role": "佐",
        "dosage": "9g"
      },
      {
        "herb": "前胡",
        "role": "佐",
        "dosage": "9g"
      },
      {
        "herb": "桔梗",
        "role": "佐",
        "dosage": "6g"
      },
      {
        "herb": "枳壳",
        "role": "佐",
        "dosage": "6g"
      },
      {
        "herb": "甘草",
        "role": "使",
        "dosage": "3g"
      }
    ],
    "effect": "轻宣凉燥，理肺化痰",
    "indication": "外感凉燥证。恶寒无汗，头微痛",
    "source": "温病条辨 卷一",
    "source_url": "https://zh.wikisource.org/wiki/%E6%B8%A9%E7%97%85%E6%9D%A1%E8%BE%A8"
  },
  {
    "id": "F038",
    "name": "天王补心丹",
    "category": "安神剂-补养安神",
    "composition": [
      {
        "herb": "生地黄",
        "role": "君",
        "dosage": "120g"
      },
      {
        "herb": "人参",
        "role": "臣",
        "dosage": "15g"
      },
      {
        "herb": "丹参",
        "role": "臣",
        "dosage": "15g"
      },
      {
        "herb": "玄参",
        "role": "佐",
        "dosage": "15g"
      },
      {
        "herb": "茯苓",
        "role": "佐",
        "dosage": "15g"
      },
      {
        "herb": "远志",
        "role": "佐",
        "dosage": "15g"
      },
      {
        "herb": "当归",
        "role": "佐",
        "dosage": "30g"
      },
      {
        "herb": "酸枣仁",
        "role": "佐",
        "dosage": "30g"
      }
    ],
    "effect": "滋阴养血，补心安神",
    "indication": "阴虚血少，神志不安证。心悸失眠",
    "source": "摄生秘剖",
    "source_url": "https://www.baidu.com/s?wd=天王补心丹+方剂+组成"
  },
  {
    "id": "F039",
    "name": "补阳还五汤",
    "category": "活血化瘀剂",
    "composition": [
      {
        "herb": "黄芪",
        "role": "君",
        "dosage": "120g"
      },
      {
        "herb": "当归",
        "role": "臣",
        "dosage": "6g"
      },
      {
        "herb": "川芎",
        "role": "佐",
        "dosage": "3g"
      },
      {
        "herb": "桃仁",
        "role": "佐",
        "dosage": "3g"
      },
      {
        "herb": "红花",
        "role": "佐",
        "dosage": "3g"
      }
    ],
    "effect": "补气活血，通络止痛",
    "indication": "中风后遗症。半身不遂，口眼歪斜",
    "source": "医林改错",
    "source_url": "https://zh.wikisource.org/wiki/%E5%8C%BB%E6%9E%97%E6%94%B9%E9%94%99"
  },
  {
    "id": "F040",
    "name": "阳和汤",
    "category": "温里剂-温经散寒",
    "composition": [
      {
        "herb": "熟地黄",
        "role": "君",
        "dosage": "30g"
      },
      {
        "herb": "肉桂",
        "role": "臣",
        "dosage": "3g"
      },
      {
        "herb": "麻黄",
        "role": "佐",
        "dosage": "2g"
      },
      {
        "herb": "鹿角胶",
        "role": "佐",
        "dosage": "9g"
      },
      {
        "herb": "白芥子",
        "role": "佐",
        "dosage": "6g"
      },
      {
        "herb": "姜炭",
        "role": "佐",
        "dosage": "2g"
      },
      {
        "herb": "生甘草",
        "role": "使",
        "dosage": "3g"
      }
    ],
    "effect": "温阳补血，散寒通滞",
    "indication": "阴疽。贴骨疽、脱疽、流注等",
    "source": "外科证治全生集",
    "source_url": "https://www.baidu.com/s?wd=阳和汤+方剂+组成"
  }
];