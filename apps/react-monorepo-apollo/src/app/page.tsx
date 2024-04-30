'use client';

import Locations from './components/Locations';
import Member from './components/Member';
import Reviews from './components/Reviews';

export default function Index() {
  return (
    <>
      <h1 className="one">Apollo Client POC</h1>
      <h3>Member Information</h3>
      <Member />
      <h3>Locations</h3>
      <Locations />
      <h3>Reviews</h3>
      <Reviews />
    </>
  );
}
