'use client';
import { Suspense } from 'react';
import {
  useReadQuery,
  useBackgroundQuery,
} from '@apollo/experimental-nextjs-app-support/ssr';
import { QueryReference } from '@apollo/client/react';

import {
  GetMemberDocument,
  GetMemberQuery,
} from './documents/documents.generated';

interface Member {
  __typename: string;
  memberId: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
}

export default function MemberWrapper() {
  const [queryRef] = useBackgroundQuery(GetMemberDocument);

  return (
    <Suspense fallback={<>Loading...</>}>
      <Member queryRef={queryRef} />
    </Suspense>
  );
}

function Member({ queryRef }: { queryRef: QueryReference<GetMemberQuery> }) {
  const { data } = useReadQuery(queryRef);

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
