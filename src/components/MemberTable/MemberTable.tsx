import * as React from "react";

import { MemberEntity } from "../../model";
import { getMemberCollection } from "../../api/memberApi";
import { MemberRow } from "./MemberRow";

export const MemberTable = () => {
  const [memberCollection, setMemberCollection] = React.useState<
    MemberEntity[]
  >([]);

  const loadMemberCollection = () => {
    getMemberCollection().then((result) => setMemberCollection(result));
  };

  React.useEffect(() => {
    loadMemberCollection();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Avavtar</th>
          <th>id</th>
          <th>login</th>
        </tr>
      </thead>

      <tbody>
        {memberCollection.map((member) => (
          <MemberRow key={member.id} member={member} />
        ))}
      </tbody>
    </table>
  );
};
