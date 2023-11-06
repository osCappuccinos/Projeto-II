import { async } from "@firebase/util";
import contentfulConfig from "./contentfulConfiguration";

const contentfulController = () => {

    const { client } = contentfulConfig();

    const getProductContent = async (productId) => {
        try {
            const entries = await client.getEntries({
                content_type: "product",
                select: "fields",
                order: "fields.name",
                "fields.id": productId
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
        } catch (error) {
            console.log(`Error getting product: ${error}`)
        }
    }

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

    return { getProductContent, getAllProductsContent, getStoreProductsContent, getStoreContent, getProductsContentByCategory };
};

export default contentfulController;