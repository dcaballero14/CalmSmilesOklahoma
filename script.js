// Master clinic list for Calm Smiles Oklahoma

const clinics = [
  // 1–16: SoonerCare / PPO / community / school clinics

  {
    id: 1,
    name: "Dental Depot – Tulsa (Multiple Locations)",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "Phone not provided",
    website: "https://dentaldepot.net",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: true,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: [
      "SoonerCare",
      "Medicaid",
      "Delta Dental",
      "MetLife",
      "Aetna",
      "Humana",
      "Cigna",
      "Tricare",
      "UnitedHealthcare"
    ],
    costOptions: [],
    populations: ["Adults", "Teens", "Children"],
    summary:
      "Multi-location practice offering general and family dentistry. Accepts SoonerCare and major PPOs.",
    notes:
      "Good option for families needing SoonerCare and multiple Tulsa locations."
  },

  {
    id: 2,
    name: "Sooner Dental Care",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "(918) 742-1480",
    website: "https://soonerdentalcare.com",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: false,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: ["SoonerCare", "Medicaid", "All major insurance providers"],
    costOptions: [],
    populations: ["Adults", "Teens", "Children"],
    summary:
      "General dental office accepting SoonerCare and most major insurance plans.",
    notes:
      "Encourages patients to call to verify insurance benefits."
  },

  {
    id: 3,
    name: "Shortline Dental (Multiple Tulsa Offices)",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "Phone not provided",
    website: "https://shortlinedental.com",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: true,
      sedation: false,
      lowCost: true,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: ["SoonerCare", "Medicaid", "Most PPO plans"],
    costOptions: ["Competitive pricing"],
    populations: ["Adults", "Teens", "Children"],
    summary:
      "Multi-office practice accepting Medicaid and SoonerCare, which is uncommon in Tulsa.",
    notes:
      "Good for families needing Medicaid/SoonerCare acceptance."
  },

  {
    id: 4,
    name: "South Tulsa Dental",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "(918) 628-0834",
    website: "https://southtulsadental.com",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: false,
      sedation: false,
      lowCost: true,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: ["SoonerCare", "Most major insurance plans"],
    costOptions: ["Flexible payment options"],
    populations: ["Adults", "Teens"],
    summary:
      "Accepts SoonerCare and flexible payment arrangements.",
    notes:
      "Good if insurance confusion or cost adds to your anxiety."
  },

  {
    id: 5,
    name: "Kids Dental VisionCare",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "Phone not provided",
    website: "https://kidsdentalvisioncare.com",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: true,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: [
      "Children’s Dental Medicaid",
      "SoonerCare",
      "SoonerSelect",
      "Most insurances"
    ],
    costOptions: [],
    populations: ["Infants", "Children", "Teens"],
    summary:
      "Pediatric dental office accepting Children’s Medicaid, SoonerCare, and private insurance.",
    notes:
      "Strong pediatric option for young patients with anxiety."
  },

  {
    id: 6,
    name: "Tulsa Kids Dental / Kids Dental Care & Orthodontics",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "(918) 895-8090",
    website: "https://tulsakidsdental.com",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: true,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: ["SoonerCare", "Children’s Medicaid", "Most insurances"],
    costOptions: [],
    populations: ["Children", "Teens"],
    summary:
      "Pediatric & ortho practice explicitly stating SoonerCare acceptance for kids.",
    notes:
      "Great choice if your child is covered under SoonerCare."
  },

  {
    id: 7,
    name: "Community Health Connection – Dental",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "(918) 710-4480",
    website: "https://communityhealthconnection.org",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: true,
      sedation: false,
      lowCost: true,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: ["SoonerCare", "Medicaid", "Aetna", "Delta Dental"],
    costOptions: ["Sliding fee scale for uninsured"],
    populations: ["Adults", "Teens", "Children"],
    summary:
      "FQHC dental service accepting Medicaid/SoonerCare and offering sliding-scale fees.",
    notes:
      "Major access point for low-income or uninsured families."
  },

  {
    id: 8,
    name: "Tulsa Dental Center",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "(918) 446-6100",
    website: "https://tulsadentalcenter.com",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: true,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: [
      "SoonerCare (children only)",
      "Most insurance carriers"
    ],
    costOptions: [],
    populations: ["Adults", "Children"],
    summary:
      "Family office accepting most insurance and SoonerCare for children.",
    notes:
      "If you have kids on SoonerCare and adults on PPOs, this clinic can see both."
  },

  {
    id: 9,
    name: "Affordable Dentures & Implants – Tulsa",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "Phone not provided",
    website: "https://www.affordabledentures.com",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: false,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: [
      "SoonerCare",
      "Medicaid",
      "United Concordia",
      "Liberty",
      "Delta Dental",
      "MetLife",
      "Cigna",
      "Ameritas",
      "Aetna",
      "HealthChoice",
      "Guardian",
      "UnitedHealthcare PPO",
      "UnitedHealthcare Medicare Advantage",
      "BCBS OK",
      "Humana"
    ],
    costOptions: [],
    populations: ["Adults"],
    summary:
      "Denture and implant-focused office with one of the widest insurance networks in Tulsa.",
    notes:
      "Best for adults needing dentures, extractions, or implants."
  },

  {
    id: 10,
    name: "South Tulsa Smiles",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "(918) 338-6187",
    website: "https://southtulsasmiles.com",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: false,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: [
      "Aetna",
      "Ameritas",
      "BCBS",
      "Cigna",
      "Delta Dental",
      "Guardian",
      "HealthChoice",
      "Humana",
      "MetLife",
      "Principal",
      "SunLife",
      "UnitedHealthcare"
    ],
    costOptions: ["In-house membership plan"],
    populations: ["Adults", "Teens"],
    summary:
      "Family dental office in-network with many PPOs and offering a membership plan for uninsured patients.",
    notes:
      "Good for cost-conscious patients wanting predictable pricing."
  },

  {
    id: 11,
    name: "Glisten Dental Care of Tulsa",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "(918) 528-7569",
    website: "https://glistendental.com",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: false,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: [
      "Delta Dental",
      "BCBS",
      "MetLife",
      "Guardian",
      "HealthChoice",
      "Assurant",
      "Cigna",
      "Aetna",
      "GEHA"
    ],
    costOptions: [],
    populations: ["Adults", "Teens"],
    summary:
      "General Tulsa practice in-network with major PPOs and files out-of-network claims.",
    notes:
      "Helpful for patients who want maximum use of PPO benefits."
  },

  {
    id: 12,
    name: "Nellis Family Dentistry",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "(918) 518-6305",
    website: "https://nellisfamilydentistry.com",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: false,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: [
      "Aetna PPO",
      "BCBS",
      "Delta Dental PPO",
      "Delta Dental Premier",
      "Cigna",
      "Guardian",
      "GEHA",
      "HealthChoice",
      "MetLife",
      "United Concordia",
      "UnitedHealthcare"
    ],
    costOptions: [],
    populations: ["Adults", "Teens", "Children"],
    summary:
      "Family dental practice with extensive PPO insurance participation.",
    notes:
      "Call ahead for a detailed breakdown of your specific plan."
  },

  {
    id: 13,
    name: "South Tulsa Hills Dental Care",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "(918) 723-7506",
    website: "https://tulsahillsdentalcare.com",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: false,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: ["Most major dental PPO plans"],
    costOptions: [],
    populations: ["Adults", "Teens"],
    summary:
      "General practice accepting most PPO-style insurance plans.",
    notes:
      "Good for patients who already have standard PPO coverage."
  },

  {
    id: 14,
    name: "Care Family Dentistry – Bixby",
    city: "Bixby",
    region: "Tulsa Metro",
    phone: "(918) 299-7750",
    website: "https://carefamilydentistry.com",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: true,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: ["BCBS", "Delta Dental", "Guardian", "Other PPO plans"],
    costOptions: [],
    populations: ["Adults", "Children"],
    summary:
      "Family practice working with major PPO carriers including BCBS, Delta, and Guardian.",
    notes:
      "Good option if you're in the Bixby area and need pediatric + family care."
  },

  {
    id: 15,
    name: "OU College of Dentistry – Comprehensive Care Clinic (Tulsa)",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "Phone not provided",
    website: "https://dentistry.ouhsc.edu",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: false,
      sedation: false,
      lowCost: true,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: ["Most common dental insurances (call to confirm)"],
    costOptions: ["Reduced clinic fees"],
    populations: ["Adults", "Teens"],
    summary:
      "OU dental student clinic offering comprehensive care at reduced fees.",
    notes:
      "Longer appointment times may help if anxiety requires slower pacing."
  },

  {
    id: 16,
    name: "Progressive Dental Care of Tulsa",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "(918) 205-9679",
    website: "https://www.dentalcareoftulsa.com/",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: false,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: ["Most dental PPO plans"],
    costOptions: ["Wellness Plan for uninsured"],
    populations: ["Adults", "Teens"],
    summary:
      "General office accepting most insurance plans and offering a wellness plan for uninsured patients.",
    notes:
      "Membership plans can help reduce financial anxiety for uninsured patients."
  },

  // 17–33: detailed Tulsa dentist list (with websites & phones added)

  {
    id: 17,
    name: "Aqua Dental Tulsa",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "(918) 455-7700",
    website: "https://www.aquadentalok.com/",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: true,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: ["Unknown – call to verify coverage"],
    costOptions: [],
    populations: ["Children", "Teens"],
    summary:
      "Pediatric-focused dental office located near 10507 E 91st St in Tulsa.",
    notes:
      "Good starting option if you need pediatric care in South Tulsa; call to confirm insurance coverage and anxiety accommodations."
  },

  {
    id: 18,
    name: "Restorative Dentistry of Tulsa",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "(918) 492-7263",
    website: "https://www.restorativedentistryoftulsa.com/",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: false,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: ["Unknown – call to verify coverage"],
    costOptions: [],
    populations: ["Adults"],
    summary:
      "General and restorative dental office in South Tulsa.",
    notes:
      "Focuses on restorative work; best for adults needing crowns, fillings, or similar treatment. Call to confirm insurance and anxiety-related options."
  },

  {
    id: 19,
    name: "Tulsa Dental Group, Inc.",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "(918) 496-1051",
    website: "https://www.tulsadentalgroup.com/",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: false,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: ["Unknown – call to verify coverage"],
    costOptions: [],
    populations: ["Adults", "Teens"],
    summary:
      "General dental practice located on S Lewis Ave in Tulsa.",
    notes:
      "May be convenient if you live or work near midtown South Lewis. Call for details on accepted plans."
  },

  {
    id: 20,
    name: "Smiles of Tulsa",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "(918) 481-4910",
    website: "https://smilesoftulsa.com/",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: false,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: ["Unknown – call to verify coverage"],
    costOptions: [],
    populations: ["Adults", "Teens"],
    summary:
      "General practice located on S Yale Ave in Tulsa.",
    notes:
      "Call to ask whether they work with anxious patients and which insurance plans they accept."
  },

  {
    id: 21,
    name: "Smile Stop Dentures & Implants Tulsa",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "(918) 331-2221",
    website: "https://www.smilestopdental.com/",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: false,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: ["Unknown – call to verify coverage"],
    costOptions: [],
    populations: ["Adults"],
    summary:
      "Denture and implant-focused office located on W Skelly Dr in Tulsa.",
    notes:
      "Best suited for adults needing extractions, dentures, or implants rather than routine cleanings. Languages reported include English, Spanish, and Vietnamese."
  },

  {
    id: 22,
    name: "Lewis Park Dental",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "(918) 742-1987",
    website: "https://lewisparkdental.com/",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: false,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: ["Unknown – call to verify coverage"],
    costOptions: [],
    populations: ["Adults", "Teens"],
    summary:
      "General dental office on S Lewis Ave in Tulsa.",
    notes:
      "A midtown option; call for details about insurance networks and any anxiety-friendly policies."
  },

  {
    id: 23,
    name: "Healthy Smiles Family Dentistry",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "(918) 749-0303",
    website: "https://thehealthysmiles.com",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: true,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: ["Unknown – call to verify coverage"],
    costOptions: [],
    populations: ["Adults", "Children", "Teens"],
    summary:
      "Family dental office on E 43rd Ct in Tulsa that helps patients verify dental and medical coverage.",
    notes:
      "Good if you’re anxious about understanding your insurance. They emphasize checking benefits and helping patients use coverage."
  },

  {
    id: 24,
    name: "Pediatric Dental Group",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "(888) 336-8520",
    website:
      "https://kidsdentalvisioncare.com/oklahoma/pediatric-dental-care-ok/tulsa/utica-ave/",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: true,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: ["Unknown – call to verify coverage"],
    costOptions: [],
    populations: ["Infants", "Children", "Teens"],
    summary:
      "Pediatric dental group located on S Utica Ave in Tulsa.",
    notes:
      "Designed for children; call to confirm insurance acceptance and any special support for anxious or special-needs kids."
  },

  {
    id: 25,
    name: "Henrich Dental",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "(918) 262-4731",
    website: "https://www.henrichdental.com/",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: false,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: ["Unknown – call to verify coverage"],
    costOptions: ["Membership plan", "Third-party financing"],
    populations: ["Adults", "Teens"],
    summary:
      "Cosmetic and family practice in South Tulsa known for membership plans and flexible financing.",
    notes:
      "If cost is a big part of your anxiety, membership and financing options may help. Call for specific insurance details."
  },

  {
    id: 26,
    name: "Utica Dental",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "(918) 673-2601",
    website:
      "https://uticadental.com/?utm_source=google.com&utm_medium=business+profile&utm_campaign=",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: false,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: ["Unknown – call to verify coverage"],
    costOptions: [],
    populations: ["Adults", "Teens"],
    summary:
      "Family and cosmetic dental office on S Utica Ave.",
    notes:
      "Languages available include English and Spanish. They work with dental benefits and help patients understand coverage."
  },

  {
    id: 27,
    name: "Midtown Smiles",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "(918) 749-1639",
    website: "https://midtownsmilestulsa.com/",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: false,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: ["Unknown – call to verify coverage"],
    costOptions: [],
    populations: ["Adults", "Teens"],
    summary:
      "General and cosmetic dental office on E 41st St in midtown Tulsa.",
    notes:
      "Some providers here speak English and Spanish. Call ahead to ask about insurance and anxiety-friendly scheduling."
  },

  {
    id: 28,
    name: "Levinson Sullivan Dentistry PLLC",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "(918) 496-1358",
    website: "https://www.levinsonsullivan.com/",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: false,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: ["Unknown – call to verify coverage"],
    costOptions: [],
    populations: ["Adults", "Teens"],
    summary:
      "General dentistry practice located on E 71st St in Tulsa.",
    notes:
      "Good choice for patients in the 71st St corridor; call for plan details and any support for anxious patients."
  },

  {
    id: 29,
    name: "Mint Dental",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "(918) 346-6016",
    website: "https://www.mintdentaltulsa.com/",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: false,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: ["Unknown – call to verify coverage"],
    costOptions: [],
    populations: ["Adults", "Teens"],
    summary:
      "General dental office on S Peoria Ave in Tulsa.",
    notes:
      "Languages reported include English and Spanish. Located near Brookside; call to confirm coverage and anxiety care options."
  },

  {
    id: 30,
    name: "Wagner Family & Cosmetic Dentistry",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "(918) 622-3915",
    website: "https://www.scottwagnerdds.com/",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: false,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: ["Unknown – call to verify coverage"],
    costOptions: [],
    populations: ["Adults", "Teens"],
    summary:
      "Family and cosmetic dentistry practice near E 62nd St in Tulsa.",
    notes:
      "Call for information about insurance networks and whether they have extra time or options for anxious patients."
  },

  {
    id: 31,
    name: "Dentistry For You",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "(918) 245-0224",
    website:
      "https://dentistryforyousandsprings.com/tulsa-dentist-near-me-serving-tulsa-ok-dentistry-for-you/",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: false,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: ["Unknown – call to verify coverage"],
    costOptions: [],
    populations: ["Adults", "Teens"],
    summary:
      "General dental office on S Yale Ave in Tulsa.",
    notes:
      "Located near 61st & Yale corridor; call for details about insurance and whether they accommodate high dental anxiety."
  },

  {
    id: 32,
    name: "Downtown Family Dentistry",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "Phone not provided",
    website: "#",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: false,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: ["Unknown – call to verify coverage"],
    costOptions: [],
    populations: ["Adults", "Teens"],
    summary:
      "Family dental practice serving the downtown and midtown Tulsa area.",
    notes:
      "Convenient if you live or work near central Tulsa; website not listed, call to verify coverage and any anxiety-friendly scheduling."
  },

  {
    id: 33,
    name: "Children’s Dental Health Center",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "(918) 249-0249",
    website: "https://cdhctulsa.com/",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: true,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: ["Unknown – call to verify coverage"],
    costOptions: [],
    populations: ["Infants", "Children", "Teens"],
    summary:
      "Pediatric practice on E 62nd St in Tulsa focused on children’s dental health.",
    notes:
      "Some providers speak Spanish. A good option if your child is anxious and needs a pediatric-specific environment; call about insurance."
  },

  // 34–48: remaining clinics from insurance/LocalMed list (with websites & phones added)

  {
    id: 34,
    name: "Eddie Smith Family Dentistry",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "(918) 664-8156",
    website: "https://www.eddiesmithdds.com/",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: false,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: ["Most major dental insurance companies"],
    costOptions: [],
    populations: ["Adults", "Teens", "Children"],
    summary:
      "Family dental office on S Memorial Dr that participates with most major dental insurance companies.",
    notes:
      "They highlight helping patients maximize insurance benefits; call with your plan for details."
  },

  {
    id: 35,
    name: "Galleria of Smiles",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "(918) 496-8010",
    website: "https://galleriaofsmiles.com/",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: false,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: ["Insurance accepted – call to verify specific plans"],
    costOptions: [],
    populations: ["Adults", "Teens"],
    summary:
      "General and cosmetic practice on E 71st St listed as accepting dental insurance.",
    notes:
      "Call to confirm whether your specific insurance is in-network."
  },

  {
    id: 36,
    name: "Carletti Dentistry and Associates",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "(918) 299-5399",
    website: "https://www.carlettidds.com/",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: false,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: ["Insurance accepted – call to verify specific plans"],
    costOptions: [],
    populations: ["Adults", "Teens", "Children"],
    summary:
      "Family and cosmetic dental practice on E 101st St listed as accepting insurance.",
    notes:
      "Call to confirm your plan and ask about anxiety-friendly scheduling if needed."
  },

  {
    id: 37,
    name: "Atlanta Place Dentistry",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "(918) 743-7444",
    website: "https://www.yourtulsadentist.com/",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: false,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: ["Insurance accepted – call to verify specific plans"],
    costOptions: [],
    populations: ["Adults", "Teens"],
    summary:
      "Dental office on S Atlanta Pl with online listings noting insurance accepted.",
    notes:
      "Located near midtown/Utica Square area; call for in-network details."
  },

  {
    id: 38,
    name: "Tulsa Sculpted Smiles",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "(918) 742-2096",
    website: "https://www.tulsasculptedsmiles.com/",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: false,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: ["Insurance accepted – call to verify specific plans"],
    costOptions: [],
    populations: ["Adults", "Teens"],
    summary:
      "Cosmetic and general dentistry practice on S Harvard Ave.",
    notes:
      "Call to check if your insurance plan is accepted and whether they offer extra support for anxious patients."
  },

  {
    id: 39,
    name: "Tulsa Children’s Dentistry",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "(918) 250-5030",
    website: "https://www.tulsachildrensdentistry.com/",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: true,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: ["Insurance accepted – call to verify specific plans"],
    costOptions: [],
    populations: ["Infants", "Children", "Teens"],
    summary:
      "Pediatric dental office on E 79th St listed as accepting insurance.",
    notes:
      "Good option for kids; call to confirm your insurance and ask about anxiety or sensory accommodations."
  },

  {
    id: 40,
    name: "Magnolia Family Dental Care",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "(918) 492-3771",
    website:
      "https://magnoliadentaltulsa.com/?gad_source=1&gad_campaignid=23290074121&gbraid=0AAAAAC5p6cX99E8aBAXpJP94242CBPdxl&gclid=CjwKCAiAxc_JBhA2EiwAFVs7XDBkmVwx1e2X-ygzLbRC-V_6r1oDKgOu1H024PxMJd6VXNqldz027hoCcagQAvD_BwE",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: false,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: ["Insurance accepted – call to verify specific plans"],
    costOptions: [],
    populations: ["Adults", "Teens", "Children"],
    summary:
      "Family dental office on S 66th East Ave listed with insurance accepted.",
    notes:
      "Call the office to get a breakdown of your benefits and confirm in-network status."
  },

  {
    id: 41,
    name: "Skyview Family Dental",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "(918) 492-3003",
    website: "https://www.skyviewfamilydental.com/",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: false,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: ["Insurance accepted – call to verify specific plans"],
    costOptions: [],
    populations: ["Adults", "Teens", "Children"],
    summary:
      "Family dental practice on S Yale Ave with online listings noting insurance accepted.",
    notes:
      "Convenient for patients near the 51st & Yale area; call to confirm coverage."
  },

  {
    id: 42,
    name: "Southard Family Dental – Tulsa",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "Phone not provided",
    website: "#",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: false,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: ["In-network insurances (see office for details)"],
    costOptions: [],
    populations: ["Adults", "Teens", "Children"],
    summary:
      "Family dental office on S Memorial Dr with directory listings showing in-network insurances.",
    notes:
      "Website not listed; call to verify which specific PPO plans they’re in-network with."
  },

  {
    id: 43,
    name: "Southern Pointe Dental & Implants",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "(918) 492-8577",
    website: "https://www.southernpointedental.com/",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: false,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: ["Most dental insurance plans"],
    costOptions: ["In-house membership plan", "Third-party financing"],
    populations: ["Adults", "Teens"],
    summary:
      "Dental and implant practice on E 91st St that accepts most dental insurance plans and offers membership and financing.",
    notes:
      "Good if you need larger treatment and want membership or financing options to help with cost-related anxiety."
  },

  {
    id: 44,
    name: "Crossroads Dental & Implants",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "(918) 665-2676",
    website: "https://www.crossroadsdentalandimplants.com/",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: false,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: ["Most dental PPO plans"],
    costOptions: ["In-office membership plan"],
    populations: ["Adults", "Teens"],
    summary:
      "Dental and implant office on E 31st St promoting an in-office membership plan for patients without insurance.",
    notes:
      "Likely works with common PPO plans; membership plan helps if you’re uninsured."
  },

  {
    id: 45,
    name: "Tulsa Time Dental Design",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "(918) 834-2330",
    website: "https://www.tulsatimedentaldesign.com/",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: false,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: ["Insurance accepted – call to verify specific plans"],
    costOptions: [],
    populations: ["Adults", "Teens"],
    summary:
      "Dental office with a detailed explanation of how dental insurance works at their practice.",
    notes:
      "Emphasizes using your insurance for preventive care; good if you’re anxious about understanding coverage."
  },

  {
    id: 46,
    name: "O’Brien Dental Wellness Center",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "(918) 303-7975",
    website: "https://www.biodoc.tv/",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: false,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: ["Dental benefits accepted – call to verify networks"],
    costOptions: ["Flexible payment options"],
    populations: ["Adults", "Teens"],
    summary:
      "Dental wellness center that works with dental benefits and offers other payment options.",
    notes:
      "If you’re anxious about finances, ask them to walk you through estimated costs and payment choices."
  },

  {
    id: 47,
    name: "Contemporary Dental Arts / Tulsa Family Dental",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "(918) 393-4570",
    website: "https://www.tulsafamilydental.com/",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: false,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: ["Insurance accepted – call to verify networks"],
    costOptions: ["Flexible financing options"],
    populations: ["Adults", "Teens"],
    summary:
      "Dental office explaining that they provide flexible financing and insurance options so cost isn’t a barrier.",
    notes:
      "Good to ask them about payment plans and how they handle anxious or long-avoiding patients."
  },

  {
    id: 48,
    name: "Tulsa City Dental / The Art of Modern Dentistry",
    city: "Tulsa",
    region: "Tulsa Metro",
    phone: "(918) 622-3353",
    website:
      "https://www.tulsacitydental.com/?gad_source=1&gad_campaignid=23010281729&gbraid=0AAAAA_ALS2M-wgZpZZSQU9qqYfg-EbpgX&gclid=CjwKCAiAxc_JBhA2EiwAFVs7XLrnGTh4sGQyQYOMj3RCRbxSa28eMmnDsY2J8-QoN9YczNpoHy5TjBoCR0wQAvD_BwE",
    anxietyFeatures: {
      anxietyFocused: false,
      pediatric: false,
      sedation: false,
      lowCost: false,
      traumaInformed: false,
      sensoryFriendly: false
    },
    insuranceAccepted: ["Most dental insurance plans"],
    costOptions: ["In-house membership plan"],
    populations: ["Adults", "Teens"],
    summary:
      "Dental office that promotes an in-house membership plan and also works with traditional dental insurance.",
    notes:
      "Membership plan may help if you’re uninsured; call to check if they’re a good fit for anxious patients."
  }
];

// ---- DOM references ----

const resultsGrid = document.getElementById("resultsGrid");
const resultsCount = document.getElementById("resultsCount");
const searchInput = document.getElementById("searchInput");
const browseAllBtn = document.getElementById("browseAllBtn");
const regionSelect = document.getElementById("regionSelect");
const insuranceCheckboxes = document.querySelectorAll(".insurance-checkbox");
const featureCheckboxes = document.querySelectorAll(".feature-checkbox");
const filtersForm = document.getElementById("filtersForm");
const resetFiltersBtn = document.getElementById("resetFiltersBtn");
const yearSpan = document.getElementById("yearSpan");

// ---- Filter state helper ----

function getActiveFilters() {
  const searchText = searchInput.value.trim().toLowerCase();
  const region = regionSelect.value;

  const selectedInsurances = Array.from(insuranceCheckboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  const selectedFeatures = Array.from(featureCheckboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  return { searchText, region, selectedInsurances, selectedFeatures };
}

// ---- Filtering logic ----

function filterClinics() {
  const { searchText, region, selectedInsurances, selectedFeatures } =
    getActiveFilters();

  const filtered = clinics.filter(clinic => {
    // Text search
    if (searchText) {
      const combined =
        (clinic.name + " " + clinic.city + " " + clinic.region).toLowerCase();
      if (!combined.includes(searchText)) return false;
    }

    // Region
    if (region && clinic.region !== region) return false;

    // Insurance filter: must match ALL selected insurance chips
    if (selectedInsurances.length > 0) {
      const acceptsAll = selectedInsurances.every(ins =>
        clinic.insuranceAccepted.some(acc =>
          acc.toLowerCase().includes(ins.toLowerCase())
        )
      );
      if (!acceptsAll) return false;
    }

    // Comfort features: must match all selected
    if (selectedFeatures.length > 0) {
      const matches = selectedFeatures.every(key => clinic.anxietyFeatures[key]);
      if (!matches) return false;
    }

    return true;
  });

  renderClinics(filtered);
}

// ---- Badge helper ----

function makeBadge(text, variant) {
  const span = document.createElement("span");
  span.textContent = text;
  span.classList.add("badge");
  if (variant === "primary") span.classList.add("badge-primary");
  if (variant === "secondary") span.classList.add("badge-secondary");
  if (variant === "neutral") span.classList.add("badge-neutral");
  return span;
}

// ---- Rendering ----

function renderClinics(list) {
  resultsGrid.innerHTML = "";

  if (!list || list.length === 0) {
    resultsCount.textContent =
      "No clinics matched these filters. Try removing a filter or searching again.";
    return;
  }

  resultsCount.textContent = `${list.length} clinic${
    list.length === 1 ? "" : "s"
  } found`;

  list.forEach(clinic => {
    const card = document.createElement("article");
    card.className = "clinic-card";

    // Header
    const header = document.createElement("div");
    header.className = "clinic-header";

    const nameEl = document.createElement("div");
    nameEl.className = "clinic-name";
    nameEl.textContent = clinic.name;

    const locEl = document.createElement("div");
    locEl.className = "clinic-location";
    locEl.textContent = `${clinic.city} • ${clinic.region}`;

    header.appendChild(nameEl);
    header.appendChild(locEl);

    // Badges
    const badgesRow = document.createElement("div");
    badgesRow.className = "clinic-badges";

    for (const [key, value] of Object.entries(clinic.anxietyFeatures)) {
      if (!value) continue;
      let label = "";
      if (key === "anxietyFocused") label = "Anxiety-focused";
      if (key === "pediatric") label = "Pediatric";
      if (key === "sedation") label = "Sedation / Nitrous";
      if (key === "lowCost") label = "Low-cost / sliding scale";
      if (key === "traumaInformed") label = "Trauma-informed";
      if (key === "sensoryFriendly") label = "Sensory-friendly";

      const variant =
        key === "pediatric" || key === "sensoryFriendly"
          ? "secondary"
          : "neutral";

      badgesRow.appendChild(makeBadge(label, variant));
    }

    // Insurance chips
    const insRow = document.createElement("div");
    insRow.className = "clinic-insurance";
    clinic.insuranceAccepted.forEach(ins => {
      insRow.appendChild(makeBadge(ins, "neutral"));
    });

    // Summary
    const summary = document.createElement("p");
    summary.className = "clinic-description";
    summary.textContent = clinic.summary;

    // Actions
    const actions = document.createElement("div");
    actions.className = "clinic-actions";

    const detailsBtn = document.createElement("button");
    detailsBtn.className = "btn btn-ghost clinic-toggle-btn";
    detailsBtn.textContent = "View details";

    const websiteLink = document.createElement("a");
    websiteLink.href = clinic.website;
    websiteLink.target = "_blank";
    websiteLink.rel = "noopener noreferrer";
    websiteLink.textContent =
      clinic.website === "#" ? "Website (call for link)" : "Website";

    actions.appendChild(detailsBtn);
    actions.appendChild(websiteLink);

    // Details
    const details = document.createElement("div");
    details.className = "clinic-details";
    details.style.display = "none";

    const phone = document.createElement("p");
    phone.textContent = `Phone: ${clinic.phone}`;

    const pops = document.createElement("p");
    pops.textContent = `Good for: ${clinic.populations.join(", ")}`;

    const notesHeading = document.createElement("p");
    notesHeading.style.fontWeight = "600";
    notesHeading.textContent = "Notes:";

    const notes = document.createElement("p");
    notes.textContent = clinic.notes;

    details.appendChild(phone);
    details.appendChild(pops);
    details.appendChild(notesHeading);
    details.appendChild(notes);

    if (clinic.costOptions && clinic.costOptions.length > 0) {
      const cost = document.createElement("p");
      cost.textContent = `Cost options: ${clinic.costOptions.join(", ")}`;
      details.appendChild(cost);
    }

    detailsBtn.addEventListener("click", () => {
      const visible = details.style.display === "block";
      details.style.display = visible ? "none" : "block";
      detailsBtn.textContent = visible ? "View details" : "Hide details";
    });

    card.appendChild(header);
    card.appendChild(badgesRow);
    card.appendChild(insRow);
    card.appendChild(summary);
    card.appendChild(actions);
    card.appendChild(details);

    resultsGrid.appendChild(card);
  });
}

// ---- Events ----

filtersForm.addEventListener("submit", e => {
  e.preventDefault();
  filterClinics();
});

searchInput.addEventListener("input", filterClinics);

browseAllBtn.addEventListener("click", () => {
  searchInput.value = "";
  filterClinics();
});

resetFiltersBtn.addEventListener("click", () => {
  searchInput.value = "";
  regionSelect.value = "";
  insuranceCheckboxes.forEach(cb => (cb.checked = false));
  featureCheckboxes.forEach(cb => (cb.checked = false));
  filterClinics();
});

// ---- Init ----

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

renderClinics(clinics);
