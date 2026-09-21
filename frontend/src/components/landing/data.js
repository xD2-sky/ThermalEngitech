export const SITE = {
    name: "Thermal Engitech",
    legalName: "Thermal Engitech Pvt. Ltd.",
    phoneDisplay: "+91 70693 06431",
    phoneTel: "+917069306431",
    purchaseDisplay: "+91 90330 47272",
    purchaseTel: "+919033047272",
    purchaseManager: "Ramesh Samdani",
    email: "info@thermalengitech.com",
    address: "12B, Shrey Industrial Park, Road, Dhamatwan, Undrel, Gujarat 382435",
    city: "Ahmedabad, Gujarat",
    whatsapp:
        "https://wa.me/917069306431?text=" +
        encodeURIComponent(
            "Hello Thermal Engitech team, I'm interested in a technical sizing discussion for our plant."
        ),
};

export const NAV_LINKS = [
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Why Us", href: "#why-us" },
    { label: "Industries", href: "#industries" },
    { label: "Certifications", href: "#certifications" },
];

export const PRODUCTS = [
    {
        id: "steam-boilers",
        index: "01",
        name: "Steam Boilers",
        description:
            "High-efficiency dry steam boilers customized for solid fuel, gas, biomass, or oil firing.",
        image: "/images/products/steam-boiler-skid.png",
        tags: ["Solid fuel", "Gas", "Biomass", "Oil"],
    },
    {
        id: "thermic-fluid-heaters",
        index: "02",
        name: "Thermic Fluid Heaters",
        description:
            "Concentric helical coil hot-oil heaters for stable, high-temperature indirect process heating.",
        image: "/images/products/multi-fuel-system.png",
        tags: ["Helical coil", "Hot oil", "Indirect heat"],
    },
    {
        id: "heat-exchangers",
        index: "03",
        name: "Heat Exchangers",
        description:
            "Custom engineered shell-and-tube or plate heat exchangers and condensers matching TEMA standards.",
        image: "/images/products/heat-exchanger-vessel.jpg",
        tags: ["Shell & tube", "Plate", "TEMA"],
    },
    {
        id: "air-pre-heaters",
        index: "04",
        name: "Air Pre-Heaters & Auxiliaries",
        description:
            "High-efficiency waste heat recovery preheaters, economizers, and air pollution control units.",
        image: "/images/products/packaged-boiler-unit.png",
        tags: ["Economizers", "Heat recovery", "APC units"],
    },
];

export const INDUSTRIES = [
    "Chemical Plants",
    "Dairy Units",
    "Distillery Plants",
    "Food Industry",
    "Packaging Units",
    "Paper Mills",
    "Pharma Industry",
    "Plywood Industry",
    "Rice Mills",
    "Rubber Industry",
    "Sponge Iron Units",
    "Solvent Plants",
    "Sugar Mills",
    "Textile Units",
];

export const CERTIFICATIONS = [
    { code: "ISO 9001:2015", label: "Quality management" },
    { code: "ASME", label: "Design & fabrication" },
    { code: "IBR 1950", label: "Indian Boiler Regulations" },
    { code: "TEMA", label: "Heat exchanger standards" },
];

export const MARQUEE_ITEMS = [
    "ISO 9001:2015",
    "IBR 1950",
    "ASME",
    "TEMA Standards",
    "Solid Fuel",
    "Biomass",
    "High-Pressure Thermal Systems",
    "Waste Heat Recovery",
    "Made in Gujarat",
];
