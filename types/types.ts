
export type SliderImage = {
  asset: {
    url: string;
  };
};



export default interface Property {
  _id: number;
  title: string;
  featured: boolean;
  description: string;
  slug: {
    current: string
  };
  mainImage: {
    asset: {
      url: string;
    }
  };
  gallery: SliderImage[];
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: {
    full: number;
    half: number;
  };
  area: string;
  type: string;
  transactionType: string;
  tags: string[];
  features: {
    interior: {
      elevator: string;
      area: string;
      livable: string;
    };
    security: {
      name: string;
      region: string;
      sub_division: string;
    };
    hoa: {
      hasHoa: boolean;
      fee: string;
      services: string[];
    };
  };
  agent: {
    name: string;
    phone: string;
    email: string;
    image: {
      asset: {
        url: string
      }
    }

  };

  coordinates: {
    lng: number,
    lat: number;
  }
}