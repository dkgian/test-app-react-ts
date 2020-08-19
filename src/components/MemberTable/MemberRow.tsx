import * as React from "react";

import { MemberEntity } from "../../model";

export const MemberRow = ({ member }: { member: MemberEntity }) => {
  const { avatar_url, id, login } = member;

  return (
    <tr>
      <td>
        <img src={member.avatar_url} style={{ maxWidth: "10rem" }} />
      </td>
      <td>
        <span>{member.id}</span>
      </td>
      <td>
        <span>{member.login}</span>
      </td>
    </tr>
  );
};
