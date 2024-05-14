import LocationsWrapper from '../components/Locations';
import MemberWrapper from '../components/Member';
import ReviewsWrapper from '../components/Reviews';

export default async function Page() {
  return (
    <>
      <h1 className="one">Apollo Client POC</h1>
      <h3>Member Information</h3>
      <MemberWrapper />
      <h3>Locations</h3>
      <LocationsWrapper />
      <h3>Reviews</h3>
      <ReviewsWrapper />
      <a href="/about">About us</a>
    </>
  );
}
