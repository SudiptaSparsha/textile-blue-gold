import type { MachineDetailCard, MachineDetailContent } from "@/data/machineDetailTypes";

export type EmbroideryCard = MachineDetailCard;
export type EmbroideryDetailContent = MachineDetailContent;

const usabilityDefaults: MachineDetailCard[] = [
  {
    title: "Easy To Use",
    description:
      "Whether it's control panel operation, embroidery pattern transmission, or other machine operations, YONTHIN provides great convenience.",
  },
  {
    title: "Easy To Maintain",
    description:
      "Reduce the maintenance requirements by improving the design, and decrease the frequency of repairs by selecting high-quality parts.",
  },
  {
    title: "Easy To Assemble",
    description:
      "The assembly of the body and bracket before leaving the factory saves you a lot of time and trouble.",
  },
];

const standardParameterColumns = [
  { key: "model", label: "MODEL" },
  { key: "needles", label: "NEEDLES" },
  { key: "heads", label: "HEADS" },
  { key: "headSpace", label: "HEAD SPACE" },
  { key: "embArea", label: "EMB. AREA" },
];

export const embroideryDetailContent: EmbroideryDetailContent[] = [
  {
    slug: "yx-g-flat-embroidery",
    breadcrumbCategoryLabel: "Embroidery Machine",
    breadcrumbSubcategory: "Flat embroidery machine",
    intro:
      "YONTHIN high speed flat embroidery machines is widely used in high-end brand embroidery of wedding dresses, children's clothing, woven, knitted, cotton and linen, home textiles, leather, polyester, fiber and other fabrics, with excellent performance.",
    highlights: [
      "Advanced equipment support",
      "Advanced production technology",
      "Good machine quality",
      "Easy and convenient operation",
      "Multiple optional devices",
      "Expansive embroidery area",
      "High working speed",
      "Can customize various models",
    ],
    application: {
      title: "What can I do with YONTHIN embroidery machine?",
      body: "Imagination is infinite, as long as it can fit into the embroidery frame, you can embroider. Using YONTHIN embroidery to make fashion, wedding dresses, children's clothing, home textiles, knitting, leather, etc.",
    },
    usability: usabilityDefaults,
    automationBadges: ["Computer Control System", "Automatic Color Change", "Automatic Trimmer", "Multiple languages"],
    engineering: {
      title: "Why it's So Good at Embroidery?",
      subtitle:
        "Every factor that affects the precision of embroidery has been considered. Electric control, motor, transmission system, assembly process, etc. What you can't see are the details.",
      items: [
        { title: "Bearing Upgrade", description: "Genuine imported bearing | Reduce maintenance | No need for oiling" },
        { title: "Motor Upgrade", description: "Enhanced spindle and X/Y axis motors for superior stability and precision." },
        { title: "Synchronous Belt Wheel Upgrade", description: "Aluminum alloy material with hard oxidation for high strength and lower inertia." },
        { title: "Belt Upgrade", description: "Quieter motion and longer service life through optimized meshing." },
        { title: "Head Upgrade", description: "More silent, durable, and stable at higher speeds." },
        { title: "Assembly Process", description: "Optimized assembly checks ensure better machine alignment, lower vibration, and stable long-term output quality." },
      ],
    },
    valueItems: [
      { title: "High-speed Stability", description: "Maintain stability at a speed of 1500 RPM" },
      { title: "Expansive embroidery area", description: "Can easily handle embroidery of various sizes" },
      { title: "Even Bobbin Thread", description: "Maintain a stable and uniform tension" },
    ],
    productFeatures: [
      "Double cam, max speed: 1500rpm",
      "8 /10/15 inch touch monitor are available(options)",
      "3/4/6/9/12/15 needle/color(options)",
      "Main shaft/X,Y frame with servo motor(options)",
      "Jump stepping motor",
      "Latest Suspending Pantograph Moving System",
      "Upper thread holding system(options)",
      "All-round oil lubrication system",
      "Manual/auto oil system(options)",
      "Jump Motor trimming",
      "High speed color change(options)",
      "Main shaft self-balancing",
    ],
    parameters: {
      rowKey: "model",
      columns: standardParameterColumns,
      rows: [
        { model: "YX-G 924/400(600)/750", needles: "9", heads: "24", headSpace: "400", embArea: "600*750" },
        { model: "YX-G 926/400(600)/850", needles: "9", heads: "26", headSpace: "400", embArea: "600*850" },
        { model: "YX-G 932/300(600)/750", needles: "9", heads: "32", headSpace: "300", embArea: "600*750" },
        { model: "YX-G 1220/500(800)/950", needles: "12", heads: "20", headSpace: "500", embArea: "800*950" },
        { model: "YX-G 1230/350(450)/950", needles: "12", heads: "30", headSpace: "350", embArea: "450*850" },
        { model: "YX-G 1524/450(700)/1000", needles: "15", heads: "24", headSpace: "450", embArea: "700*1000" },
      ],
      footerNote:
        "* We can customize machines of various specifications and models and spray them with any color according to the requirements of our customers.",
    },
    optionalDevicesText:
      "sequin, dual sequins, quad sequins, beads, easy cording, easy chenille/ chain stitch, multi sequin with multi beads.",
    formProductName: "YX-G High Speed Flat Embroidery Machine",
  },
  {
    slug: "yx-gl-chenille-embroidery",
    breadcrumbCategoryLabel: "Embroidery Machine",
    breadcrumbSubcategory: "Chenille embroidery machine",
    intro:
      "YONTHIN high speed chenille/chain stitch embroidery machines is widely used for embroidery on tablecloths, napkins, duvet covers, pillowcases, children's clothing, knitted sweaters, badges, blankets, women's shirts, hats, leather clothing, silk, linen textiles, etc. due to its strong three-dimensional sense, rich layers, and colorful features",
    highlights: [
      "Advanced equipment support",
      "Good machine quality",
      "High working speed",
      "Can customize various models",
      "Expansive embroidery area",
      "Easy and convenient operation",
    ],
    application: {
      title: "What can I do with YONTHIN embroidery machine?",
      body: "Imagination is infinite, as long as it can fit into the embroidery frame, you can embroider. Using YONTHIN embroidery to make tablecloths, napkins, pillowcases, badges, silk, children's clothing, etc.",
    },
    usability: usabilityDefaults,
    automationBadges: ["Computer Control System", "Multi functional combination", "Automatic Trimmer", "Multiple languages"],
    engineering: {
      title: "Why it's So Good at Embroidery?",
      subtitle:
        "Every factor that affects the precision of embroidery has been considered. Electric control, motor, transmission system, assembly process, etc. What you can't see are the details.",
      items: [
        { title: "Synchronous Belt Wheel Upgrade", description: "Aluminum alloy material, hard oxidation treatment, lower motion inertia, high enough strength." },
        { title: "Motor Upgrade", description: "Enhanced spindle and X/Y axis motors for superior stability and precision." },
        { title: "Assembly Process", description: "Optimized assembly checks ensure better machine alignment, lower vibration, and stable long-term output quality." },
        { title: "Belt Upgrade", description: "Quieter motion and longer service life through optimized meshing." },
        { title: "Bearing Upgrade", description: "Genuine imported bearings that require no oiling and reduce maintenance." },
        { title: "Head Upgrade", description: "More silent, durable, and stable at higher speeds." },
      ],
    },
    valueItems: [
      { title: "High-speed Stability", description: "Maintain stability at a speed of 1500 RPM" },
      { title: "Expansive embroidery area", description: "Can easily handle embroidery of various sizes" },
      { title: "Even Bobbin Thread", description: "Maintain a stable and uniform tension" },
    ],
    productFeatures: [
      "New A type chenille head more speedy, stable & quiet",
      "New DS speedy head: more stable, durable & quiet",
      "High speed operation at chenille/chain stitch 1000rpm/flat head 1000rpm has drastically increased productivity",
      "Looper turning by servo motor(H/D axis): more speedy, precise and quiet",
      "Automatic change of 4/5/6/9 color enables versatile multicolor arrangement",
      "Can automatically change towel embroidery trace and chain embroidery trace, and automatically change to flat stitch",
      "Adopt change color box to change color, minimized motor noise for smooth & stable operation",
    ],
    parameters: {
      rowKey: "model",
      columns: standardParameterColumns,
      rows: [
        { model: "YX-GL 920+920/500(600)/850", needles: "9 + 9", heads: "20 + 20", headSpace: "500", embArea: "600*850" },
        { model: "YX-GL 922+922/500(600)/850", needles: "9 + 9", heads: "22 + 22", headSpace: "500", embArea: "600*850" },
        { model: "YX-GL 924 + 624/450(600)/750", needles: "9 + 6", heads: "24 + 24", headSpace: "450", embArea: "600*750" },
        { model: "YX-GL 926+626/450(600)/850", needles: "9 + 6", heads: "26 + 26", headSpace: "450", embArea: "600*850" },
      ],
      footerNote: "* We can make different kind of machine model according to customers' requirements.",
    },
    optionalDevicesText: "Sequin, Dual Sequins, Quad Sequins, Beads, Easy cording, Easy chenille/ chain stitch.",
    formProductName: "YX-GL High Speed Chenille/Chain Stitch Embroidery Machine",
  },
  {
    slug: "yx-gp-tapping-embroidery",
    breadcrumbCategoryLabel: "Embroidery Machine",
    breadcrumbSubcategory: "Speed tapping embroidery machine",
    intro:
      "YONTHIN High Speed Tapping Embroidery Machine is widely used in fashion, wedding dresses, shoe uppers, home textiles, fashion, mesh fabrics and other fields, with rich layering and three-dimensional sense.",
    highlights: [
      "Advanced equipment support",
      "Advanced production technology",
      "High standard quality control and inspection",
      "Easy and convenient operation",
      "Multiple optional devices",
      "Expansive embroidery area",
      "High working speed",
      "Can customize various models and specifications",
    ],
    application: {
      title: "What can I do with YONTHIN embroidery machine?",
      body: "There is no limit to imagination. You can embroider it as long as you can hoop it. Using YONTHIN embroidery to make fashion, wedding dresses, shoe uppers, home textiles, mesh fabrics, etc.",
    },
    usability: [
      {
        title: "Easy To Maintain",
        description:
          "Reduce the maintenance requirements by improving the design, and decrease the frequency of repairs by selecting high-quality parts.",
      },
      {
        title: "Easy To Assemble",
        description:
          "The machine has been fully assembled before leaving the factory, which can save you a lot of time and trouble.",
      },
      {
        title: "Easy To Use",
        description:
          "Whether it's control panel operation, embroidery pattern transmission, or other machine operations, YONTHIN provides great convenience.",
      },
    ],
    engineering: {
      title: "Why it's So Good at Embroidery?",
      subtitle:
        "Every factor that affects the precision of embroidery has been considered. Electric control, motor, transmission system, assembly process, etc. What you can't see are the details.",
      items: [
        { title: "Motor Upgrade", description: "Better spindle, X-axis, and Y-axis motors — more precise, more stable." },
        { title: "Synchronous Belt Wheel Upgrade", description: "Aluminum alloy with hard oxidation for high strength and lower inertia." },
        { title: "Belt Upgrade", description: "Quieter motion and longer service life through optimized meshing." },
        { title: "Bearing Upgrade", description: "Genuine imported bearings that require no oiling and reduce maintenance." },
        { title: "Head Upgrade", description: "More silent, durable, and stable at higher speeds." },
        { title: "Assembly Process", description: "Optimized assembly checks ensure better machine alignment, lower vibration, and stable long-term output quality." },
      ],
    },
    valueItems: [
      { title: "High-speed Stability", description: "Maintain stability at a speed of 1500 RPM" },
      { title: "Expansive embroidery area", description: "Can easily handle embroidery of various sizes" },
      { title: "Even Bobbin Thread", description: "Maintain a stable and uniform tension" },
    ],
    productFeatures: [
      "Double capacity tapping embroidery",
      "Triple micro stepping motor driving system adopt double shafting. Double thread can auto change and the parameters can set separately",
      "New type double cam triple level head system have more reasonable construction and more durable",
      "Heads adopt timing and quantitative mist spray type oiling lubrication system to ensure the parts more durable",
      "Rotary hook adopt timing and quantitative mist spray type oiling lubrication system prevent from oil leaking, more lubrication",
      "Auto thread holding system prevent from offline, cutter more stable",
      "Adopt dynamic pantograph system have lower running resistance, and frame more precise",
    ],
    parameters: {
      rowKey: "model",
      columns: standardParameterColumns,
      rows: [
        { model: "YX-GP 622 + 22/500(700)/850", needles: "6", heads: "22 + 22", headSpace: "500", embArea: "700*850" },
        { model: "YX-GP 624 + 24/500(700)/850", needles: "6", heads: "24 + 24", headSpace: "500", embArea: "700*850" },
        { model: "YX-GP 918 + 18/600(800)/850", needles: "9", heads: "18 + 18", headSpace: "600", embArea: "800*850" },
        { model: "YX-GP 920 + 20/550(700)/750", needles: "9", heads: "20 + 20", headSpace: "550", embArea: "700*750" },
      ],
      footerNote: "* We can make different kind of machine model according to customers' requirements.",
    },
    optionalDevicesText: "Sequin, Dual Sequins, Quad Sequins, Beads, Easy cording, Easy chenille/ chain stitch.",
    formProductName: "YX-GP High Speed Tapping Embroidery Machine",
  },
  {
    slug: "yx-m-cap-embroidery",
    breadcrumbCategoryLabel: "Embroidery Machine",
    breadcrumbSubcategory: "Hat embroidery/garment embroidery",
    intro:
      "YONTHIN fashion custom intelligent special type embroidery machine：Ready-made cloths, trousers, hats, shoes, jackets, bags, cutting pieces can be switched and embroidered at will.",
    highlights: [
      "Advanced equipment support",
      "Advanced production technology",
      "High standard quality control",
      "Easy and convenient operation",
      "Multiple optional devices",
      "Expansive embroidery area",
      "High working speed",
      "Can customize various models",
    ],
    application: {
      title: "What can I do with YONTHIN embroidery machine?",
      body: "Imagination is infinite, as long as it can fit into the embroidery frame, you can embroider. Using YONTHIN embroidery to make ready-made clothes, bags, hats, shoes, socks, protective covers, etc.",
    },
    usability: [
      {
        title: "Easy To Use",
        description:
          "Control panel operation, embroidery pattern transmission, or other machine operations provide great convenience.",
      },
      {
        title: "Easy To Maintain",
        description:
          "Reduced maintenance requirements by improving design; decreased repair frequency by selecting high-quality parts.",
      },
      {
        title: "Easy To Assemble",
        description:
          "Fuselage and stand are pre-assembled before leaving the factory to save time.",
      },
    ],
    extraBadges: [
      "Humanized User Interface",
      "Automatic Color Change",
      "Multiple Transmission Methods",
      "Multi language Operation Version",
    ],
    engineering: {
      title: "Why it's So Good at Embroidery?",
      subtitle:
        "Every factor that affects the precision of embroidery has been considered. Electric control, motor, transmission system, assembly process, etc. What you can't see are the details.",
      items: [
        { title: "Install the cap hoop", description: "Adjusted with professional molds to ensure it is level and has a consistent height." },
        { title: "Needle Height Adjustment", description: "The needle height gauge is used to ensure that all the needles are set at the same height." },
        { title: "Needle Bar Lowest Point", description: "Precision calibration ensures consistent needle bar positioning for stable embroidery quality." },
        { title: "Motor Upgrade", description: "Enhanced spindle and axis motors for superior stability and precision." },
      ],
    },
    valueItems: [
      { title: "Personalized design", description: "Good human-computer interaction design." },
      { title: "Stable 3D Hat Embroidery", description: "Achieves good results on 1-5mm 3D foam without thread breaks." },
      { title: "Consistent Penetration", description: "Maintain consistency at the center seam." },
    ],
    productFeatures: [
      "Ready-made cloths, trousers, hats, shoes, jackets, bags, cutting pieces can be switched and embroidered at will.",
      "Pattern auto rotate with 180 degree after changing cap frame unit.",
      "270 degree wide cap frame unit.",
      "Convenient power failure recovery embroidery function (prevents misalignment mid-way).",
      "Full screen preview design trace capable.",
      "Auto start and color change (maximum 250 times color change supported).",
      "Thread break detection and prevention system.",
      "Upper thread holding system.",
      "Support garment embroidery speed up to 1200rpm, cap embroidery 1200rpm; supports 15 needle color change.",
      "Chinese, English, Spanish, Turkish, Arabic, and multiple other languages well supported.",
    ],
    parameters: {
      rowKey: "model",
      columns: [
        { key: "model", label: "MODEL" },
        { key: "needles", label: "NEEDLES" },
        { key: "heads", label: "HEADS" },
        { key: "embArea", label: "EMB. AREA" },
        { key: "netWeight", label: "N. W (KG)" },
        { key: "meas", label: "MEAS (MM)" },
      ],
      rows: [
        { model: "YX-M1201", needles: "9/12/15", heads: "1", embArea: "300*350", netWeight: "120", meas: "990*760*880" },
        { model: "YX-M1202", needles: "9/12/15", heads: "2", embArea: "400*450", netWeight: "270", meas: "1130*850*1350" },
        { model: "YX-M1206", needles: "9/12/15", heads: "6", embArea: "400*450", netWeight: "1200", meas: "3430*1230*1320" },
      ],
      footerNote:
        "* We can customize machines of various specifications and models and spray them with any color according to the requirements of our customers.",
    },
    optionalDevicesText: "sequin, cording, bead, Hot Cutting.",
    formProductName: "YX-M Multi head cap embroidery machine",
  },
  {
    slug: "yx-m-single-head-cap",
    breadcrumbCategoryLabel: "Embroidery Machine",
    breadcrumbSubcategory: "Hat embroidery/garment embroidery",
    intro:
      "YONTHIN fashion custom intelligent special type embroidery machine: Ready-made clothes, trousers, hats, shoes, jackets, bags, cutting pieces can be switched and embroidered at will. It is reliable in both quality and performance, and at the same time, it is easy to use, place, and move, allowing you to quickly start your embroidery business anywhere.",
    highlights: [
      "Excellent machine quality",
      "Easy and convenient operation",
      "Wide embroidery area",
      "Fast working speed",
      "Various models can be customized",
      "Multiple optional devices",
      "Free training and technical guidance",
    ],
    application: {
      title: "What can I do with YONTHIN embroidery machine?",
      body: "Imagination is infinite, as long as it can fit into the embroidery frame, you can embroider. Using YONTHIN embroidery to make ready-made clothes, bags, hats, shoes, socks, protective covers, etc.",
    },
    usability: [
      {
        title: "Easy To Assemble",
        description:
          "The fuselage and stand will be assembled before leaving the factory, saving you a great deal of time and trouble.",
      },
      {
        title: "Easy To Maintain",
        description:
          "Reduce the maintenance requirements by improving the design, and decrease the frequency of repairs by selecting high-quality parts.",
      },
      {
        title: "Easy To Use",
        description:
          "Whether it is the operation on the control panel or the functions built into the machine, YONTHIN provides great convenience.",
      },
    ],
    extraBadges: ["Standard Packaging", "Accessories & Tool box", "50% Fewer Screws", "Modular Installation"],
    qualitySection: {
      title: "How To Ensure Uniform Assembly Of Each Machine?",
      body: "We use professional fixtures and molds during the assembly process to ensure precise assembly, improve product stability, and ensure consistent quality.",
      items: [
        { title: "Y-Axis Rail Installation", description: "The Y-axis guide rail is adjusted with a professional mold, and the screws are tightened to the same torque to ensure horizontal parallelism." },
        { title: "Head Installation", description: "Professional fixtures ensure precise head alignment for consistent embroidery quality." },
        { title: "Needle Bar Lowest Point", description: "Precision calibration ensures consistent needle bar positioning for stable embroidery quality." },
        { title: "Needle Height Adjustment", description: "The needle height gauge is used to ensure that all the needles are set at the same height." },
      ],
    },
    valueItems: [
      { title: "Personalized design", description: "Good human-computer interaction design." },
      { title: "Stable 3D Hat Embroidery", description: "Achieves good results on 1-5mm 3D foam without thread breaks." },
      { title: "Consistent Penetration", description: "Maintain consistency at the center seam." },
    ],
    productFeatures: [
      "Yonthin fashion custom intelligent special type embroidery machine: Ready-made clothes, trousers, hats, shoes, jackets, bags, cutting pieces can be switched and embroidered at will.",
      "Pattern auto-rotate with 180 degrees after changing the cap frame unit.",
      "270-degree wide cap frame unit.",
      "Convenient power failure recovery embroidery function to prevent embroidery half-way off from causing misalignment.",
      "Full-screen preview design trace capable.",
      "Auto start and color change, maximum 250 times color change supported.",
      "Thread break detection and prevention to prevent thread breaks.",
      "Upper thread holding system.",
      "Support garment embroidery speed up to 1350rpm, cap embroidery 1350rpm, support 15 needle color change.",
      "Chinese, English, Spanish, Turkish, Arabic, and many other kinds of languages well supported.",
    ],
    parameters: {
      rowKey: "model",
      columns: [
        { key: "model", label: "MODEL" },
        { key: "needles", label: "NEEDLES" },
        { key: "heads", label: "HEADS" },
        { key: "embArea", label: "EMB. AREA" },
        { key: "grossWeight", label: "G.W (kg)" },
        { key: "packingSize", label: "PACKING SIZE (mm)" },
      ],
      rows: [
        { model: "YX-M1501", needles: "9/12/15", heads: "1", embArea: "500*350", grossWeight: "150", packingSize: "900*900*950" },
        { model: "YX-M1502", needles: "9/12/15", heads: "2", embArea: "500*400", grossWeight: "306", packingSize: "1400*1150*950" },
        { model: "YX-M1202", needles: "9/12/15", heads: "2", embArea: "400*450", grossWeight: "306", packingSize: "1400*1150*950" },
        { model: "YX-M1204", needles: "9/12/15", heads: "4", embArea: "400*450", grossWeight: "498", packingSize: "2300*1150*1050" },
        { model: "YX-M1206", needles: "9/12/15", heads: "6", embArea: "400*450", grossWeight: "824", packingSize: "3050*1150*1050" },
        { model: "YX-M1208", needles: "9/12/15", heads: "8", embArea: "400*450", grossWeight: "958", packingSize: "3850*1150*1050" },
      ],
      footerNote:
        "* We can customize machines of various specifications and models and spray them with any color according to the requirements of our customers.",
    },
    optionalDevicesText: "Sequin, cording, bead, Hot Cutting.",
    formProductName: "YX-M Single head cap embroidery machine",
  },
  {
    slug: "x-m-two-head-embroidery",
    breadcrumbCategoryLabel: "Embroidery Machine",
    breadcrumbSubcategory: "Hat embroidery/garment embroidery",
    intro:
      "Ready-made cloths, trousers, hats, shoes, jackets, bags, cutting pieces can be switched and embroidered at will. It is reliable in both quality and performance, and at the same time, it is easy to use, place, and move, allowing you to quickly start your embroidery business anywhere.",
    highlights: [
      "Excellent machine quality",
      "Easy and convenient operation",
      "Wide embroidery area",
      "Fast working speed",
      "Various models can be customized",
      "Multiple optional devices",
      "Free training and technical guidance",
    ],
    application: {
      title: "What can I do with YONTHIN embroidery machine?",
      body: "Imagination is infinite, as long as it can fit into the embroidery frame, you can embroider. Using YONTHIN embroidery to make ready-made clothes, bags, hats, shoes, socks, protective covers, etc.",
    },
    usability: [
      {
        title: "Easy To Assemble",
        description:
          "The fuselage and stand will be assembled before leaving the factory, saving you a great deal of time and trouble.",
      },
      {
        title: "Easy To Maintain",
        description:
          "Reduce the maintenance requirements by improving the design, and decrease the frequency of repairs by selecting high-quality parts.",
      },
      {
        title: "Easy To Use",
        description:
          "Whether it is the operation on the control panel or the functions built into the machine, YONTHIN provides great convenience.",
      },
    ],
    extraBadges: ["Standard Packaging", "Accessories & Tool box", "50% Fewer Screws", "Modular Installation"],
    qualitySection: {
      title: "How To Ensure Uniform Assembly Of Each Machine?",
      body: "We use professional fixtures and molds during the assembly process to ensure precise assembly, improve product stability, and ensure consistent quality.",
      items: [
        { title: "Needle Height Adjustment", description: "The needle height gauge is used to ensure that all the needles are set at the same height." },
        { title: "Head Installation", description: "Professional fixtures ensure precise head alignment for consistent embroidery quality." },
        { title: "Needle Bar Lowest Point", description: "Precision calibration ensures consistent needle bar positioning for stable embroidery quality." },
        { title: "Y-Axis Rail Installation", description: "The Y-axis guide rail is adjusted with a professional mold, and the screws are tightened to the same torque to ensure horizontal parallelism." },
      ],
    },
    valueItems: [
      { title: "Personalized design", description: "Good human-computer interaction design." },
      { title: "Stable 3D Hat Embroidery", description: "Achieves good results on 1-5mm 3D foam without thread breaks." },
      { title: "Consistent Penetration", description: "Maintain consistency at the center seam." },
    ],
    productFeatures: [
      "Pattern auto-rotate with 180 degrees after changing cap frame unit.",
      "270-degree wide cap frame unit.",
      "Convenient power failure recovery embroidery function, preventing half-way off misalignment.",
      "Full-screen preview design trace capable.",
      "Auto start and color change (maximum 250 times supported).",
      "Thread break detection and prevention.",
      "Upper thread holding system.",
      "Support garment embroidery speed up to 1350rpm, cap embroidery 1350rpm; supports 15-needle color change.",
      "Multi-language support (Chinese, English, Spanish, Turkish, Arabic, etc.).",
    ],
    parameters: {
      rowKey: "model",
      columns: [
        { key: "model", label: "MODEL" },
        { key: "needles", label: "NEEDLES" },
        { key: "heads", label: "HEADS" },
        { key: "embArea", label: "EMB. AREA" },
        { key: "grossWeight", label: "G.W" },
        { key: "packingSize", label: "PACKING SIZE" },
      ],
      rows: [
        { model: "YX-M1501", needles: "9/12/15", heads: "1", embArea: "500*350", grossWeight: "150", packingSize: "900*900*950" },
        { model: "YX-M1502", needles: "9/12/15", heads: "2", embArea: "500*400", grossWeight: "306", packingSize: "1400*1150*950" },
        { model: "YX-M1202", needles: "9/12/15", heads: "2", embArea: "400*450", grossWeight: "306", packingSize: "1400*1150*950" },
        { model: "YX-M1204", needles: "9/12/15", heads: "4", embArea: "400*450", grossWeight: "498", packingSize: "2300*1150*1050" },
        { model: "YX-M1206", needles: "9/12/15", heads: "6", embArea: "400*450", grossWeight: "824", packingSize: "3050*1150*1050" },
        { model: "YX-M1208", needles: "9/12/15", heads: "8", embArea: "400*450", grossWeight: "958", packingSize: "3850*1150*1050" },
      ],
      footerNote:
        "* We can customize machines of various specifications and models and spray them with any color according to the requirements of our customers. Optional devices: Sequin, cording, bead, Hot Cutting.",
    },
    optionalDevicesText: "Sequin, cording, bead, Hot Cutting.",
    formProductName: "YX-M Two head embroidery machine",
  },
];

export const embroideryDetailSlugs = embroideryDetailContent.map((item) => item.slug);

export const isEmbroideryDetailPage = (slug: string) => embroideryDetailSlugs.includes(slug);

export const getEmbroideryDetailContent = (slug: string) =>
  embroideryDetailContent.find((item) => item.slug === slug);

export const getEmbroideryBreadcrumbs = (slug: string, productName: string, categorySlug: string) => {
  const content = getEmbroideryDetailContent(slug);
  if (!content) return null;

  return [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "Embroidery Machine", path: `/products/${categorySlug}` },
    { label: content.breadcrumbSubcategory },
    { label: productName },
  ];
};
