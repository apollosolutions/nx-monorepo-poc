'use client';

import styles from './page.module.css';
import { graphql } from 'react-relay';

graphql`
  query MemberQuery {
    member {
      firstName
    }
  }
`;

export default function Member() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div>
      <p>Hi mom</p>
    </div>
  );
}
