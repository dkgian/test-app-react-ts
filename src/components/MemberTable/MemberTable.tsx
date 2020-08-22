import * as React from "react";

import { MemberEntity } from "../../model";
import { getMemberCollection } from "../../api/memberApi";
import { MemberRow } from "./MemberRow";

export const MemberTable = () => {
  const [memberCollection, setMemberCollection] = React.useState<
    MemberEntity[]
  >([]);

  const loadMemberCollection = async () => {
    const memberCollection = await getMemberCollection();
    setMemberCollection(memberCollection);
  };

  React.useEffect(() => {
    loadMemberCollection();
  }, []);

  const TableHeader = () => (
    <thead>
      <tr>
        <th>Avavtar</th>
        <th>id</th>
        <th>login</th>
      </tr>
    </thead>
  );

  const TableBody = () => (
    <tbody>
      {memberCollection.map((member) => (
        <MemberRow key={member.id} member={member} />
      ))}
    </tbody>
  );

  return (
    <table>
      <TableHeader />
      <TableBody />
    </table>
  );
};
