import type { MachineDetailCard, MachineDetailContent } from "@/data/machineDetailTypes";

const compressorUsabilityDefaults: MachineDetailCard[] = [
  {
    title: "Easy To Move",
    description: "Caster wheels and handles make repositioning the unit around the factory floor effortless.",
  },
  {
    title: "Easy To Maintain",
    description: "Accessible panels and a straightforward pump design keep servicing simple and downtime low.",
  },
  {
    title: "Easy To Run",
    description: "Clear voltage and pressure ratings make installation and daily operation straightforward.",
  },
];

export const compressorDetailContent: MachineDetailContent[] = [
  {
    slug: "built-in-package",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Screw Compressor",
    intro: "Built-in-package series is the ideal \"all in one\" solution for ourcustomers who prefer a compact solution. No pipe work,everything is ready, just plug in the power, connect thecompressed air supply to the consumer network or device.",
    highlights: [
      "Built-in-package series is the ideal \"all in one\" solution for ourcustomers who prefer a compact solution. No pipe work,everything is ready, just plug in the power, connect thecompressed air supply to the consumer network or device",
      "The advantages for our customers:",
      "Compact design",
      "Due to the small space requirement, this machine fitsalmost everywhere",
      "Provide Cleaned Compressed Air Class 1-4-1",
      "Industrial Grade Air: ISO Class 1-4-1"
    ],
    application: {
      title: "What can I do with a LIDA screw compressor?",
      body: "The BUILT-IN PACKAGE from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Built-in-package series is the ideal \"all in one\" solution for ourcustomers who prefer a compact solution. No pipe work,everything is ready, just plug in the power, connect thecompressed air supply to the consumer network or device",
      "The advantages for our customers:",
      "Compact design",
      "Due to the small space requirement, this machine fitsalmost everywhere",
      "Provide Cleaned Compressed Air Class 1-4-1",
      "Industrial Grade Air: ISO Class 1-4-1",
      "Refrigerant Dryer",
      "Removes condensate water from compressed air to alevel that is suited by most industrial applications"
    ],
    parameters: {
      rowKey: "model",
      columns: [
        { key: "model", label: "MODEL" },
        { key: "workingPressureBar", label: "WORKING PRESSURE (BAR)" },
        { key: "fADm3min", label: "FAD M3/MIN" },
        { key: "power", label: "POWER" },
        { key: "power1", label: "POWER (2)" },
        { key: "tankLiter", label: "TANK LITER" },
        { key: "noisedBA", label: "NOISE DB(A)" },
        { key: "weightkg", label: "WEIGHT (KG)" },
        { key: "diemensionmmLxWxH", label: "DIEMENSION(MM) LXWXH" },
        { key: "airOutletSize", label: "AIR OUTLET SIZE" }
      ],
      rows: [
        { "model": "LD-10B", "workingPressureBar": "8", "fADm3min": "1.1", "power": "7.5", "power1": "10", "tankLiter": "360", "noisedBA": "62±3", "weightkg": "480", "diemensionmmLxWxH": "1655x735x1675", "airOutletSize": "G 3/4\"" },
        { "model": "LD-15B", "workingPressureBar": "8", "fADm3min": "2.0", "power": "11", "power1": "15", "tankLiter": "500", "noisedBA": "65±3", "weightkg": "650", "diemensionmmLxWxH": "1900x860x1810", "airOutletSize": "G 1\"" },
        { "model": "LD-20B", "workingPressureBar": "8", "fADm3min": "2.4", "power": "15", "power1": "20", "tankLiter": "500", "noisedBA": "65±3", "weightkg": "660", "diemensionmmLxWxH": "1900x860x1810", "airOutletSize": "G 1\"" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "BUILT-IN PACKAGE",
  },
  {
    slug: "e-series",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Screw Compressor",
    intro: "Direct driven fixed-speed screw compressor",
    highlights: [
      "Why choose permanent-magnetic motor driven compressors?To improve variable speed control",
      "To increase the efficiency of compressor operation",
      "To reduce the running costs",
      "To reduce the overall dimensions and installation space",
      "To eliminate the loss of speed multiplying systems",
      "Design Features"
    ],
    application: {
      title: "What can I do with a LIDA screw compressor?",
      body: "The E-series from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Why choose permanent-magnetic motor driven compressors?To improve variable speed control",
      "To increase the efficiency of compressor operation",
      "To reduce the running costs",
      "To reduce the overall dimensions and installation space",
      "To eliminate the loss of speed multiplying systems",
      "Design Features",
      "Full side open cabinet structureFor easy maintenance",
      "316 stainless steel control tubingIncrease reliability due to corrosion free"
    ],
    parameters: {
      rowKey: "model",
      columns: [
        { key: "model", label: "MODEL" },
        { key: "workingPressureBar", label: "WORKING PRESSURE (BAR)" },
        { key: "fADmmin", label: "FAD M³/MIN" },
        { key: "power", label: "POWER" },
        { key: "power1", label: "POWER (2)" },
        { key: "noisedBA3", label: "NOISE DB(A) ±3" },
        { key: "weightkg", label: "WEIGHT (KG)" },
        { key: "diemensionmmLxWxH", label: "DIEMENSION(MM) LXWXH" },
        { key: "airOutletSize", label: "AIR OUTLET SIZE" }
      ],
      rows: [
        { "model": "LD-10PM", "workingPressureBar": "8", "fADmmin": "1.1", "power": "7.5", "power1": "10", "noisedBA3": "62", "weightkg": "240", "diemensionmmLxWxH": "1000x735x970", "airOutletSize": "G 3/4\"" },
        { "model": "LD-15PM", "workingPressureBar": "8", "fADmmin": "2.0", "power": "11", "power1": "15", "noisedBA3": "65", "weightkg": "300", "diemensionmmLxWxH": "1100x750x1150", "airOutletSize": "G 1\"" },
        { "model": "LD-30PM", "workingPressureBar": "8", "fADmmin": "3.4", "power": "22", "power1": "30", "noisedBA3": "68", "weightkg": "370", "diemensionmmLxWxH": "1350x895x1150", "airOutletSize": "G 1\"" },
        { "model": "LD-50PM", "workingPressureBar": "8", "fADmmin": "6.2", "power": "37", "power1": "50", "noisedBA3": "70", "weightkg": "505", "diemensionmmLxWxH": "1500x1000x1195", "airOutletSize": "G 1-1/2\"" },
        { "model": "LD-75PM", "workingPressureBar": "8", "fADmmin": "9.2", "power": "55", "power1": "75", "noisedBA3": "72", "weightkg": "950", "diemensionmmLxWxH": "1800x1360x1665", "airOutletSize": "G 2\"" },
        { "model": "LD-125PM", "workingPressureBar": "8", "fADmmin": "15.0", "power": "90", "power1": "125", "noisedBA3": "75", "weightkg": "1900", "diemensionmmLxWxH": "2000x1535x1800", "airOutletSize": "G 2\"" },
        { "model": "LD-175PM", "workingPressureBar": "8", "fADmmin": "22.0", "power": "132", "power1": "175", "noisedBA3": "78", "weightkg": "2510", "diemensionmmLxWxH": "3200x1566x1800", "airOutletSize": "DN 65”" },
        { "model": "LD 60PM", "workingPressureBar": "8", "fADmmin": "42.0", "power": "250", "power1": "350", "noisedBA3": "80", "weightkg": "4300", "diemensionmmLxWxH": "3800x2270x2300", "airOutletSize": "DN 100”" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "E-series",
  },
  {
    slug: "l-20pm-16q",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Screw Compressor",
    intro: "Variable-speed control drive for energy saving & optimized running",
    highlights: [
      "Installed over lE4 high-efficiency permanent-magnetic motor",
      "Variable-speed control drive for energy saving & optimized running",
      "IS0 8573.1 grade clean compressed air treatment system (Air Class 1-4-1)",
      "All-in-one system in compact sized system with low-pressure drop",
      "Screw Compressor",
      "L-20PM∕16Q"
    ],
    application: {
      title: "What can I do with a LIDA screw compressor?",
      body: "The L-20PM/16Q from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Installed over lE4 high-efficiency permanent-magnetic motor",
      "Variable-speed control drive for energy saving & optimized running",
      "IS0 8573.1 grade clean compressed air treatment system (Air Class 1-4-1)",
      "All-in-one system in compact sized system with low-pressure drop",
      "Screw Compressor",
      "L-20PM∕16Q",
      "L-30PM∕16Q",
      "FreeAir Delivery m3∕min"
    ],
    parameters: {
      rowKey: "model",
      columns: [
        { key: "model", label: "MODEL" },
        { key: "fad", label: "FAD (M³/MIN)" },
        { key: "pressure", label: "PRESSURE (BAR)" },
        { key: "power", label: "POWER (KW)" },
        { key: "weight", label: "WEIGHT (KG)" },
        { key: "dimensions", label: "DIMENSIONS (MM)" }
      ],
      rows: [
        { "model": "L-20PM/16Q", "fad": "1.1", "pressure": "8-16", "power": "15", "weight": "520", "dimensions": "1900x875x1740" },
        { "model": "L-30PM/16Q", "fad": "1.7", "pressure": "8-16", "power": "22", "weight": "640", "dimensions": "1900x970x1840" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "L-20PM/16Q",
  },
  {
    slug: "4009n-200ls",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "4009N/200LS from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "Low sound level cabinet design",
      "Highly reliable pump",
      "Sing phase & three phases",
      "CE certificated",
      "Long handle for easier moving",
      "Caster & solid 8 inch rubber wheel"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The 4009N/200LS from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Low sound level cabinet design",
      "Highly reliable pump",
      "Sing phase & three phases",
      "CE certificated",
      "Long handle for easier moving",
      "Caster & solid 8 inch rubber wheel",
      "Piston compressor"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "pressurebar", label: "PRESSURE BAR" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "displacementLminCFM", label: "DISPLACEMENT L∕MIN./CFM" },
        { key: "voltHz", label: "VOLT/HZ" }
      ],
      rows: [
        { "name": "3008/100LS", "pump": "3008", "tankLt": "100", "powerHpKw": "2/1.5", "pressurebar": "10", "lubricated": "YES", "rPM": "1000", "displacementLminCFM": "180/6.4", "voltHz": "230/50" },
        { "name": "3008∕200LS", "pump": "3008", "tankLt": "200", "powerHpKw": "2/1.5", "pressurebar": "10", "lubricated": "YES", "rPM": "1000", "displacementLminCFM": "180/6.4", "voltHz": "230/50" },
        { "name": "4009N∕100LS", "pump": "4009N", "tankLt": "100", "powerHpKw": "3/2.2", "pressurebar": "10", "lubricated": "YES", "rPM": "1086", "displacementLminCFM": "418/15", "voltHz": "230/50" },
        { "name": "4009N∕200LS", "pump": "4009N", "tankLt": "200", "powerHpKw": "3/2.2", "pressurebar": "10", "lubricated": "YES", "rPM": "1086", "displacementLminCFM": "418/15", "voltHz": "230/50" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "4009N/200LS",
  },
  {
    slug: "two-stage-cast-iron-pumps",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Air Pump",
    intro: "Two-stage-Cast-iron-pumps from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "W0.30/12.5",
      "W0.60 & W0.80 /12.5",
      "W1.5/12.5",
      "12.5bar Pressure",
      "Swedish stainless steel reed valve",
      "Low oil consumption"
    ],
    application: {
      title: "What can I do with a LIDA air pump?",
      body: "The Two Stage Cast-Iron Pumps from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "W0.30/12.5",
      "W0.60 & W0.80 /12.5",
      "W1.5/12.5",
      "12.5bar Pressure",
      "Swedish stainless steel reed valve",
      "Low oil consumption",
      "Precise balanced crank shaftand flywheel for low vibration",
      "Al head with big cooling fin forlower temperature operation"
    ],
    parameters: {
      rowKey: "model",
      columns: [
        { key: "model", label: "MODEL" },
        { key: "productNo", label: "PRODUCT NO." },
        { key: "hp", label: "HP" },
        { key: "kw", label: "KW" },
        { key: "maxPressBar", label: "MAX. PRESS. BAR" },
        { key: "boreStrokecyl", label: "BORE*STROKE*CYL." },
        { key: "rPM", label: "RPM" },
        { key: "displacementLmincfm", label: "DISPLACEMENT L/MIN CFM" },
        { key: "displacementLmincfm1", label: "DISPLACEMENT L/MIN CFM (2)" },
        { key: "weightkg", label: "WEIGHT KG" }
      ],
      rows: [
        { "model": "V0.20∕12.5", "productNo": "6012065051000", "hp": "3.0", "kw": "2.2", "maxPressBar": "12.5", "boreStrokecyl": "Φ65*46*1∕Φ51*1", "rPM": "1250", "displacementLmincfm": "191", "displacementLmincfm1": "6.7", "weightkg": "17.6" },
        { "model": "W0.30∕12.5", "productNo": "6013065046004", "hp": "4.0", "kw": "3.0", "maxPressBar": "12.5", "boreStrokecyl": "Φ65*48*2∕Φ51*1", "rPM": "1150", "displacementLmincfm": "366", "displacementLmincfm1": "13.0", "weightkg": "25.5" },
        { "model": "V0.40∕12.5", "productNo": "6012090060006", "hp": "5.5", "kw": "4.0", "maxPressBar": "12.5", "boreStrokecyl": "Φ90*60*1∕Φ65*1", "rPM": "1280", "displacementLmincfm": "488", "displacementLmincfm1": "17.3", "weightkg": "41.4" },
        { "model": "W0.60∕12.5", "productNo": "6013080060005", "hp": "7.5", "kw": "5.5", "maxPressBar": "12.5", "boreStrokecyl": "Φ80*60*2∕Φ65*1", "rPM": "1180", "displacementLmincfm": "712", "displacementLmincfm1": "25.2", "weightkg": "50.1" },
        { "model": "W0.80∕12.5", "productNo": "6013090070006", "hp": "10", "kw": "7.5", "maxPressBar": "12.5", "boreStrokecyl": "Φ90*70*2∕Φ80*1", "rPM": "1100", "displacementLmincfm": "980", "displacementLmincfm1": "34.6", "weightkg": "55.8" },
        { "model": "W-1.1/12.5", "productNo": "6013100100001", "hp": "15", "kw": "11", "maxPressBar": "12.5", "boreStrokecyl": "Φ100*100*2/Φ 90*1", "rPM": "750", "displacementLmincfm": "1178", "displacementLmincfm1": "41.6", "weightkg": "100.7" },
        { "model": "W-1.5/12.5", "productNo": "6013100100002", "hp": "20", "kw": "15", "maxPressBar": "12.5", "boreStrokecyl": "Φ120*100*2∕Φ 100*1", "rPM": "750", "displacementLmincfm": "1695", "displacementLmincfm1": "60", "weightkg": "106.1" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "Two Stage Cast-Iron Pumps",
  },
  {
    slug: "single-stage-belt-driven-pumps",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Air Pump",
    intro: "Single-stage-belt-driven-pumps from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "4009/4009N",
      "V0.40/V0.48",
      "10bar Pressure",
      "Swedish stainless steel valve plate",
      "Low oil consumption",
      "Precise balanced crank shaftand flywheel for low vibration"
    ],
    application: {
      title: "What can I do with a LIDA air pump?",
      body: "The Single Stage Belt Driven Pumps from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "4009/4009N",
      "V0.40/V0.48",
      "10bar Pressure",
      "Swedish stainless steel valve plate",
      "Low oil consumption",
      "Precise balanced crank shaftand flywheel for low vibration",
      "Al head big cooling fin forlower temperature operation"
    ],
    parameters: {
      rowKey: "model",
      columns: [
        { key: "model", label: "MODEL" },
        { key: "productNo", label: "PRODUCT NO." },
        { key: "hp", label: "HP" },
        { key: "kw", label: "KW" },
        { key: "maxPressBar", label: "MAX. PRESS. BAR" },
        { key: "boremm", label: "BORE MM" },
        { key: "strokemm", label: "STROKE MM" },
        { key: "noofcyl", label: "NO. OF CYL." },
        { key: "rPM", label: "RPM" },
        { key: "displacementLmincfm", label: "DISPLACEMENT L/MIN CFM" },
        { key: "displacementLmincfm1", label: "DISPLACEMENT L/MIN CFM (2)" },
        { key: "weightkg", label: "WEIGHT KG" }
      ],
      rows: [
        { "model": "3008", "productNo": "6012055038000", "hp": "2", "kw": "1.5", "maxPressBar": "10", "boremm": "55", "strokemm": "38", "noofcyl": "2", "rPM": "1445", "displacementLmincfm": "261", "displacementLmincfm1": "9.2", "weightkg": "9.8" },
        { "model": "3008L", "productNo": "6012060038000", "hp": "2.2", "kw": "1.65", "maxPressBar": "10", "boremm": "60", "strokemm": "38", "noofcyl": "2", "rPM": "1350", "displacementLmincfm": "290", "displacementLmincfm1": "10.2", "weightkg": "9.9" },
        { "model": "4009/", "productNo": "6012065058000", "hp": "3", "kw": "2.2", "maxPressBar": "10", "boremm": "65", "strokemm": "", "noofcyl": "2", "rPM": "1086", "displacementLmincfm": "418", "displacementLmincfm1": "15", "weightkg": "" },
        { "model": "VO. 17", "productNo": "6012051046000", "hp": "2.2", "kw": "1.65", "maxPressBar": "10", "boremm": "51", "strokemm": "46", "noofcyl": "2", "rPM": "1250", "displacementLmincfm": "235", "displacementLmincfm1": "8.3", "weightkg": "17.5" },
        { "model": "WO.36", "productNo": "6013065048000", "hp": "3.0", "kw": "2.2", "maxPressBar": "10", "boremm": "65", "strokemm": "48", "noofcyl": "3", "rPM": "945", "displacementLmincfm": "452", "displacementLmincfm1": "15.9", "weightkg": "26.9" },
        { "model": "V0.40", "productNo": "6012080070000", "hp": "5.5", "kw": "4.0", "maxPressBar": "10", "boremm": "80", "strokemm": "70", "noofcyl": "2", "rPM": "850", "displacementLmincfm": "598", "displacementLmincfm1": "21.1", "weightkg": "35" },
        { "model": "V0.48", "productNo": "6012090060000", "hp": "5.5", "kw": "4.0", "maxPressBar": "10", "boremm": "90", "strokemm": "60", "noofcyl": "2", "rPM": "920", "displacementLmincfm": "702", "displacementLmincfm1": "24.8", "weightkg": "41.4" },
        { "model": "W0.9", "productNo": "6019080070000", "hp": "10", "kw": "7.5", "maxPressBar": "10", "boremm": "90", "strokemm": "70", "noofcyl": "3", "rPM": "950", "displacementLmincfm": "1269", "displacementLmincfm1": "45", "weightkg": "55.8" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "Single Stage Belt Driven Pumps",
  },
  {
    slug: "single-stage-direct-driven-pumps",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Air Pump",
    intro: "Single-stage-direct-driven-pumps from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "2001S/2501S",
      "2001/2501",
      "2502/2502N",
      "8 bar to 10 bar pressure",
      "Swedish stainless steel reed valve",
      "Low oil consumption"
    ],
    application: {
      title: "What can I do with a LIDA air pump?",
      body: "The Single Stage Direct Driven Pumps from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "2001S/2501S",
      "2001/2501",
      "2502/2502N",
      "8 bar to 10 bar pressure",
      "Swedish stainless steel reed valve",
      "Low oil consumption",
      "S1 duty designed motor",
      "Precise balanced crank shaftfor low vibration"
    ],
    parameters: {
      rowKey: "model",
      columns: [
        { key: "model", label: "MODEL" },
        { key: "productNo", label: "PRODUCT NO." },
        { key: "hp", label: "HP" },
        { key: "kw", label: "KW" },
        { key: "maxPressBar", label: "MAX. PRESS. BAR" },
        { key: "boremm", label: "BORE MM" },
        { key: "stroke", label: "STROKE" },
        { key: "noofcyl", label: "NO. OF CYL." },
        { key: "rPM", label: "RPM" },
        { key: "displacementLmincfm", label: "DISPLACEMENT L/MIN CFM" },
        { key: "displacementLmincfm1", label: "DISPLACEMENT L/MIN CFM (2)" },
        { key: "weightkg", label: "WEIGHT KG" }
      ],
      rows: [
        { "model": "2001S", "productNo": "6001042038000", "hp": "1.5", "kw": "1.1", "maxPressBar": "8", "boremm": "42", "stroke": "38", "noofcyl": "1", "rPM": "2850", "displacementLmincfm": "150", "displacementLmincfm1": "5.3", "weightkg": "10.4" },
        { "model": "2501S", "productNo": "6001042038001", "hp": "1.5", "kw": "1.1", "maxPressBar": "8", "boremm": "42", "stroke": "38", "noofcyl": "1", "rPM": "2850", "displacementLmincfm": "150", "displacementLmincfm1": "5.3", "weightkg": "10.4" },
        { "model": "2501", "productNo": "6001047038009", "hp": "2.0", "kw": "1.5", "maxPressBar": "8", "boremm": "47", "stroke": "38", "noofcyl": "1", "rPM": "2850", "displacementLmincfm": "188", "displacementLmincfm1": "6.7", "weightkg": "10.9" },
        { "model": "2502", "productNo": "6001047038010", "hp": "2.0", "kw": "1.5", "maxPressBar": "8", "boremm": "47", "stroke": "38", "noofcyl": "1", "rPM": "2850", "displacementLmincfm": "188", "displacementLmincfm1": "6.7", "weightkg": "10.9" },
        { "model": "2502N", "productNo": "6001047044000", "hp": "2.0", "kw": "1.5", "maxPressBar": "10", "boremm": "47", "stroke": "44", "noofcyl": "1", "rPM": "2900", "displacementLmincfm": "221", "displacementLmincfm1": "7.8", "weightkg": "11.6" },
        { "model": "2519", "productNo": "6001050042000", "hp": "2.5", "kw": "1.8", "maxPressBar": "10", "boremm": "50", "stroke": "42", "noofcyl": "1", "rPM": "2900", "displacementLmincfm": "239", "displacementLmincfm1": "8.5", "weightkg": "13.6" },
        { "model": "3007", "productNo": "6002047034000", "hp": "3.0", "kw": "2.2", "maxPressBar": "8", "boremm": "47", "stroke": "34", "noofcyl": "2", "rPM": "2850", "displacementLmincfm": "336", "displacementLmincfm1": "11.9", "weightkg": "18.2" },
        { "model": "3007X", "productNo": "6002048040000", "hp": "3.0", "kw": "2.2", "maxPressBar": "10", "boremm": "48", "stroke": "40", "noofcyl": "2", "rPM": "2850", "displacementLmincfm": "412", "displacementLmincfm1": "14.6", "weightkg": "19.7" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "Single Stage Direct Driven Pumps",
  },
  {
    slug: "3009n-40l",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "3009N/40L from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "Portable design",
      "Low voltage starting motor",
      "Cast-iron cylinder",
      "High-efficiency pump",
      "Motor overload switch",
      "* 60HZ (220V, 1⌀) available"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The 3009N/40L from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Portable design",
      "Low voltage starting motor",
      "Cast-iron cylinder",
      "High-efficiency pump",
      "Motor overload switch",
      "* 60HZ (220V, 1⌀) available",
      "Piston compressor"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlminCFM", label: "AIR DISPLACEMENT L/MIN./CFM" },
        { key: "voltHz", label: "VOLT/HZ" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "3009N/40L", "pump": "3009N", "tankLt": "40", "powerHpKw": "3/2.2", "cylindern": "2", "maxpressurebarPSI": "10/145", "lubricated": "YES", "rPM": "1100", "airDisplacementlminCFM": "278/9.8", "voltHz": "230/50", "weightkglbs": "38/83", "dimensionsWxDxHmm": "698x346x663" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "3009N/40L",
  },
  {
    slug: "3009s-40l",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "3009S/40L from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "V-twin cast-iron cylinder",
      "NEMA type CSA electric motor",
      "Auto trip overload switch",
      "* 60HZ (220V, 1⌀) available",
      "Piston compressor"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The 3009S/40L from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "V-twin cast-iron cylinder",
      "NEMA type CSA electric motor",
      "Auto trip overload switch",
      "* 60HZ (220V, 1⌀) available",
      "Piston compressor"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementIminCFM", label: "AIR DISPLACEMENT I/MIN./CFM" },
        { key: "voltHz", label: "VOLT/HZ" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "3009S/40L", "pump": "3009S", "tankLt": "40", "powerHpKw": "3/2.2", "cylindern": "2", "maxpressurebarPSI": "10/145", "lubricated": "YES", "rPM": "1250", "airDisplacementIminCFM": "230/8.1", "voltHz": "220/50", "weightkglbs": "40/88.1", "dimensionsWxDxHmm": "750x390x680" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "3009S/40L",
  },
  {
    slug: "3008l-40l",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "3008L/40L from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "Portable design",
      "Low voltage starting motor",
      "Cast-iron cylinder",
      "High-efficiency pump",
      "Motor overload switch",
      "* 60HZ (220V, 1⌀) available"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The 3008L/40L from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Portable design",
      "Low voltage starting motor",
      "Cast-iron cylinder",
      "High-efficiency pump",
      "Motor overload switch",
      "* 60HZ (220V, 1⌀) available",
      "Piston compressor"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementIminCFM", label: "AIR DISPLACEMENT I/MIN./CFM" },
        { key: "voltHz", label: "VOLT/HZ" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "3008L/40L", "pump": "3008L", "tankLt": "40", "powerHpKw": "3/2.2", "cylindern": "2", "maxpressurebarPSI": "10/145", "lubricated": "YES", "rPM": "1500", "airDisplacementIminCFM": "322/11.4", "voltHz": "230/50", "weightkglbs": "35/77.1", "dimensionsWxDxHmm": "830x350x665" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "3008L/40L",
  },
  {
    slug: "3009n-50l",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "3009N/50L from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "V-twin cast-iron cylinder",
      "NEMA type CSA electric motor",
      "Auto trip overload switch",
      "* 60HZ (220V, 1⌀) available",
      "Piston compressor"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The 3009N/50L from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "V-twin cast-iron cylinder",
      "NEMA type CSA electric motor",
      "Auto trip overload switch",
      "* 60HZ (220V, 1⌀) available",
      "Piston compressor"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlminCFM", label: "AIR DISPLACEMENT L/MIN./CFM" },
        { key: "voltHz", label: "VOLT/HZ" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "3009N/50L", "pump": "3009N", "tankLt": "50", "powerHpKw": "3/2.2", "cylindern": "2", "maxpressurebarPSI": "10/145", "lubricated": "YES", "rPM": "1100", "airDisplacementlminCFM": "278/9.8", "voltHz": "230/50", "weightkglbs": "48/105", "dimensionsWxDxHmm": "845x360x685" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "3009N/50L",
  },
  {
    slug: "3008-50l",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "3008/50L from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "Professional plastic belt guard",
      "European style design",
      "Heavy-duty design",
      "Double front rubber foot for stable running",
      "CE certificated",
      "* 60HZ (220V, 1⌀) available"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The 3008/50L from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Professional plastic belt guard",
      "European style design",
      "Heavy-duty design",
      "Double front rubber foot for stable running",
      "CE certificated",
      "* 60HZ (220V, 1⌀) available",
      "Piston compressor"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlminCFM", label: "AIR DISPLACEMENT L/MIN./CFM" },
        { key: "voltHz", label: "VOLT/HZ" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "3008/50L", "pump": "3008", "tankLt": "50", "powerHpKw": "2/1.5", "cylindern": "2", "maxpressurebarPSI": "10/145", "lubricated": "YES", "rPM": "1445", "airDisplacementlminCFM": "261/9.2", "voltHz": "230/50", "weightkglbs": "55/121", "dimensionsWxDxHmm": "766x400x670" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "3008/50L",
  },
  {
    slug: "3008l-100l",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "3008L/100L from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "Suitable heavy-duty work",
      "Strong metal belt guard",
      "Long handle for easier moving",
      "Large wheel and caster in front foot for stable operation",
      "* 60HZ (220V, 1⌀) available",
      "Piston compressor"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The 3008L/100L from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Suitable heavy-duty work",
      "Strong metal belt guard",
      "Long handle for easier moving",
      "Large wheel and caster in front foot for stable operation",
      "* 60HZ (220V, 1⌀) available",
      "Piston compressor"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlminCFM", label: "AIR DISPLACEMENT L/MIN./CFM" },
        { key: "voltHz", label: "VOLT/HZ" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "3008L/100L", "pump": "3008L", "tankLt": "100", "powerHpKw": "3/2.2", "cylindern": "2", "maxpressurebarPSI": "10/145", "lubricated": "YES", "rPM": "1500", "airDisplacementlminCFM": "322/11.4", "voltHz": "230/50", "weightkglbs": "72/158", "dimensionsWxDxHmm": "1150x430x800" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "3008L/100L",
  },
  {
    slug: "4009-100l",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "Bigger capacity for powerful work (similar with 4HP capacity)",
    highlights: [
      "Bigger capacity for powerful work (similar with 4HP capacity)",
      "Suitable heavy-duty work",
      "Strong metal belt guard",
      "Long handle for easier moving",
      "Large wheel and caster in front for stable operation",
      "* 60HZ (220V, 1⌀) available"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The 4009/100L from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Bigger capacity for powerful work (similar with 4HP capacity)",
      "Suitable heavy-duty work",
      "Strong metal belt guard",
      "Long handle for easier moving",
      "Large wheel and caster in front for stable operation",
      "* 60HZ (220V, 1⌀) available",
      "Piston compressor"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlminCFM", label: "AIR DISPLACEMENT L/MIN./CFM" },
        { key: "voltHz", label: "VOLT/HZ" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "4009/100L", "pump": "4009", "tankLt": "100", "powerHpKw": "3/2.2", "cylindern": "2", "maxpressurebarPSI": "10/145", "lubricated": "YES", "rPM": "1086", "airDisplacementlminCFM": "418/14.8", "voltHz": "230/50", "weightkglbs": "80/176", "dimensionsWxDxHmm": "1150x430x856" },
        { "name": "4009/100L", "pump": "4009", "tankLt": "100", "powerHpKw": "4/3", "cylindern": "2", "maxpressurebarPSI": "10/145", "lubricated": "YES", "rPM": "1250", "airDisplacementlminCFM": "481/17.0", "voltHz": "230/50", "weightkglbs": "81/178", "dimensionsWxDxHmm": "1150x430x856" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "4009/100L",
  },
  {
    slug: "4009n-200l",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "4009N/200L from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "High-efficiency twin cylinder pump",
      "CE certificated",
      "Larger diameter wheel and double caster in front",
      "Longer handle for comfortable use",
      "Piston compressor"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The 4009N/200L from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "High-efficiency twin cylinder pump",
      "CE certificated",
      "Larger diameter wheel and double caster in front",
      "Longer handle for comfortable use",
      "Piston compressor"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlminCFM", label: "AIR DISPLACEMENT L/MIN./CFM" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "4009N/150L", "pump": "4009N", "tankLt": "150", "powerHpKw": "3/2.2", "cylindern": "2", "maxpressurebarPSI": "10/145", "lubricated": "YES", "rPM": "1086", "airDisplacementlminCFM": "418/15", "weightkglbs": "230/50", "dimensionsWxDxHmm": "1350×460×910" },
        { "name": "4009N/200L", "pump": "4009N", "tankLt": "200", "powerHpKw": "3/2.2", "cylindern": "2", "maxpressurebarPSI": "10/145", "lubricated": "YES", "rPM": "1086", "airDisplacementlminCFM": "418/15", "weightkglbs": "110/242.5", "dimensionsWxDxHmm": "1460×490×970" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "4009N/200L",
  },
  {
    slug: "4009-270l",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "4009/270L from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "All CE certificated electric components",
      "(German Schneider Brand)",
      "LUOWEI Tandem 4009/300L/3HP",
      "220V/50Hz",
      "2x418L/min",
      "1605x615x1200"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The 4009/270L from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "All CE certificated electric components",
      "(German Schneider Brand)",
      "LUOWEI Tandem 4009/300L/3HP",
      "220V/50Hz",
      "2x418L/min",
      "1605x615x1200",
      "Piston compressor"
    ],
    parameters: {
      rowKey: "model",
      columns: [
        { key: "model", label: "MODEL" },
        { key: "pump", label: "PUMP" },
        { key: "displacement", label: "DISPLACEMENT" },
        { key: "pressure", label: "MAX PRESSURE" },
        { key: "power", label: "MOTOR OUTPUT (KW)" },
        { key: "weight", label: "WEIGHT" }
      ],
      rows: [
        { "model": "4009/270L", "pump": "4009", "displacement": "2x418 L/min", "pressure": "10 bar", "power": "2x2.2", "weight": "190 kg" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "4009/270L",
  },
  {
    slug: "v0-17-50l",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "V0.17/50L from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "Compact sized design",
      "S1 duty running electric motor",
      "Larger sized wheel",
      "European metal belt guard"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The V0.17/50L from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Compact sized design",
      "S1 duty running electric motor",
      "Larger sized wheel",
      "European metal belt guard"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlminCFM", label: "AIR DISPLACEMENT L/MIN./CFM" },
        { key: "voltHz", label: "VOLT/HZ" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "V0.17/50L", "pump": "V0.17", "tankLt": "50", "powerHpKw": "2.2/1.65", "cylindern": "2", "maxpressurebarPSI": "10/145", "lubricated": "YES", "rPM": "1250", "airDisplacementlminCFM": "235/8.3", "voltHz": "230/50", "weightkglbs": "65/143.3", "dimensionsWxDxHmm": "796x410x716" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "V0.17/50L",
  },
  {
    slug: "v0-25-100l",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "V0.25/100L from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "V0.25/100L",
      "*150L tank available",
      "S1 duty running electric motor",
      "Larger sized wheel",
      "Longer handle for easy moving",
      "European metal belt guard"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The V0.25/100L from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "V0.25/100L",
      "*150L tank available",
      "S1 duty running electric motor",
      "Larger sized wheel",
      "Longer handle for easy moving",
      "European metal belt guard"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlminCFM", label: "AIR DISPLACEMENT L/MIN./CFM" },
        { key: "voltHz", label: "VOLT/HZ" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "V0.25/100L", "pump": "V0.25", "tankLt": "100", "powerHpKw": "3/2.2", "cylindern": "2", "maxpressurebarPSI": "10/145", "lubricated": "YES", "rPM": "1235", "airDisplacementlminCFM": "377/13.3", "voltHz": "230/50", "weightkglbs": "87/191.8", "dimensionsWxDxHmm": "1210x450x800" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "V0.25/100L",
  },
  {
    slug: "w0-36-100l",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "W0.36/100L from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "10 bar pressure",
      "Designed for heavy-duty running",
      "Bigger capacity"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The W0.36/100L from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "10 bar pressure",
      "Designed for heavy-duty running",
      "Bigger capacity"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementIminCFM", label: "AIR DISPLACEMENT I/MIN./CFM" },
        { key: "voltHz", label: "VOLT/HZ" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "W0.36/100L", "pump": "W0.36", "tankLt": "100", "powerHpKw": "3/2.2", "cylindern": "3", "maxpressurebarPSI": "10/145", "lubricated": "YES", "rPM": "945", "airDisplacementIminCFM": "452/15.9", "voltHz": "230/50", "weightkglbs": "103/227", "dimensionsWxDxHmm": "1010x450x830" },
        { "name": "W0.36/100L", "pump": "W0.36", "tankLt": "100", "powerHpKw": "4/3.0", "cylindern": "3", "maxpressurebarPSI": "10/145", "lubricated": "YES", "rPM": "1060", "airDisplacementIminCFM": "506/17.8", "voltHz": "230/50", "weightkglbs": "103/227", "dimensionsWxDxHmm": "1010x450x830" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "W0.36/100L",
  },
  {
    slug: "v0-40-200l",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "V0.40/200L from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "Name: V0.40/200L",
      "Pump: V0.40",
      "Tank Lt: 200",
      "Power Hp/Kw: 5.5/4.0",
      "Cylinder N.: 2",
      "Max Pressure Bar/Psi: 10/145"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The V0.40/200L from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Name: V0.40/200L",
      "Pump: V0.40",
      "Tank Lt: 200",
      "Power Hp/Kw: 5.5/4.0",
      "Cylinder N.: 2",
      "Max Pressure Bar/Psi: 10/145",
      "Rpm: 850",
      "Air Displacement I/Min./Cfm: 598/21.1"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementIminCFM", label: "AIR DISPLACEMENT I/MIN./CFM" },
        { key: "voltHz", label: "VOLT/HZ" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "V0.40/200L", "pump": "V0.40", "tankLt": "200", "powerHpKw": "5.5/4.0", "cylindern": "2", "maxpressurebarPSI": "10/145", "lubricated": "YES", "rPM": "850", "airDisplacementIminCFM": "598/21.1", "voltHz": "380/50", "weightkglbs": "170/374.7", "dimensionsWxDxHmm": "1337x460x990" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "V0.40/200L",
  },
  {
    slug: "w0-9-270l",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "W0.9/270L from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "High-efficiency electric motor (IE2, IE3 available)",
      "European metal mesh belt guard",
      "Powder coated tank",
      "CE certificated",
      "Heavy-duty design"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The W0.9/270L from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "High-efficiency electric motor (IE2, IE3 available)",
      "European metal mesh belt guard",
      "Powder coated tank",
      "CE certificated",
      "Heavy-duty design"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementIminCFM", label: "AIR DISPLACEMENT I/MIN./CFM" },
        { key: "voltHz", label: "VOLT/HZ" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "W0.9/270L", "pump": "W0.9", "tankLt": "270", "powerHpKw": "10/7.5", "cylindern": "3", "maxpressurebarPSI": "10/145", "lubricated": "YES", "rPM": "950", "airDisplacementIminCFM": "1269/45", "voltHz": "380/50", "weightkglbs": "240/529.1", "dimensionsWxDxHmm": "1525x520x1190" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "W0.9/270L",
  },
  {
    slug: "v0-17s-50l",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "S1 duty running electric motor with manual reset overload switch",
    highlights: [
      "Cast-Iron pump for heavy-duty operation",
      "S1 duty running electric motor with manual reset overload switch",
      "4 Wheel and tank handle in both side for easier moving & transportation",
      "Full size enclosed plastic belt cover for safety with strong industrial plastic",
      "Higher efficiency air capacity",
      "Pump, very stable running pump with precise counter balancing"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The V0.17S/50L from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Cast-Iron pump for heavy-duty operation",
      "S1 duty running electric motor with manual reset overload switch",
      "4 Wheel and tank handle in both side for easier moving & transportation",
      "Full size enclosed plastic belt cover for safety with strong industrial plastic",
      "Higher efficiency air capacity",
      "Pump, very stable running pump with precise counter balancing"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlminCFM", label: "AIR DISPLACEMENT L/MIN./CFM" },
        { key: "voltHz", label: "VOLT/HZ" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "V0.17S/50L", "pump": "V0.17S", "tankLt": "50", "powerHpKw": "2/1.5", "cylindern": "2", "maxpressurebarPSI": "10/145", "lubricated": "YES", "rPM": "1236", "airDisplacementlminCFM": "202/7.1", "voltHz": "230/50", "weightkglbs": "65/143.3", "dimensionsWxDxHmm": "796x410x716" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "V0.17S/50L",
  },
  {
    slug: "v0-25-100lv",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "V0.25/100LV from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "Heavy duty pump",
      "European safety belt guard",
      "Pressure regulator with water trap",
      "German Condor pressure switch",
      "Powder coated tank",
      "Glycerin filled pressure gauge"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The V0.25/100LV from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Heavy duty pump",
      "European safety belt guard",
      "Pressure regulator with water trap",
      "German Condor pressure switch",
      "Powder coated tank",
      "Glycerin filled pressure gauge",
      "Fit in small space",
      "Solid rubber wheel"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylinder", label: "CYLINDER" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlminCFM", label: "AIR DISPLACEMENT L/MIN./CFM" },
        { key: "voltHz", label: "VOLT/HZ" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "V0.25/100LV", "pump": "V0.25", "tankLt": "100", "powerHpKw": "2.5/1.8", "cylinder": "65", "cylindern": "2", "maxpressurebarPSI": "10/145", "lubricated": "YES", "rPM": "1033", "airDisplacementlminCFM": "315/11.1", "voltHz": "230/50", "weightkglbs": "91/200", "dimensionsWxDxHmm": "664x585x1258" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "V0.25/100LV",
  },
  {
    slug: "w0-36-150lv",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "W0.36/150LV from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "Name: W0.36/150LV",
      "Pump: W0.36",
      "Tank Lt: 150",
      "Power Hp/Kw: 3/2.2",
      "Cylinder: 65",
      "Cylinder N.: 3"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The W0.36/150LV from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Name: W0.36/150LV",
      "Pump: W0.36",
      "Tank Lt: 150",
      "Power Hp/Kw: 3/2.2",
      "Cylinder: 65",
      "Cylinder N.: 3",
      "Max Pressure Bar/Psi: 10/145",
      "Rpm: 945"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylinder", label: "CYLINDER" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlminCFM", label: "AIR DISPLACEMENT L/MIN./CFM" },
        { key: "voltHz", label: "VOLT/HZ" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "W0.36/150LV", "pump": "W0.36", "tankLt": "150", "powerHpKw": "3/2.2", "cylinder": "65", "cylindern": "3", "maxpressurebarPSI": "10/145", "lubricated": "YES", "rPM": "945", "airDisplacementlminCFM": "452/15.9", "voltHz": "230/50", "weightkglbs": "127/280", "dimensionsWxDxHmm": "723x644x1361" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "W0.36/150LV",
  },
  {
    slug: "v0-40-12-5",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Air Pump",
    intro: "Advanced tank design for easier transportion by using a hand-lift",
    highlights: [
      "High-efficiency 2 stage pump",
      "12.5 bar pressure use for most industrial & auto field",
      "Heavy-duty design",
      "motive",
      "Brass material Non-return valve",
      "European brand motor starter"
    ],
    application: {
      title: "What can I do with a LIDA air pump?",
      body: "The V0.40/12.5 from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "High-efficiency 2 stage pump",
      "12.5 bar pressure use for most industrial & auto field",
      "Heavy-duty design",
      "motive",
      "Brass material Non-return valve",
      "European brand motor starter",
      "Advanced tank design for easier transportion by using a hand-lift",
      "500L Tank as optional"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlminCFM", label: "AIR DISPLACEMENT L/MIN./CFM" },
        { key: "voltHz", label: "VOLT/HZ" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "V0.40/12.5", "pump": "V0.40", "tankLt": "200", "powerHpKw": "5.5/4.0", "cylindern": "2", "maxpressurebarPSI": "12.5/181", "lubricated": "YES", "rPM": "1280", "airDisplacementlminCFM": "488/17.3", "voltHz": "380/50", "weightkglbs": "170/374", "dimensionsWxDxHmm": "1345x465x1040" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "V0.40/12.5",
  },
  {
    slug: "w0-60-12-5",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Air Pump",
    intro: "Advanced tank design for easier transportion by using a hand-lift",
    highlights: [
      "High-efficiency 2 stage pump",
      "12.5 bar pressure use for most industrial & auto field",
      "Heavy-duty design",
      "motive",
      "Brass material Non-return valve",
      "European brand motor starter"
    ],
    application: {
      title: "What can I do with a LIDA air pump?",
      body: "The W0.60/12.5 from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "High-efficiency 2 stage pump",
      "12.5 bar pressure use for most industrial & auto field",
      "Heavy-duty design",
      "motive",
      "Brass material Non-return valve",
      "European brand motor starter",
      "Advanced tank design for easier transportion by using a hand-lift",
      "500L Tank as optional"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlminCFM", label: "AIR DISPLACEMENT L/MIN./CFM" },
        { key: "voltHz", label: "VOLT/HZ" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "W0.60/12.5", "pump": "W0.60", "tankLt": "300", "powerHpKw": "7.5/5.5", "cylindern": "3", "maxpressurebarPSI": "12.5/181", "lubricated": "YES", "rPM": "1180", "airDisplacementlminCFM": "712/25.2", "voltHz": "380/50", "weightkglbs": "213/469", "dimensionsWxDxHmm": "1560x510x1145" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "W0.60/12.5",
  },
  {
    slug: "w0-80-12-5",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Air Pump",
    intro: "Advanced tank design for easier transportion by using a hand-lift",
    highlights: [
      "High-efficiency 2 stage pump",
      "12.5 bar pressure use for most industrial & auto field",
      "Heavy-duty design",
      "motive",
      "Brass material Non-return valve",
      "European brand motor starter"
    ],
    application: {
      title: "What can I do with a LIDA air pump?",
      body: "The W0.80/12.5 from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "High-efficiency 2 stage pump",
      "12.5 bar pressure use for most industrial & auto field",
      "Heavy-duty design",
      "motive",
      "Brass material Non-return valve",
      "European brand motor starter",
      "Advanced tank design for easier transportion by using a hand-lift",
      "500L Tank as optional"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlminCFM", label: "AIR DISPLACEMENT L/MIN./CFM" },
        { key: "voltHz", label: "VOLT/HZ" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "W0.80/12.5", "pump": "W0.80", "tankLt": "300", "powerHpKw": "10/7.5", "cylindern": "3", "maxpressurebarPSI": "12.5/181", "lubricated": "YES", "rPM": "1100", "airDisplacementlminCFM": "980/34.6", "voltHz": "380/50", "weightkglbs": "240/529", "dimensionsWxDxHmm": "1560x510x1195" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "W0.80/12.5",
  },
  {
    slug: "w0-36-100lp",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "W0.36/100LP from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "HONDA GX series engine (Euro 5 emission)",
      "Pneumatic governer throttle control & idling running",
      "Solid rubber wheel and double front foot for stable running",
      "Pressure regulator with water trap as optional"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The W0.36/100LP from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "HONDA GX series engine (Euro 5 emission)",
      "Pneumatic governer throttle control & idling running",
      "Solid rubber wheel and double front foot for stable running",
      "Pressure regulator with water trap as optional"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlminCFM", label: "AIR DISPLACEMENT L/MIN./CFM" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "W0.36/100LP", "pump": "W0.36", "tankLt": "100", "powerHpKw": "5.5/4.0", "cylindern": "3", "maxpressurebarPSI": "10/145", "lubricated": "YES", "rPM": "1200", "airDisplacementlminCFM": "573/20.2", "weightkglbs": "105/231.4", "dimensionsWxDxHmm": "1200x500x910" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "W0.36/100LP",
  },
  {
    slug: "w0-36-200lp",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "W0.36/200LP from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "HONDA GX series engine (Euro 5 emission)",
      "Pneumatic governer throttle control & idling running"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The W0.36/200LP from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "HONDA GX series engine (Euro 5 emission)",
      "Pneumatic governer throttle control & idling running"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlminCFM", label: "AIR DISPLACEMENT L/MIN./CFM" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "W0.36/200LP", "pump": "W0.36", "tankLt": "200", "powerHpKw": "5.5/4.0", "cylindern": "3", "maxpressurebarPSI": "10/145", "lubricated": "YES", "rPM": "1200", "airDisplacementlminCFM": "573/20.2", "weightkglbs": "158/348.3", "dimensionsWxDxHmm": "1365x477x1033" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "W0.36/200LP",
  },
  {
    slug: "4009n-50lp",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "4009N/50LP from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "HONDA GX series engine (Euro 5 emission)",
      "Pneumatic governer throttle control & idling running",
      "Solid rubber wheel",
      "Pressure regulator with moisture trap",
      "Lifting hook",
      "Pipe frame for protecting machine"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The 4009N/50LP from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "HONDA GX series engine (Euro 5 emission)",
      "Pneumatic governer throttle control & idling running",
      "Solid rubber wheel",
      "Pressure regulator with moisture trap",
      "Lifting hook",
      "Pipe frame for protecting machine"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlminCFM", label: "AIR DISPLACEMENT L/MIN./CFM" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "4009N/50LP", "pump": "4009N", "tankLt": "50", "powerHpKw": "5.5/4.0", "cylindern": "2", "maxpressurebarPSI": "10/145", "lubricated": "YES", "rPM": "1250", "airDisplacementlminCFM": "480/16.9", "weightkglbs": "56/123", "dimensionsWxDxHmm": "947x475x845" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "4009N/50LP",
  },
  {
    slug: "4009n-100lp",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "4009N/100LP from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "HONDA GX series engine (Euro 5 emission)",
      "Pneumatic governer throttle control & idling running",
      "Solid rubber wheel",
      "Pressure regulator with moisture trap",
      "Lifting hook",
      "Pipe frame for protecting machine"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The 4009N/100LP from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "HONDA GX series engine (Euro 5 emission)",
      "Pneumatic governer throttle control & idling running",
      "Solid rubber wheel",
      "Pressure regulator with moisture trap",
      "Lifting hook",
      "Pipe frame for protecting machine"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlminCFM", label: "AIR DISPLACEMENT L/MIN./CFM" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "4009N/100LP", "pump": "4009N", "tankLt": "100", "powerHpKw": "5.5/4.0", "cylindern": "2", "maxpressurebarPSI": "10/145", "lubricated": "YES", "rPM": "1250", "airDisplacementlminCFM": "480/16.9", "weightkglbs": "88/194", "dimensionsWxDxHmm": "1063x502x953" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "4009N/100LP",
  },
  {
    slug: "w0-67-10d",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "W0.67/10D from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "Easy to check and add compressor and engine oil",
      "Larger,industrial foot design",
      "Heavy duty construction",
      "Convenient lifting frame"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The W0.67/10D from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Easy to check and add compressor and engine oil",
      "Larger,industrial foot design",
      "Heavy duty construction",
      "Convenient lifting frame"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlminCFM", label: "AIR DISPLACEMENT L/MIN./CFM" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "WO.67/1OD", "pump": "W0.67", "tankLt": "10", "powerHpKw": "13/9.75", "cylindern": "3", "maxpressurebarPSI": "10/145", "lubricated": "YES", "rPM": "1000", "airDisplacementlminCFM": "900/32", "weightkglbs": "220/485", "dimensionsWxDxHmm": "900x700x1300" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "W0.67/10D",
  },
  {
    slug: "lb-series",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Screw Compressor",
    intro: "*The capacity (FAD_Free air delivery) Measured as per ISO1217, sound level measured ISO2151.",
    highlights: [
      "① IE3 Efficiency Motor",
      "(CE Certificated TEFCJP55)",
      "② High Effieciency Screw Air-end",
      "(Low speed, low Sound, Higher capacity, Longer & stable realibility)",
      "③ Oil-separator System",
      "- Low-oil carry over Separation (3ppm)"
    ],
    application: {
      title: "What can I do with a LIDA screw compressor?",
      body: "The LB-Series from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "① IE3 Efficiency Motor",
      "(CE Certificated TEFCJP55)",
      "② High Effieciency Screw Air-end",
      "(Low speed, low Sound, Higher capacity, Longer & stable realibility)",
      "③ Oil-separator System",
      "- Low-oil carry over Separation (3ppm)",
      "- Easy maintenance cartridge type separator All maintenance available as with open front panel",
      "④ Low-sound,high-ventilation flow design"
    ],
    parameters: {
      rowKey: "product",
      columns: [
        { key: "product", label: "PRODUCT" },
        { key: "power", label: "POWER" },
        { key: "power1", label: "POWER (2)" },
        { key: "tank", label: "TANK" },
        { key: "workingpressure", label: "WORKING PRESSURE" },
        { key: "workingpressure1", label: "WORKING PRESSURE (2)" },
        { key: "capacity", label: "CAPACITY" },
        { key: "capacity1", label: "CAPACITY (2)" },
        { key: "driven", label: "DRIVEN" },
        { key: "weight", label: "WEIGHT" },
        { key: "weight1", label: "WEIGHT (2)" },
        { key: "dimension", label: "DIMENSION" },
        { key: "airOutlet", label: "AIR OUTLET" }
      ],
      rows: [
        { "product": "LB10A10S", "power": "7.5", "power1": "10", "tank": "-", "workingpressure": "10", "workingpressure1": "145", "capacity": "1.1", "capacity1": "39", "driven": "Belt Driven", "weight": "250", "weight1": "551", "dimension": "860x650x945", "airOutlet": "3/4“" },
        { "product": "LB10A10T", "power": "7.5", "power1": "10", "tank": "270", "workingpressure": "10", "workingpressure1": "145", "capacity": "1.1", "capacity1": "39", "driven": "Belt Driven", "weight": "365", "weight1": "805", "dimension": "1560x650x1560", "airOutlet": "3/4”" },
        { "product": "LB10A10B", "power": "7.5", "power1": "10", "tank": "360", "workingpressure": "10", "workingpressure1": "145", "capacity": "1.1", "capacity1": "39", "driven": "Belt Driven", "weight": "460", "weight1": "1014", "dimension": "1660x810x1650", "airOutlet": "3/4“" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "LB-Series",
  },
  {
    slug: "f-series",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Screw Compressor",
    intro: "Fixed-speed direct-driven screw compressor",
    highlights: [
      "Comparison life cost between Fixed-speed and Variable-speed",
      "German Brand Switch-gear",
      "Electric system built by CE electric regulation",
      "All CE certificated components",
      "Star-Delta starting as standard to reduce electric shock in start-up",
      "Design Features (Fixed-speed )"
    ],
    application: {
      title: "What can I do with a LIDA screw compressor?",
      body: "The F-Series from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Comparison life cost between Fixed-speed and Variable-speed",
      "German Brand Switch-gear",
      "Electric system built by CE electric regulation",
      "All CE certificated components",
      "Star-Delta starting as standard to reduce electric shock in start-up",
      "Design Features (Fixed-speed )",
      "Full side open cabinet structure For easy maintenance",
      "316 stainless seamless tubing Non-corrosion and durability"
    ],
    parameters: {
      rowKey: "model",
      columns: [
        { key: "model", label: "MODEL" },
        { key: "l10PM", label: "L-10PM" },
        { key: "l10PM1", label: "L-10PM (2)" },
        { key: "l15PM", label: "L-15PM" },
        { key: "l20PM", label: "L-20PM" },
        { key: "l30PM", label: "L-30PM" },
        { key: "l40PM", label: "L-40PM" },
        { key: "l50PM", label: "L-50PM" },
        { key: "l60PM", label: "L-60PM" },
        { key: "l75PM", label: "L-75PM" },
        { key: "l1OOPM", label: "L-1OOPM" }
      ],
      rows: [
        { "model": "Free Air Delivery(m³/min)", "l10PM": "8BAR", "l10PM1": "1.0", "l15PM": "1.8", "l20PM": "2.3", "l30PM": "3.4", "l40PM": "5.0", "l50PM": "6.2", "l60PM": "7.2", "l75PM": "9.7", "l1OOPM": "12.6" },
        { "model": "Ambienttemperature", "l10PM": "Deg.C", "l10PM1": "3-40", "l15PM": "3-40", "l20PM": "3-40", "l30PM": "3-40", "l40PM": "3-40", "l50PM": "3-40", "l60PM": "3-40", "l75PM": "3-40", "l1OOPM": "3-40" },
        { "model": "Discharge temperature", "l10PM": "Deg.C", "l10PM1": "≤Ambient Temp+15°C", "l15PM": "≤Ambient Temp+15°C", "l20PM": "≤Ambient Temp+15°C", "l30PM": "≤Ambient Temp+15°C", "l40PM": "≤Ambient Temp+15°C", "l50PM": "≤Ambient Temp+15°C", "l60PM": "≤Ambient Temp+15°C", "l75PM": "≤Ambient Temp+15°C", "l1OOPM": "≤Ambient Temp+15°C" },
        { "model": "Driven", "l10PM": "", "l10PM1": "DIRECT", "l15PM": "DIRECT", "l20PM": "DIRECT", "l30PM": "DIRECT", "l40PM": "DIRECT", "l50PM": "DIRECT", "l60PM": "DIRECT", "l75PM": "DIRECT", "l1OOPM": "DIRECT" },
        { "model": "Starting", "l10PM": "", "l10PM1": "Variable Frequency Soft Starting", "l15PM": "Variable Frequency Soft Starting", "l20PM": "Variable Frequency Soft Starting", "l30PM": "Variable Frequency Soft Starting", "l40PM": "Variable Frequency Soft Starting", "l50PM": "Variable Frequency Soft Starting", "l60PM": "Variable Frequency Soft Starting", "l75PM": "Variable Frequency Soft Starting", "l1OOPM": "Variable Frequency Soft Starting" },
        { "model": "Electricity", "l10PM": "V/P H/H Z", "l10PM1": "380 ∕ 3 ∕ 50 60", "l15PM": "380 ∕ 3 ∕ 50 60", "l20PM": "380 ∕ 3 ∕ 50 60", "l30PM": "380 ∕ 3 ∕ 50 60", "l40PM": "380 ∕ 3 ∕ 50 60", "l50PM": "380 ∕ 3 ∕ 50 60", "l60PM": "380 ∕ 3 ∕ 50 60", "l75PM": "380 ∕ 3 ∕ 50 60", "l1OOPM": "380 ∕ 3 ∕ 50 60" },
        { "model": "Width", "l10PM": "MM", "l10PM1": "650", "l15PM": "750", "l20PM": "750", "l30PM": "830", "l40PM": "950", "l50PM": "950", "l60PM": "1400", "l75PM": "1400", "l1OOPM": "140" },
        { "model": "Air Outlet Size", "l10PM": "G\"", "l10PM1": "3∕4\"", "l15PM": "1\"", "l20PM": "1\"", "l30PM": "1\"", "l40PM": "1-1∕2\"", "l50PM": "1-1/2\"", "l60PM": "2\"", "l75PM": "2\"", "l1OOPM": "2\"" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "F-Series",
  },
  {
    slug: "lws-10t",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Scroll Compressor",
    intro: "LWS-10T from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "Silenced scroll compressor",
      "Direct driven power train system",
      "Low sound level",
      "Industrial duty cycle",
      "Option: Built-in package Compressor air receiver Air dryer",
      "Range: 7.5KW (10HP)~15KW (20HP)"
    ],
    application: {
      title: "What can I do with a LIDA scroll compressor?",
      body: "The LWS-10T from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Silenced scroll compressor",
      "Direct driven power train system",
      "Low sound level",
      "Industrial duty cycle",
      "Option: Built-in package Compressor air receiver Air dryer",
      "Range: 7.5KW (10HP)~15KW (20HP)"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "lankLt", label: "LANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "pressurebar", label: "PRESSURE BAR" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "fADmminCFM", label: "FADM³∕MIN.∕CFM" },
        { key: "voItHz", label: "VOIT/HZ" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "LWS-10B", "lankLt": "320", "powerHpKw": "10/7.5", "pressurebar": "8", "lubricated": "YES", "rPM": "2950", "fADmminCFM": "1.1", "voItHz": "380/50", "weightkglbs": "600/1322", "dimensionsWxDxHmm": "1590x893x1470" },
        { "name": "LWS-20B", "lankLt": "360", "powerHpKw": "20/15", "pressurebar": "8", "lubricated": "YES", "rPM": "2950", "fADmminCFM": "2.2", "voItHz": "380/50", "weightkglbs": "715/1576", "dimensionsWxDxHmm": "1680x960x1657" },
        { "name": "LWS-10T", "lankLt": "270", "powerHpKw": "10/7.5", "pressurebar": "8", "lubricated": "YES", "rPM": "2950", "fADmminCFM": "1.0", "voItHz": "380/50", "weightkglbs": "293/645", "dimensionsWxDxHmm": "1350x590x1480" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "LWS-10T",
  },
  {
    slug: "lws-5wy",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Scroll Compressor",
    intro: "LWS-5WY from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "Name: LWS-5WY",
      "Pump: 一",
      "Tank Lt: 200",
      "Power Hp/Kw: 5/4",
      "Pressure Bar: 8",
      "Rpm: 2880"
    ],
    application: {
      title: "What can I do with a LIDA scroll compressor?",
      body: "The LWS-5WY from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Name: LWS-5WY",
      "Pump: 一",
      "Tank Lt: 200",
      "Power Hp/Kw: 5/4",
      "Pressure Bar: 8",
      "Rpm: 2880",
      "Fadm³∕Min.∕Cfm: 0.3",
      "Voit/Hz: 380/50"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "pressurebar", label: "PRESSURE BAR" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "fADmminCFM", label: "FADM³∕MIN.∕CFM" },
        { key: "voItHz", label: "VOIT/HZ" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "LWS-5WY", "pump": "一", "tankLt": "200", "powerHpKw": "5/4", "pressurebar": "8", "lubricated": "YES", "rPM": "2880", "fADmminCFM": "0.3", "voItHz": "380/50", "weightkglbs": "130/286", "dimensionsWxDxHmm": "1400x450x930" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "LWS-5WY",
  },
  {
    slug: "lws-10b",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Scroll Compressor",
    intro: "LWS-10B from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "Silenced scroll compressor",
      "Low sound level",
      "Industrial duty cycle",
      "Option: Built-in package",
      "Compressor air receiver",
      "Air dryer"
    ],
    application: {
      title: "What can I do with a LIDA scroll compressor?",
      body: "The LWS-10B from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Silenced scroll compressor",
      "Low sound level",
      "Industrial duty cycle",
      "Option: Built-in package",
      "Compressor air receiver",
      "Air dryer",
      "Range: 3KW (4HP)~15KW (20HP)"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "lankLt", label: "LANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "pressurebar", label: "PRESSURE BAR" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "fADmminCFM", label: "FADM³∕MIN.∕CFM" },
        { key: "voItHz", label: "VOIT/HZ" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "LWS-10B", "lankLt": "320", "powerHpKw": "10/7.5", "pressurebar": "8", "lubricated": "YES", "rPM": "2950", "fADmminCFM": "1.1", "voItHz": "380/50", "weightkglbs": "600/1322", "dimensionsWxDxHmm": "1590x893x1470" },
        { "name": "LWS-20B", "lankLt": "360", "powerHpKw": "20/15", "pressurebar": "8", "lubricated": "YES", "rPM": "2950", "fADmminCFM": "2.2", "voItHz": "380/50", "weightkglbs": "715/1576", "dimensionsWxDxHmm": "1680x960x1657" },
        { "name": "LWS-10T", "lankLt": "270", "powerHpKw": "10/7.5", "pressurebar": "8", "lubricated": "YES", "rPM": "2950", "fADmminCFM": "1.0", "voItHz": "380/50", "weightkglbs": "293/645", "dimensionsWxDxHmm": "1350x590x1480" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "LWS-10B",
  },
  {
    slug: "lw-30a",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Screw Compressor",
    intro: "LW-30A from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "Belt driven",
      "IP54 electric motor",
      "Industrial duty design",
      "Optional",
      "- Variable speed drive",
      "- Direct driven"
    ],
    application: {
      title: "What can I do with a LIDA screw compressor?",
      body: "The LW-30A from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Belt driven",
      "IP54 electric motor",
      "Industrial duty design",
      "Optional",
      "- Variable speed drive",
      "- Direct driven",
      "- 10 bar, 13bar",
      "Range: 7.5KW (10HP)~375KW (500HP)"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "pressurebar", label: "PRESSURE BAR" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "fADm3minCFM", label: "FAD M3∕MIN.∕CFM" },
        { key: "voltHz", label: "VOLT/HZ" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "LW-30A", "pump": "EV06", "tankLt": "—", "powerHpKw": "30/22", "pressurebar": "8/10/13", "lubricated": "YES", "rPM": "4400", "fADm3minCFM": "3.6", "voltHz": "380/50", "weightkglbs": "580/1278", "dimensionsWxDxHmm": "1150x950x1380" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "LW-30A",
  },
  {
    slug: "2501s-24l-50l",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "2501S/24L/50L from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "Suitable for both professional and hand craft use",
      "Typical direct driven compressor range"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The 2501S/24L/50L from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Suitable for both professional and hand craft use",
      "Typical direct driven compressor range"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementIminCFM", label: "AIR DISPLACEMENT I/MIN./CFM" },
        { key: "voltHz", label: "VOLT/HZ" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "2501S/24L", "pump": "2501S", "tankLt": "24", "powerHpKw": "1.5/1.1", "cylindern": "1", "maxpressurebarPSI": "8/116", "lubricated": "YES", "rPM": "2850", "airDisplacementIminCFM": "150/5.3", "voltHz": "230/50", "weightkglbs": "23/51.0", "dimensionsWxDxHmm": "605x265x590" },
        { "name": "2501S/50L", "pump": "2501S", "tankLt": "50", "powerHpKw": "1.5/1.1", "cylindern": "1", "maxpressurebarPSI": "8/116", "lubricated": "YES", "rPM": "2850", "airDisplacementIminCFM": "150/5.3", "voltHz": "230/50", "weightkglbs": "32/70.5", "dimensionsWxDxHmm": "670x385x680" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "2501S/24L/50L",
  },
  {
    slug: "2502n-24l-50l",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "2502N/24L/50L from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "Strong, Compact, Powerful",
      "For professional and handcraft work",
      "Easy handling",
      "Recommended professional use",
      "High efficiency",
      "Suitable for many kinds of pneumatic tools"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The 2502N/24L/50L from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Strong, Compact, Powerful",
      "For professional and handcraft work",
      "Easy handling",
      "Recommended professional use",
      "High efficiency",
      "Suitable for many kinds of pneumatic tools",
      "Bigger sized wheel and longer handle for",
      "comfortable moving"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlminCFM", label: "AIR DISPLACEMENT L/MIN./CFM" },
        { key: "voltHz", label: "VOLT/HZ" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "2502N/24L", "pump": "2502N", "tankLt": "24", "powerHpKw": "2/1.5", "cylindern": "1", "maxpressurebarPSI": "10/145", "lubricated": "YES", "rPM": "2900", "airDisplacementlminCFM": "221/7.8", "voltHz": "230/50", "weightkglbs": "27/59.5", "dimensionsWxDxHmm": "570x290x600" },
        { "name": "2502N/50L", "pump": "2502N", "tankLt": "50", "powerHpKw": "2/1.5", "cylindern": "1", "maxpressurebarPSI": "10/145", "lubricated": "YES", "rPM": "2900", "airDisplacementlminCFM": "221/7.8", "voltHz": "230/50", "weightkglbs": "36/79.4", "dimensionsWxDxHmm": "870x396x690" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "2502N/24L/50L",
  },
  {
    slug: "2519-50l",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "2519/50L from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "For professional and heavy-duty use",
      "Powerful air capacity",
      "Less 10 amps for single phase electric",
      "CE certificated",
      "Powder coated tank surface",
      "Larger wheel for comfortable moving"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The 2519/50L from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "For professional and heavy-duty use",
      "Powerful air capacity",
      "Less 10 amps for single phase electric",
      "CE certificated",
      "Powder coated tank surface",
      "Larger wheel for comfortable moving"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlminCFM", label: "AIR DISPLACEMENT L/MIN./CFM" },
        { key: "voltHz", label: "VOLT/HZ" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "2519/50L", "pump": "2519", "tankLt": "50", "powerHpKw": "2.5/1.8", "cylindern": "1", "maxpressurebarPSI": "10/145", "lubricated": "YES", "rPM": "2900", "airDisplacementlminCFM": "239/8.4", "voltHz": "230/50", "weightkglbs": "44/97", "dimensionsWxDxHmm": "796x410x680" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "2519/50L",
  },
  {
    slug: "2502-24l-50l",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "2502/24L/50L from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "Name: 2502/24L",
      "Pump: 2502S",
      "Tank Lt: 24",
      "Power Hp/Kw: 2/1.5",
      "Cylinder N.: 1",
      "Max Pressure Bar/Psi: 8/116"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The 2502/24L/50L from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Name: 2502/24L",
      "Pump: 2502S",
      "Tank Lt: 24",
      "Power Hp/Kw: 2/1.5",
      "Cylinder N.: 1",
      "Max Pressure Bar/Psi: 8/116",
      "Rpm: 2850",
      "Air Displacement I/Min./Cfm: 188/6.6"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementIminCFM", label: "AIR DISPLACEMENT I/MIN./CFM" },
        { key: "voltHz", label: "VOLT/HZ" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "2502/24L", "pump": "2502S", "tankLt": "24", "powerHpKw": "2/1.5", "cylindern": "1", "maxpressurebarPSI": "8/116", "lubricated": "YES", "rPM": "2850", "airDisplacementIminCFM": "188/6.6", "voltHz": "230/50", "weightkglbs": "23/51.0", "dimensionsWxDxHmm": "570x290x600" },
        { "name": "2502/50L", "pump": "2502S", "tankLt": "50", "powerHpKw": "2/1.5", "cylindern": "1", "maxpressurebarPSI": "8/116", "lubricated": "YES", "rPM": "2850", "airDisplacementIminCFM": "188/6.6", "voltHz": "230/50", "weightkglbs": "32/70.5", "dimensionsWxDxHmm": "670x385x680" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "2502/24L/50L",
  },
  {
    slug: "2502-bt-16l",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "2502/BT/16L from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "Twin stack 8L tank",
      "Easier moving in use",
      "8 cfm powerful capacity for most air tools"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The 2502/BT/16L from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Twin stack 8L tank",
      "Easier moving in use",
      "8 cfm powerful capacity for most air tools"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlminCFM", label: "AIR DISPLACEMENT L/MIN./CFM" },
        { key: "voltHz", label: "VOLT/HZ" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "2502/BT/16L", "pump": "2502", "tankLt": "16", "powerHpKw": "2/1.5", "cylindern": "1", "maxpressurebarPSI": "10/145", "lubricated": "YES", "rPM": "2850", "airDisplacementlminCFM": "217/7.7", "voltHz": "230/50", "weightkglbs": "28/61.6", "dimensionsWxDxHmm": "466x370x422" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "2502/BT/16L",
  },
  {
    slug: "3007-50l",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "3007/50L from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "12 cfm powerful air capacity",
      "Most pneumatic air tools are available to use it",
      "Large sized wheel for easy transportation"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The 3007/50L from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "12 cfm powerful air capacity",
      "Most pneumatic air tools are available to use it",
      "Large sized wheel for easy transportation"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlminCFM", label: "AIR DISPLACEMENT L/MIN./CFM" },
        { key: "voltHz", label: "VOLT/HZ" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "3007/50L", "pump": "3007", "tankLt": "50", "powerHpKw": "3/2.2", "cylindern": "2", "maxpressurebarPSI": "8/116", "lubricated": "YES", "rPM": "2850", "airDisplacementlminCFM": "336/11.9", "voltHz": "230/50", "weightkglbs": "43/94.7", "dimensionsWxDxHmm": "875x386x680" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "3007/50L",
  },
  {
    slug: "3007n-50l",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "3007N/50L from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "Powerful motor cooling fan for low temperature running",
      "Soft start valve as standard"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The 3007N/50L from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Powerful motor cooling fan for low temperature running",
      "Soft start valve as standard"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlminCFM", label: "AIR DISPLACEMENT L/MIN./CFM" },
        { key: "voltHz", label: "VOLT/HZ" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "3007N/50L", "pump": "3007N", "tankLt": "50", "powerHpKw": "3/2.2", "cylindern": "2", "maxpressurebarPSI": "10/145", "lubricated": "YES", "rPM": "2850", "airDisplacementlminCFM": "336/11.9", "voltHz": "230/50", "weightkglbs": "43/94.7", "dimensionsWxDxHmm": "875x386x680" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "3007N/50L",
  },
  {
    slug: "3007x-24l-100l",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "3007X/24L/100L from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "Hand craft design with tubular frame",
      "Rubber grip handle",
      "Large capacity V-type pump",
      "Whole covered shroud to protect high temperature",
      "Compact handy for on-site application",
      "15 cfm powerful air capacity"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The 3007X/24L/100L from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Hand craft design with tubular frame",
      "Rubber grip handle",
      "Large capacity V-type pump",
      "Whole covered shroud to protect high temperature",
      "Compact handy for on-site application",
      "15 cfm powerful air capacity",
      "Most pneumatic air tools are available to use it",
      "Large sized wheel for easy transportation"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlminCFM", label: "AIR DISPLACEMENT L/MIN./CFM" },
        { key: "voltHz", label: "VOLT/HZ" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "3007X/24L", "pump": "3007X", "tankLt": "24", "powerHpKw": "3/2.2", "cylindern": "2", "maxpressurebarPSI": "10/145", "lubricated": "YES", "rPM": "2850", "airDisplacementlminCFM": "412/14.6", "voltHz": "230/50", "weightkglbs": "33/72.7", "dimensionsWxDxHmm": "460x630x870" },
        { "name": "3007X/100L", "pump": "3007X", "tankLt": "100", "powerHpKw": "3/2.2", "cylindern": "2", "maxpressurebarPSI": "10/145", "lubricated": "YES", "rPM": "2850", "airDisplacementlminCFM": "412/14.6", "voltHz": "230/50", "weightkglbs": "58/128", "dimensionsWxDxHmm": "1150x430x820" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "3007X/24L/100L",
  },
  {
    slug: "wb750-24al",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "WB750/24AL from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "Ball valve type drain",
      "Triple motor protection design",
      "Al-tank without corrosion",
      "* 60HZ available"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The WB750/24AL from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Ball valve type drain",
      "Triple motor protection design",
      "Al-tank without corrosion",
      "* 60HZ available"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlminCFM", label: "AIR DISPLACEMENT L/MIN./CFM" },
        { key: "volVHz", label: "VOLVHZ" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "WB750-1A24L", "pump": "WB860", "tankLt": "24", "powerHpKw": "1.0/0.75", "cylindern": "2", "maxpressurebarPSI": "8/116", "rPM": "1400", "airDisplacementlminCFM": "125/4.4", "volVHz": "220/50", "weightkglbs": "16/35", "dimensionsWxDxHmm": "540×284×553" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "WB750/24AL",
  },
  {
    slug: "wb550-6al",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "WB550/6AL from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "Easy to carry",
      "Every where with light weight",
      "* 60HZ available"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The WB550/6AL from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Easy to carry",
      "Every where with light weight",
      "* 60HZ available"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlminCFM", label: "AIR DISPLACEMENT L/MIN./CFM" },
        { key: "volVHz", label: "VOLVHZ" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "WB550-1A6L", "pump": "WB550", "tankLt": "6", "powerHpKw": "0.75/0.55", "cylindern": "2", "maxpressurebarPSI": "8/116", "rPM": "1400", "airDisplacementlminCFM": "103/3.7", "volVHz": "220/50", "weightkglbs": "12/26", "dimensionsWxDxHmm": "448x206x469" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "WB550/6AL",
  },
  {
    slug: "v0-25s-100l",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "S1 duty designed electric motor with manual reset overload switch",
    highlights: [
      "Heavy-duty cast-iron V-type pump",
      "High efficiency air delivery",
      "Precise counter balanced for very low vibration running",
      "S1 duty designed electric motor with manual reset overload switch",
      "Larger sized wheel",
      "Fully enclosed European safety type metal mesh belt guard"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The V0.25S/100L from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Heavy-duty cast-iron V-type pump",
      "High efficiency air delivery",
      "Precise counter balanced for very low vibration running",
      "S1 duty designed electric motor with manual reset overload switch",
      "Larger sized wheel",
      "Fully enclosed European safety type metal mesh belt guard",
      "Ball valve type drain valve for easier daily maintenance",
      "CE certificated pressure switch, tank, motor"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlminCFM", label: "AIR DISPLACEMENT L/MIN./CFM" },
        { key: "voltHz", label: "VOLT/HZ" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "V0.25S/100L", "pump": "V0.25S", "tankLt": "100", "powerHpKw": "3/2.2", "cylindern": "2", "maxpressurebarPSI": "10/145", "lubricated": "YES", "rPM": "1200", "airDisplacementlminCFM": "346/12.2", "voltHz": "230/50", "weightkglbs": "87/191.8", "dimensionsWxDxHmm": "1210x450x800" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "V0.25S/100L",
  },
  {
    slug: "v0-25s-100l-1",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "S1 duty designed electric motor with manual reset overload switch",
    highlights: [
      "Heavy-duty cast-iron V-type pump",
      "High efficiency air delivery",
      "Precise counter balanced for very low vibration running",
      "S1 duty designed electric motor with manual reset overload switch",
      "Larger sized wheel",
      "Fully enclosed European safety type metal mesh belt guard"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The V0.25S-100L from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Heavy-duty cast-iron V-type pump",
      "High efficiency air delivery",
      "Precise counter balanced for very low vibration running",
      "S1 duty designed electric motor with manual reset overload switch",
      "Larger sized wheel",
      "Fully enclosed European safety type metal mesh belt guard",
      "Ball valve type drain valve for easier daily maintenance",
      "CE certificated pressure switch, tank, motor"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlminCFM", label: "AIR DISPLACEMENT L/MIN./CFM" },
        { key: "voltHz", label: "VOLT/HZ" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "V0.25S/100L", "pump": "V0.25S", "tankLt": "100", "powerHpKw": "3/2.2", "cylindern": "2", "maxpressurebarPSI": "10/145", "lubricated": "YES", "rPM": "1200", "airDisplacementlminCFM": "346/12.2", "voltHz": "230/50", "weightkglbs": "87/191.8", "dimensionsWxDxHmm": "1210x450x800" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "V0.25S-100L",
  },
  {
    slug: "wb550-1a8l",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "WB550-1A8L from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "Easy to carry",
      "Every where with light weight",
      "* 60HZ available"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The WB550-1A8L from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Easy to carry",
      "Every where with light weight",
      "* 60HZ available"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlminCFM", label: "AIR DISPLACEMENT L/MIN./CFM" },
        { key: "volVHz", label: "VOLVHZ" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "WB550-1A8L", "pump": "WB550", "tankLt": "8", "powerHpKw": "0.75/0.55", "cylindern": "2", "maxpressurebarPSI": "8/116", "rPM": "1400", "airDisplacementlminCFM": "103/3.7", "volVHz": "220/50", "weightkglbs": "16/35.3", "dimensionsWxDxHmm": "460x250x550" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "WB550-1A8L",
  },
  {
    slug: "wb750-a24l",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "WB750-A24L from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "Ball valve type drain",
      "Triple motor protection design",
      "Al-tank without corrosion",
      "* 60HZ available"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The WB750-A24L from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Ball valve type drain",
      "Triple motor protection design",
      "Al-tank without corrosion",
      "* 60HZ available"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlminCFM", label: "AIR DISPLACEMENT L/MIN./CFM" },
        { key: "volVHz", label: "VOLVHZ" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "WB750-1A24L", "pump": "WB860", "tankLt": "24", "powerHpKw": "1.0/0.75", "cylindern": "2", "maxpressurebarPSI": "8/116", "rPM": "1400", "airDisplacementlminCFM": "125/4.4", "volVHz": "220/50", "weightkglbs": "16/35", "dimensionsWxDxHmm": "540x284x553" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "WB750-A24L",
  },
  {
    slug: "wb1500-1a50l",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "WB1500-1A50L from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "Name: WB750-1A50L",
      "Pump: WB1500",
      "Tank Lt: 50",
      "Power Hp/Kw: 2/1.5",
      "Cylinder N.: 2",
      "Max Pressure Bar/Psi: 8/116"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The WB1500-1A50L from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Name: WB750-1A50L",
      "Pump: WB1500",
      "Tank Lt: 50",
      "Power Hp/Kw: 2/1.5",
      "Cylinder N.: 2",
      "Max Pressure Bar/Psi: 8/116",
      "Rpm: 1400",
      "Air Displacement L/Min./Cfm: 235/8.3"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlminCFM", label: "AIR DISPLACEMENT L/MIN./CFM" },
        { key: "volVHz", label: "VOLVHZ" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "WB750-1A50L", "pump": "WB1500", "tankLt": "50", "powerHpKw": "2/1.5", "cylindern": "2", "maxpressurebarPSI": "8/116", "rPM": "1400", "airDisplacementlminCFM": "235/8.3", "volVHz": "220/50", "weightkglbs": "32/70.5", "dimensionsWxDxHmm": "670×382×675" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "WB1500-1A50L",
  },
  {
    slug: "wb750-2a",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "WB750-2A from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "Twin 1.0 HP tandem on 70L tank for larger air capacity",
      "* 60HZ available"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The WB750-2A from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Twin 1.0 HP tandem on 70L tank for larger air capacity",
      "* 60HZ available"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlminCFM", label: "AIR DISPLACEMENT L/MIN./CFM" },
        { key: "volVHz", label: "VOLVHZ" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "WB750-2A", "pump": "WB750", "tankLt": "70", "powerHpKw": "2.0/1.5", "cylindern": "2", "maxpressurebarPSI": "8/116", "rPM": "1400", "airDisplacementlminCFM": "125x2/4.4x2", "volVHz": "220/50", "weightkglbs": "55/121.2", "dimensionsWxDxHmm": "825*350x665" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "WB750-2A",
  },
  {
    slug: "hv-0-22-8",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Air Pump",
    intro: "HV-0.22/8 from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "Name: HV-0.22/8",
      "Pump: HV-O. 22",
      "Tank Lt: 100",
      "Power Hp/Kw: 3.0/2.2",
      "Cylinder N.: 2",
      "Max Pressure Bar/Psi: 8/116"
    ],
    application: {
      title: "What can I do with a LIDA air pump?",
      body: "The HV-0.22/8 from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Name: HV-0.22/8",
      "Pump: HV-O. 22",
      "Tank Lt: 100",
      "Power Hp/Kw: 3.0/2.2",
      "Cylinder N.: 2",
      "Max Pressure Bar/Psi: 8/116",
      "Rpm: 1000",
      "Air Displacement L/Min./Cfm: 382/13.5"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlminCFM", label: "AIR DISPLACEMENT L/MIN./CFM" },
        { key: "volVHz", label: "VOLVHZ" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "HV-0.22/8", "pump": "HV-O. 22", "tankLt": "100", "powerHpKw": "3.0/2.2", "cylindern": "2", "maxpressurebarPSI": "8/116", "rPM": "1000", "airDisplacementlminCFM": "382/13.5", "volVHz": "220/50", "weightkglbs": "87/191.8", "dimensionsWxDxHmm": "1150x420x880" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "HV-0.22/8",
  },
  {
    slug: "wb1100-40al",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "WB1100/40AL from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "Ball valve type drain",
      "Triple motor protection design",
      "Al-tank without corrosion",
      "* 60HZ available"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The WB1100/40AL from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Ball valve type drain",
      "Triple motor protection design",
      "Al-tank without corrosion",
      "* 60HZ available"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlminCFM", label: "AIR DISPLACEMENT L/MIN./CFM" },
        { key: "volVHz", label: "VOLVHZ" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "WB1100-1A40L", "pump": "WB1100", "tankLt": "40", "powerHpKw": "1.5/1.1", "cylindern": "2", "maxpressurebarPSI": "8/116", "rPM": "1737", "airDisplacementlminCFM": "196/6.9", "volVHz": "220/50", "weightkglbs": "25/55", "dimensionsWxDxHmm": "680396x645" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "WB1100/40AL",
  },
  {
    slug: "wb1500-50l1a",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "WB1500-50L1A from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "Ball valve type drain",
      "Triple motor protection design",
      "* 60HZ available"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The WB1500-50L1A from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Ball valve type drain",
      "Triple motor protection design",
      "* 60HZ available"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebarPSI", label: "MAX PRESSURE BAR/PSI" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlminCFM", label: "AIR DISPLACEMENT L/MIN./CFM" },
        { key: "volVHz", label: "VOLVHZ" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "WB1500-1A50L", "pump": "WB1500", "tankLt": "50", "powerHpKw": "2/1.5", "cylindern": "2", "maxpressurebarPSI": "8/116", "rPM": "1400", "airDisplacementlminCFM": "235/8.3", "volVHz": "220/50", "weightkglbs": "32/70.5", "dimensionsWxDxHmm": "670×382×675" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "WB1500-50L1A",
  },
  {
    slug: "oil-less-direct-driven-pumps",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Air Pump",
    intro: "Low temperature designed motor for long life time and high-durability",
    highlights: [
      "Optional: Head protection cover",
      "4 pole motor drive",
      "100% oil-less air",
      "Bigger air capacity",
      "Longer lifetime of piston ring and cylinder",
      "Low temperature designed motor for long life time and high-durability"
    ],
    application: {
      title: "What can I do with a LIDA air pump?",
      body: "The Oil-less Direct Driven Pumps from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Optional: Head protection cover",
      "4 pole motor drive",
      "100% oil-less air",
      "Bigger air capacity",
      "Longer lifetime of piston ring and cylinder",
      "Low temperature designed motor for long life time and high-durability",
      "Precise balanced crank counter weight for low vibration",
      "Max. Press Bar"
    ],
    parameters: {
      rowKey: "model",
      columns: [
        { key: "model", label: "MODEL" },
        { key: "hp", label: "HP" },
        { key: "kw", label: "KW" },
        { key: "maxPressBar", label: "MAX. PRESS BAR" },
        { key: "psi", label: "PSI" },
        { key: "stroke", label: "STROKE" },
        { key: "cyl", label: "CYL." },
        { key: "ow", label: "OW." },
        { key: "rPM", label: "RPM" },
        { key: "displacementLmincfm", label: "DISPLACEMENT L/MIN CFM" },
        { key: "displacementLmincfm1", label: "DISPLACEMENT L/MIN CFM (2)" },
        { key: "weightkg", label: "WEIGHT KG" }
      ],
      rows: [
        { "model": "WB550", "hp": "0.75", "kw": "0.55", "maxPressBar": "8", "psi": "116", "stroke": "11.6", "cyl": "63.7", "ow": "2", "rPM": "1400", "displacementLmincfm": "103", "displacementLmincfm1": "3.7", "weightkg": "9.4" },
        { "model": "WB750", "hp": "1.0", "kw": "0.75", "maxPressBar": "8", "psi": "116", "stroke": "14", "cyl": "63.7", "ow": "2", "rPM": "1400", "displacementLmincfm": "125", "displacementLmincfm1": "4.4", "weightkg": "9.8" },
        { "model": "WB1100", "hp": "1.5", "kw": "1.1", "maxPressBar": "8", "psi": "116", "stroke": "22", "cyl": "63.7", "ow": "2", "rPM": "1400", "displacementLmincfm": "195", "displacementLmincfm1": "6.9", "weightkg": "17.2" },
        { "model": "WB 1500", "hp": "2.0", "kw": "1.5", "maxPressBar": "8", "psi": "116", "stroke": "22", "cyl": "69.7", "ow": "2", "rPM": "1400", "displacementLmincfm": "235", "displacementLmincfm1": "8.3", "weightkg": "17.9" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "Oil-less Direct Driven Pumps",
  },
  {
    slug: "qv-0-48t",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "QV-0.48T from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "Low sound level cabinet design",
      "Install in workshop",
      "Low speed running piston pump",
      "European certificated electric components",
      "Optional IE3 motor",
      "Optional star-delta starting"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The QV-0.48T from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Low sound level cabinet design",
      "Install in workshop",
      "Low speed running piston pump",
      "European certificated electric components",
      "Optional IE3 motor",
      "Optional star-delta starting"
    ],
    parameters: {
      rowKey: "name",
      columns: [
        { key: "name", label: "NAME" },
        { key: "pump", label: "PUMP" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHpKw", label: "POWER HP/KW" },
        { key: "cylindern", label: "CYLINDER N." },
        { key: "maxpressurebar", label: "MAX PRESSURE BAR" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "displacementLminCFM", label: "DISPLACEMENT L/MIN./CFM" },
        { key: "voIVHz", label: "VOIVHZ" },
        { key: "weightkglbs", label: "WEIGHT KG/LBS" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH(MM)" }
      ],
      rows: [
        { "name": "QV-0.25", "pump": "V0.25", "tankLt": "-", "powerHpKw": "3/2.2", "cylindern": "2", "maxpressurebar": "10", "lubricated": "YES", "rPM": "1235", "displacementLminCFM": "377/13.3", "voIVHz": "380/50", "weightkglbs": "155/341", "dimensionsWxDxHmm": "750x760x950" },
        { "name": "QW-0.36", "pump": "W0.36", "tankLt": "-", "powerHpKw": "4/3", "cylindern": "3", "maxpressurebar": "10", "lubricated": "YES", "rPM": "945", "displacementLminCFM": "452/15.9", "voIVHz": "380/50", "weightkglbs": "180/397", "dimensionsWxDxHmm": "850x760x1100" },
        { "name": "QV-0.48", "pump": "V0.48", "tankLt": "-", "powerHpKw": "5.5/4", "cylindern": "2", "maxpressurebar": "10", "lubricated": "YES", "rPM": "920", "displacementLminCFM": "702/24.8", "voIVHz": "380/50", "weightkglbs": "220/485", "dimensionsWxDxHmm": "850x760x1100" },
        { "name": "QW-0.67", "pump": "W0.67", "tankLt": "-", "powerHpKw": "7.5/5.5", "cylindern": "3", "maxpressurebar": "10", "lubricated": "YES", "rPM": "995", "displacementLminCFM": "900/31.8", "voIVHz": "380/50", "weightkglbs": "255/562", "dimensionsWxDxHmm": "950x760x1170" },
        { "name": "QW-0.90", "pump": "W0.90", "tankLt": "-", "powerHpKw": "10/7.5", "cylindern": "3", "maxpressurebar": "10", "lubricated": "YES", "rPM": "950", "displacementLminCFM": "1269/45", "voIVHz": "380/50", "weightkglbs": "295/650", "dimensionsWxDxHmm": "950x760x1170" },
        { "name": "QV-0.20", "pump": "V0.20", "tankLt": "-", "powerHpKw": "3/2.2", "cylindern": "2", "maxpressurebar": "12.5", "lubricated": "YES", "rPM": "1250", "displacementLminCFM": "191/6.7", "voIVHz": "380/50", "weightkglbs": "155/341", "dimensionsWxDxHmm": "750x760x950" },
        { "name": "QV-0.40", "pump": "V0.40", "tankLt": "一", "powerHpKw": "5.5/4", "cylindern": "2", "maxpressurebar": "12.5", "lubricated": "YES", "rPM": "1280", "displacementLminCFM": "488/17.3", "voIVHz": "380/50", "weightkglbs": "220/485", "dimensionsWxDxHmm": "850x760x1100" },
        { "name": "QW-0.80", "pump": "W0.80", "tankLt": "-", "powerHpKw": "10/7.5", "cylindern": "3", "maxpressurebar": "12.5", "lubricated": "YES", "rPM": "1100", "displacementLminCFM": "980/34.6", "voIVHz": "380/50", "weightkglbs": "295/650", "dimensionsWxDxHmm": "950x760x1170" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "QV-0.48T",
  },
  {
    slug: "w-0-9-8",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "W-0.9/8 from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "Model: W-0.9/8",
      "Pump Name: W0.9",
      "Tank Lt: 270",
      "Power Hp/Kw: 10/7.5",
      "Cylinder No.: 3",
      "Working Pressure Bar: 8"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The W-0.9/8 from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Model: W-0.9/8",
      "Pump Name: W0.9",
      "Tank Lt: 270",
      "Power Hp/Kw: 10/7.5",
      "Cylinder No.: 3",
      "Working Pressure Bar: 8",
      "Rpm: 950",
      "Air Displacement L/Min: 1269"
    ],
    parameters: {
      rowKey: "model",
      columns: [
        { key: "model", label: "MODEL" },
        { key: "pumpname", label: "PUMP NAME" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHPkW", label: "POWER HP/KW" },
        { key: "cylinderNo", label: "CYLINDER NO." },
        { key: "workingpressurebar", label: "WORKING PRESSURE BAR" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlmin", label: "AIR DISPLACEMENT L/MIN" },
        { key: "volVHz", label: "VOLVHZ" },
        { key: "weightkg", label: "WEIGHTKG" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH MM" }
      ],
      rows: [
        { "model": "W-0.9/8", "pumpname": "W0.9", "tankLt": "270", "powerHPkW": "10/7.5", "cylinderNo": "3", "workingpressurebar": "8", "lubricated": "YES", "rPM": "950", "airDisplacementlmin": "1269", "volVHz": "380/50", "weightkg": "280", "dimensionsWxDxHmm": "1780x670x1180" },
        { "model": "W-1.5/8", "pumpname": "W1.5", "tankLt": "340", "powerHPkW": "15/11", "cylinderNo": "3", "workingpressurebar": "8", "lubricated": "YES", "rPM": "750", "airDisplacementlmin": "1766", "volVHz": "380/50", "weightkg": "450", "dimensionsWxDxHmm": "1880x770x1340" },
        { "model": "W-2.0/8", "pumpname": "W2.0", "tankLt": "340", "powerHPkW": "20/15", "cylinderNo": "3", "workingpressurebar": "8", "lubricated": "YES", "rPM": "750", "airDisplacementlmin": "2543", "volVHz": "380/50", "weightkg": "514", "dimensionsWxDxHmm": "1880x820x1390" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "W-0.9/8",
  },
  {
    slug: "v-0-48-8",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "V-0.48/8 from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "Model: V-0.48/8",
      "Pump Name: V0.48",
      "Tank Lt: 170",
      "Power Hp/Kw: 5.5/4.0",
      "Cylinder No.: 2",
      "Working Pressure Bar: 8"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The V-0.48/8 from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Model: V-0.48/8",
      "Pump Name: V0.48",
      "Tank Lt: 170",
      "Power Hp/Kw: 5.5/4.0",
      "Cylinder No.: 2",
      "Working Pressure Bar: 8",
      "Rpm: 920",
      "Air Displacement L/Min: 702"
    ],
    parameters: {
      rowKey: "model",
      columns: [
        { key: "model", label: "MODEL" },
        { key: "pumpname", label: "PUMP NAME" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHPkW", label: "POWER HP/KW" },
        { key: "cylinderNo", label: "CYLINDER NO." },
        { key: "workingpressurebar", label: "WORKING PRESSURE BAR" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlmin", label: "AIR DISPLACEMENT L/MIN" },
        { key: "volVHz", label: "VOLVHZ" },
        { key: "weightkg", label: "WEIGHTKG" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH MM" }
      ],
      rows: [
        { "model": "V-0.48/8", "pumpname": "V0.48", "tankLt": "170", "powerHPkW": "5.5/4.0", "cylinderNo": "2", "workingpressurebar": "8", "lubricated": "YES", "rPM": "920", "airDisplacementlmin": "702", "volVHz": "380/50", "weightkg": "190", "dimensionsWxDxHmm": "1580x540x1020" },
        { "model": "W-0.67/8", "pumpname": "W0.67", "tankLt": "270", "powerHPkW": "7.5/5.5", "cylinderNo": "3", "workingpressurebar": "8", "lubricated": "YES", "rPM": "995", "airDisplacementlmin": "900", "volVHz": "380/50", "weightkg": "230", "dimensionsWxDxHmm": "1780x670x1180" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "V-0.48/8",
  },
  {
    slug: "w-0-36-8",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "W-0.36/8 from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "Model: W-036/8",
      "Pump Name: W0.36",
      "Tank Lt: 130",
      "Power Hp/Kw: 4/3",
      "Cylinder No.: 3",
      "Working Pressure Bar: 8"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The W-0.36/8 from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Model: W-036/8",
      "Pump Name: W0.36",
      "Tank Lt: 130",
      "Power Hp/Kw: 4/3",
      "Cylinder No.: 3",
      "Working Pressure Bar: 8",
      "Rpm: 1060",
      "Air Displacement L/Min: 506"
    ],
    parameters: {
      rowKey: "model",
      columns: [
        { key: "model", label: "MODEL" },
        { key: "pumpname", label: "PUMP NAME" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHPkW", label: "POWER HP/KW" },
        { key: "cylinderNo", label: "CYLINDER NO." },
        { key: "workingpressurebar", label: "WORKING PRESSURE BAR" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlmin", label: "AIR DISPLACEMENT L/MIN" },
        { key: "volVHz", label: "VOLVHZ" },
        { key: "weightkg", label: "WEIGHTKG" },
        { key: "dimensionsWxDxHmm", label: "DIMENSIONS WXDXH MM" }
      ],
      rows: [
        { "model": "W-036/8", "pumpname": "W0.36", "tankLt": "130", "powerHPkW": "4/3", "cylinderNo": "3", "workingpressurebar": "8", "lubricated": "YES", "rPM": "1060", "airDisplacementlmin": "506", "volVHz": "380/50", "weightkg": "123", "dimensionsWxDxHmm": "1520x520x880" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "W-0.36/8",
  },
  {
    slug: "v-0-25-8",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "V-0.25/8 from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "Model: V-0.25/8",
      "Pump Name: V0.25",
      "Tank Lt: 100",
      "Power Hp/Kw: 3/2.2",
      "Cylinder No.: 2",
      "Working Pressure Bar: 8"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The V-0.25/8 from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Model: V-0.25/8",
      "Pump Name: V0.25",
      "Tank Lt: 100",
      "Power Hp/Kw: 3/2.2",
      "Cylinder No.: 2",
      "Working Pressure Bar: 8",
      "Rpm: 1235",
      "Air Displacement L/Min: 377"
    ],
    parameters: {
      rowKey: "model",
      columns: [
        { key: "model", label: "MODEL" },
        { key: "pumpname", label: "PUMP NAME" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHPkW", label: "POWER HP/KW" },
        { key: "cylinderNo", label: "CYLINDER NO." },
        { key: "workingpressurebar", label: "WORKING PRESSURE BAR" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlmin", label: "AIR DISPLACEMENT L/MIN" },
        { key: "volVHz", label: "VOLVHZ" },
        { key: "weightkg", label: "WEIGHTKG" },
        { key: "dimensionsWxDxH", label: "DIMENSIONS WXDXH" }
      ],
      rows: [
        { "model": "V-0.25/8", "pumpname": "V0.25", "tankLt": "100", "powerHPkW": "3/2.2", "cylinderNo": "2", "workingpressurebar": "8", "lubricated": "YES", "rPM": "1235", "airDisplacementlmin": "377", "volVHz": "220/50", "weightkg": "106", "dimensionsWxDxH": "1150x480x870" },
        { "model": "W-036/8", "pumpname": "W0.36", "tankLt": "130", "powerHPkW": "4/3", "cylinderNo": "3", "workingpressurebar": "8", "lubricated": "YES", "rPM": "1060", "airDisplacementlmin": "506", "volVHz": "380/50", "weightkg": "123", "dimensionsWxDxH": "1520x520x880" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "V-0.25/8",
  },
  {
    slug: "v-0-17-8",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "V-0.17/8 from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "Model: V-0.17/8",
      "Pump Name: VO. 17",
      "Tank Lt: 100",
      "Power Hp/Kw: 2/1.5",
      "Cylinder No.: 2",
      "Working Pressure Bar: 8"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The V-0.17/8 from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Model: V-0.17/8",
      "Pump Name: VO. 17",
      "Tank Lt: 100",
      "Power Hp/Kw: 2/1.5",
      "Cylinder No.: 2",
      "Working Pressure Bar: 8",
      "Rpm: 1250",
      "Air Displacement L/Min: 235"
    ],
    parameters: {
      rowKey: "model",
      columns: [
        { key: "model", label: "MODEL" },
        { key: "pumpname", label: "PUMP NAME" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHPkW", label: "POWER HP/KW" },
        { key: "cylinderNo", label: "CYLINDER NO." },
        { key: "workingpressurebar", label: "WORKING PRESSURE BAR" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlmin", label: "AIR DISPLACEMENT L/MIN" },
        { key: "volVHz", label: "VOLVHZ" },
        { key: "weightkg", label: "WEIGHTKG" },
        { key: "dimensionsWxDxH", label: "DIMENSIONS WXDXH" }
      ],
      rows: [
        { "model": "V-0.17/8", "pumpname": "VO. 17", "tankLt": "100", "powerHPkW": "2/1.5", "cylinderNo": "2", "workingpressurebar": "8", "lubricated": "YES", "rPM": "1250", "airDisplacementlmin": "235", "volVHz": "220/50", "weightkg": "85", "dimensionsWxDxH": "1150x480x870" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "V-0.17/8",
  },
  {
    slug: "z-0-036-8",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Piston Compressor",
    intro: "Z-0.036/8 from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "Heavy duty cast iron pump for industrial air",
      "IP54 electric motor",
      "European metal mesh belt guard",
      "With handle on both tank ends and 4 wheels for easy moving"
    ],
    application: {
      title: "What can I do with a LIDA piston compressor?",
      body: "The Z-0.036/8 from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Heavy duty cast iron pump for industrial air",
      "IP54 electric motor",
      "European metal mesh belt guard",
      "With handle on both tank ends and 4 wheels for easy moving"
    ],
    parameters: {
      rowKey: "model",
      columns: [
        { key: "model", label: "MODEL" },
        { key: "pumpname", label: "PUMP NAME" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHPkW", label: "POWER HP/KW" },
        { key: "cylinderNo", label: "CYLINDER NO." },
        { key: "workingpressurebar", label: "WORKING PRESSURE BAR" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlmin", label: "AIR DISPLACEMENT L/MIN" },
        { key: "volVHz", label: "VOLVHZ" },
        { key: "weightkg", label: "WEIGHTKG" },
        { key: "dimensionsWxDxH", label: "DIMENSIONS WXDXH" }
      ],
      rows: [
        { "model": "Z-0.036/8", "pumpname": "Z0.036", "tankLt": "24", "powerHPkW": "1/0.75", "cylinderNo": "1", "workingpressurebar": "8", "lubricated": "YES", "rPM": "1200", "airDisplacementlmin": "93", "volVHz": "220/50", "weightkg": "40", "dimensionsWxDxH": "770x410x700" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "Z-0.036/8",
  },
  {
    slug: "w-1-1-12-5",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Air Pump",
    intro: "W-1.1/12.5 from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "Model: W-1.1/12.5",
      "Pump Name: Wl.1/12.5",
      "Tank Lt: 340",
      "Power Hp/Kw: 15/11",
      "Cylinder No.: 3",
      "Max Pressure Bar: 12.5"
    ],
    application: {
      title: "What can I do with a LIDA air pump?",
      body: "The W-1.1/12.5 from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Model: W-1.1/12.5",
      "Pump Name: Wl.1/12.5",
      "Tank Lt: 340",
      "Power Hp/Kw: 15/11",
      "Cylinder No.: 3",
      "Max Pressure Bar: 12.5",
      "Rpm: 750",
      "Air Displacement L/Min: 1178"
    ],
    parameters: {
      rowKey: "model",
      columns: [
        { key: "model", label: "MODEL" },
        { key: "pumpname", label: "PUMP NAME" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHPkW", label: "POWER HP/KW" },
        { key: "cylinderNo", label: "CYLINDER NO." },
        { key: "maxpressurebar", label: "MAX PRESSURE BAR" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlmin", label: "AIR DISPLACEMENT L/MIN" },
        { key: "voltHz", label: "VOLT/HZ" },
        { key: "weightkg", label: "WEIGHT KG" },
        { key: "dimensionsWxDxH", label: "DIMENSIONS WXDXH" }
      ],
      rows: [
        { "model": "W-1.1/12.5", "pumpname": "Wl.1/12.5", "tankLt": "340", "powerHPkW": "15/11", "cylinderNo": "3", "maxpressurebar": "12.5", "lubricated": "YES", "rPM": "750", "airDisplacementlmin": "1178", "voltHz": "380/50", "weightkg": "450", "dimensionsWxDxH": "1880x770x1340" },
        { "model": "W-1.5/12.5", "pumpname": "Wl.5/12.5", "tankLt": "340", "powerHPkW": "20/15", "cylinderNo": "3", "maxpressurebar": "12.5", "lubricated": "YES", "rPM": "750", "airDisplacementlmin": "1695", "voltHz": "380/50", "weightkg": "515", "dimensionsWxDxH": "1880x820x1390" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "W-1.1/12.5",
  },
  {
    slug: "w-0-80-12-5",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Air Pump",
    intro: "W-0.80/12.5 from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "Model: W-0.60/12.5",
      "Pump Name: W0.60/12.5",
      "Tank Lt: 270",
      "Power Hp/Kw: 7.5Z5.5",
      "Cylinder No.: 3",
      "Max Pressure Bar: 12.5"
    ],
    application: {
      title: "What can I do with a LIDA air pump?",
      body: "The W-0.80/12.5 from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Model: W-0.60/12.5",
      "Pump Name: W0.60/12.5",
      "Tank Lt: 270",
      "Power Hp/Kw: 7.5Z5.5",
      "Cylinder No.: 3",
      "Max Pressure Bar: 12.5",
      "Rpm: 1180",
      "Air Displacement L/Min: 712"
    ],
    parameters: {
      rowKey: "model",
      columns: [
        { key: "model", label: "MODEL" },
        { key: "pumpname", label: "PUMP NAME" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHPkW", label: "POWER HP/KW" },
        { key: "cylinderNo", label: "CYLINDER NO." },
        { key: "maxpressurebar", label: "MAX PRESSURE BAR" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlmin", label: "AIR DISPLACEMENT L/MIN" },
        { key: "voltHz", label: "VOLT/HZ" },
        { key: "weightkg", label: "WEIGHT KG" },
        { key: "dimensionsWxDxH", label: "DIMENSIONS WXDXH" }
      ],
      rows: [
        { "model": "W-0.60/12.5", "pumpname": "W0.60/12.5", "tankLt": "270", "powerHPkW": "7.5Z5.5", "cylinderNo": "3", "maxpressurebar": "12.5", "lubricated": "YES", "rPM": "1180", "airDisplacementlmin": "712", "voltHz": "380/50", "weightkg": "230", "dimensionsWxDxH": "1780x670x1180" },
        { "model": "W-0.80/12.5", "pumpname": "W0.80/12.5", "tankLt": "270", "powerHPkW": "10/7.5", "cylinderNo": "3", "maxpressurebar": "12.5", "lubricated": "YES", "rPM": "1100", "airDisplacementlmin": "980", "voltHz": "380/50", "weightkg": "280", "dimensionsWxDxH": "1780x670x1180" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "W-0.80/12.5",
  },
  {
    slug: "v-0-40-12-5",
    breadcrumbCategoryLabel: "Air Compressor",
    breadcrumbSubcategory: "Air Pump",
    intro: "V-0.40/12.5 from Lida Machine Equipment, engineered for dependable industrial compressed air supply.",
    highlights: [
      "Model: V-0.20/12.5",
      "Pump Name: V0.20/12.5",
      "Tank Lt: 100",
      "Power Hp/Kw: 3/2.2",
      "Cylinder No.: 2",
      "Max Pressure Bar: 12.5"
    ],
    application: {
      title: "What can I do with a LIDA air pump?",
      body: "The V-0.40/12.5 from Lida Machine Equipment delivers dependable compressed air for industrial and workshop use, backed by the manufacturer's full specification sheet.",
    },
    usability: compressorUsabilityDefaults,
    productFeatures: [
      "Model: V-0.20/12.5",
      "Pump Name: V0.20/12.5",
      "Tank Lt: 100",
      "Power Hp/Kw: 3/2.2",
      "Cylinder No.: 2",
      "Max Pressure Bar: 12.5",
      "Rpm: 1250",
      "Air Displacement L/Min: 191"
    ],
    parameters: {
      rowKey: "model",
      columns: [
        { key: "model", label: "MODEL" },
        { key: "pumpname", label: "PUMP NAME" },
        { key: "tankLt", label: "TANK LT" },
        { key: "powerHPkW", label: "POWER HP/KW" },
        { key: "cylinderNo", label: "CYLINDER NO." },
        { key: "maxpressurebar", label: "MAX PRESSURE BAR" },
        { key: "lubricated", label: "LUBRICATED" },
        { key: "rPM", label: "RPM" },
        { key: "airDisplacementlmin", label: "AIR DISPLACEMENT L/MIN" },
        { key: "voltHz", label: "VOLT/HZ" },
        { key: "weightkg", label: "WEIGHT KG" },
        { key: "dimensionsWxDxH", label: "DIMENSIONS WXDXH" }
      ],
      rows: [
        { "model": "V-0.20/12.5", "pumpname": "V0.20/12.5", "tankLt": "100", "powerHPkW": "3/2.2", "cylinderNo": "2", "maxpressurebar": "12.5", "lubricated": "YES", "rPM": "1250", "airDisplacementlmin": "191", "voltHz": "220/50", "weightkg": "106", "dimensionsWxDxH": "1150x480x870" },
        { "model": "W-0.30/12.5", "pumpname": "W0.30/12.5", "tankLt": "130", "powerHPkW": "4/3", "cylinderNo": "3", "maxpressurebar": "12.5", "lubricated": "YES", "rPM": "1150", "airDisplacementlmin": "366", "voltHz": "380/50", "weightkg": "125", "dimensionsWxDxH": "1520x520x880" },
        { "model": "V-0.40/12.5", "pumpname": "V0.40/12.5", "tankLt": "170", "powerHPkW": "5.5/4", "cylinderNo": "2", "maxpressurebar": "12.5", "lubricated": "YES", "rPM": "1280", "airDisplacementlmin": "488", "voltHz": "380/50", "weightkg": "190", "dimensionsWxDxH": "1580x420x1020" }
      ],
      footerNote: "* Specifications are provided by the manufacturer and subject to change without prior notice.",
    },
    formProductName: "V-0.40/12.5",
  }
];

export const compressorDetailSlugs = compressorDetailContent.map((item) => item.slug);

export const isCompressorDetailPage = (slug: string) => compressorDetailSlugs.includes(slug);

export const getCompressorDetailContent = (slug: string) =>
  compressorDetailContent.find((item) => item.slug === slug);
