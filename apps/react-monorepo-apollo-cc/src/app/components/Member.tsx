'use client';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { GetMemberDocument } from './documents/documents.generated';

interface Member {
  __typename: string;
  memberId: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
}

export default function Member() {
  const { data } = useSuspenseQuery(GetMemberDocument);

  console.log('WOW!', JSON.stringify(data));

  const member: Member = data.member;

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
