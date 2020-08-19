import { MemberEntity } from "../model/member";

export const getMemberCollection = (): Promise<MemberEntity[]> => {
  const promise = new Promise<MemberEntity[]>((resolve, reject) => {
    setTimeout(
      () =>
        resolve([
          {
            id: 1457912,
            login: "flower1",
            avatar_url:
              "https://cdn.pixabay.com/photo/2014/04/14/20/11/japanese-cherry-trees-324175_960_720.jpg",
          },
          {
            id: 4374977,
            login: "flower2",
            avatar_url:
              "https://cdn.pixabay.com/photo/2014/04/14/20/11/japanese-cherry-trees-324175_960_720.jpg",
          },
        ]),
      500
    );
  });

  return promise;
};
