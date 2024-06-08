import mgps from "../../../public/mgps.jpeg";
import icu from "../../../public/icu-ward-work.jpg";
import modularOT from "../../../public/modular-ot.jpg";
import psa from "../../../public/psa-oxigen.jpeg";
import ncs from "../../../public/Nurse-Call-System.png";
import interior from "../../../public/empty-hallway-background.jpg";
import furniture from "../../../public/hospital-room-interior.jpg";
import { StaticImageData } from "next/image";

export interface Product {
  id: string;
  image: StaticImageData;
  name: string;
  description: string;
  button: string;
  productDetail: productDetailType[];
}

interface productDetailType {
  id: number;
  name: string;
  mainImage: string | StaticImageData;
  thumbnails: (string | StaticImageData)[];
  features: string[];
  information: informationDetail[];
}
interface informationDetail {
  feature: string;
  detail: string;
}

export const products: Product[] = [
  {
    id: "mgps",
    image: mgps,
    name: "Medical Gas Pipeline System",
    description:
      "The Medical Gas Pipeline System is a key element of every hospital. The MGPS provides vital medical gases for patient ventilation and various clinical applications.",
    button: "See all",
    productDetail: [
      {
        id: 1,
        name: "Modular Manifold Header",
        mainImage: mgps,
        thumbnails: [mgps, psa, ncs, modularOT],
        features: [
          "2 cylinder module manifold header",
          "Each Header is interconnected by extension pipe",
          "Configurable in multiple of two to increase capacity as and when required",
          "Each cylinder is connected through High Pressure (HP) Non Return Valve (NRV) to header",
          "Each module is supplied with one end blocker with Copper washer",
          "Gas specific connections to manifold header",
          "Suitable for all variants of Medical Gases",
          "Connection option of HP Flexible hose (IS / ISO 21969 : 2009) or annealed Copper tailpipe",
          "Header mounted on AISI 304 Stainless Steel to avoid corrosion"
        ],
        information: [
          {
            feature: "Manifold header with HP NRV",
            detail: "Brass",
          },
          {
            feature: "Extension Connection ",
            detail: "5/8 BSP",
          },
          {
            feature: "Mounting Bracket",
            detail: "SS 304 angle of 176 × 55 mm with slot for M10 fastener ",
          },
          {
            feature: "End Blocker ",
            detail: "5/8 BSP cap with Copper washer",
          },
          {
            feature: "Copper Washer ",
            detail: "Ø 18.50 × Ø 12.50 × 2.0 mm",
          },
          {
            feature: "Test Pressure",
            detail: "1.5 times of max. working pressure (150 bar)",
          },
        ],
      },
      {
        id: 2,
        name: "Changeover Units",
        mainImage: mgps,
        thumbnails: [mgps, psa, ncs, modularOT],
        features: [
          "PLC - controlled auto change-over",
          "Available in 2 source/3 source and 4 source",
          "Constant uninterrupted supply of gases",
          "High flow output - 2100 lpm @ bar",
          "Stable discharge pressure & flow",
          "Digital visual & audible single",
          "Pressure unit display option - bar, psi & kg/cm²",
          "Optimization of residual gas in cylinders", 
          "HMI Based LCD",
          "High visible 7 (178 mm ) LCD screen",
          "Touch screen operation",
          "Real time alarm updating of status SMS & E-Mail",
          "Audio mute option"
        ],
        information: [
          {
            feature: "Flow rate",
            detail: "2100 Ipm",
          },
          {
            feature: "Inlet Pressure",
            detail: "20-149 bar (290-2161 psi)",
          },
          {
            feature: "Pressure at Primary regulator discharge",
            detail: "10-12 bar (145-174 psi)",
          },
          {
            feature: "Pressure at Secondary regulator discharge",
            detail: "4.2 bar (61 psi)",
          },
          {
            feature: "Inlet connection",
            detail: "1 BSP",
          },
          {
            feature: "Outlet connection",
            detail: "3/4 BSP",
          },
          {
            feature: "Manifold header connection",
            detail: "1/2 BSP",
          },
          {
            feature: "High pres sure regulator relief valve setting",
            detail: "15.5 bar (225 psi)",
          },
          {
            feature: "Line pressure relief valve setting",
            detail: "5.17 bar (75 psi)",
          },
          {
            feature: "Incoming voltage",
            detail: "220V AC",
          },
        ],
      },
      {
        id: 3,
        name: "Changeover Unit",
        mainImage: mgps,
        thumbnails: [mgps, psa, ncs, modularOT],
        features: [
          "Logic-controlled auto change-over",
          "An interface between two sources",
          "One of the source as default setting (Source 1)",
          "Setting of other source as default is possible",
          "Visual & audible signal",
          "Pressure unit display option - bar, psi & kg/cm²",
          "Constant uninterrupted supply", 
        ],
        information: [  
          {
            feature: "Flow rate",
            detail: "3000 Ipm",
          },
          {
            feature: "Inlet Pressure",
            detail: "4 - 4.2 bar (60 - 61 psi)",
          },
          {
            feature: "Outlet Pressure",
            detail: "4 - 4.2 bar (60 - 61 psi)",
          },
          {
            feature: "Inlet connection ",
            detail: "1 BSP",
          },
          {
            feature: "Incoming voltage",
            detail: "220V AC",
          },
          {
            feature: "Working voltage ",
            detail: "24V DC",
          },

        ],
      },
      {
        id: 4,
        name: "Source Changeover Unit",
        mainImage: mgps,
        thumbnails: [mgps, psa, ncs, modularOT],
        features: [
          "Logic-controlled auto change-over",
          "An interface between two sources",
          "One of the source as default setting (Source 1)",
          "Setting of other source as default is possible",
          "Visual & audible signal",
          "Pressure unit display option - bar, psi & kg/cm²",
          "Constant uninterrupted supply", 
        ],
        information: [  
          {
            feature: "Flow rate",
            detail: "3000 Ipm",
          },
          {
            feature: "Inlet Pressure",
            detail: "4 - 4.2 bar (60 - 61 psi)",
          },
          {
            feature: "Outlet Pressure",
            detail: "4 - 4.2 bar (60 - 61 psi)",
          },
          {
            feature: "Inlet connection ",
            detail: "1 BSP",
          },
          {
            feature: "Incoming voltage",
            detail: "220V AC",
          },
          {
            feature: "Working voltage ",
            detail: "24V DC",
          },
        ],
      },
      {
        id: 5,
        name: "Zonal Valve Box / Area Valve Service Unit (AVSU)",
        mainImage: mgps,
        thumbnails: [mgps, psa, ncs, modularOT],
        features: [
          "Fully isolate area in emergency, maintenance, extension etc",
          "Valves housed in secured metallic box",
          "Full bore ball valves are medical compatible and comply with Pressure Equipment Directive 97/23/EC",
          "Flared tube ends for easy insertion of connecting tube",
          "Stub ends covered for dust protection",
          "Acrylic window for clear visibility of in-line pressure reading",
          "Window breakable in case of emergency", 
        ],
        information: [  
          {
            feature: "Conforms to ",
            detail: "3000 Ipm",
          },
          {
            feature: "Flow rate @ 4.2 bar (max.) ",
            detail: "4 - 4.2 bar (60 - 61 psi)",
          },
          {
            feature: "Maximum Pressure",
            detail: "4 - 4.2 bar (60 - 61 psi)",
          },
          {
            feature: "OD of Stub end ",
            detail: "1 BSP",
          },
          {
            feature: "Length of Stub end ",
            detail: "220V AC",
          },
          {
            feature: "Tighten proof",
            detail: "24V DC",
          },
          {
            feature: "Closing / Opening of Valve ",
            detail: "24V DC",
          },
          {
            feature: "Working Temperature",
            detail: "24V DC",
          },
          {
            feature: "Gases",
            detail: "24V DC",
          },
          {
            feature: "Regulatory Status",
            detail: "24V DC",
          },
        ],
      },
    ],
  },
  {
    id: "icuwork",
    image: icu,
    name: "I.C.U, C.C.U, Ward Work",
    description:
      "An intensive care unit (ICU) and a critical care unit (CCU) are both hospital wards that provide intensive care to patients with severe or life-threatening illnesses and injuries.",
    button: "See all",
    productDetail: [
      {
        id: 2,
        name: "Modular Manifold Header",
        mainImage: psa,
        thumbnails: [psa, ncs, modularOT],
        features: [
          "2 cylinder module manifold header",
          "Each Header is interconnected by extension pipe",
          "Configurable in multiple of two to increase capacity as and when required",
          "Each cylinder is connected through High Pressure (HP) Non Return Valve (NRV) to header",
          "Each module is supplied with one end blocker with Copper washer",
          "Ÿ Gas specific connections to manifold header",
          "Suitable for all variants of Medical Gases",
        ],
        information: [
          {
            feature: "Feature 1",
            detail: "Detail 1",
          },
          {
            feature: "Feature 2",
            detail: "Detail 2",
          },
          {
            feature: "Feature 3",
            detail: "Detail 3",
          },
          {
            feature: "Feature 4",
            detail: "Detail 4",
          },
          {
            feature: "Feature 5",
            detail: "Detail 5",
          },
        ],
      },
    ],
  },
  {
    id: "modularOt",
    image: modularOT,
    name: "Modualr Operation Theater",
    description:
      "Modular Operation theatre is a modern concept of operation theatre where all modern technology introduced to provide best possible surgical care to the patient.",
    button: "See all",
    productDetail: [
      {
        id: 2,
        name: "Modular Manifold Header",
        mainImage: psa,
        thumbnails: [psa, ncs, modularOT],
        features: [
          "2 cylinder module manifold header",
          "Each Header is interconnected by extension pipe",
          "Configurable in multiple of two to increase capacity as and when required",
          "Each cylinder is connected through High Pressure (HP) Non Return Valve (NRV) to header",
          "Each module is supplied with one end blocker with Copper washer",
          "Ÿ Gas specific connections to manifold header",
          "Suitable for all variants of Medical Gases",
        ],
        information: [
          {
            feature: "Feature 1",
            detail: "Detail 1",
          },
          {
            feature: "Feature 2",
            detail: "Detail 2",
          },
          {
            feature: "Feature 3",
            detail: "Detail 3",
          },
          {
            feature: "Feature 4",
            detail: "Detail 4",
          },
          {
            feature: "Feature 5",
            detail: "Detail 5",
          },
        ],
      },
    ],
  },
  {
    id: "psaoxygen",
    image: psa,
    name: "PSA Oxygen Generation Plant",
    description:
      "PSA oxygen generation plant is a technology that uses pressurized vessels and zeolite to separate oxygen from other gases in compressed air to produce medical-grade oxygen.",
    button: "See all",
    productDetail: [
      {
        id: 3,
        name: "Modular Manifold Header",
        mainImage: psa,
        thumbnails: [psa, ncs, modularOT],
        features: [
          "2 cylinder module manifold header",
          "Each Header is interconnected by extension pipe",
          "Configurable in multiple of two to increase capacity as and when required",
          "Each cylinder is connected through High Pressure (HP) Non Return Valve (NRV) to header",
          "Each module is supplied with one end blocker with Copper washer",
          "Ÿ Gas specific connections to manifold header",
          "Suitable for all variants of Medical Gases",
        ],
        information: [
          {
            feature: "Feature 1",
            detail: "Detail 1",
          },
          {
            feature: "Feature 2",
            detail: "Detail 2",
          },
          {
            feature: "Feature 3",
            detail: "Detail 3",
          },
          {
            feature: "Feature 4",
            detail: "Detail 4",
          },
          {
            feature: "Feature 5",
            detail: "Detail 5",
          },
        ],
      },
    ],
  },
  {
    id: "nurse-call-system",
    image: ncs,
    name: "Nurse Call System",
    description:
      "A nurse call system allows patients to easily communicate with nurses, ensuring that they receive timely assistance when they need it most.",
    button: "See all",
    productDetail: [
      {
        id: 4,
        name: "Modular Manifold Header",
        mainImage: psa,
        thumbnails: [psa, ncs, modularOT],
        features: [
          "2 cylinder module manifold header",
          "Each Header is interconnected by extension pipe",
          "Configurable in multiple of two to increase capacity as and when required",
          "Each cylinder is connected through High Pressure (HP) Non Return Valve (NRV) to header",
          "Each module is supplied with one end blocker with Copper washer",
          "Ÿ Gas specific connections to manifold header",
          "Suitable for all variants of Medical Gases",
        ],
        information: [
          {
            feature: "Feature 1",
            detail: "Detail 1",
          },
          {
            feature: "Feature 2",
            detail: "Detail 2",
          },
          {
            feature: "Feature 3",
            detail: "Detail 3",
          },
          {
            feature: "Feature 4",
            detail: "Detail 4",
          },
          {
            feature: "Feature 5",
            detail: "Detail 5",
          },
        ],
      },
    ],
  },
  {
    id: "interior",
    image: interior,
    name: "Interior Work",
    description:
      "Innovative hospital interior design solutions that enhance functionality, safety, and aesthetics, creating comfortable and efficient spaces for patients and staff.",
    button: "See all",
    productDetail: [
      {
        id: 5,
        name: "Modular Manifold Header",
        mainImage: psa,
        thumbnails: [psa, ncs, modularOT],
        features: [
          "2 cylinder module manifold header",
          "Each Header is interconnected by extension pipe",
          "Configurable in multiple of two to increase capacity as and when required",
          "Each cylinder is connected through High Pressure (HP) Non Return Valve (NRV) to header",
          "Each module is supplied with one end blocker with Copper washer",
          "Ÿ Gas specific connections to manifold header",
          "Suitable for all variants of Medical Gases",
        ],
        information: [
          {
            feature: "Feature 1",
            detail: "Detail 1",
          },
          {
            feature: "Feature 2",
            detail: "Detail 2",
          },
          {
            feature: "Feature 3",
            detail: "Detail 3",
          },
          {
            feature: "Feature 4",
            detail: "Detail 4",
          },
          {
            feature: "Feature 5",
            detail: "Detail 5",
          },
        ],
      },
    ],
  },
  {
    id: "furniture",
    image: furniture,
    name: "Hospital Furniture",
    description:
      "High-quality, ergonomic hospital furniture designed for durability and comfort, enhancing patient care and creating efficient workspaces for healthcare professionals.",
    button: "See all",
    productDetail: [
      {
        id: 6,
        name: "Modular Manifold Header",
        mainImage: psa,
        thumbnails: [psa, ncs, modularOT],
        features: [
          "2 cylinder module manifold header",
          "Each Header is interconnected by extension pipe",
          "Configurable in multiple of two to increase capacity as and when required",
          "Each cylinder is connected through High Pressure (HP) Non Return Valve (NRV) to header",
          "Each module is supplied with one end blocker with Copper washer",
          "Ÿ Gas specific connections to manifold header",
          "Suitable for all variants of Medical Gases",
        ],
        information: [
          {
            feature: "Feature 1",
            detail: "Detail 1",
          },
          {
            feature: "Feature 2",
            detail: "Detail 2",
          },
          {
            feature: "Feature 3",
            detail: "Detail 3",
          },
          {
            feature: "Feature 4",
            detail: "Detail 4",
          },
          {
            feature: "Feature 5",
            detail: "Detail 5",
          },
        ],
      },
    ],
  },
];
