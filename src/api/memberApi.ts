import axios, { AxiosResponse } from "axios";
import { MemberEntity } from "../model/member";

const githubUrl = "https://api.github.com";
const gitHubMembersUrl = `${githubUrl}/orgs/lemoncode/members`;

const mapMemberListApiToModel = ({
  data,
}: AxiosResponse<any[]>): MemberEntity[] =>
  data.map((member) => ({
    id: member.id,
    login: member.login,
    avatar_url: member.avatar_url,
  }));

export const getMemberCollection = (): Promise<MemberEntity[]> => {
  return new Promise<MemberEntity[]>((resolve, reject) => {
    try {
      axios
        .get<MemberEntity[]>(gitHubMembersUrl)
        .then((members) => resolve(mapMemberListApiToModel(members)));
    } catch (err) {
      reject(err);
    }
  });
};
