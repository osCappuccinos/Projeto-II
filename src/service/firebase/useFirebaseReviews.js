import { child, get, getDatabase, ref, remove, set, update } from "firebase/database";
import { useEffect } from "react";

import { db } from "./firebase-config";

const useFirebaseReviews = () => {
  const createProductReview = async (productId, clientId, comment, rating, storeId) => {
    const reviewRef = ref(db, `reviews/${productId}/${clientId}`);

    const data = {
      productId: productId,
      clientId: clientId,
      comment: comment,
      rating: rating,
      storeId: storeId,
    }

    const response = set(reviewRef, data).then(() => {
      return data;
    }).catch((error) => {
      console.log(error);
      throw error;
    });

    return response;
  }

  const readAllReviews = async () => {
    const dbRef = ref(getDatabase());
    const response = get(child(dbRef, `reviews`)).then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("No data available");
        return;
      }
    }).catch((error) => {
      console.error(error);
      return error;
    });

    return response;
  }

  const readAllProductReviews = (productId) => {
    const dbRef = ref(getDatabase());
    const response = get(child(dbRef, `reviews/${productId}`)).then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("No data available");
        return;
      }
    }).catch((error) => {
      console.error(error);
      return error;
    });

    return response;
  }

  const readStoreReviews = async (storeId) => {
    const dbRef = ref(getDatabase());
  
    try {
      const snapshot = await get(child(dbRef, `stores/${storeId}`));
  
      if (snapshot.exists()) {
        const data = snapshot.val();
        return { totalAverageRating: data.totalAverageRating, totalRatingCount: data.totalRatingCount };
      } else {
        console.log("No data available");
        return null;
      }
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  const updateAllProductRatings = async () => {
    const ratingsData = await readAllReviews();
  
    for (const productId in ratingsData) {
      if (ratingsData.hasOwnProperty(productId)) {
        const productRatingsObject = ratingsData[productId];
        const productRatingCount = Object.keys(productRatingsObject).length;
  
        if (productRatingCount === 0) continue;
  
        const productAverageRating = Object.values(productRatingsObject).reduce((sum, review) => sum + review.rating, 0) / productRatingCount;
  
        const productStarCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  
        for (const review of Object.values(productRatingsObject)) {
          productStarCounts[review.rating]++;
        }
  
        const ratingMap = { 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five' };
  
        const stringKeyProductStarCounts = Object.fromEntries(
          Object.entries(productStarCounts).map(([numericKey, count]) => [ratingMap[numericKey], count])
        );
  
        const productRef = ref(db, `products/${productId}`);
        const productData = {
          averageRating: Number(productAverageRating.toFixed(2)),
          ratingCount: productRatingCount,
          ratings: stringKeyProductStarCounts,
        };
  
        update(productRef, productData).catch((error) => {
          console.log('Error updating product data:', error);
          throw error;
        });
  
        const storeId = Object.values(productRatingsObject)[0].storeId;
        const storeRef = ref(db, `stores/${storeId}`);
        const storeData = {
          totalAverageRating: Number(productAverageRating.toFixed(2)),
          totalRatingCount: productRatingCount,
        };
  
        update(storeRef, storeData).catch((error) => {
          console.log('Error updating store data:', error);
          throw error;
        });
      }
    }
  };

  useEffect(() => {
    updateAllProductRatings();
  }, [createProductReview]);

  return { createProductReview, readAllReviews, readStoreReviews, readAllProductReviews }
}

export default useFirebaseReviews;