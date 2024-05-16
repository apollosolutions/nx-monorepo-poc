'use client';
import { Suspense } from 'react';
import Locations from '../components/Locations';
import Member from '../components/Member';
import Reviews from '../components/Reviews';

export default function SuspenseBoundry() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <h3>Member Information</h3>
      <Member />
      <h3>Locations</h3>
      <Locations />
      <h3>Reviews</h3>
      <Reviews />
    </Suspense>
  );
}
