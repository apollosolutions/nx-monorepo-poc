'use client';

import { gql, useQuery } from '@apollo/client';

interface Member {
  memberId: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
}

// This is specifically using the repos defined in the voyage 1 course: https://www.apollographql.com/tutorials/voyage-part1
const GET_MEMBER = gql`
  query GetMember {
    member {
      dateOfBirth
      firstName
      lastName
      memberId
    }
  }
`;

export default function Member() {
  const { data, loading, error } = useQuery(GET_MEMBER);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

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
