import type { MachineDetailCard, MachineDetailContent } from "@/data/machineDetailTypes";

const knittingEngineeringSubtitle =
  "Every factor affecting knitting accuracy has been taken into consideration. Control system, transmission system, motor, cam, etc. Where you cannot see are details.";

const precisionEngineeringSubtitle =
  "Every factor that affects precision has been considered: electric control, motor, transmission system, assembly process, and hidden structural details.";

const knittingParamColumns = [
  { key: "diameter", label: "Diameters" },
  { key: "feeders", label: "Feeders" },
  { key: "gauge", label: "Gauge" },
  { key: "rpm", label: "RPM" },
];

const standardEngineeringItems: MachineDetailCard[] = [
  { title: "Central lifting system", description: "Compact structure, smooth lifting, adjusting fabric weight accurately and simply." },
  { title: "Cam material", description: "Made of imported alloy steel with special heat treatment and CNC machining for smooth, durable needle motion." },
  { title: "Heart components", description: "Strong interchangeability, can be quickly replaced, and easy to operate." },
  { title: "Sinkers", description: "Precision-manufactured sinkers support stable knitting activity and faultless fabric output." },
  { title: "Electric machinery", description: "High-performance motors and electrical systems ensure stable high-speed operation." },
  { title: "Computer control system", description: "Easy system operation with computerized needle selection and USB pattern input." },
];

const valuePillars: MachineDetailCard[] = [
  { title: "Central lifting system", description: "Compact structure, smooth lifting, precise and simple adjustment of fabric weight." },
  { title: "Heart components", description: "Strong interchangeability, quick replacement, easy to operate." },
  { title: "Computer control system", description: "Easy system operation, computer needle selection system, USB input." },
];

const standardEquipment = [
  "Positive Feeding Units",
  "Automatic Lubrication Device",
  "Needle And Fabric Detector",
  "Take Down System",
  "Automatic Cleaning Device",
  "Yarn Creel System",
];

export const knittingDetailContent: MachineDetailContent[] = [
  {
    slug: "single-jersey-knitting",
    breadcrumbCategoryLabel: "Circular Knitting Machine",
    breadcrumbSubcategory: "High Speed Single Jersey Knitting Machine",
    intro:
      "Single jersey circular knitting machine with 3 feeders / 3.2 feeders / 4 feeders / 6 feeders per diametrical inch. Cam box design to receive up to 4 cam tracks on the cylinder. Single jersey machine can be converted to terry or fleece machine by changing some parts.",
    highlights: [
      "Can produce silk cotton, polyester cotton, colored striped fabric, and mesh fabrics",
      "Used for vests, sportswear, T-shirts, yoga suits, and swimming suits",
      "Advanced equipment support",
      "Advanced production technology",
      "High standard quality control",
      "Multiple optional devices",
    ],
    application: {
      title: "What can I do with YONTHIN circular knitting machine?",
      body: "Imagination is infinite, as long as you can imagine, you can knit. Use Yonthin knitted fabric to make vests, T-shirts, sportswear, swimsuits, etc.",
    },
    engineering: {
      title: "Why is it good at knitting?",
      subtitle: knittingEngineeringSubtitle,
      items: standardEngineeringItems,
    },
    valueItems: valuePillars,
    valueSectionTitle: "Core Machine Advantages",
    productFeatures: [
      "The frame combines the knitting principle with human engineering — pretty, firm, and reliable with high-quality cast iron.",
      "Special driving system with oil-soaking design ensures low running noise and a durable driving gear.",
      "Strong interchangeability — by changing heart parts, the machine can be converted into a terry or three-thread fleece machine.",
      "All cams and cam boxes are made of imported Japan alloy steel, engraved and abraded by a CNC processing center.",
      "New type designed center system has tight construction and stable vertical movement for precise fabric weight adjustment.",
      "By changing cams with different functions, the machine can produce various fabrics with different single structures.",
    ],
    parameters: {
      rowKey: "diameter",
      columns: knittingParamColumns,
      rows: [
        { diameter: '4"-44" / 3 feeders per inch', feeders: "12F - 132F", gauge: "12G - 50G", rpm: "18 - 40 R.P.M" },
        { diameter: '13"-44" / 3.2 feeders per inch', feeders: "42F - 140F", gauge: "12G - 50G", rpm: "18 - 40 R.P.M" },
        { diameter: '13"-44" / 4 feeders per inch', feeders: "52F - 176F", gauge: "12G - 32G", rpm: "18 - 40 R.P.M" },
        { diameter: '30"-44" / 6 feeders per inch', feeders: "180F - 264F", gauge: "12G - 32G", rpm: "18 - 40 R.P.M" },
      ],
    },
    equipmentMatrix: {
      standard: standardEquipment,
      optional: ["Spandex preparation device", "Lycra Feeding Units", "Folding Device", "Yarn Input Measuring Device", "Open Width Frame", "Central Stitch System"],
    },
    formProductName: "High Speed Single Jersey Knitting Machine",
  },
  {
    slug: "double-jersey-rib-knitting",
    breadcrumbCategoryLabel: "Circular Knitting Machine",
    breadcrumbSubcategory: "High Speed Double Jersey/Rib Knitting Machine",
    intro:
      "Multi-functional double jersey rib circular knitting machine with 2 feeders/2.1 feeders/2.4 feeders/2.8 feeders/3.2 feeders per diametrical inch. Cam box design to receive up to 4 tracks on the cylinder and 2 tracks on dial.",
    highlights: [
      "Produces double jersey fabric, mesh fabric, sandwich fabric, or Roman fabric",
      "Advanced equipment support",
      "Advanced production technology",
      "High standard quality control",
      "Multiple optional devices",
    ],
    application: {
      title: "What can I do with YONTHIN circular knitting machine?",
      body: "Imagination is infinite, as long as you can imagine, you can knit. Using Yonthin's sandwich health fabric, Roman fabric, mesh fabric, and other fabrics to make various clothing.",
    },
    engineering: {
      title: "Why is it good at knitting?",
      subtitle: knittingEngineeringSubtitle,
      items: [
        { title: "Cam material", description: "Made of imported alloy steel; adopt imported special heat treatment; using Computer CAD/CAM to assist in design; less needle damage and high rotational speed." },
        { title: "Sinkers", description: "Precision-manufactured sinkers support stable knitting activity and faultless fabric output." },
        { title: "Electric machinery", description: "High-performance motors and electrical systems ensure stable high-speed operation." },
        { title: "Machine framework", description: "New designed frame with simultaneous displacement for exacter and simpler needle tolerance adjustment." },
        ...standardEngineeringItems.filter((item) => !["Cam material", "Sinkers", "Electric machinery"].includes(item.title)),
      ],
    },
    valueItems: valuePillars,
    valueSectionTitle: "Core Machine Advantages",
    productFeatures: [
      "Top and bottom gears adopt oil-soaking to reduce abrasion and noise, then improve their precision and life.",
      "Adopting new designed frame of the machine, dial cam box base and sleeve have simultaneous displacement for exacter adjustment.",
      "Multifunctional machine, equipped with cams of 2 tracks in Dia and 4 tracks in Cylinder for changing double structure to meet the market.",
    ],
    parameters: {
      rowKey: "diameter",
      columns: knittingParamColumns,
      rows: [
        { diameter: '25"-44" / 2 feeders per inch', feeders: "50F-88F", gauge: "16G-42G", rpm: "15-30 R.P.M" },
        { diameter: '25"-44" / 2.1 feeders per inch', feeders: "52F-94F", gauge: "16G-42G", rpm: "15-30 R.P.M" },
        { diameter: '25"-44" / 2.4 feeders per inch', feeders: "60F-106F", gauge: "16G-42G", rpm: "15-30 R.P.M" },
        { diameter: '30"-44" / 2.8 feeders per inch', feeders: "70F-122F", gauge: "16G-42G", rpm: "15-30 R.P.M" },
        { diameter: '30"-44" / 3.2 feeders per inch', feeders: "96F-108F", gauge: "16G-42G", rpm: "15-30 R.P.M" },
      ],
    },
    equipmentMatrix: {
      standard: ["Positive Feeding Units", "Automatic Lubrication Device", "Take Down System", "Automatic Cleaning Device", "Yarn Creel System"],
      optional: ["Spandex preparation device", "Lycra Feeding Units", "Folding Device", "Yarn Input Measuring Device", "Open Width Frame", "Central Stitch System"],
    },
    formProductName: "High Speed Double Jersey/Rib Knitting Machine",
  },
  {
    slug: "open-width-knitting",
    breadcrumbCategoryLabel: "Circular Knitting Machine",
    breadcrumbSubcategory: "High Speed Open Width Knitting Machine",
    intro:
      "Open width single jersey circular knitting machine with 3/3.2 feeders per diametrical inch. Cam box design to receive up to 4 cam tracks on the cylinder. The machine has all the characteristics of single jersey machine and crease-free for cloth of open width machine.",
    highlights: [
      "Advanced equipment support",
      "Advanced production technology",
      "High standard quality control and inspection",
      "Multiple optional devices",
      "High working speed",
    ],
    application: {
      title: "What can I do with YONTHIN circular knitting machine?",
      body: "Imagination is infinite, as long as you can imagine, you can knit. Produce various fabrics using raw materials such as cotton, blended fabrics, silk for the production of clothing.",
    },
    engineering: {
      title: "Why is it good at knitting?",
      subtitle: knittingEngineeringSubtitle,
      items: [
        { title: "Heart components", description: "Strong interchangeability, can be quickly replaced, easy to operate." },
        ...standardEngineeringItems.filter((item) => item.title !== "Heart components"),
      ],
    },
    valueItems: valuePillars,
    valueSectionTitle: "Core Machine Advantages",
    productFeatures: [
      "Sinkers and sinker cams are made of special alloy steel for stable activity and perfect output of faultless fabrics.",
      "Most parts and accessories are manufactured by CNC so precision and accuracy can be greatly improved.",
      "Cam material made by special imported heating disposal and designed by CNC processing center and CAD/CAM.",
      "Design enables the cloth completely not to have any crease to reduce cost and enhance profit.",
      "Drum speed transfer device makes fabric density evenly and stably with easy control and efficient operation.",
    ],
    parameters: {
      rowKey: "diameter",
      columns: knittingParamColumns,
      rows: [
        { diameter: '30"-44"∕3 feeders per inch', feeders: "90F-132F", gauge: "12G-40G", rpm: "18-35R.P.M" },
        { diameter: '30"-44"∕3 feeders per inch', feeders: "96F-126F", gauge: "12G-22G", rpm: "20-26R.P.M" },
      ],
    },
    equipmentMatrix: {
      standard: ["Positive Feeding Units", "Automatic Lubrication Device", "Needle And Fabric Detector", "Open Width Frame", "Automatic Cleaning Device", "Yarn Creel System"],
      optional: ["Spandex preparation device", "Lycra Feeding Units", "Yarn Input Measuring Device", "Central Stitch System"],
    },
    formProductName: "High Speed Open Width Knitting Machine",
  },
  {
    slug: "three-thread-fleece-knitting",
    breadcrumbCategoryLabel: "Circular Knitting Machine",
    breadcrumbSubcategory: "High Speed Three-Thread Fleece Knitting Machine",
    intro:
      "Three-thread fleeces knitting machine with 3 kinds of feeders per circle Cam. Box design to receive up to 4 cam tracks on the cylinder. Suitable for all cotton hoodies, silk hoodies, stretch hoodies and other fabrics. By changing heart part, it can be converted to single jersey machine.",
    highlights: [
      "Advanced equipment support",
      "Advanced production technology",
      "High standard quality control and inspection",
      "Multiple optional devices",
      "High working speed",
    ],
    application: {
      title: "What can I do with YONTHIN circular knitting machine?",
      body: "Imagination is infinite, as long as you can imagine, you can produce. Yonthin is very suitable for fabrics such as cotton hoodies, silk hoodies, and stretch hoodies.",
    },
    engineering: {
      title: "Why is it good at knitting?",
      subtitle: knittingEngineeringSubtitle,
      items: [
        { title: "Sinkers", description: "Reduce winding tension, move smoothly on a flat surface, and make the fabric uniform to achieve perfect quality." },
        ...standardEngineeringItems.filter((item) => item.title !== "Sinkers"),
      ],
    },
    valueItems: valuePillars,
    valueSectionTitle: "Core Machine Advantages",
    productFeatures: [
      "Special cam system design enables knitting different fabric by different type yarn (cotton fleece, cotton polyester fleece, elastic fleece).",
      "By changing some parts, the machine could be changed into single jersey, operate easily.",
      "Newest frame design makes the machine run more stably.",
    ],
    parameters: {
      rowKey: "diameter",
      columns: knittingParamColumns,
      rows: [
        { diameter: '34"-42" ∕ 3.2 feeders per inch', feeders: "96F-134F", gauge: "16G-22G", rpm: "20-26 R.P.M" },
        { diameter: '34"-44" ∕ 3.2 feeders per inch', feeders: "96F-134F", gauge: "16G-22G", rpm: "20-26 R.P.M" },
      ],
    },
    equipmentMatrix: {
      standard: ["Positive Feeding Units", "Needle And Fabric Detector", "Take down system", "Automatic Cleaning Device", "Yarn Creel System"],
      optional: ["Yarn Input Measuring Device", "Folding Device", "Central Stitch System"],
    },
    formProductName: "High Speed Three-Thread Fleece Knitting Machine",
  },
  {
    slug: "computerized-jacquard-knitting",
    breadcrumbCategoryLabel: "Circular Knitting Machine",
    breadcrumbSubcategory: "High Speed Computerized Electronic Jacquard Single / Double Knitting Machine",
    intro:
      "Computerized Jacquard (mesh) single jersey circular knitting machine with 1.8 feeders / 2 feeders / 2.1 feeders per diametrical inch. Available with Two Ways or Three Ways Computerized Needle-Selecting system. The machine allows to produce various jacquard and mesh fabrics with infinite pattern possibilities.",
    highlights: [
      "Advanced equipment support",
      "Advanced production technology",
      "High standard quality control and inspection",
      "Multiple optional devices",
      "High working speed",
    ],
    application: {
      title: "What can I do with YONTHIN circular knitting machine?",
      body: "Imagination is infinite. As long as you can imagine, you can produce. Yonthin can be used to produce various jacquard mesh fabrics with an unlimited pattern range.",
    },
    engineering: {
      title: "Why it's So Good at Precision Engineering?",
      subtitle: precisionEngineeringSubtitle,
      items: standardEngineeringItems,
    },
    valueItems: valuePillars,
    valueSectionTitle: "Component Highlights",
    productFeatures: [
      "The machine adopts a computerized actuator to select needles on the needle cylinder with KNIT, TUCK, and MISS selection.",
      "Any complicated structure and design can be converted via the computerized pattern preparatory system and USB drive input.",
      "Equipped with an advanced computerized actuator ensuring stability, simple operation, and easy maintenance.",
      "Professionally designed CAM system ensuring high speeds with minimal needle breakage.",
    ],
    parameters: {
      rowKey: "diameter",
      columns: knittingParamColumns,
      rows: [
        { diameter: '30"-36" ∕ 1.8 feeders per inch', feeders: "54F-64F", gauge: "18G-32G", rpm: "15-25 R.P.M" },
        { diameter: '30"-44" ∕ 2 feeders per inch', feeders: "60F-72F", gauge: "18G-32G", rpm: "15-25 R.P.M" },
        { diameter: '30"-44" ∕ 2.4 feeders per inch', feeders: "64F-76F", gauge: "18G-32G", rpm: "15-25 R.P.M" },
      ],
    },
    equipmentMatrix: {
      standard: [
        "Feeding Units Specially Used For Computerized Jacquard",
        "Automatic Lubrication Device",
        "Needle And Fabric Detector",
        "Take Down System",
        "Automatic Cleaning Device",
        "Yarn Creel System",
        "Two/Three Position Needle-selecting System",
        "Electric Control Box Used For Computerized Jacquard",
      ],
      optional: ["Lycra Attachment", "Lycra Feeding Units", "Folding Device", "Yarn Input Measuring Device", "Central Stitch System"],
    },
    formProductName: "High Speed Computerized Electronic Jacquard Single / Double Knitting Machine",
  },
  {
    slug: "terry-velour-knitting",
    breadcrumbCategoryLabel: "Circular Knitting Machine",
    breadcrumbSubcategory: "High Speed Terry /Velour Circular Knitting Machine",
    intro:
      "Reversed terry machine with 1.6 feeders per diametrical inch. Cam box design to receive up to 2 cam tracks on the cylinder. Terry machine with 2 feeders per diametrical inch. By changing a few parts, it can be converted to a single jersey machine.",
    highlights: [
      "Produces velvet, diamond cashmere, miscellaneous fleece, polar fleece, and other velour fabrics",
      "Advanced equipment support",
      "Advanced production technology",
      "High standard quality control and inspection",
      "Multiple optional devices",
      "High working speed",
    ],
    application: {
      title: "What can I do with YONTHIN circular knitting machine?",
      body: "Imagination is infinite, as long as you can imagine, you can produce. Yonthin can produce towel fabrics such as goose down, diamond down, velvet, and fleece.",
    },
    engineering: {
      title: "Why is it good at knitting?",
      subtitle: knittingEngineeringSubtitle,
      items: standardEngineeringItems,
    },
    valueItems: valuePillars,
    valueSectionTitle: "Core Machine Advantages",
    productFeatures: [
      "Special cam curve design of machine, can satisfy the market fabric changeful requirement.",
      "Our machine can produce cotton, polyester, yarn of ramie, flax, lycra, synthetic, different mixed yarn fabric.",
      "Special sinker design, make the fabric design more clear, loop length more smooth.",
    ],
    parameters: {
      rowKey: "diameter",
      columns: knittingParamColumns,
      rows: [
        { diameter: '26"-38" ∕ 2 feeders per inch', feeders: "52F-76F", gauge: "18G-28G", rpm: "18-25 R.P.M" },
        { diameter: '26"-34" ∕ 1.6 feeders per inch', feeders: "42F-54F", gauge: "18G-28G", rpm: "18-25 R.P.M" },
      ],
    },
    equipmentMatrix: {
      standard: ["Positive Feeding Units", "Automatic Lubrication Device", "Take Down System", "Automatic Cleaning Device", "Yarn Creel System"],
      optional: ["Lycra Attachment", "Lycra Feeding Units", "Yarn Input Measuring Device", "Central Stitch System"],
    },
    formProductName: "High Speed Terry /Velour Circular Knitting Machine",
  },
];

export const knittingDetailSlugs = knittingDetailContent.map((item) => item.slug);

export const getKnittingDetailContent = (slug: string) =>
  knittingDetailContent.find((item) => item.slug === slug);
