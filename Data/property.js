const propertyImages = [
  "photo-1505691938895-1758d7feb511",
  "photo-1493809842364-78817add7ffb",
  "photo-1522708323590-d24dbb6b0267",
  "photo-1512917774080-9991f1c4c750",
  "photo-1586023492125-27b2c045efd7",
  "photo-1560184897-cca79b749615",
  "photo-1507089947368-19c1da9775ae",
  "photo-1570129477492-45c003edd2be",
  "photo-1564013799919-ab600027ffc6",
  "photo-1494526585095-c41746248156",
];

const agentImages = [
  "photo-1500648767791-00dcc994a43e", // male
  "photo-1494790108377-be9c29b29330", // female
  "photo-1507003211169-0a1dd7228f2d", // male
  "photo-1438761681033-6461ffad8d80", // female
  "photo-1506794778202-cad84cf45f1d", // male
  "photo-1544005313-94ddf0286df2", // female
  "photo-1531123897727-8f129e1688ce", // female
  "photo-1511367461989-f85a21fda167", // male
  "photo-1527980965255-d3b416303d12", // male
  "photo-1552058544-f2b08422138a", // female
];

const getPropertyImage = (id) =>
  `https://images.unsplash.com/${propertyImages[id % propertyImages.length]}?w=2070&auto=format&fit=crop`;

const getAgentImage = (id) =>
  `https://images.unsplash.com/${agentImages[id % agentImages.length]}?w=1000&auto=format&fit=crop`;

const dummyProperties = Array.from({ length: 10 }, (_, i) => {
  const id = i + 1;

  return {
    _id: id,

    slug: {
      current: `property-${id}`,
    },

    featured: id % 3 === 0,

    mainImage: {
      asset: {
        url: getPropertyImage(id),
      },
    },

    title: `Luxury Property ${id}`,

    description:
      "A premium property with modern architecture, spacious layout, and high-end finishes in a prime location.",

    gallery: [
      { asset: { url: getPropertyImage(id + 1) } },
      { asset: { url: getPropertyImage(id + 2) } },
      { asset: { url: getPropertyImage(id + 3) } },
      { asset: { url: getPropertyImage(id + 4) } },
      { asset: { url: getPropertyImage(id + 5) } },
    ],

    price: `${1000 * id}`,

    location: "City Center",

    coordinates: {
      lat: 40.7 + id * 0.01,
      lng: -73.9 - id * 0.01,
    },

    bedrooms: (id % 5) + 1,

    bathrooms: {
      full: (id % 3) + 1,
      half: id % 2,
    },

    area: `${1000 + id * 200}`,

    type: "Resident",

    transactionType: id % 2 === 0 ? "sale" : "rent",

    tags: ["Modern Living", "Luxury", "Prime Location"],

    features: {
      interior: {
        elevator: "Elevator",
        area: `${1000 + id * 200} sqft`,
        livable: `${900 + id * 180} sqft`,
      },
      security: {
        name: "24/7 Security",
        region: "USA",
        sub_division: "Urban",
      },
      hoa: {
        hasHoa: true,
        fee: `$${300 + id * 50} monthly`,
        services: ["Security", "Cleaning", "Maintenance"],
      },
    },

    agent: {
      name: id % 2 === 0 ? "Sarah Johnson" : "Michael Brown",
      phone: "123-456-7890",
      email: `agent${id}@gmail.com`,
      image: {
        asset: {
          url: getAgentImage(id),
        },
      },
    },
  };
});

export default dummyProperties;