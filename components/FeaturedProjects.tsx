import Property from "@/types/types";
import property from "../Data/property";
import PropertyCard from "./cards/PropertyCard";
import { client } from "@/sanity/lib/client";
import {FEATURED_QUERIES } from "@/sanity/queries/propertyQueries";
import dummyProperties from "../Data/property";


const OPTIONS = { next: { revalidate: 60 } };

export default async function FeaturedProjects( {title} :{title:string | null}) {

    let property = dummyProperties

    if(client) {
        try {
            const sanityProperty = await client.fetch<Property[]>(FEATURED_QUERIES,{}, OPTIONS)
            property = sanityProperty
        }
        catch(error){
            console.log("error fetching sanit document", error)
        }
    }
    

    const featuredProperties = property.slice(0,3)

    console.log('Featured Properties:', featuredProperties);

    return (
        <>
            <div className="bg-gray">
                <div className="section">
                    <div className="text-center mb-10">
                        <h3>{title}</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            featuredProperties.map((property, idx: number)=> {
                                return (
                                    <PropertyCard key={idx} property={property as Property} />
                                )
                            })
                        }
                    </div>
            </div>
            </div>
        </>
    )
}