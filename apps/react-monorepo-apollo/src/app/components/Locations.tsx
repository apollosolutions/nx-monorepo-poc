import { gql, useQuery } from '@apollo/client';
import { getClient } from './../ApolloClient';
import { GetLocationsDocument } from './documents/documents.generated';
import Image from 'next/image';

interface Location {
  __typename: string;
  id: string;
  name: string;
  description: string;
  photo: string;
}

export const dynamic = 'force-dynamic';

export default async function Locations() {
  let locations: [Location];
  const data = await getClient()
    .query({
      query: GetLocationsDocument,
    })
    .catch((error) => {
      console.log(JSON.stringify(error));
    });

  locations = data.data.locations;

  return (
    <>
      <h3>
        REALLY slow operation:{' '}
        {data.data.reallySlowOperation
          ? data.data.reallySlowOperation.id
          : 'Loading'}
      </h3>
      {locations.map((location) => {
        {
          {
            console.log(data.data.reallySlowOperation);
          }
        }
        return (
          <div key={location.id}>
            <h3>{location.name}</h3>
            <p>{location.description}</p>
            <Image
              src={location.photo}
              alt="Photo of location"
              width="100"
              height="100"
            />
          </div>
        );
      })}
    </>
  );
}
