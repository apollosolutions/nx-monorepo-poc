'use client';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { GetLocationsDocument } from './documents/documents.generated';
import Image from 'next/image';

interface Location {
  __typename: string;
  id: string;
  name: string;
  description: string;
  photo: string;
}

export default function Locations() {
  let locations: [Location];

  const { data } = useSuspenseQuery(GetLocationsDocument, {});

  locations = data.locations;

  return (
    <>
      <h3>
        REALLY slow operation:{' '}
        {data.reallySlowOperation ? data.reallySlowOperation.id : 'Loading'}
      </h3>
      {locations.map((location) => {
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
