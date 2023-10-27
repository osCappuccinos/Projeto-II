import { createClient } from "contentful";

const contentfulConfig = () => {

    const client = createClient({
        space: "kw4ib93qcl5n",
        accessToken: "PW2eCE2_FsOgzJCcDQjltadtHM4sBq2vbqvCzEQWjrg",
        host: "cdn.contentful.com"
    });

    const getAllProductsContent = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "product",
                select: "fields",
                order: "fields.name"
            });

            const sanitizedEntries = entries.items.map((item) => {
                const imagesArray = item.fields.images

                const images = imagesArray.map((item) => {
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

    const getStoreProductsContent = async (slug) => {
        try {
            const entries = await client.getEntries({
                content_type: "store",
                select: "fields",
                order: "fields.name",
                "fields.slug": slug
            });

            const storeProducts = entries.items.flatMap(entry => entry.fields.storeProducts );
            const products = storeProducts.map((item) => {

                const imagesArray = item.fields.images
                const images = imagesArray.map((item) => {
                    return item.fields
                });

                return {
                    ...item.fields,
                    images
                };
            });

            return products;
        } catch (error) {
            console.error(`Error getting store: ${error}`);
        }
    };

    const getStoreContent = async (slug) => {
        try {
            const entries = await client.getEntries({
                content_type: "store",
                select: "fields",
                order: "fields.name",
                "fields.slug": slug
            });

            const sanitizedEntries = entries.items.map((item) => {
                return {
                    ...item.fields,
                };
            });

            return sanitizedEntries;
        } catch(error) {
            console.log(`Error getting store: ${error}`)
        }
    }

    const getProductsContentByCategory = async (category) => {

        try {
            const entries = await client.getEntries({
                content_type: "product",
                select: "fields",
                order: "fields.name"
            });


            const filteredData = entries.items.filter(products => products.fields.category === category);

            const sanitizedFilteredData = filteredData.map((item) => {
                const imagesArray = item.fields.images

                const images = imagesArray.map((item) => {
                    return item.fields
                });

                return {
                    ...item.fields,
                    images
                };
            });

            return sanitizedFilteredData;
        } catch(error) {
            console.log(`Error getting products: ${error}`)
        }
    }


    return { getAllProductsContent, getStoreProductsContent, getStoreContent, getProductsContentByCategory };
}

export default contentfulConfig;