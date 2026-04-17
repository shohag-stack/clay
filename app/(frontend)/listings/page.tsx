import SmoothScrollWrapper from "@/components/SmoothScrollWrapper"
import {PropertyListings} from "@/components/PropertyListings"
import { client } from "@/sanity/lib/client"
import { PROPERTY_QUERIES } from "@/sanity/queries/propertyQueries"
import Property from "@/types/types"
import dummyProperties from "@/Data/property"

export default async function Page() {

    let property = dummyProperties

    if(client) {
        try {
            const sanityProperty = await client.fetch(PROPERTY_QUERIES)
            property = sanityProperty
        }
        catch(error) {
            console.log("Sanity not configured, using fallback data", error)
        }
    }

    return (
        <SmoothScrollWrapper>
            <PropertyListings property={property as Property[]} />
        </SmoothScrollWrapper>
    )
}

