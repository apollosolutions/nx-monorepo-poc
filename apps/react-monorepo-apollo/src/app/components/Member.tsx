import { getClient } from './../ApolloClient';
import { GetMemberDocument } from './documents/documents.generated';

interface Member {
  __typename: string;
  memberId: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
}

export default async function Member() {
  const data = await getClient()
    .query({ query: GetMemberDocument })
    .catch((error) => {
      console.log(JSON.stringify(error));
    });

  const member: Member = data.data.member;

  return (
    <>
      <div key={member.memberId}>
        <strong>
          Full name:{member.firstName} {member.lastName}
        </strong>
        <p>Date of Birth: {member.dateOfBirth}</p>
      </div>
    </>
  );
}
