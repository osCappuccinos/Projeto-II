import { createClient } from "contentful";

const contentfulConfig = () => {

    const client = createClient({
        space: "kw4ib93qcl5n",
        accessToken: "PW2eCE2_FsOgzJCcDQjltadtHM4sBq2vbqvCzEQWjrg",
        host: "cdn.contentful.com"
    });

    const getProductsContent = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "product",
                select: "fields",
                order: "fields.name"
            });

            const sanitizedEntries = entries.items.map((item) => {
                const imagesArry = item.fields.images

                const images = imagesArry.map((item) => {
                    return item.fields
                });

                return {
                    ...item.fields,
                    images
                };
            });

            return sanitizedEntries;
        } catch(error) {
            console.log(`Error getting products: ${error}`)
        }
    }

    return { getProductsContent };
}

export default contentfulConfig;