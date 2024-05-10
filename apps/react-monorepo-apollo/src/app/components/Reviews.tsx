import { getClient } from './../ApolloClient';

import { GetReviewsDocument } from './documents/documents.generated';

interface Review {
  __typename: string;
  id: string;
  rating: string;
  comment: string;
}

export default async function Reviews() {
  const data = await getClient()
    .query({ query: GetReviewsDocument })
    .catch((error) => {
      console.log(JSON.stringify(error));
    });

  const reviews = data.data.latestReviews;

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
