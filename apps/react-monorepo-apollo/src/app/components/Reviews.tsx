'use client';

import { gql, useQuery } from '@apollo/client';
import Image from 'next/image';

interface Review {
  id: string;
  rating: string;
  comment: string;
}

// This is specifically using the repos defined in the voyage 1 course: https://www.apollographql.com/tutorials/voyage-part1
const GET_REVIEWS = gql`
  query GetReviews {
    latestReviews {
      id
      rating
      comment
    }
  }
`;

export default function Reviews() {
  const { data, loading, error } = useQuery(GET_REVIEWS);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

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
