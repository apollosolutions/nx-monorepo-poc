'use client';

import Locations from './components/Locations';
import Member from './components/Member';
import Reviews from './components/Reviews';

export default function Index() {
  return (
    <div>
      <h1>Apollo Client POC</h1>
      <Member />
      <Locations />
      <Reviews />
    </div>
  );
}
