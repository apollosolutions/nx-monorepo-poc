import SuspenseBoundry from '../components/SuspenseBoundry';

export default async function Page() {
  return (
    <>
      <h1 className="one">Apollo Client POC</h1>
      <SuspenseBoundry />
      <a href="/about">About us</a>
    </>
  );
}
