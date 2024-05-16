'use client';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { GetReviewsDocument } from './documents/documents.generated';

interface Review {
  __typename: string;
  id: string;
  rating: string;
  comment: string;
}

export default function Reviews() {
  const { data } = useSuspenseQuery(GetReviewsDocument);

  const reviews = data.latestReviews;

  return (
    <>
      {reviews.map((review: Review) => (
        <div key={review.id}>
          <strong>Rating: {review.rating}</strong>
          <p>Comment: {review.comment}</p>
        </div>
      ))}
    </>
  );
}
