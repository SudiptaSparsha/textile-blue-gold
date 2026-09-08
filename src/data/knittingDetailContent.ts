import type { MachineDetailCard, MachineDetailContent } from "@/data/machineDetailTypes";

import doubleJerseyRibKnittingEngCamMaterial from "@/assets/knitting-machine/double-jersey-rib-knitting/engineering/cam-material.png";
import doubleJerseyRibKnittingEngSinkers from "@/assets/knitting-machine/double-jersey-rib-knitting/engineering/sinkers.png";
import doubleJerseyRibKnittingEngElectricMachinery from "@/assets/knitting-machine/double-jersey-rib-knitting/engineering/electric-machinery.png";
import doubleJerseyRibKnittingEngMachineFramework from "@/assets/knitting-machine/double-jersey-rib-knitting/engineering/machine-framework.png";
import doubleJerseyRibKnittingValCentralLiftingSystem from "@/assets/knitting-machine/double-jersey-rib-knitting/value/central-lifting-system.png";
import doubleJerseyRibKnittingValHeartComponents from "@/assets/knitting-machine/double-jersey-rib-knitting/value/heart-components.png";
import doubleJerseyRibKnittingValComputerControlSystem from "@/assets/knitting-machine/double-jersey-rib-knitting/value/computer-control-system.png";
import openWidthKnittingEngHeartComponents from "@/assets/knitting-machine/open-width-knitting/engineering/heart-components.png";
import threeThreadFleeceKnittingEngSinkers from "@/assets/knitting-machine/three-thread-fleece-knitting/engineering/sinkers.png";
import singleJerseyKnittingEngCentralLiftingSystem from "@/assets/knitting-machine/single-jersey-knitting/engineering/central-lifting-system.png";
import singleJerseyKnittingEngCamMaterial from "@/assets/knitting-machine/single-jersey-knitting/engineering/cam-material.png";
import singleJerseyKnittingEngHeartComponents from "@/assets/knitting-machine/single-jersey-knitting/engineering/heart-components.png";
import singleJerseyKnittingEngSinkers from "@/assets/knitting-machine/single-jersey-knitting/engineering/sinkers.png";
import singleJerseyKnittingEngElectricMachinery from "@/assets/knitting-machine/single-jersey-knitting/engineering/electric-machinery.png";
import singleJerseyKnittingEngComputerControlSystem from "@/assets/knitting-machine/single-jersey-knitting/engineering/computer-control-system.png";
import yxQFlatKnittingEngMachineHead from "@/assets/knitting-machine/yx-q-flat-knitting-series/engineering/machine-head.png";
import yxQFlatKnittingEngYarnStorageDevice from "@/assets/knitting-machine/yx-q-flat-knitting-series/engineering/yarn-storage-device.png";
import yxQFlatKnittingEngMotorizedYarnFeeder from "@/assets/knitting-machine/yx-q-flat-knitting-series/engineering/motorized-yarn-feeder.jpg";
import yxQFlatKnittingEngControlSystem from "@/assets/knitting-machine/yx-q-flat-knitting-series/engineering/control-system.png";
import yxQFlatKnittingEngAntennaStation from "@/assets/knitting-machine/yx-q-flat-knitting-series/engineering/antenna-station.png";
import imgKnittingMachineSingleJerseyKnittingExtraApplication from "@/assets/knitting-machine/single-jersey-knitting/extra/application.jpg";
import imgKnittingMachineDoubleJerseyRibKnittingExtraApplication from "@/assets/knitting-machine/double-jersey-rib-knitting/extra/application.jpg";
import imgKnittingMachineOpenWidthKnittingExtraApplication from "@/assets/knitting-machine/open-width-knitting/extra/application.jpg";
import imgKnittingMachineThreeThreadFleeceKnittingExtraApplication from "@/assets/knitting-machine/three-thread-fleece-knitting/extra/application.jpg";
import imgKnittingMachineComputerizedJacquardKnittingExtraApplication from "@/assets/knitting-machine/computerized-jacquard-knitting/extra/application.jpg";
import imgKnittingMachineTerryVelourKnittingExtraApplication from "@/assets/knitting-machine/terry-velour-knitting/extra/application.jpg";
import imgKnittingMachineYxQFlatKnittingSeriesExtraApplication from "@/assets/knitting-machine/yx-q-flat-knitting-series/extra/application.jpg";
import imgKnittingMachineAutoStripperExtraApplication from "@/assets/knitting-machine/auto-stripper-jersey-circular-knitting-machine/extra/application.jpg";
import imgKnittingMachineShearingExtraApplication from "@/assets/knitting-machine/shearing-circular-knitting-machine/extra/application.jpg";
import imgKnittingMachineScubaExtraApplication from "@/assets/knitting-machine/scuba-knitting-machine/extra/application.jpg";
import imgKnittingMachineSmallSizeExtraApplication from "@/assets/knitting-machine/high-speed-small-size-knitting-machine/extra/application.jpg";

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
  { title: "Central lifting system", description: "Compact structure, smooth lifting, adjusting fabric weight accurately and simply.", image: singleJerseyKnittingEngCentralLiftingSystem.src },
  { title: "Cam material", description: "Made of imported alloy steel with special heat treatment and CNC machining for smooth, durable needle motion.", image: singleJerseyKnittingEngCamMaterial.src },
  { title: "Heart components", description: "Strong interchangeability, can be quickly replaced, and easy to operate.", image: singleJerseyKnittingEngHeartComponents.src },
  { title: "Sinkers", description: "Precision-manufactured sinkers support stable knitting activity and faultless fabric output.", image: singleJerseyKnittingEngSinkers.src },
  { title: "Electric machinery", description: "High-performance motors and electrical systems ensure stable high-speed operation.", image: singleJerseyKnittingEngElectricMachinery.src },
  { title: "Computer control system", description: "Easy system operation with computerized needle selection and USB pattern input.", image: singleJerseyKnittingEngComputerControlSystem.src },
];

const valuePillars: MachineDetailCard[] = [
  { title: "Central lifting system", description: "Compact structure, smooth lifting, precise and simple adjustment of fabric weight.", image: doubleJerseyRibKnittingValCentralLiftingSystem.src },
  { title: "Heart components", description: "Strong interchangeability, quick replacement, easy to operate.", image: doubleJerseyRibKnittingValHeartComponents.src },
  { title: "Computer control system", description: "Easy system operation, computer needle selection system, USB input.", image: doubleJerseyRibKnittingValComputerControlSystem.src },
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
    image: imgKnittingMachineSingleJerseyKnittingExtraApplication.src,
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
    image: imgKnittingMachineDoubleJerseyRibKnittingExtraApplication.src,
    },
    engineering: {
      title: "Why is it good at knitting?",
      subtitle: knittingEngineeringSubtitle,
      items: [
        { title: "Cam material", description: "Made of imported alloy steel; adopt imported special heat treatment; using Computer CAD/CAM to assist in design; less needle damage and high rotational speed.", image: doubleJerseyRibKnittingEngCamMaterial.src },
        { title: "Sinkers", description: "Precision-manufactured sinkers support stable knitting activity and faultless fabric output.", image: doubleJerseyRibKnittingEngSinkers.src },
        { title: "Electric machinery", description: "High-performance motors and electrical systems ensure stable high-speed operation.", image: doubleJerseyRibKnittingEngElectricMachinery.src },
        { title: "Machine framework", description: "New designed frame with simultaneous displacement for exacter and simpler needle tolerance adjustment.", image: doubleJerseyRibKnittingEngMachineFramework.src },
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
    image: imgKnittingMachineOpenWidthKnittingExtraApplication.src,
    },
    engineering: {
      title: "Why is it good at knitting?",
      subtitle: knittingEngineeringSubtitle,
      items: [
        { title: "Heart components", description: "Strong interchangeability, can be quickly replaced, easy to operate.", image: openWidthKnittingEngHeartComponents.src },
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
    image: imgKnittingMachineThreeThreadFleeceKnittingExtraApplication.src,
    },
    engineering: {
      title: "Why is it good at knitting?",
      subtitle: knittingEngineeringSubtitle,
      items: [
        { title: "Sinkers", description: "Reduce winding tension, move smoothly on a flat surface, and make the fabric uniform to achieve perfect quality.", image: threeThreadFleeceKnittingEngSinkers.src },
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
    image: imgKnittingMachineComputerizedJacquardKnittingExtraApplication.src,
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
    image: imgKnittingMachineTerryVelourKnittingExtraApplication.src,
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
  {
    slug: "yx-q-flat-knitting-series",
    breadcrumbCategoryLabel: "Flat Knitting Machine",
    breadcrumbSubcategory: "YX-Q Flat Knitting Machine Series",
    intro:
      "The YX-Q series equipment is a fully formed computerized flat knitting machine independently developed by YONTHIN Technology, which is highly efficient, stable, and easy to use. It is widely used for weaving integrated woolen sweaters, seamless hats, scarves, socks, gloves, and more.",
    highlights: [
      'In "YX-Q", "YX" represents YONTHIN, and "Q" represents fully formed',
      "Remote Control",
      "Online Centralized Monitoring",
      "Pattern Design System",
      "Efficient production",
      "Cost saving",
      "Product diversity",
      "Stable quality",
      "Energy conservation and environmental protection",
    ],
    application: {
      title: "What can I do with YONTHIN knitting machine?",
      body: "Imagination is infinite, as long as you can imagine, you can knit. Yonthin is widely used in weaving integrated woolen sweaters, seamless hats, scarves, socks, gloves, etc.",
    image: imgKnittingMachineYxQFlatKnittingSeriesExtraApplication.src,
    },
    engineering: {
      title: "Why is it good at knitting?",
      subtitle: knittingEngineeringSubtitle,
      items: [
        { title: "Machine head", description: "Fully electric, small machine head, light weight. Equipped with a rapid rotation machine head system.", image: yxQFlatKnittingEngMachineHead.src },
        { title: "Yarn storage device", description: "Sensor monitoring, anti-winding device, and magnetic tension device reduce yarn resistance during transportation.", image: yxQFlatKnittingEngYarnStorageDevice.src },
        { title: "Motorized yarn feeder", description: "Horizontal free movement with encoder precise feedback control enables specific pattern weaving, reduced head travel, and fast, precise positioning.", image: yxQFlatKnittingEngMotorizedYarnFeeder.src },
        { title: "Control System", description: "LCD touch screen with USB and network transmission, multi-language version, monitoring screen, and easy upgrades.", image: yxQFlatKnittingEngControlSystem.src },
        { title: "Antenna station", description: "Sunken antenna station that stops or slows for large and small knots and automatically recovers speed.", image: yxQFlatKnittingEngAntennaStation.src },
      ],
    },
    productFeatures: [
      "Efficient production with dense needle combination",
      "Cost saving through fully-formed (Knit & Wear) technology",
      "Product diversity (integrated sweaters, hats, socks, gloves)",
      "Stable quality with three-system single-head configuration",
      "Intuitive CNC operating interface for easy use",
      "Energy conservation and environmental protection design",
    ],
    parameters: {
      rowKey: "model",
      columns: [
        { key: "model", label: "MODEL" },
        { key: "stitch", label: "STITCH LENGTH" },
        { key: "needles", label: "NEEDLES / BREADTH" },
      ],
      rows: [
        { model: "YX-Q G12", stitch: "12G", needles: "12-needle / 88-inch" },
        { model: "YX-Q G14", stitch: "14G", needles: "14-needle / 88-inch" },
        { model: "YX-Q G16", stitch: "16G", needles: "16-needle / 88-inch" },
        { model: "YX-Q G18", stitch: "18G", needles: "18-needle / 88-inch" },
      ],
      footerNote: "* Machine speed: segmental adjustment, maximum 1.6m/s with 255 programmable speed segments. Braiding system: single-head and three-system. Shaking table: motor driven, maximum 2 inches.",
    },
    formProductName: "YX-Q Flat Knitting Machine Series",
  },
  {
    slug: "auto-stripper-jersey-knitting",
    breadcrumbCategoryLabel: "Circular Knitting Machine",
    breadcrumbSubcategory: "Auto Stripper Jersey Circular Knitting Machine",
    intro:
      "Auto stripper circular knitting machine that knits 3:1 and 2:1 automatic striped fleece and plain fleece fabrics. A programmable ring of yarn-carrier fingers switches between multiple yarn colors automatically, without manual yarn changes.",
    highlights: [
      "Knits sportswear, underwear, and pajama fabrics with automatic color stripes",
      "Produces uncut velvet, loop velvet, double brushed felt, and poodle cloth",
      "Convertible to single jersey, three-thread fleece, or terry machine",
      "Advanced equipment support",
      "High standard quality control",
      "Multiple optional devices",
    ],
    application: {
      title: "What can I do with YONTHIN circular knitting machine?",
      body: "Imagination is infinite, as long as you can imagine, you can knit. Use Yonthin's auto stripper fabric to make striped pajamas, loungewear, sportswear, and colorful velvet or fleece garments.",
      image: imgKnittingMachineAutoStripperExtraApplication.src,
    },
    engineering: {
      title: "Why is it good at knitting?",
      subtitle: knittingEngineeringSubtitle,
      items: standardEngineeringItems,
    },
    valueItems: valuePillars,
    valueSectionTitle: "Core Machine Advantages",
    productFeatures: [
      "Programmable yarn-carrier ring automatically switches colors for striped and jacquard-look fabrics.",
      "Strong interchangeability — by changing heart parts, the machine converts to single jersey, three-thread fleece, or terry.",
      "All cams and cam boxes are made of imported alloy steel, engraved and abraded by a CNC processing center.",
      "Knits uncut velvet, loop velvet (single or double), double brush felt, poodle cloth, and colorful polyester fabric.",
      "Compatible with cotton, synthetic fiber, blending, silk, and artificial wool yarns.",
      "Compact frame suited for sportswear, underwear, and pajama fabric production lines.",
    ],
    parameters: {
      rowKey: "diameter",
      columns: knittingParamColumns,
      rows: [
        { diameter: "30\"-38\" (YX-HS-C6)", feeders: "48F-60F", gauge: "18G-28G", rpm: "18-25 R.P.M" },
        { diameter: "30\"-38\" (YX-HS-C4)", feeders: "48F-60F", gauge: "18G-28G", rpm: "18-25 R.P.M" },
        { diameter: "30\"-38\" (YX-HD-C6)", feeders: "48F-60F", gauge: "18G-28G", rpm: "18-25 R.P.M" },
        { diameter: "30\"-38\" (YX-HD-C4)", feeders: "48F-60F", gauge: "18G-28G", rpm: "18-25 R.P.M" },
      ],
    },
    equipmentMatrix: {
      standard: standardEquipment,
      optional: ["Lycra Attachment", "Lycra Feeding Units", "Yarn Input Measuring Device", "Central Stitch System"],
    },
    formProductName: "Auto Stripper Jersey Circular Knitting Machine",
  },
  {
    slug: "shearing-circular-knitting",
    breadcrumbCategoryLabel: "Circular Knitting Machine",
    breadcrumbSubcategory: "Shearing Circular Knitting Machine",
    intro:
      "Shearing circular knitting machine with an integrated blade that trims the pile loop during knitting itself. Perfect in shearing function, the machine heart emphasizes not only stability and high efficiency but also a combination of modern and traditional plush-knitting style.",
    highlights: [
      "Built-in shearing blade cuts pile loops during knitting, avoiding a separate finishing step",
      "Produces plush, even-pile velour and towel-style fabrics",
      "Advanced equipment support",
      "High standard quality control",
      "Multiple optional devices",
    ],
    application: {
      title: "What can I do with YONTHIN circular knitting machine?",
      body: "Imagination is infinite, as long as you can imagine, you can knit. Use Yonthin's sheared pile fabric to make soft towels, robes, blankets, and plush sportswear linings.",
      image: imgKnittingMachineShearingExtraApplication.src,
    },
    engineering: {
      title: "Why is it good at knitting?",
      subtitle: knittingEngineeringSubtitle,
      items: standardEngineeringItems,
    },
    valueItems: valuePillars,
    valueSectionTitle: "Core Machine Advantages",
    productFeatures: [
      "Integrated shearing blade trims yarn loops into short, even plush pile as the fabric is knitted.",
      "Cutting the pile in-line reduces material waste compared to a separate finishing shear process.",
      "All cams and cam boxes are made of imported alloy steel, engraved and abraded by a CNC processing center.",
      "Strong interchangeability with easy heart-part replacement for different pile heights.",
      "Compatible with cotton, synthetic fiber, blending, silk, and artificial wool yarns.",
      "Compact frame suited for towels, robes, and sportswear lining production.",
    ],
    parameters: {
      rowKey: "diameter",
      columns: knittingParamColumns,
      rows: [
        { diameter: "9\"-24\" (YX-HS-MN)", feeders: "27F-72F", gauge: "18G-28G", rpm: "18-25 R.P.M" },
        { diameter: "8\"-24\" (YX-HD-MN)", feeders: "8F-48F", gauge: "16G-28G", rpm: "18-25 R.P.M" },
      ],
    },
    equipmentMatrix: {
      standard: standardEquipment,
      optional: ["Lycra Attachment", "Yarn Input Measuring Device", "Central Stitch System"],
    },
    formProductName: "Shearing Circular Knitting Machine",
  },
  {
    slug: "scuba-knitting",
    breadcrumbCategoryLabel: "Circular Knitting Machine",
    breadcrumbSubcategory: "Scuba Knitting Machine",
    intro:
      "This model is exclusively designed for scuba fabric. It uses a newly developed needle, heart, and triangle paired with a customized yarn nozzle for more precise control over yarn weaving.",
    highlights: [
      "Wraps cotton yarn on both faces around a black polyester core",
      "Double-sided spandex coverage for enhanced elasticity and stretchability",
      "Produces smooth, stable, neoprene-look double-knit fabric",
      "Advanced equipment support",
      "High standard quality control",
      "Multiple optional devices",
    ],
    application: {
      title: "What can I do with YONTHIN circular knitting machine?",
      body: "Imagination is infinite, as long as you can imagine, you can knit. Use Yonthin's scuba fabric to make structured dresses, jackets, skirts, and sportswear with a smooth, stable, neoprene-look finish.",
      image: imgKnittingMachineScubaExtraApplication.src,
    },
    engineering: {
      title: "Why is it good at knitting?",
      subtitle: knittingEngineeringSubtitle,
      items: standardEngineeringItems,
    },
    valueItems: valuePillars,
    valueSectionTitle: "Core Machine Advantages",
    productFeatures: [
      "Custom-developed needle, heart, and triangle designed specifically for scuba fabric.",
      "Customized yarn nozzle precisely controls how cotton and polyester yarns weave together.",
      "Perfectly wraps black polyester yarn with cotton yarn on both sides of the fabric.",
      "Double-sided spandex coverage gives the fabric better elasticity and stretch recovery.",
      "All cams and cam boxes are made of imported alloy steel, engraved and abraded by a CNC processing center.",
      "Compatible with cotton, black polyester, and white/black lycra yarns.",
    ],
    parameters: {
      rowKey: "diameter",
      columns: knittingParamColumns,
      rows: [
        { diameter: "30\"-38\" (YX-SB)", feeders: "72F-96F", gauge: "24G", rpm: "18-25 R.P.M" },
      ],
    },
    equipmentMatrix: {
      standard: standardEquipment,
      optional: ["Lycra Attachment", "Yarn Input Measuring Device", "Central Stitch System"],
    },
    formProductName: "Scuba Knitting Machine",
  },
  {
    slug: "small-size-knitting",
    breadcrumbCategoryLabel: "Circular Knitting Machine",
    breadcrumbSubcategory: "High Speed Small Size Single/Double Jersey Knitting Machine",
    intro:
      "High speed small-diameter single/double jersey circular knitting machine built for narrow-tube fabrics such as socks, ribbed cuffs, collars, and gloves, using the same precision cam system and CNC-machined components as YONTHIN's larger circular machines.",
    highlights: [
      "Compact small-diameter frame for narrow-tube knitwear",
      "Produces socks, ribbed cuffs, collars, and gloves",
      "Single and double jersey (cylinder and dial) configurations available",
      "Advanced equipment support",
      "High standard quality control",
    ],
    application: {
      title: "What can I do with YONTHIN circular knitting machine?",
      body: "Imagination is infinite, as long as you can imagine, you can knit. Use Yonthin's small-diameter machine to make socks, ribbed cuffs, collars, and gloves.",
      image: imgKnittingMachineSmallSizeExtraApplication.src,
    },
    engineering: {
      title: "Why is it good at knitting?",
      subtitle: knittingEngineeringSubtitle,
      items: standardEngineeringItems,
    },
    valueItems: valuePillars,
    valueSectionTitle: "Core Machine Advantages",
    productFeatures: [
      "Compact small-diameter frame purpose-built for narrow-tube fabrics.",
      "Same CNC-machined cam and needle system as YONTHIN's larger circular knitting machines.",
      "Single and double jersey (cylinder and dial) configurations available.",
      "Compact footprint suited for high-mix, small-batch production runs alongside larger lines.",
      "Compatible with cotton, synthetic fiber, blending, and lycra yarns.",
    ],
    parameters: {
      rowKey: "diameter",
      columns: knittingParamColumns,
      rows: [
        { diameter: "6\"-12\"", feeders: "12F-24F", gauge: "6G-20G", rpm: "20-40 R.P.M" },
      ],
    },
    equipmentMatrix: {
      standard: standardEquipment,
      optional: ["Lycra Attachment", "Yarn Input Measuring Device"],
    },
    formProductName: "High Speed Small Size Single/Double Jersey Knitting Machine",
  },
];

export const knittingDetailSlugs = knittingDetailContent.map((item) => item.slug);

export const getKnittingDetailContent = (slug: string) =>
  knittingDetailContent.find((item) => item.slug === slug);
