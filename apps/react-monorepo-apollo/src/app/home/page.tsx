import Locations from '../components/Locations';
import Member from '../components/Member';
import Reviews from '../components/Reviews';

export default async function Page() {
  return (
    <>
      <h1 className="one">Apollo Client POC</h1>
      <h3>Member Information</h3>
      <Member />
      <h3>Locations</h3>
      <Locations />
      <h3>Reviews</h3>
      <Reviews />
      <a href="/about">About us</a>
    </>
  );
}
