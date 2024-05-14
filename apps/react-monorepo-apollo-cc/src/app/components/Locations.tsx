'use client';
import { Suspense } from 'react';
import {
  useReadQuery,
  useBackgroundQuery,
} from '@apollo/experimental-nextjs-app-support/ssr';
import { QueryReference } from '@apollo/client/react';
import {
  GetLocationsDocument,
  GetLocationsQuery,
} from './documents/documents.generated';
import Image from 'next/image';

interface Location {
  __typename: string;
  id: string;
  name: string;
  description: string;
  photo: string;
}

export default function LocationsWrapper() {
  const [queryRef] = useBackgroundQuery(GetLocationsDocument);

  return (
    <Suspense fallback={<>Loading...</>}>
      <Locations queryRef={queryRef} />
    </Suspense>
  );
}

function Locations({
  queryRef,
}: {
  queryRef: QueryReference<GetLocationsQuery>;
}) {
  let locations: [Location];

  const { data } = useReadQuery(queryRef);

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
