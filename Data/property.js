const dummyProperties = [
    {
        _id: 1,
        slug: {
            current: "modern-apartment"
        },
        featured: true,
        mainImage: {
            asset: {
                url: "https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
        },
        title: "Modern Apartment",
        description: "The Penthouse at Central Park Tower. The One Above All Else. Soaring 1,416 feet above New York City in the tallest residential tower on the planet, the penthouse at Central Park Tower lays claim to the title of being the highest residence—and having the highest terrace—in the world.",
        gallery: [
            {
                asset: {
                url: "https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=2070&auto=format&fit=crop"
            }
            },
            {
                asset: {
                url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
            },
            },
            {
                asset: {
                url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
            },
            },
            {
                asset: {
                url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
            },
            },
            {
                asset: {
                url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2070&auto=format&fit=crop",
            },
            },
            {
                asset: {
                url: "https://images.unsplash.com/photo-1560184897-cca79b749615?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            }

        ],
        price: "1,000",
        location: "Downtown",
        coordinates: { lat: 40.7549, lng: -73.9840 },
        bedrooms: 1,
        bathrooms: { full: 8, half: 3 },
        area: "1000",
        type: "Resident",
        transactionType: "rent",
        tags: ["Modern Living", "Serene Waterways", "Magnificent Terrace", "Pinnacle of Luxury", "Two Powder Rooms"],
        features: {
            interior: { elevator: "Elevator", area: "Total structure area: 17,545 sqft", livable: "Total interior livable area: 17,545 sqft" },
            security: { name: "Doorman", region: "New York", sub_division: "Midtown" },
            hoa: { hasHoa: true, fee: "$26,952 monthly", services: ["HOA services"] }
        },
        agent: {
            name: "John Doe",
            phone: "123-456-7890",
            email: "john@gmail.com",
            image: {
                asset: {
                    url: "https://images.unsplash.com/photo-1627161683077-e34782c24d81?q=80&w=1003&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
            }
        }
    },
];




export default dummyProperties;