import { child, get, getDatabase, limitToLast, onValue, orderByChild, query, ref, remove, set, update } from "firebase/database";
import { useCallback } from "react";

// PRODUCTS review
// CREATE a product review
export function createProductReview(productId, reviewId, reviewerName, reviewContent, rating) {
    const reviewRef = ref(db, `products/${productId}/ratings/${reviewId}`);
    set(reviewRef, {
        name: reviewerName,
        content: reviewContent,
        rating: rating
    }).then(() => {
        updateProductAverageRating(productId, rating);
    });
  }
  
  
  // READ all product reviews
  export function readAllProductReviews(productId) {
    const reviewsRef = ref(db, `products/${productId}/reviews`);
    onValue(reviewsRef, (snapshot) => {
      const reviews = snapshot.val();
      // Handle the list of reviews
    });
  }
  
  // READ a product review
  export function readProductReview(productId, reviewId, callback) {
    const reviewRef = ref(db, `products/${productId}/ratings/${reviewId}`);
    get(reviewRef).then((snapshot) => {
      if (snapshot.exists()) {
        const reviewData = snapshot.val();
        callback(null, reviewData);
      } else {
        callback("Review not found");
      }
    }).catch((error) => {
      callback(error);
    });
  }
  
  
  // UPDATE a product review
  export function updateProductReview(productId, reviewId, updatedReviewerName, updatedReviewContent, updatedRating) {
    const reviewRef = ref(db, `products/${productId}/ratings/${reviewId}`);
    get(reviewRef).then((snapshot) => {
        if (snapshot.exists()) {
            const previousRating = snapshot.val().rating;
            update(reviewRef, {
                name: updatedReviewerName,
                content: updatedReviewContent,
                rating: updatedRating
            }).then(() => {
                updateProductAverageRating(productId, updatedRating, previousRating);
            });
        }
    });
  }
  
  
  // DELETE a product review
  export function deleteProductReview(productId, reviewId) {
    const reviewRef = ref(db, `products/${productId}/ratings/${reviewId}`);
    remove(reviewRef);
  }

  // update the average rating and rating count after a review is added or updated
export function updateProductAverageRating(productId, newRating, previousRating = null) {
    const productRef = ref(db, 'products/' + productId);
    get(productRef).then((snapshot) => {
        if (snapshot.exists()) {
            const productData = snapshot.val();
            let totalRating = productData.averageRating * productData.ratingCount;
            
            // If previousRating exists, it's an update. Adjust total rating by removing previous and adding new.
            if(previousRating) {
                totalRating = totalRating - previousRating + newRating;
            } else { // Else, it's a new review. Simply add the new rating.
                totalRating += newRating;
                productData.ratingCount += 1;
            }
            
            const averageRating = totalRating / productData.ratingCount;
            update(productRef, { averageRating: averageRating, ratingCount: productData.ratingCount });
        }
    });
  }