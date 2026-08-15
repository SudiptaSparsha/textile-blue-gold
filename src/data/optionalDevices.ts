import laserDeviceImg from "@/assets/optional-devices/Laser head.jpg.jpeg";
import laserCuttingDeviceImg from "@/assets/optional-devices/laser head 2.png";
import sequinDeviceImg from "@/assets/optional-devices/Sequin Heads.jpg.jpeg";
import largeSequinDeviceImg from "@/assets/optional-devices/Sequin Heads 2.jpg.jpeg";

export interface OptionalDevice {
  slug: string;
  name: string;
  image: string;
  shortDescription: string;
  overview: string;
  howItWorks: string;
  features: string[];
  specifications: { label: string; value: string }[];
  applications: string[];
}

export const optionalDevices: OptionalDevice[] = [
  {
    slug: "laser-device",
    name: "Laser Device",
    image: laserDeviceImg.src,
    shortDescription: "Real-time laser positioning and outline tracing for pinpoint-accurate embroidery placement.",
    overview:
      "The Laser Device is a positioning and tracing attachment mounted directly on the embroidery head. Instead of guessing where a design will land, the laser projects the outline of the pattern straight onto the fabric before a single stitch is sewn, so the operator can align garments, panels, and appliqué pieces with pinpoint accuracy.",
    howItWorks:
      "Once a design is loaded into the machine's control system, the laser module projects a live, to-scale outline of the embroidery pattern onto the hooped fabric. The operator repositions the frame or fabric until the projected outline matches the desired placement, locks it in, and the machine begins stitching exactly where the laser indicated.",
    features: [
      "Projects a real-time, true-to-scale outline of the design before stitching starts",
      "Eliminates guesswork and trial hoops when centering logos or repeating patterns",
      "Speeds up placement on caps, pockets, sleeves, and pre-cut panels",
      "Reduces misaligned and re-worked pieces, saving fabric and thread",
      "Simple mount that integrates with the existing embroidery head wiring",
    ],
    specifications: [
      { label: "Device Type", value: "Laser positioning / outline tracing module" },
      { label: "Mounting", value: "Direct-mount on embroidery head" },
      { label: "Control", value: "Synced with onboard embroidery control system" },
      { label: "Best Suited For", value: "Precise logo placement, repeat patterns, panel alignment" },
    ],
    applications: [
      "Cap and garment logo centering",
      "Multi-head repeat pattern alignment",
      "Pre-cut panel and pocket placement",
      "High-accuracy sample and prototype runs",
    ],
  },
  {
    slug: "laser-cutting-device",
    name: "Laser Cutting Device",
    image: laserCuttingDeviceImg.src,
    shortDescription: "Integrated laser cutting unit for clean, sealed-edge fabric appliqué directly on the embroidery machine.",
    overview:
      "The Laser Cutting Device adds an on-head laser cutting/engraving module to the embroidery machine, allowing excess appliqué fabric to be trimmed away automatically after stitching instead of by hand with scissors. This is the device used for multi-layer appliqué and 3D-textured embroidery work.",
    howItWorks:
      "A base layer of fabric is embroidered onto the garment, then the laser focuses light energy along the stitched outline, vaporizing the excess material outside it in a single precise pass. Because the laser both cuts and lightly seals synthetic fabric edges as it goes, appliqué pieces come out clean-edged and frayproof without a separate finishing step. Multiple appliqué layers can be built up this way for a raised, dimensional look.",
    features: [
      "Cuts excess appliqué fabric automatically along the embroidered outline",
      "Produces clean, sealed edges that resist fraying on synthetic fabrics",
      "Enables multi-layer, 3D-textured appliqué designs",
      "Removes the need for manual trimming with scissors after stitching",
      "Built-in control panel for adjusting cutting power to the fabric being used",
    ],
    specifications: [
      { label: "Device Type", value: "On-head laser cutting / engraving module" },
      { label: "Process", value: "Focused-beam cutting along the embroidered outline" },
      { label: "Control Panel", value: "Digital power/parameter display and adjustment unit" },
      { label: "Best Suited For", value: "Appliqué, 3D embroidery, emblem and patch trimming" },
    ],
    applications: [
      "Multi-layer 3D appliqué garments",
      "Emblems, badges, and patches",
      "Twill and felt appliqué finishing",
      "Fast, hand-trim-free production runs",
    ],
  },
  {
    slug: "sequin-device",
    name: "Sequin Device",
    image: sequinDeviceImg.src,
    shortDescription: "Stepper-motor driven attachment that feeds and stitches sequins in-line with embroidery, no manual placement needed.",
    overview:
      "The Sequin Device is an electromechanical attachment fitted to the needle #1 position of the embroidery head. It feeds a continuous ribbon of sequins from a mounted wheel down to the needle, letting the machine stitch sequins into a design automatically, in the same run as the surrounding embroidery.",
    howItWorks:
      "A ribbon of pre-strung sequins is loaded onto the device's feed wheel. When the design calls for a sequin, the device advances the ribbon by exactly one sequin and the needle ties it down with a securing stitch before the machine moves on to the next point. The device can be raised or lowered automatically, so the machine switches seamlessly between plain embroidery and sequin work within a single design.",
    features: [
      "Stepper-motor feed for consistent, accurate sequin placement",
      "No compressed-air connection required",
      "Automatic raise/lower switching between embroidery and sequin stitching",
      "Supports standard sequin sizes for logos, borders, and all-over sequin fill",
      "Reduces labor cost versus hand-applied sequin work",
    ],
    specifications: [
      { label: "Device Type", value: "Stepper-motor sequin feed and stitch attachment" },
      { label: "Power Source", value: "Electric stepper motor (no pneumatic/air line needed)" },
      { label: "Operation", value: "Automatic or manual raise/lower selection" },
      { label: "Typical Sequin Range", value: "Standard flat sequins, approx. 3mm – 9mm" },
    ],
    applications: [
      "Fashion garments and eveningwear",
      "Dance, stage, and costume embroidery",
      "Logo and border sequin accents",
      "Home textile and decorative embellishment",
    ],
  },
  {
    slug: "large-sequin-device",
    name: "Large Sequin Device",
    image: largeSequinDeviceImg.src,
    shortDescription: "Heavy-duty sequin attachment built for oversized sequins and bold, high-impact sequin lettering and motifs.",
    overview:
      "The Large Sequin Device is the bigger sibling of the standard sequin attachment, engineered to feed and stitch oversized sequins and sequin strips for bold lettering, brand logos, and statement motifs — the kind of large, reflective sequin patches used on streetwear, team wear, and fashion branding.",
    howItWorks:
      "It works on the same principle as the standard sequin device — feeding sequins from a wheel to the needle and tying each one down with a stitch — but with a reinforced feed mechanism and wider guide path sized for large-format sequins and sequin strip rather than small flat sequins, keeping large pieces correctly seated and aligned as they're stitched down.",
    features: [
      "Handles large-format sequins well beyond standard small-sequin size",
      "Ideal for bold lettering, logos, and statement motifs",
      "Reinforced feed path keeps oversized sequins seated and aligned",
      "Same stepper-motor, no-air-line operation as the standard sequin device",
      "Can run alongside standard sequin heads on multi-head machines for mixed-size designs",
    ],
    specifications: [
      { label: "Device Type", value: "Heavy-duty large-format sequin feed and stitch attachment" },
      { label: "Power Source", value: "Electric stepper motor (no pneumatic/air line needed)" },
      { label: "Typical Sequin Range", value: "Large sequins, roughly 10mm – 25mm" },
      { label: "Best Suited For", value: "Bold logos, lettering, and statement sequin motifs" },
    ],
    applications: [
      "Streetwear and fashion brand logos",
      "Team wear and sports lettering",
      "Statement sequin patches and appliqué",
      "High-visibility promotional and stage garments",
    ],
  },
];

export const getOptionalDevice = (slug: string) => optionalDevices.find((d) => d.slug === slug);
