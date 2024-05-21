'use client';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { GetRatingDocument } from './documents/documents.generated';

interface ReviewRating {
  __typename: string;
  rating: string;
}

export default function ReviewsRatings() {
  const { data } = useSuspenseQuery(GetRatingDocument);

  const reviews = data.latestReviews;

  return (
    <>
      {reviews.map((review: ReviewRating) => (
        <div>
          <strong>Rating: {review.rating}</strong>
        </div>
      ))}
    </>
  );
}
