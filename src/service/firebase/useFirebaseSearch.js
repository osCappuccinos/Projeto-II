import useFirebaseProducts from './useFirebaseProducts';
import useFirebaseStores from './useFirebaseStores';

const useFirebaseSearch = () => {

    const { readAllProducts } = useFirebaseProducts();
    const { readStore } = useFirebaseStores();

    const searchProductsByName = async (searchTerm) => {
        try {
            searchTerm = searchTerm.trim().toLowerCase();

            if (searchTerm === '' || searchTerm.length <= 1) {
                return [];
            }

            const storeNames = new Map();

            const getStoreName = async (storeId) => {
                if (storeNames.has(storeId)) return storeNames.get(storeId);
                const storeData = await readStore(storeId);
                const storeName = storeData?.name || 'Store not found';
                storeNames.set(storeId, storeName);
                return storeName;
            }

            const allProducts = await readAllProducts();
            const results = await Promise.all(
                Object.values(allProducts)
                    .filter(product => product?.name?.toLowerCase().includes(searchTerm))
                    .map(async product => ({
                        ...product,
                        storeName: await getStoreName(product.storeId),
                    }))
            );
            return results;
        } catch (error) {
            console.error('Error in searchProductsByName:', error);
            throw error;
        }
    };

    return { searchProductsByName };
}

export default useFirebaseSearch;
