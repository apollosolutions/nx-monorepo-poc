import { gql, useQuery } from '@apollo/client';
import Image from 'next/image';

interface Location {
  id: string;
  name: string;
  description: string;
  photo: string;
}

// This is specifically using the repos defined in the voyage 1 course: https://www.apollographql.com/tutorials/voyage-part1
const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      description
      name
      photo
    }
    ... @defer {
      reallySlowOperation {
        id
      }
    }
  }
`;

export default function Locations() {
  const { data, loading, error } = useQuery(GET_LOCATIONS);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const locations = data.locations;

  return (
    <>
      <p>
        Deferred id:{' '}
        {data.reallySlowOperation?.id
          ? data.reallySlowOperation?.id
          : 'Loading deferred value...'}
      </p>

      <div className="locations-wrapper">
        {locations.map((location: Location) => (
          <div key={location.id}>
            <h3>{location.name}</h3>
            <p>{location.description}</p>
            <Image
              src={location.photo}
              alt={location.description}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </>
  );
}
