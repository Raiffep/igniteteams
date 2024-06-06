import { Key, useState } from "react";

type TGroupList = {
  id: Key;
  title: string;
};

const initialGroupList = [
  {
    id: Math.floor(Date.now() * Math.random()).toString(36),
    title: "Galera da Rocket",
  },
];

export const useGroups = () => {
  const [groups, setGroups] = useState<Array<TGroupList>>([]);

  return { groups };
};
