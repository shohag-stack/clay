const FEATURED_QUERIES = `*[_type == "property" && featured == true]{
...,
mainImage{
asset->{url}
},

gallery[]{
asset->{url}
}

}[0...3]
`;

const PROPERTY_QUERIES = `*[_type == "property"]{
...,
mainImage{
asset->{url}
},

gallery[]{
asset->{url}
}

}[0...3]
`;

const PROPERTY_BY_SLUG = `
  *[_type == "property" && slug.current == $slug][0]{
    _id,
    title,
    price,
    description,
    location,
    bedrooms,
    bathrooms,
    area,
    tags,
    gallery[]{
      asset->{url}
    },
    mainImage{
      asset->{url}
    },
    features,
    agent
  }
`;

const PROPERTY_SLUGS = `
  *[_type == "property"]{
    "slug": slug.current
  }
`;


export { FEATURED_QUERIES, PROPERTY_BY_SLUG,PROPERTY_SLUGS,PROPERTY_QUERIES }