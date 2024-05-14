'use client';
import { Suspense } from 'react';
import {
  useReadQuery,
  useBackgroundQuery,
} from '@apollo/experimental-nextjs-app-support/ssr';
import { QueryReference } from '@apollo/client/react';

import {
  GetReviewsDocument,
  GetReviewsQuery,
} from './documents/documents.generated';

interface Review {
  __typename: string;
  id: string;
  rating: string;
  comment: string;
}

export default function ReviewsWrapper() {
  const [queryRef] = useBackgroundQuery(GetReviewsDocument);

  return (
    <Suspense fallback={<>Loading...</>}>
      <Reviews queryRef={queryRef} />
    </Suspense>
  );
}

function Reviews({ queryRef }: { queryRef: QueryReference<GetReviewsQuery> }) {
  const { data } = useReadQuery(queryRef);

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
